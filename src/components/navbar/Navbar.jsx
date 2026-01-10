import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="p-2 rounded-b-md shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <img
          src={Logo}
          alt="Cameron Stanley Web Development"
          className="h-10 hidden md:block"
        />
        <div className="flex justify-between gap-4 items-center w-full md:w-auto">
          <ul className="flex gap-2 text-(--color-text) font-medium">
            <li>
              <a className="hover:underline" href="#projects">
                Work
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#about">
                About
              </a>
            </li>
          </ul>
          <button className="bg-(--color-accent) py-1 px-3 rounded text-white cursor-pointer hover:bg-(--color-soft) hover:text-(--color-text) hover:shadow-lg hover:shadow-(--color-text)/50">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
