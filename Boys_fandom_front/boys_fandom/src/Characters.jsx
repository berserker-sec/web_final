import React, { useEffect, useState } from "react"; // React'ı içe aktarıyoruz.
import Navbar from "../src/Navbar"; // Navbar bileşenini içe aktarıyoruz.
import Card from "react-bootstrap/Card"; // React-Bootstrap Card bileşenini içe aktarıyoruz.
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5454/api/info")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  return (
    <div className="char-back">
      <Navbar />
      <div className="card-container">
        {data.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Img className="card-img" variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Button
                variant="primary"
                onClick={() => navigate(`/char/${item._id}`)}
              >
                Review
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Characters; // Characters bileşenini dışa aktarıyoruz.
