import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap"
import Source from "./Source"
import { slugify } from "../util/utilityFunctions"

const Post = ({ slug, frontmatter: { tags, title, sources }, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="cardTitle">{title}</CardTitle>
        <CardSubtitle style={{ marginTop: "0.5rem" }}>
          <span>
            Sources:{" "}
            {sources.map((source, index) => (
              <Source key={index} source={source} />
            ))}
          </span>
        </CardSubtitle>
        <CardText style={{ marginTop: "0.5rem" }}>{body}</CardText>
        <ul className="post-tags">
          {tags.map((tag, index) => (
            <li key={index}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
