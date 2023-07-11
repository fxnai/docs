---
title: Core Concepts
pageTitle: Concepts - Function
description: Things to know as you build with Function.
---

Things to know as you build with Function. {% .text-2xl .text-gray-500 .font-normal %}

Function exists to get you from AI idea to production, enabling more people to discover and deploy AI in their workflows and applications. We free you from managing clusters, Kubernetes, Docker images, and all the tape that binds it together. With Function, you only need to bring your prediction function:

## Predictors
Function allows you to run AI prediction functions in your apps. These *predictors* are just Python functions that accept arbitrary inputs, presumably performing some AI operations, and return arbitrary outputs:
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
Values are any data that is consumed or produced by a predictor. Following from the above example, I can make a prediction with a radius *value*:
```py
# Make a prediction with a `radius` value of 2.5:
predict(2.5)
```
With this construct, using AI in your apps boils down to sending your input values to a predictor and processing the output values.

## Notebooks
When creating predictors on Function, you always start with a Jupyter notebook, or "notebook" for short. A notebook is a simple text-based file that allows for writing both notes and Python code in the same file. [Here is a sample notebook](https://github.com/fxnai/samples/blob/main/stable-diffusion.ipynb). With notebooks, you have a simple, self-contained format to manage predictors.