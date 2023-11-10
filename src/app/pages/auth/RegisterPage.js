import React, { useState } from "react";



const RegisterPage = () => {

    const [state, setState] = useState({})
    const [pwdVisible, setPwdVisible] = useState(false)
    const [errors, setErrors] = useState({})
    const [errorText, setErrorText] = useState('')
    const [loading, setLoading] = useState(false)

    const onChangeText = (text, name) => {
        setState({ ...state, [name]: text })
    }

    const onEyeClick = (type) => {
        if (type == 'password') {
            setPwdVisible(!pwdVisible)
        }
    }

    const onSubmit = () => {
       
    }

    return (
        <div className='mx-auto min-w-fit'>
            <div className='container mx-auto'>
                <div className='max-w-md mx-auto px-6 my-10 relative'>
                    <div className='mx-auto' style={styles.svgStyles}>
                       
                    </div>
                    <h1 className='font-bold text-3xl text-center'>
                        Sign Up
                    </h1>
                    <p className='font-medium text-center my-5 text-sm text-grayShade opacity-60'>
                        Please enter your details
                    </p>
                    <div className='relative mt-8 mb-7'>
                        <div className='mt-8'>
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                   
                                </div>
                                <input
                                    type="text"
                                    id="input-group-1"
                                    className={`${errors['username'] ? 'border-red' : 'border-gray-300'} bg-gray-50 border text-gray-900 text-sm rounded-2xl focus:ring-skyBlue focus:border-skyBlue block w-full pl-5 py-5 pr-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyBlue dark:focus:border-skyBlue`}
                                    placeholder="yourname"
                                    required
                                    value={state['username'] || ''}
                                    onChange={(ev) => onChangeText(ev.target.value, 'username')} />
                            </div>
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                  
                                </div>
                                <input
                                    type="text"
                                    id="input-group-2"
                                    className={`${errors['email'] ? 'border-red' : 'border-gray-300'} bg-gray-50 border text-gray-900 text-sm rounded-2xl focus:ring-skyBlue focus:border-skyBlue block w-full pl-5 py-5 pr-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyBlue dark:focus:border-skyBlue`}
                                    placeholder="name@flowbite.com"
                                    required
                                    value={state['email'] || ''}
                                    onChange={(ev) => onChangeText(ev.target.value, 'email')} />
                            </div>
                            <div className="relative mb-4">
                                
                                <input
                                    type={pwdVisible ? "text" : "password"}
                                    id="input-group-3"
                                    className={`${errors['password'] ? 'border-red' : 'border-gray-300'} bg-gray-50 border text-gray-900 text-sm rounded-2xl focus:ring-skyBlue focus:border-skyBlue block w-full pl-5 py-5 pr-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyBlue dark:focus:border-skyBlue`}
                                    placeholder="•••••••••"
                                    required
                                    value={state['password'] || ''}
                                    onChange={(ev) => onChangeText(ev.target.value, 'password')} />
                                <div className="cursor-pointer absolute right-4 top-5 px-1 h-7 w-7" onClick={() => onEyeClick('password')}>
                                   
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer flex justify-center items-center bg-skyBlue h-14 border rounded-xl py-4 mb-3 font-medium text-base text-white w-full"
                            onClick={() => onSubmit()}>
                            Register
                        </button>
                        <div className="mt-7">
                            <p className="font-medium text-center text-xs text-grayShade opacity-60 sm:text-base">
                                Already have an account? <a href="/" className="text-skyBlue">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage

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
    },
}