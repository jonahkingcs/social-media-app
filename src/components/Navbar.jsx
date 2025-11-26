export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-gray-800">
          MySocial
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a 
            href="/" 
            className="text-gray-700 hover:text-black transition"
          >
            Home
          </a>

          <a 
            href="/add-post" 
            className="text-gray-700 hover:text-black transition"
          >
            Add Post
          </a>
        </div>

      </div>
    </nav>
  );
}
