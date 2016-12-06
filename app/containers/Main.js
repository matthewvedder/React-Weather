const React = require('react');
const LocationFormContainer = require('./LocationFormContainer')
const Link = require('react-router').Link;

const styles = {
  container: {
    height: '100%',
    backgroundColor: '#001133',
    color: 'White',
    fontFamily: 'Amatic SC',
  },
  title: {
    marginLeft: '1em',
    marginTop: '.35em'
  },
  locationForm: {
    marginTop: '-3em'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}

const Main = React.createClass({
  render: function () {
    return (
      <div className='row' style={styles.container}>
        <Link style= {styles.link} to='/' >
          <h1 style={styles.title}>React Weather</h1>
        </Link>
        <LocationFormContainer id="location-form" direction="row"/>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
