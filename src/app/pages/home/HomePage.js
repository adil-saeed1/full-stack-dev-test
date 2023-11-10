import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import TodoList from "../../components/TodoList/TodoList";
import { isObjEmpty, uuidv4 } from "../../helper/helper";
import { deleteTodo, editTodo, getTodo, postTodo } from "../../services/api";
import FormModal from "../../components/Modal/FormModal";
import moment from 'moment';
import { useHistory } from "react-router-dom"

const HomePage = () => {

    const [todo, setTodo] = useState([])
    const [state, setState] = useState({ completionTime: new Date() })
    const [type, setType] = useState(false)

    let history = useHistory()
    const formModalRef = useRef()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
           
            let response = await getTodo()
            setTodo(response);
        } catch (error) {

        }
    }

    const addTodo = async () => {

        try {
            if (!isObjEmpty(state)) {
                state["completionTime"] = moment(state["completionTime"]).format("YYYY-MM-DD");
                let response = await postTodo(state)
                getData()
                formModalRef.current.isClose()
                setType(false)
            }
        } catch (error) {

        }
    }

    const onDelete = async (item) => {
        try {
            let response = await deleteTodo(item.id)
            alert(response)
            getData()
        
        } catch (error) {

        }
    }

    const onEdit = async (item) => {
        setType(true)
        setState({ ...item })
        formModalRef.current.isOpen()
    }

    const editedTodo = async () => {
        try {
            state["completionTime"] = moment(state["completionTime"]).format("YYYY-MM-DD");
            let response = await editTodo(state)
            alert(response)
            getData()
            formModalRef.current.isClose()
            setType(false)
        } catch (error) {

        }
    }

    const openModal = () => {
        setType(false)
        setState({})
        formModalRef.current.isOpen()
    }

    const onChangeText = (text, name) => {
        setState({ ...state, [name]: text })
    }

    const onLogout = () => {
        localStorage.removeItem("user")
        history.replace("/")
    }
    return (
        <div className='w-full'>
            <div className='container mx-auto pb-36'>
                <div className='max-w-xl mx-auto px-6 my-10 relative'>
                    <ul className="flex flex-col mt-10 z-10">
                        {todo?.map((el, index) => (
                            <TodoList key={index} index={index} data={el} onDelete={onDelete} onEdit={onEdit} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-full fixed bottom-0 py-7 shadow-lg bg-white' style={{ boxShadow: '0 -16px 32px rgba(0,0,0,.03)' }}>
                <div className='container mx-auto'>
                    <div className='flex justify-end sm:justify-center'>
                        <button
                            className='flex items-center h-12 bg-skyBlue px-12 rounded-lg text-white font-medium text-base mx-4 sm:w-full mr-20 sm:mr-4'
                            onClick={() => openModal()}>
                            <span className='justify-center text-base flex items-center flex-1'>
                                <span className='mr-2'>
                                    Add Todo
                                </span>
                            </span>
                        </button>
                        <button
                            className='flex items-center h-12 bg-skyBlue px-12 rounded-lg text-white font-medium text-base mx-4 sm:w-full mr-20 sm:mr-4'
                            onClick={() => onLogout()}>
                            <span className='justify-center text-base flex items-center flex-1'>
                                <span className='mr-2'>
                                    Logout
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <FormModal ref={formModalRef} state={state} onChangeText={onChangeText} addTodo={addTodo} type={type} editedTodo={editedTodo} />
        </div>
    )
}

export default HomePage