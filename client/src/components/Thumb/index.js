import { Wrapper, Content, Image, Text } from "./Thumb.styles";
import { Link } from "react-router-dom";
import react from "react";

const Thumb = ({ src, product, clickable }) => {
    return (
        <Wrapper>
            <Content>
                {clickable ? (
                    <>
                        <Link to={`${product._id}`}>
                            <Image src={src} alt={product.nameProduct} />

                            <Text>
                                <h3 className='name'>
                                    Đây là một sản phẩm sản phẩm độc quyền sản
                                    xuất {product.nameProduct}
                                </h3>
                                <h4 className='price'>Giá: {product.price}</h4>
                                <span className='vote'>
                                    vote: {product.vote}/5
                                </span>
                            </Text>
                        </Link>
                    </>
                ) : (
                    <>
                        <Image src={src} alt={product.nameProduct} />
                        <Text>
                            <h3 className='name'>{product.nameProduct}</h3>
                            <h4 className='price'>Giá: {product.price}</h4>
                            <span className='vote'>vote: {product.vote}/5</span>
                        </Text>
                    </>
                )}
            </Content>
        </Wrapper>
    );
};

export default Thumb;
