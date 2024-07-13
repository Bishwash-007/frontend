import React from "react";
import axios from "axios";

class FileUpload extends React.Component {
  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        this.props.onFileUpload(response.data.text);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileUpload} />
      </div>
    );
  }
}

export default FileUpload;
