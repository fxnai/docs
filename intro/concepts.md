---
title: Core Concepts
pageTitle: Concepts - Function
description: Things to know as you build with Function.
---

Things to know as you build with Function. {% .text-2xl .text-gray-500 .font-normal %}

It's an exciting time to be alive, especially with all the advancements we're seeing in AI. But as the field continues to accelerate towards light speed, it's leaving behind massive swaths of individuals, teams, and organizations that could massively benefit from this new technology.

Function exists to bridge this gap, enabling more people to discover and deploy AI in their workflows and applications. And it all starts with prediction functions.

## Predictors
Function allows you to run AI prediction functions in your apps:
```py
def predict ():
    return "Every predictor is literally just a `predict` function in a Jupyter notebook 😉"
```
These *predictors* are just Python functions that accept arbitrary inputs, presumably performing some AI operations, and return arbitrary outputs.

Function then handles everything from containerizing and serving these functions, to autoscaling them up to handle millions of requests, to scaling them down to zero in idle periods, and to handling all the nasty serialization and deserialization involved to actually invoke these functions.

It is critical to note that you don't need to bring your own predictors to use Function. We maintain a [hub of predictors](https://fxn.ai/explore) that you can quickly combine and compose to build AI-powered apps, with exactly zero AI knowledge.

## Features
Features are any data that is consumed or produced by a predictor:
```py
predict(
    "London",   # this is a string feature
    34          # this is a number feature
)
```
With this construct, using AI in your apps boils down to three steps: sending a set of input features to a predictor; the predictor making a prediction; and using the output features in your app.