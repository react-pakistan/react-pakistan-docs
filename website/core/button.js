const React = require('react');
const PropTypes = require('prop-types');

export const Button = ({
  href,
  target,
}) => (
  <div className='pluginWrapper buttonWrapper'>
    <a className='button' href={href} target={target}>
      {props.children}
    </a>
  </div>
);

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};
