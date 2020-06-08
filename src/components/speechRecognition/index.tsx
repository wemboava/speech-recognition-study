import React, { useEffect, useCallback, useState } from 'react';

import SpeechRecognition from "react-speech-recognition";

import { Container, PlayStopButton } from './styles';

interface PeechRecognitionData {
  transcript: string;
  finalTranscript: string;
  resetTranscript(): void;
  browserSupportsSpeechRecognition: boolean;
  startListening(): void;
  stopListening(): void;
};

const options = {
  autoStart: false,
  continuous: false,
}

const SpeechRecognitionComponent: React.FC<PeechRecognitionData> = ({
  transcript,
  finalTranscript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
}: PeechRecognitionData) => {

  const [isRecording, setIsRecording] = useState<boolean>(false);

  useEffect(() => {
    if (finalTranscript) {
      setIsRecording(false);
    }
  }, [finalTranscript])

  const handlePlayOrStop = useCallback(() => {
    isRecording ? stopListening() : startListening();

    setIsRecording(!isRecording);
  }, [isRecording, stopListening, startListening])

  if (!browserSupportsSpeechRecognition) {
    return (<div>Use o Chrome!</div>);
  }
  return (
    <Container startAnimation={!!finalTranscript}>
      
      <PlayStopButton isRecording={isRecording} onClick={handlePlayOrStop}>
        <div className="inner"></div>
      </PlayStopButton>
      
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <div className="rec-text">
        cê falô:
        <p className="line typing-animation">{finalTranscript}</p>
      </div>
    </Container>
  )
}

export default SpeechRecognition(options)(SpeechRecognitionComponent);