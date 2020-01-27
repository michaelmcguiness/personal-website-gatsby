import React from "react"
import { Button, Card, CardText, CardBody, CardTitle, Row } from "reactstrap"

const Author = ({ image, name, bio }) => (
  <div>
    <div className="col-md-8">
      <img
        src={image}
        style={{ maxWidth: "100%" }}
        alt={`${name} profile image`}
      />
    </div>
    <div className="col-md-8">
      <Card style={{ minHeight: "100%" }}>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{bio}</CardText>
        </CardBody>
      </Card>
    </div>
  </div>
)

export default Author
