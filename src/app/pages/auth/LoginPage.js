import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../../services/api";

const LoginPage = () => {

    let history = useHistory()

    const [state, setState] = useState({})
    const [pwdVisible, setPwdVisible] = useState(false)
    const [errors, setErrors] = useState({})
    const [errorText, setErrorText] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        try {
            state["userName"] = state.email
           
            let response = await postLogin(state)
            localStorage.setItem("user", JSON.stringify(response))
            history.replace('/app')
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeText = (text, name) => {
        setState({ ...state, [name]: text })
    }

    const onEyeClick = (type) => {
        if (type == 'password') {
            setPwdVisible(!pwdVisible)
        }
    }

    return (
        <div className='mx-auto min-w-fit'>
            <div className='container mx-auto'>
                <div className='max-w-md mx-auto px-6 my-10 relative'>
                    <div className='mx-auto' style={styles.svgStyles}>

                    </div>
                    <h1 className='font-bold text-3xl text-center'>
                        Welcome
                    </h1>
                    <p className='font-medium text-center my-5 text-sm text-grayShade opacity-60'>
                        Please login to continue
                    </p>
                    <div className='relative mt-8 mb-7'>
                        <div className='mt-8'>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-skyBlue focus:border-skyBlue block w-full pl-5 py-5 pr-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyBlue dark:focus:border-skyBlue"
                                    placeholder="name@flowbite.com"
                                    required
                                    value={state['email'] || ''}
                                    onChange={text => onChangeText(text.target.value, 'email')} />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type={pwdVisible ? "text" : "password"}
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-skyBlue focus:border-skyBlue block w-full pl-5 py-5 pr-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyBlue dark:focus:border-skyBlue"
                                    placeholder="•••••••••"
                                    required
                                    value={state['password'] || ''}
                                    onChange={text => onChangeText(text.target.value, 'password')} />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer flex justify-center items-center bg-skyBlue h-14 border rounded-xl py-4 mb-3 font-medium text-base text-white w-full"
                            onClick={() => onSubmit()}>
                            Login
                        </button>
                        <div className="mt-7">
                            <p className="font-medium text-center text-xs text-grayShade opacity-60">
                                Don&apos;t have an account? <a href="/register" className="text-skyBlue">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

const styles = {
    icon0: {
        height: 16,
        width: 16,
    },
    svgStyles: {
        height: 100,
        width: 100,
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 8,
    }
}