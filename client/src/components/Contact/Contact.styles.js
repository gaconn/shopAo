import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    border: 2px solid;
    border-color: transparent rgba(0, 0, 0, 0.1) transparent rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Content = styled.div`
    text-align: center;
    padding: 0 10px;
    .link {
        font-weight: 400;
        padding: 5px 0;
        :hover {
            color: var(--textHoverColor);
        }
    }
`;
