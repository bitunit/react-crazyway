import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Crazyway" />
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar