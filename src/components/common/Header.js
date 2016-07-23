import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {/*  Uses short-circuiting nature of logical AND operator
      right hand side will only evaluate if left hand is true  */}
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};
Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

