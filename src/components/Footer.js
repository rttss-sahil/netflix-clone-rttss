import React from 'react';

const footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      &copy; {(new Date).getFullYear()} Made with ❤️ by{' '}
      <a className="footer__copyright--link" target="_blank" href="https://github.com/rttss-sahil">
        {' '}
        Sahil Rathee (rttss)
      </a>
    </div>
  </footer>
);

export default footer;
