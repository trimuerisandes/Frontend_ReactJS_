import React from "react";
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";

function NotFound() {
  return (
      <div>
          <div className="text-center">
              <p>Tidak ditemukan, coba cari judul lain</p>
              <Link to={`${process.env.PUBLIC_URL}/`}>
                  <MDBBtn color="black" className="text-center">
                      HOME
                  </MDBBtn>
              </Link>
          </div>
      </div>
  );
}

export default NotFound;
