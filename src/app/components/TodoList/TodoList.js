import React from "react";
import editIcon from '../../../assets/edit.png';
import deleteIcon from "../../../assets/delete.png"
import moment from "moment";

const TodoList = ({ data, onDelete, onEdit, index }) => {


    return (
        <li className="cursor-pointer w-full mb-5 flex flex-row justify-between items-center border border-gray-100 py-3.5 px-5 rounded-xl">
            <div className='flex flex-auto flex-row items-center'>
                <div className='flex flex-auto ml-5 flex-col'>
                    <span className="text-gray-900">
                        Title: {data.title}
                    </span>
                    <span className="text-gray-900">
                        Description: {data.description}
                    </span>
                    <span className="text-gray-900">
                        Status: {data.status}
                    </span>
                    <span className="text-gray-900">
                        Completion Time: {moment(data.completionTime).format('LLL')}
                    </span>
                </div>
            </div>
            <div className='w-5 h-5 flex items-center justify-center' onClick={() => onEdit(data, index)}>
                <img src={editIcon} />
            </div>
            <div className='w-5 h-5  ml-3 flex items-center justify-center' onClick={() => onDelete(data)}>
                <img src={deleteIcon} />
            </div>
        </li>
    )
}

export default TodoList

const styles = {
    svgStyle: {
        height: 28,
        width: 28
    }
}