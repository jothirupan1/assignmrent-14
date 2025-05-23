import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [change, setchange] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((res) => setchange(res.data))
      .catch((er) => console.log("API ERROR", er));
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-5">PRODUCTS</h1>
        <div className="row g-4 mt-5">
          {change.map((item, index) => (
            <div
              className="col-sm-12 col-md-4 col-lg-3 text-center"
              key={index}
            >
              <div className="card shadow-sm">
                <img
                  src={item.image}
                  alt=""
                  className="card-img-top p-3 "
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <h6 className="card-title ">{item.title}</h6>
                <p className="card-text">${item.price}</p>
                <div className="d-flex justify-content-center"></div>
                <div className="d-flex justify-content-center">
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

        <div className="see mt-5 d-flex justify-content-center">
          <Link to="/New" className="btn btn-outline-primary text-uppercase">
            {" "}
            See more{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
