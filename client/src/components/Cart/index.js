import { Wrapper, Content } from "./Cart.styles";

const Cart = (props) => {
    return (
        <Wrapper>
            <Content count={props.count}>
                <a href='#'>
                    <img src={props.cartIcon} alt='cart' />
                </a>
            </Content>
        </Wrapper>
    );
};
export default Cart;
