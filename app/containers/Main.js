var React = require('react');

var Main = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Matt'
    }
  },
  render: function () {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
})

module.exports = Main;
