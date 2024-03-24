import Modal from "../components/Modal";
import Search from "../components/Search";
import Hero from "./Hero";

const Header = () => {
  return (
    <>
      <div className="header-app">
        <div className="container header_wrapper flex justify-between p-14">
          <div className="logo">
            <a href="/">
              <img
                src="/logo.svg"
                alt="the site of logo"
                width={147}
                height={30}
              />
            </a>
          </div>
          <nav className="site_nav">
            <ul className="flex flex-wrap gap-14">
              <li className="site_nav-link">
                <a href="/">Home</a>
              </li>
              <li className="site_nav-link">
                <a href="/">About</a>
              </li>
              <li className="site_nav-link">
                <a href="/">Features</a>
              </li>
              <li className="site_nav-link">
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="actions flex gap-8 flex-wrap h-5">
            <Search />
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
