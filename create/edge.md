---
title: Running Locally
pageTitle: Running Locally - Function
description: Make predictions on-device.
---

Make predictions on-device. {% .text-2xl .text-gray-500 .font-normal %}

Function has experimental support for creating prediction functions that run entirely on the local device. These are called edge predictors, and enable building highly interactive, cross-platform functionality.

## Creating the Predictor
Creating an edge predictor follows the same steps as cloud predictors. Create a `predictor.ipynb` notebook and add the following code cell:

```py
from math import pi

def predict (radius: float) -> float:
    """
    Compute the area of a circle given its radius.
    """
    return pi * radius ** 2
```

Now, we can provision the predictor on Function in order to run it on any device, fully locally:
```bash
# Open a terminal and run the following command:
fxn create @username/area predictor.ipynb --edge --overwrite
```

{% callout %} Make sure to replace `@username` with your Function username. {% /callout %}

{% callout %} The `--edge` flag creates an edge predictor instead of a cloud predictor. {% /callout %}

{% callout %} There is absolutely no difference in your code when making a prediction with an edge predictor vs. a cloud predictor. Our client libraries will handle all the details for you. {% /callout %}

## Current Limitations
Edge predictors are currently in alpha. As such, there are major limitations compared to cloud predictors:

1. Only a very limited subset of Python is supported. We will be expanding support for more Python language features over time. [See GitHub](https://github.com/orgs/fxnai/projects/1/views/1)

2. For security, all file I/O is restricted. Predictors must only operate on data explicitly passed in as an argument.

## Technical Considerations
At its core, Function is a Python compiler and optimizer. Given a Python function, we transpile the function to C++ then cross-compile for the following platforms:

{% table .text-lg .mb-4 .text-gray-200 .ring .ring-gray-600 .ring-1 .ring-inset .rounded-lg .divide-y .divide-gray-500 .w-full %}
* Platform {% .py-1 %}
* Architectures {% .py-1 %}
* Notes {% .py-1 %}
---
* Android {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* `armeabi-v7a`, `arm64-v8a`, `x86`, `x86_64` {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* None {% .px-4 .py-1 .border-b .border-gray-700 .opacity-0 %}
---
* iOS {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* `arm64` {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* Device-only {% .px-4 .py-1 .border-b .border-gray-700 %}
---
* macOS {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* `arm64`, `x86_64` {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* None {% .px-4 .py-1 .border-b .border-gray-700 .opacity-0 %}
---
* Web {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* `wasm32` {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* None {% .px-4 .py-1 .border-b .border-gray-700 .opacity-0 %}
---
* Windows {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* `x86_64` {% .px-4 .py-1 .border-b .border-r .border-gray-700 %}
* None {% .px-4 .py-1 .border-b .border-gray-700 .opacity-0 %}
{% /table %}

To transpile Python to C++, we map each Python operation to a set of equivalent implementations in C++. We then take the cartesian product of these mappings to generate a set of C++ functions for a single Python function.

{% callout %} Our approach means that we often emit hundreds-to-thousands of equivalent C++ functions for a single Python function. {% /callout %}

The combinatorics involved require us to take a different approach to performance optimization. We compile all emitted C++ functions, serve them to users, and use telemetry data to choose the best C++ function for a unique device.

{% callout %} Performance optimization is a purely empirical science. We're taking this concept of auto-tuning code to the max. {% /callout %}

{% callout %} See [`Function.h`](https://github.com/fxnai/fxnc) and [`Dialect.hpp`](https://github.com/fxnai/fxnc/blob/main/include/Function/cxx/Dialect.hpp) for more information about on-device predictions. {% /callout %}