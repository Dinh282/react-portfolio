export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar bg-base-100">
          <div className="flex-1">
            <h1 className="text-2xl text-red-600 "> Dinh Nguyen</h1>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
