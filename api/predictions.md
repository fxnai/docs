---
title: Predictions
pageTitle: Predictions - Function
description: Predictions on everything everywhere all at once.
---

Predictions on everything everywhere all at once. {% .text-2xl .text-gray-500 .font-normal %}

```graphql
"""
Prediction.
"""
interface Prediction {
    ...
}
```

Predictions are why you're using Function, so here's everything you need to know about them 😆

## The `Prediction` Interface
The prediction interface provides the foundation of all predictions that will be made on the Function platform, *now and in the future*

### Identifying the Prediction
```graphql
"""
Prediction ID.
"""
id: ID!
```
All predictions made on Function have a unique ID. Although there are no current uses of the prediction ID, we could add uses in the future to support asynchronous and batched predictions.

### Identifying the Predictor
```graphql
"""
Predictor tag.
"""
tag: Tag!
```
The prediction reports the `tag` of the predictor from which it was made.

### Inspecting the Predictor Type
```graphql
"""
Prediction type.
"""
type: PredictorType!
```
The prediction `type` identifies what type of prediction it is.

{% callout %} See [Predictors](/api/predictors) for more information about the `PredictorType`. {% /callout %}

### Inspecting the Creation Date
```graphql
"""
Date created.
"""
created: DateTime!
```
The prediction provides the date that it was `created`.

## The `CloudPrediction` Type
```graphql
"""
Cloud prediction.
"""
type CloudPrediction implements Prediction {
    ...
}
```

The cloud prediction represents a prediction that was run in the cloud.

### Accessing the Prediction Results
```graphql
"""
Prediction results.
"""
results: [Feature!]
```

The `results` contain each of the prediction results from the predictor, in order.

{% callout %} This is `null` if the prediction was not successfully completed. {% /callout %}

### Inspecting the Prediction Latency
```graphql
"""
Prediction latency in milliseconds.
"""
latency: Float
```

The prediction reports its `latency`, which is the amount of time taken to run the prediction, in milliseconds.

{% callout %} You will be billed based on the aggregate of prediction latency you make each month. {% /callout %}

{% callout %} Prediction latency never includes time spent during cold starts. {% /callout %}

### Inspecting the Prediction Error
```graphql
"""
Prediction error.
"""
error: String
```

If the predictor encounters an error while making a prediction, the `error` will be populated with the stringified exception, including a stack trace.

{% callout %} This is `null` if the prediction completed successfully. {% /callout %}

{% callout type="warning" %} You will be billed for time spent running the prediction even when an error is raised. {% /callout %}

### Inspecting the Prediction Logs
```graphql
"""
Prediction logs.
"""
logs: String
```

The prediction reports any `logs` generated within the same process during execution.

## Making Predictions
{% multifence %}

```py {% framework="python" %}
# Create a prediction
prediction = fxn.Prediction.create(
    tag="@fxn/greeting",
    name="Yusuf"
)
```

```js {% framework="javascript" %}
// Create a prediction
const prediction = await fxn.predictions.create({
    tag: "@fxn/greeting",
    inputs: {
        name: "Yusuf"
    }
});
```

```csharp {% framework="unity" %}
// Create a predictor
var predictor = await fxn.Predictions.Create(
    tag: "@fxn/greeting",
    inputs: new () {
        ["name"] = "Yusuf"
    }
);
```

```bash {% framework="cli" %}
# Create a prediction
fxn predict @fxn/greeting --name "Yusuf"
```

```bash {% framework="discord" %}
# Create a prediction
/predict tag:@fxn/greeting string:Yusuf
```

```graphql {% framework="graphql" %}
# Query
mutation ($input: CreatePredictionInput!) {
    createPrediction (input: $input) {
        id
        tag
        type
        created
        ... on CloudPrediction {
            results {
                data
                type
                shape
            }
            latency
            error
            logs
        }
    }
}
# Variables
{
    input: {
        tag: "@fxn/greeting",
        client: "macos",
        inputs: [
            {
                name: "name",
                stringValue: "Yusuf"
            }
        ]
    }
}
```

```json {% framework="rest" %}
// POST: https://api.fxn.ai/predict/@fxn/greeting
// Header: `function-client: macos`
{
    "name": "Yusuf"
}
```

{% /multifence %}

Create a prediction by specifying the predictor tag and the prediction inputs. The request accepts the following input parameters:
```graphql
input CreatePredictionInput {
    """
    Predictor tag.
    """
    tag: Tag!
    """
    Client identifier.
    """
    client: Client!
    """
    Input features.
    This is required for making predictions with `CLOUD` predictors.
    """
    inputs: [FeatureInput!]
    """
    Return a data URL if a given output feature is smaller than this limit in bytes.
    This only applies for `CLOUD` predictors.
    """
    dataUrlLimit: Int
}
```

## Prediction Clients in Function
The prediction `Client` identifies what platform you are making the prediction request from. This can be used to optimize how predictions are made, and how results are sent back to your device. We currently support the following clients:

{% table .text-sm .ring .ring-gray-800 .ring-1 .ring-inset .rounded-lg .divide-y .divide-gray-800 .w-full %}
* `Client`
* Notes
---
* `android`
* 
---
* `browser`
* 
---
* `deno`
* Client library coming soon!
---
* `discord`
* 
---
* `ios`
* 
---
* `linux`
* 
---
* `macos`
* 
---
* `node`
* 
---
* `slack`
* 
---
* `webworker`
* 
---
* `windows`
* 
---
* `zapier`
* 
{% /table %}

When making predictions with any of our client libraries, the `client` is automatically populated.

{% callout %} When making a prediction directly through our REST API, you must specify a `function-client` header with your corresponding client. {% /callout %}
