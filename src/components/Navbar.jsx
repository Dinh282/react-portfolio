import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Navbar() {
  const currentPage = useLocation().pathname;


  return (
    <>
      <div>
        <nav className="navbar bg-primary bg-base-100">
          <div className="flex-1">
            <h1 className="text-6xl text-red-600 p-6"> Dinh Nguyen</h1>
          </div>
          <div className="flex-none nav-list">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link 
                to="/about"
                className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
              </li>
              <li>
                <Link 
                to="/portfolio"
                className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
              </li>
              <li>
                <Link 
                to="/contact"
                className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
              </li>
              <li>
                <Link 
                to="/resume"
                className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-42 right-0"
              >
               <li>
                <Link 
                to="/about"
                className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
              </li>
              <li>
                <Link 
                to="/portfolio"
                className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
              </li>
              <li>
                <Link 
                to="/contact"
                className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
              </li>
              <li>
                <Link 
                to="/resume"
                className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
