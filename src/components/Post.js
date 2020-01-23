import React from "react"
import { Link } from "gatsby"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const Post = ({ node, title, sources, path, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="cardTitle">{title}</CardTitle>
        <CardSubtitle style={{ marginTop: "0.5rem" }}>
          <span>
            Sources: <span className="source">{sources}</span>
          </span>
        </CardSubtitle>
        <CardText style={{ marginTop: "0.5rem" }}>{body}</CardText>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
