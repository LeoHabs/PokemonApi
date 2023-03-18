import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
-webkit-transform: rotate(0);
        transform: rotate(0);
}
100% {
-webkit-transform: rotate(360deg);
        transform: rotate(360deg);
}
`

const heartbeat = keyframes`
        from {
          -webkit-transform: scale(1);
                  transform: scale(1);
          -webkit-transform-origin: center center;
                  transform-origin: center center;
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        10% {
          -webkit-transform: scale(0.91);
                  transform: scale(0.91);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        17% {
          -webkit-transform: scale(0.98);
                  transform: scale(0.98);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        33% {
          -webkit-transform: scale(0.87);
                  transform: scale(0.87);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        45% {
          -webkit-transform: scale(1);
                  transform: scale(1);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        `

export const CustomH2 = styled.h2`
  color: red;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  animation: ${heartbeat} 1.5s ease-in-out infinite both;
`;

export const LoadingBall = styled.img`
   height: 300px;     
   animation: ${rotate} 2s linear infinite forwards;
`;

