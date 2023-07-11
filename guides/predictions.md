---
title: Exploring Predictors
pageTitle: Predictors - Function
description: Make ML predictions from anywhere.
---

Discover predictors and make predictions. {% .text-2xl .text-gray-500 .font-normal %}

[GIF here]

Function allows you to make AI predictions from almost anywhere. To start off, we'll need a predictor to make predictions with. You can either use a public predictor on Function, or make your own. In this guide, we'll be using the `@samplefxn/greeting` predictor:

{% quick-links %}
{% quick-link title="Explore Predictors" icon="/icon.png" newTab=true href="https://fxn.ai/explore" description="You can discover and use public predictors on Function." /%}
{% quick-link title="@samplefxn/greeting" icon="/icon.png" newTab=true href="https://fxn.ai/@samplefxn/greeting" description="We'll be using the greeting predictor in this guide." /%}
{% /quick-links %}

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
*INCOMPLETE*