const React = require('react');

// The simplest kind of a react component: a stateless function component
module.exports = ({text}) =>  {
  return (
    <p id="description">{text}</p>
  )
};