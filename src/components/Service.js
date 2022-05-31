import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service(props) {
  const { service } = props;
  console.log("awaaaaaaaa thya");
  console.log(service);
  console.log(service.image);
  console.log(service.name);

  return (
    <Card className="card" key={service._id}>
      <img
        src={service.image}
        className="justyfyingImages"
        alt={service.name}
      />

      <Card.Body className="wholeBody">
        <div className="textOnBody">
          <FontAwesomeIcon icon="fa fa-globe" />
          <div className="textOnBodyII">
            <i class="fa fa-globe textOnBodyI"></i>
          </div>

          <div className="textOnBodyII">
            <Link className="textOnBodyI " to={`/service/${service._id}`}>
              <h8 className="fontLink1">{service.name}</h8>
            </Link>
          </div>

          <Card.Text className="texts">
            We are using the best tools and technologies to create unique
            websites and eye catching graphic design.
          </Card.Text>
          <Card.Text className="explorCenter">Explore More</Card.Text>
        </div>
      </Card.Body>
      <div className="iconsOverProducts"></div>
    </Card>
  );
}
