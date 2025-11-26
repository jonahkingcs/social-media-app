import PostForm from "@/components/PostForm";

export default function Post() {
  return (
    <div className="p-4 text-md text-black">
        <div className="text-center text-xl text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full w-48">
            <h2>Submit a new post</h2>
        </div>
        <PostForm />
    </div>
  );
}