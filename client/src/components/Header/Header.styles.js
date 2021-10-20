import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 80px;
`;

export const Content = styled.div`
    width: 1280px;
    max-width: 100%;
    position: relative;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    .brandImage {
        height: 80px;
        width: auto;
    }
    .help {
        position: absolute;
        bottom: 10px;
        right: 0;
        flex-grow: 1;
    }
`;
