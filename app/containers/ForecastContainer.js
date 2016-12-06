const React = require('react');
const Forecast = require('../components/Forecast');
const forecastHelpers = require('../utils/forecastHelpers');

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    color: 'black'
  }
}

const ForecastContainer = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      currentWeather: {},
      fiveDay: {},
      city: this.props.routeParams.location
    }
  },
  componentDidMount: function () {
    forecastHelpers.getFiveDay(this.props.routeParams.location)
    .then( function(fiveDay) {
      this.setState({
        isLoading: false,
        fiveDay: fiveDay
      })
    }.bind(this));
  },
  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.state.city,
      state: {
        weather: weather
      }
    })
  },
  render: function () {
    return (
      <div style={styles.container } >
        <Forecast
          isLoading={this.state.isLoading}
          city={this.state.city}
          fiveDay = {this.state.fiveDay}
          handleClick={this.handleClick} />
      </div>
    )
  }
});

module.exports = ForecastContainer;
