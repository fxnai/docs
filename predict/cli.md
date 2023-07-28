---
title: Making Predictions in the CLI
pageTitle: CLI Predictions - Function
description: Make AI predictions in the CLI.
---

Make AI predictions in the command line interface. {% .text-2xl .text-gray-500 .font-normal %}

You can make predictions right in the command line.

## Installing Function CLI
To install Function CLI, open a terminal and run the following command:
```bash
# Open a terminal and run the following command:
pip install --upgrade fxn
```

## Logging in to Function
Next, head over to your [Account](https://fxn.ai/account/developers) page to generate an access key:

![generate access key](https://raw.githubusercontent.com/fxnai/.github/main/access_key.gif)

Now, you can login to Function CLI with your access key:


```bash {% framework="cli" %}
# Open a terminal and run the following command
fxn auth login <ACCESS KEY>
```

Here is an example showing a successful login in the CLI:

![login to CLI](https://raw.githubusercontent.com/fxnai/.github/main/auth_login.gif)

## Making Predictions
We'll need a predictor to make predictions with. You can either use a public predictor on Function, or [make your own](/create). In this guide, we'll be using the `@samplefxn/greeting` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/greeting" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/greeting" description="We'll be using the greeting predictor in this guide." /%}
{% /quick-links %}

The predictor accepts a `name` of the person to greet, optionally with their `age` and `city`. Let's make the prediction:

```bash {% framework="cli" %}
# Predict
fxn predict @samplefxn/greeting --name Rhea --age 44 --city "Los Angeles"
```

### Using File Inputs
For predictors that accept binary data (e.g. image, audio, video, binary files), pass in the file path prefixed with the `@` character. 

Here's an example that makes a prediction on an image file `cat.jpg` using a generic `classifier` predictor:
```bash
# Make a prediction using a file input
fxn predict @username/classifier --image @cat.jpg
```

{% callout %} The use of the `@` character for working with files is similar to `cURL`. {% /callout %}