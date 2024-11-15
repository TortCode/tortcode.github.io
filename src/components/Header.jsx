import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header 
    className="roboto-medium"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
      height: '50px',
    }}>
      <div style={{
        padding: '5px',
      }}>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div style={{
        padding: '5px',
      }}>
        <a href="/resume.pdf" target="_blank">Resume</a>
      </div>
      <div style={{
        padding: '5px',
      }}>
        <NavLink to='/projects'>Projects</NavLink>
      </div>
    </header>
  )
}

export default Header;