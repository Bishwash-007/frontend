import React from "react";
import axios from "axios";

class TextToSpeech extends React.Component {
  handleTextToSpeech = () => {
    axios
      .post("http://localhost:5000/synthesize", {
        text: this.props.text,
        voice: this.props.voice,
      })
      .then((response) => {
        const audio = new Audio(response.data.audio_url);
        audio.play();
      })
      .catch((error) => {
        console.error("Error synthesizing text:", error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleTextToSpeech}>
          Convert Text to Speech
        </button>
      </div>
    );
  }
}

export default TextToSpeech;
