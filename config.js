import Header from "./.components/header/Header.jsx";
import Footer from "./.components/footer/index.jsx";

module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/blog",
    entries: {},
    baseUrl: "https://www.theden.ai/",
  },
  name: "The Den AI Blog",
  favicons: {
    iconUrl: {
      "16x16": "https://www.theden.ai/images/favicon.svg",
    },
  },
  props: {
    header: {
      customComponent: Header,
      logo: {
        imageUrl:
          "https://assets-global.website-files.com/6582e53622faa84165a9174f/6582eb16ed0b1cfa07fee730_Den%20AI%20Full%20Logo.svg",
        title: "The Den AI",
      },
      navLinks: {
        alignment: "right",
        links: [
          { title: "Product", url: "https://www.theden.ai/chatden" },
          {
            title: "Solutions",
            subtitle: "The ultimate demo platform for all your GTM needs",
            sublinks: [
              {
                title: "Customer Support",
                url: "https://www.theden.ai/solutions/customer-support",
              },
              {
                title: "Lead Generation",
                url: "https://www.theden.ai/solutions/lead-generation",
              },
              {
                title: "e-Commerce",
                url: "https://www.theden.ai/solutions/e-commerce",
              },
              {
                title: "Internal Wiki",
                url: "https://www.theden.ai/solutions/internal-wiki",
              },
              {
                title: "HR Assistant",
                url: "https://www.theden.ai/solutions/hr-assistant",
              },
              {
                title: "Academic Research",
                url: "https://www.theden.ai/solutions/academic-research",
              },
            ],
          },
          { title: "Pricing", url: "https://www.theden.ai/pricing" },
          { title: "Blog", url: "https://www.theden.ai/blog" },
        ],
      },
      cta: {
        title: "Hello world",
        link: "#somewhere",
      },
      ctas: [
        {
          type: "secondary",
          title: "Join the waitlist",
          url: "https://www.theden.ai/join-the-waitlist",
        },
      ],
    },
    sidepanel: {
      showSidePanel: false,
    },
    content: {},
    toc: {
      show: false,
    },
    footer: {
      customComponent: Footer,
      logo: "https://assets-global.website-files.com/6582e53622faa84165a9174f/6582eb16ed0b1cfa07fee730_Den%20AI%20Full%20Logo.svg",
      copyright: "Den AI © 2024",
      links: [
        {
          heading: "Chatden",
          links: [
            { title: "Product", url: "https://www.theden.ai/chatden" },
            { title: "Pricing", url: "https://www.theden.ai/pricing" },
          ],
        },
        {
          heading: "Solutions",
          links: [
            {
              title: "Customer Support",
              url: "https://www.theden.ai/solutions/customer-support",
            },
            {
              title: "Lead Generation",
              url: "https://www.theden.ai/solutions/lead-generation",
            },
            {
              title: "e-Commerce",
              url: "https://www.theden.ai/solutions/e-commerce",
            },
            {
              title: "Internal Wiki",
              url: "https://www.theden.ai/solutions/internal-wiki",
            },
            {
              title: "HR Assistant",
              url: "https://www.theden.ai/solutions/hr-assistant",
            },
            {
              title: "Academic Research",
              url: "https://www.theden.ai/solutions/academic-research",
            },
          ],
        },
        {
          heading: "Resources",
          links: [
            {
              title: "Blog",
              url: "https://www.theden.ai/blog",
            },
            {
              title: "Terms of Service",
              url: "https://www.theden.ai/terms-of-service",
            },
            {
              title: "Privacy Policy",
              url: "https://www.theden.ai/privacy-policy",
            },
          ],
        },
      ],
    },
  },
  theme: {
    colors: {
      primary: "#092635",
      textPrimary: "#000",
      textSecondary: "#fff",
      textTertiary: "#713aff",
      backgroundPrimary: "#fff",
      backgroundSecondary: "#16023e",
      accent: "#ff5cc5",
      border: "#d1d5db",
    },
    typography: {
      fontSize: "16px",
      fontFamily: "Inter",
      lineHeight: 1.5,
      h1: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "3.62rem",
        fontWeight: 700,
        lineHeight: "4.25rem",
      },
      h2: {
        margin: "0 0 2rem 0",
        padding: 0,
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
      h3: {
        margin: "2rem 0 2rem 0",
        padding: 0,
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: "1.625rem",
      },
      h4: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      h5: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      h6: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      p: {
        margin: "1.5rem 0 1.5rem 0",
        padding: 0,
        fontSize: "1.125rem",
        fontWeight: 400,
        lineHeight: "1.625rem",
      },
    },
  },
};
