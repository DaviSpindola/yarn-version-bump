import PropTypes from 'prop-types'

function App({ logo, version }) {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} aria-label="Yarn logo" className="image--sm" />
        <h1 className="h1 center">Yarn Version</h1>
      </div>
      <footer>
        <span>app version {version}</span>
      </footer>
    </div>
  )
}

App.propTypes = {
  logo: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
}

export default App
