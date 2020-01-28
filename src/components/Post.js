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
        <Link to={slug}>
          <CardTitle className="cardTitle">{title}</CardTitle>
        </Link>
        <CardSubtitle style={{ marginTop: "0.5rem" }}>
          <span>
            Sources:{" "}
            <ul>
              {sources.map((source, index) => (
                <li>
                  <Source key={index} source={source} />
                </li>
              ))}
            </ul>
          </span>
        </CardSubtitle>
        <CardText style={{ marginTop: "0.5rem" }}>{body}</CardText>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}>
          {tags.map((tag, index) => (
            <Link key={index} to={`/tag/${slugify(tag)}`}>
              <Badge style={{ margin: "2px" }} color="primary">
                {tag}
              </Badge>
            </Link>
          ))}
        </div>

        <Link to={slug} className="btn btn-outline-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
