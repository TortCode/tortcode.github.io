import { NavLink } from "react-router-dom";
import resumePdf from '../assets/resume.pdf';

function Header() {
  return (
    <header 
    className="weight-medium"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
      height: '50px',
      borderBottom: '1px solid #ddd',
    }}>
      <div style={{
        padding: '5px',
      }}>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div style={{
        padding: '5px',
      }}>
        <a href={resumePdf} target="_blank">Resume</a>
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