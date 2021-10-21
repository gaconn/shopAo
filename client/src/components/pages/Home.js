import Banner from "../Banner/index";
//hooks
import useHomeFetch from "../../hooks/useHomeFetch";
//components
import Nav from "../Nav/index";
import Header from "../Header/index";
import Grid from "../Grid/index";
import Thumb from "../Thumb/index";
import Contact from "../Contact/index";
import Footer from "../Footer/index";
import Spinner from "../Spinner/index";
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
    const contactTemp = [
        {
            title: "Thông tin",
            content: [
                {
                    link: "http://google.com",
                    description: "Giới thiệu"
                },
                {
                    link: "http://google.com",
                    description: "Liên hệ"
                },
                {
                    link: "http://google.com",
                    description: "Thông tin"
                },
                {
                    link: "http://google.com",
                    description: "Đối tác"
                }
            ]
        },
        {
            title: "Thông tin",
            content: [
                {
                    link: "http://google.com",
                    description: "Giới thiệu"
                },
                {
                    link: "http://google.com",
                    description: "Liên hệ"
                },
                {
                    link: "http://google.com",
                    description: "Thông tin"
                },
                {
                    link: "http://google.com",
                    description: "Đối tác"
                }
            ]
        },
        {
            title: "Thông tin",
            content: [
                {
                    link: "http://google.com",
                    description: "Giới thiệu"
                },
                {
                    link: "http://google.com",
                    description: "Liên hệ"
                },
                {
                    link: "http://google.com",
                    description: "Thông tin"
                },
                {
                    link: "http://google.com",
                    description: "Đối tác"
                }
            ]
        }
    ];
    const { login, loading, setLoading, state } = useHomeFetch();
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
            <Spinner />
            <Footer
                content={
                    <Grid
                        children={contactTemp.map((item) => (
                            <Contact
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    />
                }
            />
        </>
    );
};

export default Home;
