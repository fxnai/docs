---
title: Using the GPU
pageTitle: Using GPUs - Function
description: Accelerate your predictors with GPUs.
---

Accelerate your predictors with GPUs. {% .text-2xl .text-gray-500 .font-normal %}

When making AI predictions, it is often desirable to leverage GPU acceleration to improve performance. In this example, we'll be writing our own Stable Diffusion predictor that leverages the GPU:

## Implementing the Predictor
First, let's make a basic predictor that uses HuggingFace Diffusers to generate an image from a prompt. Create a `stable-diffusion.ipynb` notebook and add the following code cell to install dependencies:
```py
# Install dependencies
%pip install torch accelerate transformers diffusers
```

Next, add a new code cell and paste the following implementation:

```py
from diffusers import DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")

def predict (prompt: str):
    return pipeline(prompt).images[0]
```

As implemented, the `pipeline` will be executed on the CPU. Next, let's look at how to accelerate it with the GPU:

## Making our Code GPU-Aware
Using the GPU is typically specific to what framework you are using. In our example, we are using PyTorch which means we can use the `Module.to("cuda")` function to move our pipeline to the GPU:
```py {% highlight=[6] %}
from diffusers import DiffusionPipeline

pipeline = DiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")

def predict (prompt: str):
    pipeline.to("cuda")
    return pipeline(prompt).images[0]
```

Note that we added the `to("cuda")` call inside the `predict` function, not outside. This is because the code that exists outside the `predict` function will be run both at provisioning time and at runtime. And the predictor can only have GPU access at runtime, never while provisioning.

{% callout type="warning" %} Predictors can only have GPU access at runtime, and will never have GPU access while provisioning. {% /callout %}

## Creating the Predictor
The final step in using the GPU is to specify the `acceleration` when creating the predictor. Function currently supports the following accelerations:

{% table .text-lg .mb-4 .text-gray-200 .ring .ring-gray-800 .ring-1 .ring-inset .rounded-lg .divide-y .divide-gray-800 .w-full %}
* `Acceleration`
* Notes
---
* `CPU`
* 
---
* `A40`
* 
---
* `A100`
* Short supply. Prefer `A40` where possible.
{% /table %}

Let's create our predictor using the `A40` acceleration. Open a terminal and run the following command:
```py
# Create the stable diffusion predictor and use the A40 GPU
fxn create @username/stable-diffusion-gpu --acceleration A40
```

Once the predictor is provisioned, take it for a spin:

![predict](https://raw.githubusercontent.com/fxnai/.github/main/predict.gif)