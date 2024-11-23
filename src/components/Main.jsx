
function Main({ children }) {
  return (
    <main style={{
      flexGrow: 1,
      backgroundColor: '#eee',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {children}
    </main>
  )
}

export default Main;