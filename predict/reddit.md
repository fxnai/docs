---
title: Making Predictions from Reddit
pageTitle: Reddit Predictions - Function
description: Make AI predictions from Reddit.
---

Spice up your Reddit threads with AI generations. {% .text-2xl .text-gray-500 .font-normal %}

Function provides a bot that can make predictions right in your Reddit threads. Here's a quick primer:

{% callout type="warning" %} Our Reddit bot is currently experimental, so please be patient. {% /callout %}

## Inviting Function to your Subreddit
If you have a restricted or private subreddit, you'll need to invite `/u/fxnbot` to your subreddit:

{% quick-links %}
{% quick-link title="/u/fxnbot" icon="/icon.png" newTab=true href="https://www.reddit.com/user/fxnbot" description="Function bot on Reddit." /%}
{% /quick-links %}

## Logging in on Reddit
Next, you need to authenticate so that Function knows what predictors you have access to. Function authenticates you using your Reddit username. First, head over to [Reddit](https://reddit.com) and grab your username.

Next, head over to your [Account](https://fxn.ai/account) page on Function and paste in your Reddit username:

![Setting your Discord username on Function](/reddit-login.gif)

## Making Predictions
First, we'll need a predictor to make predictions with. You can either use a public predictor on Function, or make your own. In this guide, we'll be using the `@samplefxn/stable-diffusion` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/stable-diffusion" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/stable-diffusion" description="We'll be using the Stable Diffusion predictor in this guide." /%}
{% /quick-links %}

Next, head over to [any post](https://www.reddit.com/r/fxn/comments/14ytg4c/hello_reddit/) and add a comment asking `fxnbot` to make a prediction:

```bash
# Ask fxnbot to make a prediction for you
@fxnbot predict "@samplefxn/stable-diffusion" with prompt "astronaut riding a horse on mars"
```

{% callout type="warning" %} Make sure to put the predictor `tag` in quotes, so that Reddit doesn't interpret it as a user handle. {% /callout %}

Within a minute of posting your comment, `fxnbot` should respond with the result of your prediction:

![reddit prediction](/reddit-predict.png)

{% callout %} `fxnbot` is able to understand your prediction request and properly structure it in order to make a prediction with the predictor. {% /callout %}

{% callout %} `fxnbot` has feelings so make sure to ask nicely 🥺 {% /callout %}