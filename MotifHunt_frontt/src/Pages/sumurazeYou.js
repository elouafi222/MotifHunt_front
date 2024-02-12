import { motion as m } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataFetchingComponent from "./DataFetchingComponent";

const AfficheVideo = ({ onSendValue }) => {
  const [Url, setURL] = useState("https://www.youtube.com/watch?v=9QBy2n2ojIg");

  const addUrl = () => {
    const parts = Url.split("=");
    const secondPart = parts[1];
    const titleOfUrl = "https://www.youtube-nocookie.com/embed/" + secondPart;
    setURL(titleOfUrl);

    // Envoyer la valeur au parent
    onSendValue(titleOfUrl);
  };

  const handleInputChange = (event) => {
    setURL(event.target.value);
  };

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="mb-4 w-100 d-flex flex-row ">
        <input
          className="custom-input ps-4 rounded-start-5 rounded-end-0"
          value={Url}
          onChange={handleInputChange}
          placeholder="Enter video link"
        ></input>
        <button
          className="btn-custom rounded-start-0 rounded-end-5"
          onClick={addUrl}
        >
          Submit
        </button>
      </div>
      <iframe
        src={Url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </m.div>
  );
};



export default class SumarazeYou extends React.Component {
  state = {
    chatText: { textSummarize: "" },
    valueFromChild: "",
  };

  // Fonction de rappel pour recevoir la valeur du composant fils
  handleValueFromChild = (value) => {
    this.setState({ valueFromChild: value });
  };

  componentDidUpdate(prevProps, prevState) {
    // Vérifier si la valeur du composant enfant a changé
    if (
      this.state.valueFromChild !== prevState.valueFromChild &&
      this.state.valueFromChild !== ""
    ) {
      axios
        .post(`http://127.0.0.1:5000/text`, {
          valueFromChild: this.state.valueFromChild,
        })
        .then((res) => {
          const chat = res.data;
          this.setState({ chatText: chat });
        })
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des données de l'API :",
            error
          );
        });
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "10vh", minHeight: "90vh" }}
      >
        <div className="row">
          <h1 className="text-center mb-5">Youtube Video Uploader</h1>
          <div className="col-md-6  ">
            <AfficheVideo onSendValue={this.handleValueFromChild} />
          </div>
          <div className="col-md-6 ">
            <div className="d-flex justify-content-between ">
              <h5>Summary of text :</h5>
              <i class="fa-regular fa-copy me-1"></i>
            </div>
            <div className="resume-text-box rounded-3 px-3 py-3">
              <p className="resume-text  ">
                {this.state.chatText.textSummarize}
              </p>
            </div>
          </div>

          <div className="col-md-7">
            <DataFetchingComponent />
          </div>
        </div>
      </div>
    );
  }
}
