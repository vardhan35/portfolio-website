import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>VARDHAN</h1>
      </div>
      <div className="navbar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/#about">
          <a>About</a>
        </Link>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
