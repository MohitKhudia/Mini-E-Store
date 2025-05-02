import Link from "next/link";
import style from "../styles/header.module.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import Container from "./Container";

const header = () => {
  return (
    <header className={`${style.header} py-3 px-1 shadow`}>
      <Container className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <span className="text-pink-500 font-bold text-4xl">
              E-Store <b className="text-black ">.</b>
            </span>
          </div>
        </Link>
        <div className={`${style.searchBar} flex items-center`}>
          <input
            type="text"
            placeholder="Search for Products..."
            className={style.searchInput}
          />
          <button className={style.searchButton}>
            <FaSearch size={22} />
          </button>
        </div>
        {/* Navigation */}
        <Navbaar />
      </Container>
    </header>
  );
};

export default header;

const Navbaar = () => {
  return (
    <nav className="flex items-center gap-5">
      <ul className="flex items-center gap-3 font-semibold">
        <li className={style.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navLink}>
          <Link href="/store">Store</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link href="/cart">
          <div className="relative">
            <FaShoppingCart color="black" size={24} />
            <span
              className={`${style.cartBadge} absolute top-[-15px] right-[-20px] bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}
            >3</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
