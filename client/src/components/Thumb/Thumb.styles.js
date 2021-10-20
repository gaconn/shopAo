import styled from "styled-components";

export const Wrapper = styled.div`
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.09);
    :hover {
        box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.09);
    }
`;

export const Content = styled.div`
    padding: 8px;
`;

export const Image = styled.img`
    width: 85%;
    height: 200px;
    object-fit: contain;
    display: flex;
    margin: 0 auto;
    max-height: 300px;
    min-height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    transition: width 0.4s linear;
    :hover {
        width: 100%;
    }
`;

export const Text = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    .name {
        align-self: start;
        font-size: 1.3rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin: 10px 0;
    }
    .price {
        align-self: end;
        margin: 20px 0;
    }
    .vote {
        align-self: end;
    }
`;
