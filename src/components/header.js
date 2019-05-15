import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import avatar from '../images/icon.png';

const date = new Date();
const offset = date.getTimezoneOffset() * 60000;
const iso = new Date(Date.now() - offset).toISOString();
const year = iso.substring(0, 4);

const Header = ({ siteTitle, author }) => {
  return (
    <div>
      <header>
        <div>
          <Link to="/" aria-label="Direct Mailers">
            <img
              src={avatar}
              alt="avatar"
              style={{ height: `80px`, width: `80px` }}
            />
            <h1>{siteTitle}</h1>
          </Link>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Header;
