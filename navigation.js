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
      { title: "Predict in Python", href: "/predict" },
      { title: "Predict in the CLI", href: "/predict/cli" },
      { title: "Predict in JavaScript", href: "/predict/javascript" },
      { title: "Predict in Unity", href: "/predict/unity" },
      { title: "Predict in Slack", href: "/predict/slack" },
      { title: "Predict in Discord", href: "/predict/discord" },
      { title: "Predict in Zapier", href: "/predict/zapier" },
      //{ title: "Predict in Reddit", href: "/predict/reddit" },
    ]
  },
  {
    title: "Creating Predictors",
    links: [
      { title: "Creating Predictors", href: "/create" },
      { title: "Running Locally", href: "/create/edge" },
      { title: "Using the GPU", href: "/create/gpu" },
      { title: "Using Secrets", href: "/create/secrets" },
      { title: "Using Git Repos", href: "/create/repos" },
      { title: "Rendering with Blender", href: "/create/rendering" },
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