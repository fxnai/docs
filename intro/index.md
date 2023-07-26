---
title: Welcome to Function
pageTitle: Function Docs
description: Run AI prediction functions on mobile, web, and in the cloud.
---

Run AI prediction functions on mobile, web, and in the cloud. {% .text-2xl .text-gray-500 .font-normal %}

Bring a Jupyter notebook with a `predict` function, and we'll spin up a serverless AI prediction service that can scale up to serve millions of customers, and scale down to zero when idle.

## Installing Function
Function provides clients for Python, JavaScript, Unity Engine, and the command line interface (CLI):

{% multifence %}

```bash {% framework="python" %}
# Open a terminal and run the following command:
pip install --upgrade fxn
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
    "ai.fxn.fxn3d": "0.0.3"
  }
}
```

```bash {% framework="cli" %}
# Open a terminal and run the following command:
pip install --upgrade fxn
```

{% /multifence %}

Function also provides Discord and Slack bots to make predictions right in your team conversations:

{% quick-links %}
{% quick-link title="Make Predictions in Discord" icon="/discord.svg" newTab=true href="https://fxn.ai/discord" description="Make predictions in any conversation with the `/predict` slash command." /%}
{% quick-link title="Make Predictions in Slack" icon="/slack2.png" newTab=true href="https://api.fxn.ai/slack/install" description="Make predictions in any conversation with the `/predict` slash command." /%}
{% /quick-links %}

{% callout %} We have iOS (Swift) and Android (Java/Kotlin) clients coming soon! {% /callout %}

## Making a Prediction
Now let's make a prediction with the [Stable Diffusion](https://fxn.ai/@samplefxn/stable-diffusion) model which generates an image based on a text prompt:

1. Make sure you have installed the Function CLI (see above).

2. Open a terminal and run the following command:

```bash
# Generate an image from a text prompt using Stable Diffusion
fxn predict @samplefxn/stable-diffusion --prompt "An astronaut riding a horse on mars"
```

![predict](https://raw.githubusercontent.com/fxnai/.github/main/predict.gif)

## Join the Party
At this point, you've seen what Function is all about. Before getting into the weeds, here are a few useful links:

{% quick-links %}
{% quick-link title="Join the Community" icon="/discord.svg" newTab=true href="https://fxn.ai/community" description="Come get ideas on how others are thinking of integrating AI into their workflows and products." /%}
{% quick-link title="Star us on GitHub" icon="/github.png" newTab=true href="https://github.com/fxnai/fxn" description="You can open issues for any bugs and get technical help on our GitHub." /%}
{% /quick-links %}