import React, { useState, useImperativeHandle } from 'react';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 10,
        zIndex: 100
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

Modal.setAppElement()

const today = moment().format("YYYY-MM-DD");

const FormModal = React.forwardRef(({ state, onChangeText, addTodo, type, editedTodo }, ref) => {

    const [isVisible, setIsVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [startDate, setStartDate] = useState(new Date());


    useImperativeHandle(ref, () => ({
        isOpen() {
            setIsVisible(true)
        },
        isClose() {
            setIsVisible(false)
        }
    }))

    const closeModal = () => {
        setIsVisible(false)
    }


    return (
        <Modal
            isOpen={isVisible}
            ariaHideApp={false}
            onRequestClose={closeModal}
            style={customStyles}>
            <div className='w-[310px] sm:w-[280px]'>
                <div className="relative flex-1">
                    <input
                        type="search"
                        id="default-search"
                        value={state["title"] || ''}
                        onChange={(e) => onChangeText(e.target.value.toLowerCase(), 'title')}
                        className="block w-full p-4 py-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={`Title ...`} required />
                </div>
                <br />
                <div className="relative flex-1">
                    <input
                        type="search"
                        id="default-search"
                        value={state["description"] || ''}
                        onChange={(e) => onChangeText(e.target.value.toLowerCase(), 'description')}
                        className="block w-full p-4 py-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={`Description ...`} required />
                </div>
                <br />
                <div className="relative flex-1">
                    <input
                        type="search"
                        id="default-search"
                        value={state["status"] || ''}
                        onChange={(e) => onChangeText(e.target.value.toLowerCase(), 'status')}
                        className="block w-full p-4 py-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={`Status ...`} required />
                </div>
                <br />
                <div className="relative flex-1">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            onChangeText(date, 'completionTime')
                            setStartDate(date)
                        }
                        } />
                </div>
                <br />
                <button
                    className='w-full block items-center h-12 border-2 border-skyBlue  px-12 rounded-lg text-skyBlue font-medium text-base'
                    onClick={() => type ? editedTodo() : addTodo()}
                >
                    {type ? "Edit" : "Add"}
                </button>
            </div>
        </Modal>
    )
})

export default FormModal