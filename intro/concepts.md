---
title: Core Concepts
pageTitle: Concepts - Function
description: Things to know as you build with Function.
---

AI deployment made unbelievably easy. {% .text-2xl .text-gray-500 .font-normal %}

Function streamlines AI deployment by removing the need to manage Docker containers, Kubernetes clusters, and other infrastructure.

## Predictors
With Function, you can execute AI prediction functions from anywhere. These *predictors* are just Python functions that consume and produce arbitrary data.

```py
# Every predictor is literally just a `predict` function in a Jupyter notebook 😉
def predict (radius: int):
    """
    Return the area of a circle given its radius.
    """
    return 3.14 * radius * radius
```

{% callout %} You can also [explore predictors](https://fxn.ai/explore) on Function, without bringing your own. {% /callout %}

## Values
Values are any data consumed or produced by a predictor. Following from the above example, I can make a prediction with a radius value:
```py
# Make a prediction with a `radius` value of 2.5:
predict(2.5)
```
With this construct, using AI in your apps boils down to sending your input values to a predictor and processing the output values.