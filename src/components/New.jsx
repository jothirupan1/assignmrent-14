import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function New() {
  const [come, setCome] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((store) => setCome(store.data))

      .catch((eror) => console.log("api is error", eror));
  }, []);

  return (
    <div>
      <div className="products container mt-5 pt-5">
        <div className="row g-4">
          {come.map((item, index) => (
            <div
              className="col-sm-12 col-md-4 col-lg-3 text-center"
              key={index}
            >
              <div className="card shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top p-3"
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn btn-outline-primary col-5 m-2"
                    onClick={() =>
                      alert(`${item.title} has been added to the cart`)
                    }
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-light py-4 mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} Legacy Mart . All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default New;
