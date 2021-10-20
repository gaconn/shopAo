import Styled from "styled-components";

export const Wrapper = Styled.div`
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: 20px auto;
    h1{
        color: var(--medGray);
        padding: 10px 0;
    }
    @media screen and (max-width: 768px){
        font-size: var(--fontBig);
    }
`;

export const Content = Styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1.2rem;
`;
