import React from 'react';
import Typed from 'typed.js';


const Card = (props) => {
    return (
        <a href={props.path} className="btn btn-primary" style={{ marginLeft: '20px' }}>
            {props.valeur}
        </a>
    );
}

const animation = () => {
    let index = 0;
    const str = "Summarize your video to any duration";
    const splitTab = str.split(" ");
    let str2 = "";
    while (index < splitTab.length) {
        index = index + 1;
        str2 = splitTab.slice(0, index).join(" ");
    }
    return str2;
};

function Animation() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' Welcome !', 'Summarize your video to any duration'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <h1 className="App">
            <span ref={el} /></h1>
    );
}

const Body = () => {

    return (
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <div style={{ marginBottom: '70px' }}>
                <Animation />
            </div>

            <div>
                <Card valeur="Summarize Youtube video" path="/sumarazeyou" />
                <Card valeur="Summarize uploaded video" path="/sumaraze" />
            </div>

        </div >
    )
}

export default Body;
