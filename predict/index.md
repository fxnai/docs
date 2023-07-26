---
title: Making Predictions
pageTitle: Predictions - Function
description: Make AI predictions from code.
---

Discover predictors and make predictions. {% .text-2xl .text-gray-500 .font-normal %}

Function provides a Python client for making predictions in any Python app.

## Installing Function
To start, open a terminal window and run the following command:
```bash {% framework="python" %}
# Open a terminal and run the following command:
pip install --upgrade fxn
```

## Logging in to Function
First, head over to your [Account](https://fxn.ai/account/developers) page to generate an access key:

![generate access key](https://raw.githubusercontent.com/fxnai/.github/main/access_key.gif)

Now, let's login to Function with your access key:

```py {% framework="python" %}
import fxn

# Set your access key
# Or set the `FXN_ACCESS_KEY` environment variable
fxn.access_key = "<ACCESS KEY>"
```

## Making Predictions
First, we'll need a predictor to make predictions with. You can either use a public predictor on Function, or make your own. In this guide, we'll be using the `@samplefxn/greeting` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/greeting" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/greeting" description="We'll be using the greeting predictor in this guide." /%}
{% /quick-links %}

The predictor accepts a `name` of the person to greet, optionally with their `age` and `city`. Let's make the prediction:

```py {% framework="python" %}
# Predict
prediction = fxn.Prediction.create(
    tag="@samplefxn/greeting",
    name="Rhea",
    age=44,
    city="Los Angeles"
)
# Print
print(prediction.results[0])
```

{% callout %} Function supports serializing audio, images, video, tensors, and much more. For more info, see [`Value`](/api/value) {% /callout %}