const React = require('react');
const LocationFormContainer = require('../containers/LocationFormContainer');

var styles = {
  container: {
    backgroundImage: "url('app/images/country-road.jpg')",
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
    marginBottom: '1em'
  }
}


function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City</h1>
      <LocationFormContainer />
    </div>
  )
}

module.exports = Home;
