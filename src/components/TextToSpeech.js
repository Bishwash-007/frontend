import React from "react";
import axios from "axios";

class TextToSpeech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      isPlaying: false,
    };
  }

  handleTextToSpeech = () => {
    axios
      .post("http://localhost:5000/synthesize", {
        text: this.props.text,
        voice: this.props.voice,
      })
      .then((response) => {
        const audio = new Audio(response.data.audio_url);
        this.setState({ audio }, () => {
          this.state.audio.play();
          this.setState({ isPlaying: true });
        });
      })
      .catch((error) => {
        console.error("Error synthesizing text:", error);
      });
  };

  handlePlayPause = () => {
    if (this.state.audio) {
      if (this.state.isPlaying) {
        this.state.audio.pause();
      } else {
        this.state.audio.play();
      }
      this.setState({ isPlaying: !this.state.isPlaying });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleTextToSpeech}>
          Convert Text to Speech
        </button>
        <button onClick={this.handlePlayPause}>
          {this.state.isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default TextToSpeech;
