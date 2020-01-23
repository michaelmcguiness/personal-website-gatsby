import React from "react"
import Typist from "react-typist"

const styles = {
  maxWidth: "50rem",
  fontSize: "1.4rem",
  margin: "10rem auto",
  padding: "2rem",
}
const Intro = props => {
  return (
    <div style={styles}>
      <Typist avgTypingDelay={50} cursor={{ hideWhenDone: true }}>
        <Typist.Delay ms={1000} />
        {"Hi, I'm Michael. "}
        <Typist.Delay ms={1000} />
        {" I just want to build cool things with people I respect and admire."}
        <br /> <br />
        <Typist.Delay ms={500} />
        {
          "I write these notes to better absorb great ideas in the books I read."
        }{" "}
        <Typist.Delay ms={500} />
        {"But if other people find them useful, that's great too."}
      </Typist>{" "}
    </div>
  )
}

export default Intro
