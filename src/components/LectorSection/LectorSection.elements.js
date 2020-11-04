import styled from 'styled-components';

export const LectorTitle = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    color: rgba(7, 92, 104, 1);
    margin-bottom:100px;
`;

export const LectorContainer = styled.div`
    height: 550px;
    display: flex;
    justify-content:space-between;
`;


export const Card = styled.div`
    display: flex;
    width: 370px;
    border-radius: 30px;
    background-color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    box-shadow: 0px 0px 40px rgba(68, 68, 68, 0.25), 0px 6px 6px rgba(68, 68, 68, 0.2);
    position: relative;
`;

export const LectorInterest = styled.h4`
    font-size: 20px;
    color: rgb(0,180,205);
    text-align: center;
    font-weight: 400;
`;

export const LectorImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 90px;
`;

export const LectorName = styled.h3`
    font-size: 24px;
    text-align: center;
`;


export const LectorInfo = styled.p`
    font-size: 20px;
    color: black;
    text-align: center;
    line-height:1.6;
`;

export const LectorJob = styled.h5`
    font-size: 20px;
    color: black;
    text-align: center;
    font-weight: 300;
`;

export const LectorIn = styled.img`
    position: absolute;
    top: 225px;
    left: 225px;
    border: 4px solid white;
    width: 55px;
    height: 55px;
    background-color: rgb(0,180,205);
    border-radius: 150px;
`;


