// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Botanicals, herbs, and natural ingredients from Essential Wholesale."
        src="../images/top-banner.jpg"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
