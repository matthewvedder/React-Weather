const React = require('react');
const Loading = require('./Loading');
const PropTypes = React.PropTypes;
const dataHelpers = require('../utils/dataHelpers');
const getDate = dataHelpers.getDate;
const convertTemp = dataHelpers.convertTemp;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem (props) {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  const src = './app/images/weather-icons/' + icon + '.svg';
  return (
    <div style={styles.dayContainer} onClick={props.handleClick}>
      <img style={styles.weather} src={src} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <Loading text = 'Just one moment' speed = '500' />
          : <ForecastUI
              city={props.city}
              forecast={props.fiveDay}
              handleClick={props.handleClick} />
      }
    </div>
  )
}

Forecast.PropTypes = {
  city: PropTypes.string.isRequired,
  fiveDay: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;
























