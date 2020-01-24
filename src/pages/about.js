import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <br />
    <br />
    <p>
      {
        "Hi, I'm Michael.  I'm currently living in New York City and earning my MBA at Columbia Business School. Before Columbia, I spent four years working at Chatham Asset Management as a high-yield/distressed debt analyst. And before that, I studied finance and computer science at Wake Forest University.  Those subjects continue to interest me to this day."
      }
    </p>
    <p>
      {`This site is not a blog.  I like to read and started taking notes on books to reflect on and better remember important ideas.  I eventually came across the `}
      <a
        target="_blank"
        href="https://fs.blog/2012/04/feynman-technique/"
      >{`"Feynman Technique"`}</a>
      {` which argues that when "you write out an idea from start to finish in simple language that a child can understand, you force yourself to understand the concept at a deeper level and simplify relationships and connections between ideas."  It also helps you identify gaps in your understanding of a topic.  It made sense to me, so I decided to give it a try.  I started turning my notes into essays and found that it worked extremely well.`}
    </p>
    <p>
      {
        "These notes are not original thoughts.  A lot of stuff is copied--I just try to distill the word count down by an order of magnitude or to the length of a long blog post.  I'll then sometimes combine different chapters of books I like, or add to it an excerpt from a podcast.  I've listed the sources of each note, so please buy the author’s book if you want to explore a particular subject in greater depth. If you’re the author of one of the books I’ve summarized and want it taken down, please just shoot me an email (icon in bottom right)."
      }
    </p>{" "}
  </Layout>
)

export default AboutPage
