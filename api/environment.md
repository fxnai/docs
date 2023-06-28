---
title: Environment Variables
pageTitle: Environment Variables - Function
description: Managing environment variables across your predictors.
---

Managing environment variables across your predictors. {% .text-2xl .text-gray-500 .font-normal %}

```graphql
"""
Predictor environment variable.
"""
type EnvironmentVariable {
    ...
}
```

Environment variables are used to specify constants to a predictor in a very secure manner.

## The `EnvironmentVariable` Type
Environment variables can be created for a user or organization account on Function. Once created, the variable will become available to all predictors subsequently created under the account.

### Inspecting the Variable Name
```graphql
"""
Environment variable name.
"""
name: String!
```
This is the name of the environment variable, and will be made available to the predictors both during provisioning and at runtime.

{% callout %} The variable name is typically uppercase. {% /callout %}

## Creating an Environment Variable
{% multifence %}

```py {% framework="python" %}
# Create an environment variable
variable = fxn.EnvironmentVariable.create(
    name="HF_TOKEN",
    value="abcdefghijklmnop"
)
```

```js {% framework="javascript" %}
// Create an environment variable
const variable = await fxn.environmentVariables.create({
    name: "HF_TOKEN"
    value: "abcdefghijklmnop"
});
```

```csharp {% framework="unity" %}
// Create an environment variable
var variable = await fxn.EnvironmentVariables.Create(
    name: "HF_TOKEN",
    value: "abcdefghijklmnop"
);
```

```bash {% framework="cli" %}
# Create an environment variable
fxn env create HF_TOKEN "abcdefghijklmnop"
```

```graphql {% framework="graphql" %}
# Query
mutation ($input: CreateEnvironmentVariableInput!) {
    createEnvironmentVariable (input: $input) {
        name
    }
}
# Variables
{
    input: {
        name: "HF_TOKEN",
        value: "abcdefghijklmnop"
    }
}
```

```json {% framework="rest" %}
// POST: https://api.fxn.ai/environmentVariables
{
    "name": "HF_TOKEN",
    "value": "abcdefghijklmnop"
}
```

{% /multifence %}

Environment variables are created with a `name` and a corresponding `value`. The variable will become available to all predictors subsequently created.

{% callout %} Environment variable values are securely encrypted, and cannot be viewed after they have been created. {% /callout %}

## Deleting an Environment Variable
{% multifence %}

```py {% framework="python" %}
# Delete an environment variable
fxn.EnvironmentVariable.delete(
    name="HF_TOKEN"
)
```

```js {% framework="javascript" %}
// Delete an environment variable
await fxn.environmentVariables.delete({
    name: "HF_TOKEN"
});
```

```csharp {% framework="unity" %}
// Delete an environment variable
await fxn.EnvironmentVariables.Delete(
    name: "HF_TOKEN"
);
```

```bash {% framework="cli" %}
# Create an environment variable
fxn env delete HF_TOKEN
```

```graphql {% framework="graphql" %}
# Query
mutation ($input: DeleteEnvironmentVariableInput!) {
    deleteEnvironmentVariable (input: $input)
}
# Variables
{
    input: {
        name: "HF_TOKEN"
    }
}
```

```json {% framework="rest" %}
// DELETE: https://api.fxn.ai/environmentVariables/HF_TOKEN
```

{% /multifence %}

Once an environment variable is deleted, it will no longer be available to new predictors.

{% callout %} Existing predictors will continue to have access to the environment variable even after it is deleted. {% /callout %}