"use client";
<<<<<<< HEAD

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
=======
import React from "react";
import { useState, useEffect } from "react";
>>>>>>> f347efabf381fcce8d93a77097f57b2ac8499e60

export default function Home() {
  const [posts, setPosts] = useState([]);

<<<<<<< HEAD
  // Load posts once on page load
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Like system (per-post)
  const likePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const liked = !post.liked;
        const likes = liked ? post.likes + 1 : post.likes - 1;

        return { ...post, liked, likes };
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="p-6">

        <div className="grid grid-cols-2">
          <h1 className="text-3xl font-bold mb-4">Social Feed</h1>
          <p className="text-3xl text-right font-bold mb-4 bg-gradient-to-tr from-red-500 to-purple-500 rounded-full">
            Add New Post
          </p>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-8 px-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-tr from-red-500 to-purple-500 rounded-2xl shadow-sm p-1 space-y-4"
            >
              <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">

                <div className="text-left">
                  <p className="text-md text-gray-800">
                    <b>Username:</b> {post.username}
                  </p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 text-gray-700">
                  {post.description}
                </div>

                <div className="text-left">
                  <p
                    className="text-md text-gray-500 pl-2 cursor-pointer"
                    onClick={() => likePost(post.id)}
                  >
                    Likes: {post.likes}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
=======
  useEffect(() => {
    const loadPosts = () => {
      const storedPosts = localStorage.getItem("posts");
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      } else {
        setPosts([]);
      }
    };
    loadPosts();
  }, []);

  const likePost = (postId) => {
    setIsLiked(!isLiked);

    const updatedPosts = posts.map((post) => {
      if (post.id === postId && !isLiked) {
        return { ...post, likes: post.likes + 1 };
      } else if (post.id === postId && isLiked) {
        return { ...post, likes: post.likes - 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  }

  const [isLiked, setIsLiked] = useState(false);

  return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-2">
          <h1 className="text-3xl font-bold mb-4">Social Feed</h1>
          <p className="text-3xl text-right font-bold mb-4 bg-gradient-to-tr from-red-500 to-purple-500 rounded-full">Add New Post</p>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-8 px-12">
          {
            posts.map((post) => (
              <div key={post.id} className="bg-gradient-to-tr from-red-500 to-purple-500 rounded-2xl shadow-sm p-1 space-y-4">
                <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
                  <div className="text-left">
                    <p className="text-md text-gray-800"><b>Username:</b> {post.username}</p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 text-gray-700">
                    {post.description}
                  </div>

                  <div className="text-left">
                    <p className="text-md text-gray-500 pl-2 " onClick={() => likePost(post.id)}>Likes: {post.likes}</p>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
>>>>>>> f347efabf381fcce8d93a77097f57b2ac8499e60
  );
}
