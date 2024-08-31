import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-zinc-950 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">
          <Link to="/">CineStream</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Início
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
}
