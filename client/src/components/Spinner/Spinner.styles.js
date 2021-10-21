import styled from "styled-components";

export const Spinner = styled.div`
    width: 60px;
    height: 60px;
    border: 5px solid var(--grayLight);
    border-top: 5px solid var(--grayDark);
    border-radius: 50%;
    margin: 20px auto;
    animation: spin 1s linear infinite;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
