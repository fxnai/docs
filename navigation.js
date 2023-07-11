export const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Welcome to Function", href: "/intro" },
      { title: "Core Concepts", href: "/intro/concepts" },
    ],
  },
  {
    title: "Making Predictions",
    links: [
      { title: "From Code", href: "/predict" },
      { title: "From Discord", href: "/predict/discord" },
      { title: "From Slack", href: "/predict/slack" },
      { title: "From Reddit", href: "/predict/reddit" },
      { title: "From Zapier", href: "/predict/zapier" },
    ]
  },
  {
    title: "Creating Predictors",
    links: [
      { title: "Creating Predictors", href: "/create" },
      { title: "Using Secrets", href: "/create/secrets" },
      { title: "Pulling from Private Repos", href: "/create/repos" },
      { title: "Rendering with Blender", href: "/create/blender" },
      //{ title: "Bringing your own GPU", href: "/create/runhouse" },
    ]
  },
  {
    title: "API Reference",
    links: [
      { title: "Introduction", href: "/api" },
      { title: "Predictors", href: "/api/predictors" },
      { title: "Environment Variables", href: "/api/environment" },
      { title: "Features", href: "/api/features" },
      { title: "Predictions", href: "/api/predictions" },
      { title: "Changelog", href: "/api/changelog" },
    ]
  },
]

// so that builds don't error
export default function CommunityPage () { }

export const getServerSideProps = async context => {
  return { redirect: { destination: "/", permanent: true } };
}