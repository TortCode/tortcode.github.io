import reactLogo from '../assets/react.png'

function Footer() {
  return (
    <footer
    className='weight-medium'
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px',
      borderTop: '1px solid #ddd',
    }}>
      &copy; Teerth Patel 2024. Made with React &nbsp;<img src={reactLogo} height='30px' width='30px'/>
    </footer>
  )
}

export default Footer;