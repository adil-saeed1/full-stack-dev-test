const _Environments = {

    development: {
        // BASE_URL: 'http://192.168.100.84:8080',
        BASE_URL: "http://192.168.0.247:8080",
        LOGIN: '/login',
        GET_TODO: "/listtodoitems",
        DELETE_TODO: "/deletetodo/",
        ADD_TODO: "/addtodo",
        EDIT_TODO: "/updatetodo"
    },
};

const getEnvironment = () => {
    const platform = "development";
    return _Environments[platform];
}

const Environment = getEnvironment();

export default Environment;