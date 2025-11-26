"use client";
import { useState } from "react";
export default function PostForm() {
    const [postObject, setPostObject] = useState({
        username: "",
        title: "",
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
        <div className="max-w-xl mx-auto space-y-4">
            <div className="bg-gradient-to-tr from-red-500 to-purple-500 rounded-2xl shadow-sm p-1 space-y-4">
                <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
                    <div className="w-full m-4 grid place-items-center">
                        <h2 className="text-center p-4 text-xl text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full">Submit a new post</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 pb-8">
                            <label htmlFor="username" className="font-semibold">Username:</label>
                            <input
                                name="username"
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                onChange={handleInputChange}
                                value= {postObject.username}
                                className="bg-gray-100 rounded-xl p-4 text-gray-700"
                            />
                        </div>
                        <div className="grid grid-cols-1 pb-12 bg-gray-100 rounded-xl p-4 text-gray-700">
                            <label htmlFor="description" className="font-semibold">Description:</label>
                            <input
                                name="description"
                                type="text"
                                id="description"
                                placeholder="Enter post description"
                                onChange={handleInputChange}
                                value= {postObject.description}
                                
                            />
                            <div className="pb-4 pt-4 outline-1 outline-gray-300"></div>
                            <label htmlFor="title" className="font-semibold">Title:</label>
                            <input
                                name="title"
                                type="text"
                                id="title"
                                placeholder="Enter post title"
                                onChange={handleInputChange}
                                value= {postObject.title}
                            />
                        </div>
                        <div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-4 rounded-xl hover:shadow-md hover:bg-blue-600 transition duration-200 ease-in-out">
                                Submit Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}