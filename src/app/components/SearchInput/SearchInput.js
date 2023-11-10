import React from "react";

const SearchInput = ({ onChangeText, value }) => {
    return (
        <div className="relative flex-1">
            <input
                type="search"
                id="default-search"
                value={value}
                onChange={(e) => onChangeText(e.target.value.toLowerCase())}
                className="block w-full p-4 py-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder={`Add todo ...`} required />
        </div>
    )
}

export default SearchInput