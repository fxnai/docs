---
title: Accessing our API
pageTitle: API - Function
description: Accessing our API and building clients.
---

Accessing our API and building clients. {% .text-2xl .text-gray-500 .font-normal %}

Most users will access Function through one of our client libraries. But if we do not yet have a client library for your development environment, Function provides an isomorphic [GraphQL](https://github.com/fxnai/fxnapi/blob/main/schema.graphql) and [REST](https://github.com/fxnai/fxnapi/blob/main/rest.yml) API.

## Making Requests
You can reach the Function APIs at the following URLs:
- GraphQL: [https://api.fxn.ai/graph](https://api.fxn.ai/graph)

- REST: [https://api.fxn.ai](https://api.fxn.ai)

## Authenticating Requests
Most requests must be authenticated. Function provides three schemes for authenticating requests:

### Bearer Token
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

### Custom Auth
Often times it is desirable to have your own custom authentication scheme, where you allow others to make predictions on your behalf. The most common use case is for developers who build paid AI products: you typically gate access to your predictors depending on whether a customer has paid you. In this case, Function allows you to set a custom `authorizationUrl` [on your account](https://fxn.ai/account/developers)

![auth url](https://raw.githubusercontent.com/fxnai/.github/main/auth_url.png)

When a user tries to make a prediction with a predictor you own (i.e. the predictor `tag` begins with your username):
```js
// Create a Function client with an arbitrary access key
const fxn = new Function({ accessKey: "👁👄👁" });
// Make a prediction
const prediction = await fxn.predictions.create({
    tag: "@username/some-predictor",
    ...
});
```
Function will send a `POST` request to the `authorizationUrl` you have specified. The request will contain the predictor `tag` and the user-provided `accessKey`:
```js
{
    "tag": "@username/some-predictor",
    "accessKey": "👁👄👁" // Function will forward you the access key
}
```
If your URL responds with a `200` status, Function will authorize the prediction on your behalf.

{% callout %} Note that you will be charged for the prediction being made. {% /callout %}

On the other hand, your endpoint can respond with a `400` status, along with an optional `message` to be relayed to the user:
```js
{
    "message": "You have not yet paid 😛"
}
```

{% callout %} This authentication method only applies to prediction requests. Other endpoints do not support custom authentication. {% /callout %}

## Building a Function Client
We welcome open-source contributors building their own Function clients. Whether you want to bring Function to a new development environment, or you think you can do a better job on a client than we've done, we welcome you to take a stab at it! Below are a few notes to keep in mind:

- You can make suggestions on our public APIs by simply opening an issue on our [fxnapi](https://github.com/fxnai/fxnapi) repository.

- You can make suggestions and improvements to these docs by opening an issue or a PR on our [docs](https://github.com/fxnai/docs) repository.

- Perhaps most importantly, come talk to us on [our Discord community](https://fxn.ai/community).