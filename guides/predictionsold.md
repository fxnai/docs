---
title: Exploring Predictors
pageTitle: Predictors - Function
description: Make ML predictions from anywhere.
---

Discover predictors and make predictions. {% .text-2xl .text-gray-500 .font-normal %}

[GIF here]

When starting out with AI in general, the key is to start simple. To that end, we highly recommend exploring public predictors [on Function](https://fxn.ai/explore) and making predictions with them. This gives you a quick way to validate your AI ideas, before building a full-fledged AI workflow.

## Making Predictions
Once you find a predictor you want to use, you can make predictions from a variety of places. Let's go through a few interesting ones usign the [`@natml/stable-diffusion`](https://fxn.ai/@natml/stable-diffusion) predictor. This predictor accepts a text prompt and generates an image.

### From Function
*INCOMPLETE*

### From the CLI
*INCOMPLETE*

### From Python
*INCOMPLETE*

### From JavaScript
*INCOMPLETE*

### From Unity
*INCOMPLETE*

### From Discord
*INCOMPLETE*

### From the GraphQL API
*INCOMPLETE*

### From the REST API
*INCOMPLETE*


{% multifence %}

```javascript {% framework="javascript" %}
const tag = "@natml/stable-diffusion";
const prompt = "Happy people at the cookout";
const session = await natml.predictionSessions.create({ tag, inputs: { prompt } });
```

```csharp {% framework="unity" %}
var tag = "@natml/stable-diffusion";
var inputs = new Dictionary<string, object> {
    ["prompt"] = "Happy people at the cookout"
};
var session = await natml.PredictionSessions.Create(tag, inputs);
```

```python {% framework="python" %}
tag = "@natml/stable-diffusion"
prompt = "Happy people at the cookout"
session = natml.PredictionSession.create(tag, prompt=prompt)
```

```js {% framework="discord" %}
/predict @natml/stable-diffusion [string] "Happy people at the cookout"
```

```shell {% framework="cli" %}
natml predict @natml/stable-diffusion --prompt "Happy people at the cookout"
```

{% /multifence %}