---
title: Making Predictions
pageTitle: Predictions - Function
description: Make ML predictions from code.
---

Discover predictors and make predictions. {% .text-2xl .text-gray-500 .font-normal %}

Function allows you to make AI predictions from almost anywhere. First, we need to authenticate with our Function client:

## Logging in to Function
To start, register at [fxn.ai](https://fxn.ai/login). Once you're logged in, generate an access key:

![generate access key](https://raw.githubusercontent.com/fxnai/.github/main/access_key.gif)

Now, let's login to the Function CLI with your access key:

{% multifence %}

```py {% framework="python" %}
import fxn

# Set your access key
# Or set the `FXN_ACCESS_KEY` environment variable
fxn.access_key = "<ACCESS KEY>"
```

```js {% framework="javascript" %}
import { Function } from "fxnjs"

// Create a Function client
const fxn = new Function({ accessKey: "<ACCESS KEY>" });
```

```csharp {% framework="unity" %}
using Function;

// Create a Function client
var fxn = new Function("<ACCESS KEY>");
```

```bash {% framework="cli" %}
# Open a terminal and run the following command
fxn auth login <ACCESS KEY>
```

{% /multifence %}

Here is an example showing a successful login in the CLI:

![login to CLI](https://raw.githubusercontent.com/fxnai/.github/main/auth_login.gif)

## Making Predictions
To start off, we'll need a predictor to make predictions with. You can either use a public predictor on Function, or make your own. In this guide, we'll be using the `@samplefxn/greeting` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/greeting" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/greeting" description="We'll be using the greeting predictor in this guide." /%}
{% /quick-links %}

The predictor accepts a `name` of the person to greet, optionally with their `age` and `city`. Let's make the prediction:

{% multifence %}

```py {% framework="python" %}
# Predict
prediction = fxn.Prediction.create(
    tag="@samplefxn/greeting",
    name="Yusuf",
    age=44,
    city="Los Angeles"
)
# Print
print(prediction.results[0])
```

```js {% framework="javascript" %}
// Predict
const prediction = await fxn.predictions.create({
    tag: "@samplefxn/greeting",
    inputs: {
        name: "Rhea",
        age: 44,
        city: "Los Angeles"
    }
});
// Print
console.log(prediction.results[0]);
```

```csharp {% framework="unity" %}
// Predict
var prediction = await fxn.Predictions.Create(
    tag: "@samplefxn/greeting",
    inputs: new () {
        ["name"] = "Rhea",
        ["age"] = 44,
        ["city"] = "Los Angeles"
    }
) as CloudPrediction;
// Print
Debug.Log(prediction.results[0]);
```

```bash {% framework="cli" %}
# Predict
fxn predict @samplefxn/greeting --name Rhea --age 44 --city "Los Angeles"
```

```graphql {% framework="graphql" %}
# POST: https://api.fxn.ai/graph
mutation ($input: CreatePredictionInput!) {
    createPrediction (input: $input) {
        id
        tag
        type
        created
        ... on CloudPrediction {
            results {
                stringValue
            }
            latency
            error
            logs
        }
    }
}
# Variables
{
    "input": {
        "tag": "@samplefxn/greeting",
        "client": "macos",
        "inputs": [
            { "name": "name", "stringValue": "Rhea" },
            { "name": "age", "intValue": 44 },
            { "name": "city", "stringValue": "Los Angeles" }
        ]
    }
}
```

```json {% framework="rest" %}
// POST: https://api.fxn.ai/predict/@samplefxn/greeting
// Header: `fxn-client: macos`
{
    "name": "Rhea",
    "age": 44,
    "city": "Los Angeles"
}
```

{% /multifence %}

{% callout %} Function supports serializing audio, images, video, tensors, and much more. For more info, see [`Value`](/api/value) {% /callout %}