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
      { title: "Predict from Code", href: "/predict" },
      { title: "Predict from Slack", href: "/predict/slack" },
      { title: "Predict from Discord", href: "/predict/discord" },
      { title: "Predict from Zapier", href: "/predict/zapier" },
      { title: "Predict from Reddit", href: "/predict/reddit" },
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
      { title: "Predictions", href: "/api/predictions" },
      { title: "Values", href: "/api/values" },
      { title: "Changelog", href: "/api/changelog" },
    ]
  },
]

// so that builds don't error
export default function CommunityPage () { }

export const getServerSideProps = async context => {
  return { redirect: { destination: "/", permanent: true } };
}