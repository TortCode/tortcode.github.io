import { NavLink } from "react-router-dom";


function NavItem({ url, text }) {
  return (
    <div style={{
      padding: '5px',
    }}>
      <NavLink to={url}>
        {text}
      </NavLink>
    </div>
  )
}

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
      <NavItem url='/' text='Home' />
      <NavItem url='/resume' text='Resume' />
      <NavItem url='/projects' text='Projects' />
    </header>
  )
}

export default Header;