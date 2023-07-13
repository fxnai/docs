---
title: Making Predictions from Discord
pageTitle: Discord Predictions - Function
description: Make AI predictions from Discord.
---

Boost your Discord servers with AI predictions. {% .text-2xl .text-gray-500 .font-normal %}

Function provides a bot that can make predictions right in your Discord server, using slash commands. Here's a quick primer:

## Installing Function Bot
Install Function in your Discord server using the following link:

{% quick-links %}
{% quick-link title="Make Predictions in Discord" icon="/discord.svg" newTab=true href="https://fxn.ai/discord" description="Make predictions in any conversation with the `/predict` slash command." /%}
{% /quick-links %}

Doing so will ask you to authorize `fxnbot` to join your server:

![Adding fxnbot to a Discord server](/discord-add.gif)

{% callout %} You can only add `fxnbot` to Discord servers where you are an admin. {% /callout %}

## Logging in on Discord
Next, you need to authenticate so that Function knows what predictors you have access to. Function authenticates you using your Discord username. First, head over to [Discord](https://discord.com/app) and grab your username:

![Retrieving your Discord username](/discord-username.gif)

{% callout type="warning" %} You will need to have opted into Discord's new global usernames for this to work. [Learn more](https://discord.com/blog/usernames) {% /callout %}

Next, head over to your [Account](https://fxn.ai/account) page on Function and paste in your Discord username:

![Setting your Discord username on Function](/discord-fxn.gif)

## Making Predictions

First, we'll need a predictor to make predictions with. You can either use a public predictor on Function, or make your own. In this guide, we'll be using the `@samplefxn/stable-diffusion` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/stable-diffusion" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/stable-diffusion" description="We'll be using the Stable Diffusion predictor in this guide." /%}
{% /quick-links %}

Next, use the `/predict` slash command to make the prediction:

```bash
# Make a prediction in any Discord channel
/predict tag:@samplefxn/stable-diffusion text:An astronaut riding on the moon
```

Feel free to modify the prompt as you like, then send the message and see the prediction result pop up after a few seconds:

![Making a prediction on Discord](/discord-predict.gif)

{% callout type="warning" %} Our Discord bot currently supports passing input values by their type (i.e. text, number, image, file, etc) instead of by name. {% /callout %}