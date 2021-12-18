import PropTypes from 'prop-types';


function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback App</h2>
        <p>{text}</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Default Prop Example',
  bgColor: 'rgba(0, 0, 0, 0.3)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
