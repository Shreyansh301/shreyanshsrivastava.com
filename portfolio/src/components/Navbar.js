import React from 'react';
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src=""
              alt=""
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            Shreyansh Srivastava
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
