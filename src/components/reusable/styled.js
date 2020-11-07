import styled from "styled-components";

export const Container = styled.div`
    z-index:1;
    width: 100%;
`;

export const ContainerColor = styled.div`
    z-index:1;
    width: 100%;
    background-color: rgba(212, 237, 240, 0.47);
`;

export const Wrapper = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 80px 50px;
    align-items: center;
    justify-content: space-between;
`;

export const WrapperReverse = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 100px 50px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
`; 




export default styled;