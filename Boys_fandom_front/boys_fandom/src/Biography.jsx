import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../src/Navbar"; // Navbar bileşenini içe aktarıyoruz.
import Card from "react-bootstrap/Card"; // React-Bootstrap Card bileşenini içe aktarıyoruz.

function Biography() {
  const { id } = useParams();
  const [char, setChar] = useState({}); //char adında bir state tanımlar
  //apiden veri çekme
  useEffect(() => {
    fetch(`http://localhost:5454/api/info/${id}`)
      .then((response) => response.json())
      .then((json) => setChar(json));
  }, [id]);
  console.log(char);
  return (
    <div>
      <Navbar />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={char.img} className="charpic" />
        </Card>
      </div>
      <h1 className="chartitle">{char.name}</h1>
      <p className="Home-paragtext">{char.desc}</p>
    </div>
  );
}

export default Biography;
