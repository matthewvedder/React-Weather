const React = require('react')
const LocationForm = require('../components/LocationForm');
const PropTypes = React.PropTypes;
const forecastHelpers = require('../utils/forecastHelpers');

const LocationFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function () {
    return {
      location: ''
    }
  },
  handleUpdateLocation: function (e) {
    this.setState({
      location: e.target.value
    })
  },
  handleSubmitLocation: function () {
    var location = this.state.location;
    forecastHelpers.getCurrentWeather(location);
    forecastHelpers.getFiveDay(location);
    this.context.router.push('/forecast/' + location);
  },
  render: function () {
    return (
      <LocationForm
        direction={this.props.direction}
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
        location={this.state.location} />
    )
  }
});

module.exports = LocationFormContainer;
