import styled from "styled-components";

export const OuterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 550px;
    width: 350px;
    border-radius:20px;
    background: ${props=> props.bgColor};
    & img {
        height: 160px;
    }
`;

export const TypeDiv = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 35px;
    width: 90px;
    position: absolute;
    right: 12%;
    bottom: 60%;
    background-color: black;
    color: white;
    box-sizing: border-box;
    border-radius: 5px;
    z-index: 2;
`;

export const MainStats = styled.div`
    display: flex;
    
    margin-top: 20px;
    margin-bottom: 60px;
`;

export const StatOuterBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 90%;
    box-sizing: border-box;
    border-radius: 15px;
    opacity: 0.8;
    background-color: white;
    padding: 25px;
    text-align: center;
`;

export const StatDisplayer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-align: ${props => props.textSide};
`;

export const StatSpecs = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
`;

export const BottomSpecs = styled.div`
    display: flex;
    width: 100%;
    font-size:14px;
`;