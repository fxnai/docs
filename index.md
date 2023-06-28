---
title: Welcome to Function
pageTitle: Function Docs
description: Run AI prediction functions on mobile, web, and in the cloud.
---

Run AI prediction functions on mobile, web, and in the cloud. {% .text-2xl .text-gray-500 .font-normal %}

Function allows you to run AI prediction functions on mobile, web, and in the cloud with a seamless workflow.

Bring a Jupyter notebook with a `predict` function, and we'll spin up a serverless AI prediction service that can scale up to serve millions of customers, and scale down to zero when idle.

___

## Installing Function
Function provides clients for Python, JavaScript, Unity Engine, and the command line interface (CLI):

{% multifence %}

```bash {% framework="python" %}
# Open a terminal and run the following command:
pip install fxn
```

```bash {% framework="javascript" %}
# Open a terminal and run the following command:
npm install fxnjs
```

```json {% framework="unity" highlight=["3..9", 11] %}
// Add the highlighted lines to your `Packages/manifest.json` file:
{
  "scopedRegistries": [
    {
      "name": "Function",
      "url": "https://registry.npmjs.com",
      "scopes": ["ai.fxn"]
    }
  ],
  "dependencies": {
    "ai.fxn.fxn3d": "0.0.1"
  }
}
```

```bash {% framework="cli" %}
# Open a terminal and run the following command:
pip install fxn
```

{% /multifence %}

Function also provides a [Discord integration](https://fxn.ai/discord) to make predictions right in your Discord server.

{% callout %} We have iOS (Swift) and Android (Java/Kotlin) integrations coming soon! {% /callout %}

---

## Making a Prediction
Let's make your first prediction with the Function CLI (see installation steps above). To start, register at [fxn.ai](https://fxn.ai/login). Once you're logged in, generate an access key:

![generate access key](https://raw.githubusercontent.com/fxnai/.github/main/access_key.gif)

Now, let's login to the Function CLI with your access key:
```bash
# Open a terminal and run the following command
fxn auth login <ACCESS KEY>
```

You should see information about your Function account:

![login to CLI](https://raw.githubusercontent.com/fxnai/.github/main/auth_login.gif)

Now let's make a prediction with the [Stable Diffusion](https://fxn.ai/@natml/stable-diffusion) model which generates an image based on a text prompt:

![predict](https://raw.githubusercontent.com/fxnai/.github/main/predict.gif)

___

## Join the Party
At this point, you've seen what Function is all about. Before getting into the weeds, here are a few useful links:

- **[Join the community](https://fxn.ai/community)**. Come get ideas on how others are thinking of integrating AI into their workflows and products.

- **[Star us on GitHub](https://github.com/fxnai/fxn)**. You can open issues for any bugs and get technical help on our GitHub.

- **[Drop us an email](mailto:hi@fxn.ai)**. Reach out with any questions or thoughts. We'd love to hear them 😁