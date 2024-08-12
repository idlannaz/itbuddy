import React, { useState, useEffect } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      })
      .catch((e) => {
        console.log("There is something wrong");
      });
  }, []);

  return (
    <div className="container mt-4 p-3 mb-2 bg-light text-dark">
      <h1 className="mb-4 text-center">List of All Products</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th colSpan={2}>Rating</th>
            </tr>
          </thead>
          <tbody>
            {product.map((ecom) => (
              <tr key={ecom.id}>
                <td>{ecom.id}</td>
                <td className="text-truncate" style={{ maxWidth: "150px" }}>
                  {ecom.title}
                </td>
                <td>${ecom.price}</td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={
                      <Popover id={`popover-${ecom.id}`}>
                        <Popover.Header as="h3">Product Details</Popover.Header>
                        <Popover.Body>
                          {ecom.description}
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="info">View Details</Button>
                  </OverlayTrigger>
                </td>
                <td>{ecom.category}</td>
                <td>
                  <img
                    src={ecom.image}
                    alt={ecom.title}
                    className="img-fluid rounded"
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{ecom.rating.rate}</td>
                <td>{ecom.rating.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
