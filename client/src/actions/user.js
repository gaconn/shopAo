export const createUser = (user) => {
    return {
        type: "CREATE_ACCOUNT",
        payload: user
    };
};
export const loginUser = (user) => {
    return {
        type: "LOGIN",
        payload: user
    };
};
