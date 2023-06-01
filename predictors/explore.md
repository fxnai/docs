---
title: Exploring Predictors
description: Make ML predictions from anywhere.
---

- AI prediction functions a.k.a "predictors"
    - Always a pure function
- Edge vs. cloud predictors, and no difference in usage

## Exploring Predictors
- Function Hub

## Making Predictions

- Making predicitions:
    - CLI
    - Python
    - Unity
    - JS
    - Discord
    - GraphQL
    - REST

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