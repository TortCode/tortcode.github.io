function ProjectCard({ title, description, repo, date, link, skills }) {
  return (
    <div style={{
      width: '250px',
      height: '250px',
      backgroundColor: '#fff',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
    }}>
      <a 
        href={repo ? `https://github.com/TortCode/${repo}/` : link}
        target="_blank"
      >
        <h3 className="weight-medium">
          {title}
        </h3>
      </a>
      <p className="weight-thin italic">
        {date}
      </p>
      <hr style={{
        margin: '5px -15px',
        borderTop: '1px solid #eee',
      }}/>
      <p style={{ flexGrow: 1, }}>
        {description}
      </p>
      <hr style={{
        margin: '5px -15px',
        borderTop: '1px solid #eee',
      }} />
      <p 
        className="weight-light"
        style={{ 
          fontSize: '14px', 
          flexBasis: '30px' 
        }}
      >
        {skills?.join(', ')}
      </p>
    </div>
  )
}

export default ProjectCard;