export const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Welcome to Function", href: "/" },
      { title: "Core Concepts", href: "/intro/concepts" },
    ],
  },
  {
    title: "Predictors",
    links: [
      { title: "Exploring Predictors", href: "/predictors/explore" },
      { title: "Creating a Predictor", href: "/predictors/create" },
    ]
  },
  {
    title: "Guides",
    links: [
      { title: "Rendering with Blender", href: "/guides/blender" },
      { title: "Bringing your own GPU", href: "/guides/runhouse" },
      { title: "Creating AI-powered Automations", href: "/guides/zapier" },
    ]
  },
  {
    title: "API Reference",
    links: [
      { title: "Introduction", href: "/api" },
      { title: "Predictors", href: "/api/predictors" },
      { title: "Predictions", href: "/api/predictions" },
      { title: "Environment Variables", href: "/api/environment" },
      { title: "Changelog", href: "/api/changelog" },
    ]
  },
]

// so that builds don't error
export default function CommunityPage () { }

export const getServerSideProps = async context => {
  return { redirect: { destination: "/", permanent: true } };
}