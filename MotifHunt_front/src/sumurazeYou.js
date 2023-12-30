import { motion as m } from "framer-motion";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AfficheVideo = ({ onSendValue }) => {
    const [Url, setURL] = useState('https://www.youtube.com/watch?v=9QBy2n2ojIg');

    const addUrl = () => {
        const parts = Url.split("=");
        const secondPart = parts[1];
        const titleOfUrl = "https://www.youtube-nocookie.com/embed/" + secondPart;
        setURL(titleOfUrl);

        // Envoyer la valeur au parent
        onSendValue(titleOfUrl);
    }

    const handleInputChange = (event) => {
        setURL(event.target.value);
    }

    return (
        <m.div initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <div>
                <h1>YouTube Video Uploader</h1>
                <input value={Url} onChange={handleInputChange}></input>
                <button onClick={addUrl}>Submit</button>
            </div>
            <iframe width="560" height="315" src={Url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </m.div>
    );
}

export default class SumarazeYou extends React.Component {
    state = {
        chatText: { textSummarize: "" },
        valueFromChild: ""
    }

    // Fonction de rappel pour recevoir la valeur du composant fils
    handleValueFromChild = (value) => {
        this.setState({ valueFromChild: value });
    };

    componentDidUpdate(prevProps, prevState) {
        // Vérifier si la valeur du composant enfant a changé
        if (this.state.valueFromChild !== prevState.valueFromChild && this.state.valueFromChild !== "") {
            axios.post(`http://127.0.0.1:5000/text`, { valueFromChild: this.state.valueFromChild })
                .then(res => {
                    const chat = res.data;
                    this.setState({ chatText: chat });
                })
                .catch(error => {
                    console.error("Une erreur s'est produite lors de la récupération des données de l'API :", error);
                });
        }
    }

    render() {
        return (
            <ul>
                <AfficheVideo onSendValue={this.handleValueFromChild} />
                <p>Résumé du texte reçu : {this.state.chatText.textSummarize}</p>
            </ul>
        )
    }
}
