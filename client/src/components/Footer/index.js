import { Wrapper, Content } from "./Footer.styles";

const Footer = ({ content }) => {
    return (
        <Wrapper>
            <Content>{content}</Content>
        </Wrapper>
    );
};

export default Footer;
