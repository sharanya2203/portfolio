export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold">
          Sharanya<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}