import styled, { css, keyframes } from 'styled-components';

interface PropsData {
  isRecording: boolean;
};

interface PropsContainer {
  startAnimation: boolean;
};

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
`;

export const Container = styled.section<PropsContainer>`
  width: 90%;
  .rec-text {
    display: flex;
    align-items: center;
    font-size: .8em;
  }
  .line {
    max-width: fit-content;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    color: rgba(255, 255, 255, 0.75);
    font-family: "Special Elite", monospace;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 7px;
    height: 18px;
  }

  .typing-animation {
    animation: ${blinkCursor} 700ms steps(40) infinite normal;
    ${
      props => props.startAnimation && css`
        animation: ${typing} 4s steps(40) 1s normal both,
          ${blinkCursor} 700ms steps(40) infinite normal;
      `
    }
  }
`;

export const PlayStopButton = styled.div<PropsData>`
  margin: 50px auto;
  width: 100px;
  height: 100px;
  border: 10px solid #fff;
  border-radius: 50%;
  cursor: pointer;

  & .inner {
    background-color: #9e1919;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.2s ease;
    transform: scale(0.94);
    ${props => props.isRecording && css`
      transform: scale(0.5);
      border-radius: 12%;
    `}
  }
`;