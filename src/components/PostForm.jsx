"use client";
import { useState } from "react";
export default function PostForm() {
    const [postObject, setPostObject] = useState({
        username: "",
        description: "",
        likes: 0,
    });

    const handleInputChange = (e) => {
        console.log(e.target.name, e.target.value);
        setPostObject({
            ...postObject,
            [e.target.name]: e.target.value,
        });
        return;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const localStoragePosts = localStorage.getItem("posts");

        postObject.id = Date.now().toString();

        if (localStoragePosts) {
            localStorage.setItem("posts", JSON.stringify([...JSON.parse(localStoragePosts), postObject]));
        } else {
            localStorage.setItem("posts", JSON.stringify([postObject]))
        }
    }

    return (
        <div className="p-4 text-md text-gray-600">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 pl-4">
                    <label htmlFor="username" className="font-semibold">Username:</label>
                    <input
                        name="username"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        onChange={handleInputChange}
                        value= {postObject.username}
                        className="p-1 border-1 border-blue-800 rounded-md"
                    />
                </div>
                <div className="grid grid-cols-1 pl-4">
                    <label htmlFor="description" className="font-semibold">Description:</label>
                    <input
                        name="description"
                        type="text"
                        id="description"
                        placeholder="Enter post description"
                        onChange={handleInputChange}
                        value= {postObject.description}
                        className="p-1 border-1 border-blue-800 rounded-md"
                    />
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        onChange={handleInputChange}
                        name="completed"
                        />
                        <span className="text-sm">Completed</span>
                    </label>
                </div>
                <div className="p-4">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:shadow-md hover:bg-blue-600 transition duration-200 ease-in-out">
                        Submit Post
                    </button>
                </div>
            </form> 
        </div>
    )
}