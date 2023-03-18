import styled from "styled-components";

export const OptionsContainer = styled.div`
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:40px;
    z-index: 3;
    top: 5%;
    right: 45%;
`;

export const OptionShower = styled.button`
    height: 32px;
    width: 170px;
    background-color: white;
    color: black;
    box-sizing: border-box;
    cursor:pointer;
    &:hover {
        border: 2px solid black;
        border-bottom: ${props => props.show ? "none" : "1px solid black"};
    }
    border-top: 1px solid gray;
    border-right:  1px solid gray;
    border-left:  1px solid gray;
    border-bottom: ${props => props.show ? "1px solid transparent":"1px solid gray"};
    z-index:3;
`;

export const OtherOptions = styled.div`
    display:flex;
    flex-direction: column;
    width: 170px;
    box-sizing: border-box;
    height: ${props => props.show ? "640px" : "0px"};
    overflow-y: scroll;
    transition: height 0.5s;
    border: 1px solid black;
    border-top: none;
    border-bottom: ${props => props.show ? "1px solid black" : "none"};
    z-index:3;
`;

export const OptionButton = styled.button`
    height: 32px;
    width: 170px;
    background-color: white;
    border:none;
    cursor:pointer;
    &:focus {
        background-color: black;
        color: white;
    }
    &:hover {
        background-color: gray;
    }
`;


