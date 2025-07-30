import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1><Link to="/">MiniJobBoard</Link></h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
      </div>
    </nav>
  );
}