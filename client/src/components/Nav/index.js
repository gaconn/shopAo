import { Wrapper, Content } from "./Nav.styles";
import Cart from "../Cart/index";
import Login from "../Login/index";
const Nav = (props) => {
    return (
        <Wrapper>
            <Content>
                <div className='nav-menu'>
                    <a href='#' className='home-link'>
                        Trang chủ
                    </a>
                    <div className='product'>
                        <p className='product-title'>Sản phẩm</p>
                        <ul className='product-list'>
                            <li className='product-item'>
                                <a href='#' className='product-link'>
                                    Áo thun
                                </a>
                            </li>
                            <li className='product-item'>
                                <a href='#' className='product-link'>
                                    Áo sơ mi
                                </a>
                            </li>
                            <li className='product-item'>
                                <a href='#' className='product-link'>
                                    Áo in
                                </a>
                            </li>
                            <li className='product-item'>
                                <a href='#' className='product-link'>
                                    Sản phẩm 4
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='collect'>
                        <p className='collect-title'>Bộ sưu tập</p>
                        <ul className='collect-list'>
                            <li className='collect-item'>
                                <a href='#' className='collect-link'>
                                    anime
                                </a>
                            </li>
                            <li className='collect-item'>
                                <a href='#' className='collect-link'>
                                    game
                                </a>
                            </li>
                            <li className='collect-item'>
                                <a href='#' className='collect-link'>
                                    football
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='nav-left'>
                    <Login />
                    <Cart count={props.count} cartIcon={props.cartIcon} />
                </div>
            </Content>
        </Wrapper>
    );
};

export default Nav;
