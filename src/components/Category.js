import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

export default function Category(props) {
  const { category } = props;
  console.log("first props in Product.js");
  console.log(category._id);

  return (
    <Card className="card-2 exampleOurWrk">
      <img
        className="medium workImage"
        src={category.project_img}
        alt={category.projectName}
      />

      <Card.Body className="contentOurWork">
        <a href="/projectscreen" className="item ">
          <i class="fa fa-expand sizeOfIt"></i>
        </a>

        <Card.Text className="textName">{category.projectName}</Card.Text>
        <Link to="/projectscreen">Go to the projects</Link>
      </Card.Body>
    </Card>
  );
}
