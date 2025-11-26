import PostForm from "@/components/PostForm";

export default function Post() {
  return (
    <div className="p-4 text-md text-black">
        <div className="w-full m-4 grid place-items-center">
            <h2 className="text-center p-4 text-xl text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full">Submit a new post</h2>
        </div>
        <PostForm />
    </div>
  );
}