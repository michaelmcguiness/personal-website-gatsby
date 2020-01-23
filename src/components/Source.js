import React from "react"

const Source = ({ source: { title, authors, link } }) => {
  return (
    <span>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>{" "}
      by{" "}
      {authors.map((author, index) => (
        <a key={index}>{author} </a>
      ))}
    </span>
  )
}

export default Source
