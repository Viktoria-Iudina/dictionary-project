import React from "react";

export default function Maening(props) {
    console.log(props.meaning);
    return (
        <h3>{props.meaning.partOfSpeech}</h3>
        );
}