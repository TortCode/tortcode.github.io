
function Main({ children }) {
  return (
    <main style={{
      flexGrow: 1,
      backgroundColor: '#eee',
    }}>
      {children}
    </main>
  )
}

export default Main