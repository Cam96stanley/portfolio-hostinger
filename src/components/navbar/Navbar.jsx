import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="p-2 rounded-b-md shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <img src={Logo} alt="" className="h-10" />
        <div className="flex justify-between gap-4 items-center">
          <ul className="flex gap-2 font-semibold text-(--color-text)">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <button className="bg-(--color-accent) py-1 px-3 rounded text-white">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
