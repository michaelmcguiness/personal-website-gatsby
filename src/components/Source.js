import React from "react"

const Source = ({ title, authors, link }) => {
  console.log(authors)
  return (
    <span>
      <a href={link} target="_blank">
        {title}
      </a>{" "}
      by{" "}
      {authors.map(author => (
        <a>{author} </a>
      ))}
    </span>
  )
}

export default Source
