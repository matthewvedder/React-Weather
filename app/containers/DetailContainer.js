const React = require('react');
const Detail = require('../components/Detail');

const DetailContainer = React.createClass ({
  render: function () {
    return (
      <Detail weather={this.props.location.state.weather} city={this.props.routeParams.city} />
    )
  }
})

module.exports = DetailContainer;
