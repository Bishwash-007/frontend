import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import TextToSpeech from "./components/TextToSpeech";
import VoiceSelector from "./components/VoiceSelector";

function App() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("voice1");

  return (
    <div>
      <h1>Speechify App</h1>
      <FileUpload onFileUpload={setText} />
      <VoiceSelector onVoiceChange={setVoice} />
      <TextToSpeech text={text} voice={voice} />
    </div>
  );
}

export default App;
