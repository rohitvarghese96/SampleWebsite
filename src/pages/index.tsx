import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { msalConfig, MSAL_LoginRequest, resetPasswordRequest } from "../authConfig";
import { PublicClientApplication, AuthenticationResult } from "@azure/msal-browser";

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

const IsBrowser = typeof window !== "undefined";

const IndexPage: React.FC<PageProps> = () => {
  const [tokenData, setTokenData] = React.useState<AuthenticationResult | null>(null);
  const msalInstance = new PublicClientApplication(msalConfig);
  msalInstance.initialize();

  if (tokenData == null && IsBrowser) {
    msalInstance.handleRedirectPromise()
      .then((tokenResponse: AuthenticationResult | null) => {
        if (tokenResponse !== null) {
          console.log('TokenResponse', tokenResponse);
          setTokenData(tokenResponse);
        }
        else {
          msalInstance.loginRedirect(MSAL_LoginRequest());
        }
      })
      .catch(error => {
        //Forget password:
        if (error.toString().indexOf("AADB2C90118") > -1) {
          msalInstance.loginRedirect(resetPasswordRequest);
        }
        else {
          console.error('Error:', error);
          alert('Something went wrong during authentication!');
        }
      });

    return (
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          <span style={headingAccentStyles}> A digital bookstore run by a passionate bibliophile named Bella</span>
        </h1>
        <p style={paragraphStyles}>
          Redirecting. Please wait...
        </p>
      </main>
    );
  }
  else {
    return (
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          <span style={headingAccentStyles}> A digital bookstore run by a passionate bibliophile named Bella</span>
        </h1>
        <p style={paragraphStyles}>
          In a bustling corner of the digital universe, there existed a charming and diverse neighborhood called the World Wide Web. This extraordinary place was filled with websites, each one a unique residence, ranging from cozy blogs to grand corporate mansions. People from all around the world would navigate through this neighborhood, exploring its vibrant streets and discovering the stories that each website had to tell.<br /><br />

          At the heart of the web was the town square, where the most well-known and frequently visited sites resided. One of these sites was "Inkwell Adventures," a digital bookstore run by a passionate bibliophile named Bella. Inkwell Adventures was a cozy, book-filled haven where readers could lose themselves in enchanting tales and insightful knowledge. Bella would spend her days curating the collection, carefully selecting each literary gem to share with her visitors. The site wasn't just a store; it was a refuge for book lovers to connect, share recommendations, and discuss their favorite stories.<br /><br />

          On the outskirts of the town square, nestled in a virtual forest, was "Nature's Palette," a website crafted by an artist named Leo. Leo had an extraordinary ability to capture the beauty of the natural world through his digital artwork. With a palette of vibrant colors, Leo's website was a gallery of mesmerizing landscapes, intricate flora, and majestic fauna. Visitors would often find themselves lost in the intricate details of his creations, feeling as if they were taking a walk through a magical forest.<br /><br />

          Further down the virtual streets, there was "FitLife Junction," a health and fitness website run by a vivacious trainer named Mia. Mia's website was a hub of motivation and support for individuals striving to lead healthier lives. She provided workout routines, nutritious recipes, and a community forum where members could share their progress and offer encouragement to one another. FitLife Junction wasn't just about physical fitness—it was a place where people found the strength to transform their lives.<br /><br />

          In a corner of the web, there stood "TechHaven," a digital workshop manned by an ingenious tinkerer named Max. TechHaven was a treasure trove of technology reviews, DIY projects, and insightful discussions about the ever-evolving world of gadgets and innovation. Max's passion for understanding how things worked and sharing that knowledge with others made TechHaven a hub of innovation and learning.<br /><br />

          As time went on, the websites in this virtual neighborhood continued to flourish and evolve. They inspired, educated, and connected people from all walks of life. Just as a real community thrives through the interactions and relationships between its residents, the World Wide Web became a testament to the power of human creativity, curiosity, and the desire to share.<br /><br />

          And so, the story of the websites in this extraordinary digital neighborhood served as a reminder that even in the boundless realm of the internet, the most enduring and cherished aspects are the connections and stories that bring people together.
        </p>
      </main>
    );
  }
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
