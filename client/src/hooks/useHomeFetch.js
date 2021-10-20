import { useState, useEffect } from "react";

const useHomeFetch = () => {
    const [Login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const fetchProduct = () => {};
};

export default useHomeFetch;
