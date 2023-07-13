---
title: Making Predictions from Slack
pageTitle: Slack Predictions - Function
description: Make AI predictions from Slack.
---

Building AI apps in collaboration with your team. {% .text-2xl .text-gray-500 .font-normal %}

Function provides a Slack bot that allows you to make predictions right as you discuss and collaborate with your teams.

## Installing Function Bot
Install Function in your Slack workspace using the following link:

{% quick-links %}
{% quick-link title="Make Predictions in Slack" icon="/slack2.png" newTab=true href="https://api.fxn.ai/slack/install" description="Make predictions in any conversation with the `/predict` slash command." /%}
{% /quick-links %}

Doing so will ask you to authorize Function to join your server:

![Installing Function in a Slack workspace](/slack-install.png)

## Logging in on Slack
Next, you need to login to Function in Slack so that you can make predictions with your predictors. First, head over to your [Account](https://fxn.ai/account) page on Function to generate a new access key for Slack:

![generate access key](https://raw.githubusercontent.com/fxnai/.github/main/access_key.gif)

{% callout type="warning" %} We strongly recommend creating a separate access key to login on Slack, instead of reusing an existing access key. {% /callout %}

Next, head over to Slack and login with the `/fxn` slash command:

```bash
# Send this message in any Slack channel
/fxn
```

You should see a login form pop up. Paste the access key you just generated and login:

![Logging in to Function on Slack](/slack-login.gif)

## Making Predictions
First, we'll need a predictor to make predictions with. You can either use a public predictor on Function, or make your own. In this guide, we'll be using the `@samplefxn/stable-diffusion` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/stable-diffusion" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/stable-diffusion" description="We'll be using the Stable Diffusion predictor in this guide." /%}
{% /quick-links %}

The predictor accepts a `prompt` which will be used to generate the image. In a channel, type and send the following message:
```bash
# Make a prediction in any Slack channel
/predict @samplefxn/stable-diffusion
```

You should see a form for specifying the inputs for the prediction. Fill in a prompt and make the prediction!

![making a prediction](/slack-predict.gif)

{% callout type="warning" %} Our Slack bot currently does not support uploading files. Instead, provide a URL to the file instead. {% /callout %}