"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [posts, setPosts] = useState([]);

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

      {/* PAGE CONTENT */}
      <div className="p-6">

        <div className="grid grid-cols-2">
          <h1 className="text-3xl font-bold mb-4 text-black">Social Feed</h1>
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-0 lg:px-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-tr from-red-500 to-purple-500 rounded-2xl shadow-sm p-1 space-y-4"
            >
              <div className="min-h-full bg-white rounded-xl shadow-sm p-5 space-y-4">

                <div className="text-left">
                  <p className="text-md text-gray-800">
                    <b>Title:</b> {post.title}
                  </p>
                </div>

                <textarea className="w-full bg-gray-100 rounded-xl p-4 text-gray-700 resize-none" rows={4} value={post.description} readOnly />

                

                <div className="text-left">
                      {
                        post.liked ? 
                          <div className="flex justify-content space-between items-center"><p className="text-3xl cursor-pointer" onClick={() => likePost(post.id)}>&#x2665;&#xfe0f;</p><p
                            className="text-md text-gray-500 pl-2">
                              {post.likes} likes - @{post.username}
                            </p>
                          </div> 
                          : 
                          <div className="flex justify-content space-between gap-2 items-center"><p className="text-3xl cursor-pointer" onClick={() => likePost(post.id)}>&#9825;</p><p
                            className="text-md text-gray-500 pl-2">
                              {post.likes} likes - @{post.username}
                            </p>
                          </div>
                      }
                      
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
