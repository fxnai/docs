---
title: Core Concepts
pageTitle: Concepts - Function
description: Things to know as you build with Function.
---

AI deployment made unbelievably easy. {% .text-2xl .text-gray-500 .font-normal %}

Function exists to help you take AI to production extremely quickly. We are enabling more people to discover and deploy AI in their workflows and applications. We free you from managing Kubernetes clusters, Docker images, serving infrastructure, and all the other tape that binds it all together. With Function, you only need to bring one thing.

## Predictors
With Function, you can run AI prediction functions from just about anywhere. These *predictors* are just Python functions that accept arbitrary inputs, presumably perform some AI operations, and return arbitrary outputs:
```py
# Every predictor is literally just a `predict` function in a Jupyter notebook 😉
def predict (radius: int):
    """
    Return the area of a circle given its radius.
    """
    return 3.14 * radius * radius
```

Function then handles everything from containerizing and serving these functions, to autoscaling them up to handle millions of requests, to scaling them down to zero in idle periods, and to handling all the nasty serialization and deserialization involved to actually invoke these functions.

{% callout %} We maintain a [hub of predictors](https://fxn.ai/explore) that you can quickly combine and compose to build AI-powered apps, with exactly zero AI knowledge. {% /callout %}

## Values
Values are any data consumed or produced by a predictor. Following from the above example, I can make a prediction with a radius value:
```py
# Make a prediction with a `radius` value of 2.5:
predict(2.5)
```
With this construct, using AI in your apps boils down to sending your input values to a predictor and processing the output values.

## Notebooks
Function uses Jupyter notebooks as a self-contained file to create, manage, and deploy predictors. A notebook is a simple text-based file that allows for writing both notes and Python code in the same file:

{% quick-links %}
{% quick-link title="Greeting notebook" icon="/icon.png" newTab=true href="https://github.com/fxnai/samples/blob/main/greeting.ipynb" description="RADA" /%}
{% quick-link title="Stable diffusion notebook" icon="/icon.png" newTab=true href="https://github.com/fxnai/samples/blob/main/stable-diffusion.ipynb" description="RADA" /%}
{% /quick-links %}