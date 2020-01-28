import React from "react"
import { slugify } from "../util/utilityFunctions"

const Source = ({ source: { title, authors, link } }) => {
  return (
    <span>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>{" "}
      by{" "}
      {authors.map((author, index) => (
        <a key={index} href={`/author/${slugify(author)}`}>
          {author}
          {index < authors.length - 1 ? ", " : " "}
        </a>
      ))}
    </span>
  )
}

export default Source
