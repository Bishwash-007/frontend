import React from "react";

class VoiceSelector extends React.Component {
  handleVoiceChange = (event) => {
    this.props.onVoiceChange(event.target.value);
  };

  render() {
    return (
      <select onChange={this.handleVoiceChange}>
        <option value="voice1">Voice 1</option>
        <option value="voice2">Voice 2</option>
        {/* Add more voices as needed */}
      </select>
    );
  }
}

export default VoiceSelector;
