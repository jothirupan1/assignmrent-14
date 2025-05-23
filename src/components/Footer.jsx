import React from 'react';

function Footer() {
  return (
    <div>
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Legacy Mart
. All rights reserved.
            </p>
          </div>
        </div> 
      </div>
    </footer>
    </div>
  );
}

export default Footer;
