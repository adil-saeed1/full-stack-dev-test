import axios from "axios";
import Environment from "./api_constant";

export const Api_Header = axios.create({
    baseURL: Environment.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


Api_Header.interceptors.request.use(async config => {
    const role = JSON.parse(localStorage.getItem("user"))
    if (role) {
        config.headers.role = role.role
        config.headers.Accept = '*/*'
    }
    return config;
},
    function (error) {
        return Promise.reject(error);
    },
);

export const postLogin = async (body) => {
    try {
        const res = await Api_Header.post(Environment.LOGIN, body);
        return res.data
    } catch (e) {
        throw e.response
    }
}


export const getTodo = async (body) => {
    try {
        const res = await Api_Header.get(Environment.GET_TODO);
        return res.data
    } catch (e) {
        throw e.response
    }
}

export const deleteTodo = async (body) => {
    try {
        const res = await Api_Header.delete(Environment.DELETE_TODO + body);
        return res.data
    } catch (e) {
        throw e.response
    }
}

export const editTodo = async (body) => {
    try {
        const res = await Api_Header.put(Environment.EDIT_TODO, body);
        return res.data
    } catch (e) {
        throw e.response
    }
}

export const postTodo = async (body) => {
    try {
        const res = await Api_Header.post(Environment.ADD_TODO, body);
        return res.data
    } catch (e) {
        throw e.response
    }
}