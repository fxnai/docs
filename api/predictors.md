---
title: Predictors
description: ML predictors.
---

The core of Function. {% .text-2xl .text-gray-500 .font-normal %}

```graphql
"""
Prediction function.
"""
type Predictor {
    ...
}
```

Prediction functions, or _predictors_, are arbitrary Python functions that make AI predictions.

## The `Predictor` Type
The predictor type forms the core of Function.

### Identifying the Predictor
```graphql
"""
Predictor tag.
"""
tag: Tag!
"""
Predictor name.
"""
name: String!
```

The predictor `tag` uniquely identifies a predictor across the Function platform. The predictor tag is always of the form:
```py
@[owner username]/[predictor name]
```

### Inspecting the Owner
```graphql
"""
Predictor owner.
"""
owner: Profile!
```

The predictor `owner` provides information about the owner of the predictor. See [`Profile`](/api/profile) for more info.

### Inspecting the Predictor Type
```graphql
"""
Predictor type.
"""
type: PredictorType!
```

The predictor `type` specifies where predictions are run. Current options include:
```graphql
"""
Predictor type.
"""
enum PredictorType {
    """
    Predictions are run in the cloud.
    """
    CLOUD
}
```

### Inspecting the Predictor Status
```graphql
"""
Predictor status.
"""
status: PredictorStatus!
```
The predictor `status` specifies the current status of the predictor. Current options include:
```graphql
"""
Predictor status.
"""
enum PredictorStatus {
    """
    Predictor is being provisioned.
    """
    PROVISIONING
    """
    Predictor is active.
    """
    ACTIVE
    """
    Predictor is invalid.
    """
    INVALID
    """
    Predictor is archived.
    """
    ARCHIVED
}
```

### Accessing the Predictor
```graphql
"""
Predictor access.
"""
access: AccessMode!
```
The predictor `access` determines who has access to the predictor. Current options include:
```graphql
"""
Access mode.
"""
enum AccessMode {
    """
    Resource can be accessed by any user.
    """
    PUBLIC
    """
    Resource can only be accessed by the owner.
    """
    PRIVATE
}
```

{% callout %} For predictors owned by organizations, `PRIVATE` access means that only members of the organization have access to the predictor. {% /callout %}

### Inspecting the Predictor Usage
```graphql
"""
Number of predictions.
"""
predictions: Int!
```
The predictor specifies the number of `predictions` that have been made.

### Inspecting the Creation Date
```graphql
"""
Date created.
"""
created: DateTime!
```
The predictor provides the date that it was `created`.

### Describing the Predictor
```graphql
"""
Predictor description.
"""
description: String
```
When a predictor is created, a description can be specified. This assists users in discovering the predictor, and understanding what it does.

{% callout %} The `description` must be 200 characters or less. {% /callout %}

### Explaining the Predictor
```graphql
"""
Predictor readme.
This is extracted from the first cell of the predictor notebook.
"""
readme: String
```
The predictor can also report a `readme`. This readme is always extracted from the first cell of the predictor notebook, if the first cell of the predictor notebook is a Markdown cell.

{% callout %} The `readme` is always Markdown. {% /callout %}

### Viewing the Predictor Media
```graphql
"""
Predictor media.
"""
media: URL
```
When a predictor is created, media can be specified. This is usually an image or animated GIF that illustrates how the predictor works.

### Inspecting the Predictor Acceleration
```graphql
"""
Predictor acceleration.
"""
acceleration: Acceleration
```
The `acceleration` specifies what hardware tier that the predictor runs on. Function currently supports the following predictor accelerations:
```graphql
"""
Predictor acceleration.
"""
enum Acceleration {
    """
    Predictions are run on the CPU.
    """
    CPU
    """
    Predictions are run on an Nvidia A40 GPU.
    """
    A40
    """
    Predictions are run on an Nvidia A100 GPU.
    """
    A100
}
```

{% callout %} The predictor `acceleration` directly determines how much you will be billed for predictions. See [our pricing](https://fxn.ai/pricing) {% /callout %}

{% callout %} The predictor `acceleration` is only specified for `CLOUD` predictors. {% /callout %}

### Inspecting the Predictor Signature
```graphql
"""
Predictor signature.
"""
signature: Signature
```
The `signature` provides information about the predictor's input and output parameters:
```graphql
"""
Predictor signature.
"""
type Signature {
    """
    Prediction inputs.
    """
    inputs: [Parameter!]!
    """
    Prediction outputs.
    """
    outputs: [Parameter!]!
}
```

{% callout %} For `CLOUD` predictors, the signature `outputs` may be empty. {% /callout %}

The `Parameter` type provides rich information about each parameter within the predictor signature:
```graphql
"""
Predictor parameter.
This describes a feature that is consumed or produced by a predictor.
"""
type Parameter {
    """
    Parameter name.
    """
    name: String!
    """
    Parameter type.
    This is `null` if the type is unknown or unsupported by Function.
    """
    type: Dtype
    """
    Parameter description.
    """
    description: String
    """
    Whether parameter is optional.
    """
    optional: Boolean
    """
    Parameter value range for numeric parameters.
    """
    range: [Float!]
    """
    Parameter value choices for enumeration parameters.
    """
    enumeration: [EnumerationMember!]
    """
    Parameter default value.
    """
    defaultValue: Feature
}
```

{% callout %} See [`Feature`](/api/feature) for more information about the `Dtype` enumeration and `Feature` type. {% /callout %}

For enumeration parameters, Function provides the `EnumerationMember` type:
```graphql
"""
Prediction parameter enumeration member.
"""
type EnumerationMember {
    """
    Enumeration member name.
    """
    name: String!
    """
    Enumeration member value.
    This is usually a `String` or a `Int`.
    """
    value: JSON!
}
```

## Creating a Predictor
{% multifence %}

```py {% framework="python" %}
# Create a predictor
predictor = fxn.Predictor.create(
    tag="@username/some-predictor",
    notebook="/path/to/predictor.ipynb"
)
```

```js {% framework="javascript" %}
// Create a predictor
const predictor = await fxn.predictors.create({
    tag: "@username/some-predictor",
    notebook: "https://cdn.fxn.ai/notebooks/predictor.ipynb"
});
```

```csharp {% framework="unity" %}
// Create a predictor
var predictor = await fxn.Predictors.Create(
    tag: "@username/some-predictor",
    notebook: "https://cdn.fxn.ai/notebooks/predictor.ipynb"
);
```

```bash {% framework="cli" %}
# Create a predictor
fxn create @username/some-predictor /path/to/predictor.ipynb
```

```bash {% framework="discord" %}
# Create a predictor
/create tag:@username/some-predictor notebook:predictor.ipynb
```

```graphql {% framework="graphql" %}
# Query
mutation ($input: CreatePredictorInput!) {
    createPredictor (input: $input) {
        tag
        status
    }
}
# Variables
{
    input: {
        tag: "@username/some-predictor",
        notebook: "https://cdn.fxn.ai/notebooks/predictor.ipynb"
    }
}
```

```json {% framework="rest" %}
// POST: https://api.fxn.ai/predictors
{
    "tag": "@username/some-predictor",
    "notebook": "https://cdn.fxn.ai/notebooks/predictor.ipynb"
}
```

{% /multifence %}

Create a predictor by specifying the predictor `tag` and the URL (or path, for clients that support it) to the predictor `notebook`.

{% callout %} The predictor notebook MUST contain a function called `predict`. {% /callout %}

The request accepts the following input parameters:
```graphql
input CreatePredictorInput {
    """
    Predictor tag.
    """
    tag: Tag!
    """
    Predictor notebook.
    This MUST be a `NOTEBOOK` upload URL.
    """
    notebook: URL!
    """
    Predictor type.
    This defaults to `CLOUD`.
    """
    type: PredictorType
    """
    Predictor access mode.
    This defaults to `PRIVATE`.
    """
    access: AccessMode
    """
    Predictor description.
    This must be under 200 characters long.
    """
    description: String
    """
    Predictor media.
    """
    media: URL
    """
    Predictor acceleration.
    This only applies for `CLOUD` predictors.
    This defaults to `CPU`.
    """
    acceleration: Acceleration
    """
    Predictor environment variables.
    """
    environment: [EnvironmentVariableInput!]
    """
    Predictor license.
    """
    license: URL
    """
    Overwrite any existing predictor with the same tag.
    Existing predictor will be deleted.
    """
    overwrite: Boolean
}
```

## Deleting the Predictor
{% multifence %}

```py {% framework="python" %}
# Delete the predictor
fxn.Predictor.delete(
    tag="@username/some-predictor"
)
```

```js {% framework="javascript" %}
// Delete the predictor
await fxn.predictors.delete({
    tag: "@username/some-predictor"
});
```

```csharp {% framework="unity" %}
// Delete the predictor
await fxn.Predictors.Delete(
    tag: "@username/some-predictor"
);
```

```bash {% framework="cli" %}
# Delete the predictor
fxn delete @username/some-predictor
```

```bash {% framework="discord" %}
# Delete the predictor
/delete tag:@username/some-predictor
```

```graphql {% framework="graphql" %}
# Query
mutation ($input: DeletePredictorInput!) {
    deletePredictor (input: $input)
}
# Variables
{
    input: {
        tag: "@username/some-predictor"
    }
}
```

```json {% framework="rest" %}
// DELETE: https://api.fxn.ai/predictors/@username/some-predictor
```

{% /multifence %}

Predictors can be deleted when they are not needed. The request accepts the following input parameters:
```graphql
input DeletePredictorInput {
    """
    Predictor tag.
    """
    tag: Tag!
}
```

{% callout type="warning" %} Public predictors that have been used to make predictions cannot be deleted. You must archive them instead. {% /callout %}

## Archiving the Predictor
{% multifence %}

```py {% framework="python" %}
# Archive the predictor
predictor = fxn.Predictor.archive(
    tag="@username/some-predictor"
)
```

```js {% framework="javascript" %}
// Archive the predictor
const predictor = await fxn.predictors.archive({
    tag: "@username/some-predictor"
});
```

```csharp {% framework="unity" %}
// Archive the predictor
var predictor = await fxn.Predictors.Archive(
    tag: "@username/some-predictor"
);
```

```bash {% framework="cli" %}
# Archive the predictor
fxn archive @username/some-predictor
```

```bash {% framework="discord" %}
# Archive the predictor
/archive tag:@username/some-predictor
```

```graphql {% framework="graphql" %}
# Query
mutation ($input: ArchivePredictorInput!) {
    archivePredictor (input: $input)
}
# Variables
{
    input: {
        tag: "@username/some-predictor"
    }
}
```

```json {% framework="rest" %}
// POST: https://api.fxn.ai/predictors/<PREDICTOR TAG>/archive
```

{% /multifence %}

Predictors can be archived, preventing them from being discovered and preventing new users from making predictions with them.

{% callout type="warning" %} Users who have made predictions with this predictor will be unaffected, ensuring that their apps do not break. {% /callout %}

The request accepts the following input parameters:
```graphql
input ArchivePredictorInput {
    """
    Predictor tag.
    """
    tag: Tag!
}
```