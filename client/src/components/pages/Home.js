import Banner from "../Banner/index";

import Nav from "../Nav/index";
import Header from "../Header/index";
import Grid from "../Grid/index";
import Thumb from "../Thumb/index";
//images
import imageUrl from "../../assets/images/Banner-Naruto-1.jpg";
import BrandImageUrl from "../../assets/images/brand.png";
import cartIcon from "../../assets/icons/shopping-cart-solid.svg";
import tempImage from "../../assets/images/áo anime/aodragonball.jpg";
const Home = () => {
    const temp = [
        {
            image: tempImage,
            product: {
                nameProduct: "sp1",
                price: 5000,
                vote: 4
            },
            clickable: true
        },
        {
            image: tempImage,
            product: {
                nameProduct: "sp2",
                price: 50002,
                vote: 4
            },
            clickable: true
        },
        {
            image: tempImage,
            product: {
                nameProduct: "sp3",
                price: 5000,
                vote: 4
            },
            clickable: true
        },
        {
            image: tempImage,
            product: {
                nameProduct: "sp1",
                price: 5000,
                vote: 4
            },
            clickable: true
        },
        {
            image: tempImage,
            product: {
                nameProduct: "sp1",
                price: 5000,
                vote: 4
            },
            clickable: true
        },
        {
            image: tempImage,
            product: {
                nameProduct: "sp1",
                price: 5000,
                vote: 4
            },
            clickable: true
        }
    ];
    return (
        <>
            <Header BrandImageUrl={BrandImageUrl} />
            <Nav count='2' cartIcon={cartIcon} />
            <Banner imageUrl={imageUrl} />
            <Grid
                header='Các sản phẩm'
                children={temp.map((item) => (
                    <Thumb
                        src={item.image}
                        product={item.product}
                        clickable={item.clickable}
                    />
                ))}
            />
        </>
    );
};

export default Home;
