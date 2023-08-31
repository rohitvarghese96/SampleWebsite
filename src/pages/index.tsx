import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}> A digital bookstore run by a passionate bibliophile named Bella</span>
      </h1>
      <p style={paragraphStyles}>
        In a bustling corner of the digital universe, there existed a charming and diverse neighborhood called the World Wide Web. This extraordinary place was filled with websites, each one a unique residence, ranging from cozy blogs to grand corporate mansions. People from all around the world would navigate through this neighborhood, exploring its vibrant streets and discovering the stories that each website had to tell.<br/><br/>

        At the heart of the web was the town square, where the most well-known and frequently visited sites resided. One of these sites was "Inkwell Adventures," a digital bookstore run by a passionate bibliophile named Bella. Inkwell Adventures was a cozy, book-filled haven where readers could lose themselves in enchanting tales and insightful knowledge. Bella would spend her days curating the collection, carefully selecting each literary gem to share with her visitors. The site wasn't just a store; it was a refuge for book lovers to connect, share recommendations, and discuss their favorite stories.<br/><br/>

        On the outskirts of the town square, nestled in a virtual forest, was "Nature's Palette," a website crafted by an artist named Leo. Leo had an extraordinary ability to capture the beauty of the natural world through his digital artwork. With a palette of vibrant colors, Leo's website was a gallery of mesmerizing landscapes, intricate flora, and majestic fauna. Visitors would often find themselves lost in the intricate details of his creations, feeling as if they were taking a walk through a magical forest.<br/><br/>

        Further down the virtual streets, there was "FitLife Junction," a health and fitness website run by a vivacious trainer named Mia. Mia's website was a hub of motivation and support for individuals striving to lead healthier lives. She provided workout routines, nutritious recipes, and a community forum where members could share their progress and offer encouragement to one another. FitLife Junction wasn't just about physical fitness—it was a place where people found the strength to transform their lives.<br/><br/>

        In a corner of the web, there stood "TechHaven," a digital workshop manned by an ingenious tinkerer named Max. TechHaven was a treasure trove of technology reviews, DIY projects, and insightful discussions about the ever-evolving world of gadgets and innovation. Max's passion for understanding how things worked and sharing that knowledge with others made TechHaven a hub of innovation and learning.<br/><br/>

        As time went on, the websites in this virtual neighborhood continued to flourish and evolve. They inspired, educated, and connected people from all walks of life. Just as a real community thrives through the interactions and relationships between its residents, the World Wide Web became a testament to the power of human creativity, curiosity, and the desire to share.<br/><br/>

        And so, the story of the websites in this extraordinary digital neighborhood served as a reminder that even in the boundless realm of the internet, the most enduring and cherished aspects are the connections and stories that bring people together.
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
