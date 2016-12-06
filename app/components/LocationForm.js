const React = require('react');
const PropTypes = React.PropTypes;

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'right',
    float: 'right',
    marginTop: '-3em',
    marginRight:'1em'
  }
}
function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className="btn btn-success"
      onClick={props.onSubmitLocation} >
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className="form-control"
      onChange={props.onUpdateLocation}
      placeholder='Kalamazoo, MI'
      type='text'
      value={props.location} />
  )
}

function LocationForm (props) {
  return(
    <div style={getStyles(props)}>
      <InputField
        onUpdateLocation={props.onUpdateLocation}
        location={props.location} />
      <Button
        onSubmitLocation={props.onSubmitLocation}>
          Get Weather
      </Button>
    </div>
  )
}

LocationForm.propTypes = {
  direction: PropTypes.string,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

module.exports = LocationForm;
