export const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Welcome to Function", href: "/" },
      { title: "Installing Function", href: "/intro/install" },
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
    title: "Integrations",
    links: [
      { title: "Bringing your own GPU", href: "/integrations/runhouse" },
      { title: "Creating AI Automations", href: "/integrations/zapier" },
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
  {
    title: "C API Reference",
    links: [
      { title: "Introduction", href: "/c" },
      { title: "FXNModel", href: "/c/fxnmodel" },
      { title: "FXNModelConfiguration", href: "/c/fxnmodelconfiguration" },
      { title: "FXNFeature", href: "/c/fxnfeature" },
      { title: "FXNFeatureType", href: "/c/fxnfeaturetype" }
    ]
  },
]

export default function CommunityPage () { } // so that builds don't error

export const getServerSideProps = async context => {
  return { redirect: { destination: "/", permanent: true } };
}