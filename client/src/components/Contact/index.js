import { Wrapper, Title, Content } from "./Contact.styles";

const Contact = ({ title, content }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Content>
                {content.map((item) => (
                    <a className='link' href={item.link}>
                        {item.description}
                    </a>
                ))}
            </Content>
        </Wrapper>
    );
};

export default Contact;
