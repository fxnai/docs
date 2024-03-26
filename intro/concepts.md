---
title: Core Concepts
pageTitle: Concepts - Function
description: Things to know as you build with Function.
---

Run Python everywhere. {% .text-2xl .text-gray-500 .font-normal %}

Function compiles and runs your Python functions on just about any device. Before jumping in, there are a few things to know:

## Predictors
Function helps you run prediction functions on-device or server-side. These *predictors* are just stateless Python functions that consume and produce arbitrary data.

```py
# Every predictor is literally just a `predict` function 😉
def predict (radius: int):
    """
    Return the area of a circle given its radius.
    """
    return 3.14 * radius * radius
```

{% callout %} You can also [explore predictors](https://fxn.ai/explore) on Function, without bringing your own. {% /callout %}

Function supports two types of predictors, depending on where the prediction function actually runs:

### Cloud Predictors
Function runs cloud predictors on powerful server instances in the cloud. Function supports both CPU and GPU instances for running large, compute-intensive predictors.

### Edge Predictors
Function compiles and runs edge predictors on the local device. The benefit with edge predictors is that they can be extremely fast since all computations happen on device. Furthermore, they are often much cheaper.

## Values
Values are any data consumed or produced by a predictor. Following from the above example, I can make a prediction with a radius value:
```py
# Make a prediction with a `radius` value of 2.5:
predict(2.5)
```
With this construct, using AI in your apps boils down to sending your input values to a predictor and processing the output values.