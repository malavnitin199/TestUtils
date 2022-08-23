export default function Navbar(props) {

  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

      <a className="navbar-brand" href="/" style={{ backgroundColor: 'grey', color: 'white' }} >{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: 'grey', color: 'white' }}  >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link active" herf="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link " thref="/">{props.aboutText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Disabled</a>
          </li>
        </ul>

        

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
          <input className="form-check-input text-ligth" type="checkbox" onClick={props.colourModeR} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green mode</label>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input text-ligth" type="checkbox" onClick={props.colourMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DArk mode</label>
        </div>


      </div>
    </nav>
  )
}
