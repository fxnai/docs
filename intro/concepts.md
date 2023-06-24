---
title: Core Concepts
pageTitle: Concepts - Function
description: Things to know as you build with Function.
---

Things to know as you build with Function. {% .text-2xl .text-gray-500 .font-normal %}

It's an exciting time to be alive, especially with all the advancements we're seeing in AI. But as the field continues to accelerate towards light speed, it's leaving behind massive swaths of individuals, teams, and organizations that could massively benefit from this new technology.

Function exists to bridge this gap, enabling more people to discover and deploy AI in their workflows and applications. And it all starts with prediction functions.

## Prediction Functions
Function allows you to run AI prediction functions in your apps:

```py
def predict ():
    return "Every predictor is literally just a `predict` function in a Jupyter notebook 😉"
```

These *predictors* are just Python functions that accept arbitrary inputs, presumably performing some AI operations, and return arbitrary outputs.

Function then handles everything from containerizing and serving these functions, to autoscaling them up to handle millions of requests, to scaling them down to zero in idle periods, and to handling all the nasty serialization and deserialization involved to actually invoke these functions.

It is critical to note that you don't need to bring your own predictors to use Function. We maintain a [hub of predictors](https://fxn.ai/explore) that you can quickly combine and compose to build AI-powered apps, with exactly zero AI knowledge.

## Accessing the Function API
Most users will access Function through one of our client libraries. But if we do not yet have a client library for your development environment, Function provides an isomorphic [GraphQL](https://github.com/fxnai/fxnapi/blob/main/schema.graphql) and [REST](https://github.com/fxnai/fxnapi/blob/main/rest.yml) API.

### Function API Endpoints
You can reach the Function APIs at the following URLs:
- GraphQL: [https://api.fxn.ai/graph](https://api.fxn.ai/graph)

- REST: [https://api.fxn.ai](https://api.fxn.ai)

### Bearer Token Auth
Function supports authentication with a `Bearer` token. Simply include your Function access key in your request `Authorization` header:
```bash
# Open a terminal and run the following command:
curl https://api.fxn.ai/user -H "Authorization: Bearer <ACCESS KEY>"
```

You should see your user profile.

### Basic Auth
Function also supports `BASIC` password authentication:
```bash
# Open a terminal and run the following command:
curl https://api.fxn.ai/user -u <ACCESS KEY>:
```

You should see your user profile.

{% callout %} Don't forget the colon 😉 {% /callout %} 

## Building a Function Client
We welcome open-source contributors building their own Function clients. Whether you want to bring Function to a new development environment, or you think you can do a better job on a client than we've done, we welcome you to take a stab at it! Below are a few notes to keep in mind:

- You can make suggestions on our public APIs by simply opening an issue on our [fxnapi](https://github.com/fxnai/fxnapi) repository.

- You can make suggestions and improvements to these docs by opening an issue or a PR on our [docs](https://github.com/fxnai/docs) repository.

- Perhaps most importantly, come talk to us on [our Discord community](https://fxn.ai/community).