import mugshot from '../assets/mugshot.png'

function Homepage() {
  return (
    <div style={{
      width: '750px',
      backgroundColor: '#fff',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
      fontSize: '18px',
      lineHeight: 1.5,
    }}>
      <img src={mugshot} height={250} width={250} style={{ borderRadius: '250px', alignSelf: 'center' }} />
      <h2 className="weight-heavy" style={{ alignSelf: 'center' }}>
        Teerth Patel
      </h2>
      <p>
        <strong>Email:</strong> <a href="mailto:teerth.patel@utdallas.edu"><em>teerth.patel@utdallas.edu</em></a>
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:8594211771"><em>8594211771</em></a>
      </p>
      <p>
        <strong>Github:</strong> <a href="https://github.com/TortCode" target="_blank"><em>https://github.com/TortCode</em></a>
      </p>
      <hr style={{
        margin: '5px -15px',
        borderTop: '1px solid #eee',
      }} />
      <h3 className="weight-medium">
      </h3>
      <p>
        Hello, I'm Teerth Patel, a senior CS student at UT Dallas. 
        <br/>
        I have experience with full stack web development using React along with Express/Golang and MongoDB/SQL.
        <br/>
        I am currently working on: 
        <ul>
          <li>
            An integrated web-based platform for <a href="https://www.tejiendoalianzas.org/en-xuchil-products" target="_blank"><em>Xuchil Natural Products</em></a>,
            a startup in the Oaxacan producing foodstuffs from mezquite and amaranth.
          </li>
          <li>
            A digital ticket system for the <a href="https://csmc.utdallas.edu" target="_blank"><em>Computer Science Mentor Center</em></a> at UT Dallas.
          </li>
        </ul>
      </p>
    </div>
  )
}

export default Homepage;