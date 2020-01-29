import React from "react"
import Typist from "react-typist"

const styles = {
  maxWidth: "50rem",
  fontSize: "1.4rem",
  margin: "6rem auto 2rem",
  padding: "2rem",
  minHeight: "350px",
}

const Intro = () => {
  return (
    <div style={styles}>
      <Typist avgTypingDelay={50} cursor={{ hideWhenDone: true }}>
        <Typist.Delay ms={1000} />
        {"Hi, I'm Michael. "}
        <Typist.Delay ms={1000} />
        {" I just want to build cool things with people I respect and admire."}
        <br /> <br />
        <Typist.Delay ms={500} />
        {"I also take a lot of notes."}
        <Typist.Delay ms={500} />{" "}
        {"Anytime I hear or read something smart, I try to write it down."}
      </Typist>{" "}
    </div>
  )
}

export default Intro
