
function Main({ children }) {
  return (
    <main style={{
      flexGrow: 1,
      backgroundColor: '#eee',
      padding: '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {children}
    </main>
  )
}

export default Main;