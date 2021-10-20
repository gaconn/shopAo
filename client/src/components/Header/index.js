import { Wrapper, Content } from "./Header.styles";

const Header = (props) => {
    return (
        <Wrapper>
            <Content>
                <img
                    src={props.BrandImageUrl}
                    alt='brand'
                    className='brandImage'
                />
                <div className='help'>
                    <h3>Hỗ trợ 24/7</h3>
                    <p>
                        hotline: <b>0327881340</b>
                    </p>
                </div>
            </Content>
        </Wrapper>
    );
};

export default Header;
