import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: var(--grayDark);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    width: 1280px;
    max-width: 100%;
    color: var(--whiteText);
    font-size: var(--fontBig);
    display: flex;
    line-height: 60px;
    margin: 0 auto;
    align-items: center;
    position: relative;
    justify-content: space-between;
    .nav-menu {
        display: flex;
    }
    .nav-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .home-link {
        :hover {
            color: #da7c3a;
        }
    }
    ul {
        list-style: none;
        margin: 0;
        position: absolute;
        display: none;
    }
    .product,
    .collect {
        margin-left: 20px;
    }
    .product-title:hover,
    .collect-title:hover {
        color: var(--textHoverColor);
        cursor: pointer;
    }
    .product-title,
    .collect-title {
        position: relative;
    }
    .product-title::after,
    .collect-title::after {
        content: "";
        width: 100px;
        height: 20px;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
    .product-title:hover ~ .product-list {
        display: block;
        animation: show 0.2s linear;
        transform-origin: 10% top;
    }
    .collect-title:hover ~ .collect-list {
        display: block;
        animation: show 0.2s linear;
        transform-origin: 10% top;
    }
    .collect-list,
    .product-list {
        background-color: #fff;
        position: absolute;
        border-radius: 3px;
        width: 200px;
        max-width: 100%;
    }
    .product-list:hover,
    .collect-list:hover {
        display: block;
    }
    .collect-item,
    .product-item {
        padding: 0 10px;
    }
    .collect-link:hover,
    .product-link:hover {
        color: var(--textHoverColor);
    }
    .collect-link,
    .product-link {
        color: var(--grayDark);
    }

    .product-list::before,
    .collect-list::before {
        content: "";
        border: 20px solid white;
        border-color: transparent transparent #fff transparent;
        position: absolute;
        top: -30px;
        left: 10px;
    }
    @keyframes show {
        from {
            opacity: 0;
            transform: scale(0);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
