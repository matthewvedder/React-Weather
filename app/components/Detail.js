const React = require('react');
const PropTypes = React.PropTypes;
const dataHelpers = require('../utils/dataHelpers');
const getDate = dataHelpers.getDate;
const convertTemp = dataHelpers.convertTemp;

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    color: 'grey',
    fontSize: '2em',
    paddingTop: '5%',
  },
  weather: {
    height: 130,
    paddingBottom: '.5em'
  }
}

function Detail (props) {
  console.log(props.weather)
  const date = getDate(props.weather.dt);
  const icon = props.weather.weather[0].icon;
  const src = './app/images/weather-icons/' + icon + '.svg';
  return (
    <div style={styles.container} >
      <img style={styles.weather} src={src} alt='Weather' />
      <p>{date}</p>
      <br/>
      <p>{props.city}</p>
      <p>{props.weather.weather[0].description}</p>
      <p>min temp: {convertTemp(props.weather.temp.min)} degrees</p>
      <p>max temp: {convertTemp(props.weather.temp.max)} degrees</p>
      <p>humidity: {props.weather.humidity}</p>
    </div>
  )
}

Detail.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Detail;
