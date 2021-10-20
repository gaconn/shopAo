import { Wrapper, Content } from "./Banner.styles";

const Banner = (props) => {
    return (
        <Wrapper>
            <Content imageUrl={props.imageUrl}></Content>
        </Wrapper>
    );
};

export default Banner;
