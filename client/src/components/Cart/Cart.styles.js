import styled from "styled-components";

export const Wrapper = styled.div`
    width: 40px;
    height: 40px;
    justify-self: flex-end;
`;
export const Content = styled.div`
    width: 100%;
    position: relative;
    img {
        display: block;
        line-height: 60px;
    }
    ::after {
        content: "${({ count }) => count}";
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 50%;
    }
`;
