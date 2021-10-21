import { useState, useEffect } from "react";

const useHomeFetch = () => {
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const fetchProduct = () => {};

    return { login, loading, setLoading, state };
};

export default useHomeFetch;
