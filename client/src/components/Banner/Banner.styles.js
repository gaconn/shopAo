import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: ${({ margin }) => margin};
`;
export const Content = styled.div`
    background: url(${({ imageUrl }) => imageUrl});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
