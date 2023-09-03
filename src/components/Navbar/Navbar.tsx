import './Navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>FadhilAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" className='icon' alt="search" />
        <img src="/app.svg" className='icon' alt="app" />
        <img src="/expand.svg" className='icon' alt="expand" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="profile" />
            <span>James</span>
        </div>
        <img src="/settings.svg" className='icon' alt="settings" />
      </div>
    </div>
  )
}

export default Navbar