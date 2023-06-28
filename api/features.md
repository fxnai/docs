---
title: Features
pageTitle: Features - Function
description: Sending and receiving data from predictors.
---

Sending and receiving data from predictors. {% .text-2xl .text-gray-500 .font-normal %}

```graphql
"""
Prediction feature.
"""
type Feature {
    ...
}
```

Features are any data that is consumed or produced by a predictor.

## The `Feature` Type
Function represent features with a URL that points to the feature data, along with type and shape information. Function also provides convenience fields for accessing the feature as plain types:

### Accessing the Feature Data
```graphql
"""
Feature data URL.
"""
data: URL!
```

### Inspecting the Feature Type
```graphql
"""
Feature data type.
"""
type: Dtype!
```

### Inspecting the Feature Shape
```graphql
"""
Feature shape.
"""
shape: [Int!]
```

The `shape` is populated for all numerical features. For tensor features, the shape provides crucial information used to serialize and deserialize the feature into a numpy `ndarray` for prediction.

{% callout %} This is `null` if shape information is not available or applicable. {% /callout %}

### Accessing the String Value
```graphql
"""
Feature data as a `string`.
"""
stringValue: String
```

This is a convenience property and is only populated for `string` features.

### Accessing the Float Value
```graphql
"""
Feature data as a `float`.
"""
floatValue: Float
```

This is a convenience property and is only populated for `float32` or `float64` scalar features.

### Accessing the Float Array
```graphql
"""
Feature data as a flattened `float` array.
"""
floatArray: [Float!]
```

This is a convenience property and is only populated for `float32` tensor features.

### Accessing the Integer Value
```graphql
"""
Feature data as an integer.
"""
intValue: Int
```

This is a convenience property and is only populated for integer scalar features.

### Accessing the Integer Array
```graphql
"""
Feature data as a flattened `int32` array.
"""
intArray: [Int!]
```

This is a convenience property and is only populated for `int32` tensor features.

### Accessing the Boolean Value
```graphql
"""
Feature data as a boolean.
"""
boolValue: Boolean
```

This is a convenience property and is only populated for `bool` scalar features.

### Accessing the Boolean Array
```graphql
"""
Feature data as a flattened boolean array.
"""
boolArray: [Boolean!]
```

This is a convenience property and is only populated for `bool` tensor features.

### Accessing the List Value
```graphql
"""
Feature data as a list.
"""
listValue: JSON
```

This is a convenience property and is only populated for `list` features.

### Accessing the Dictionary Value
```graphql
"""
Feature data as a dictionary.
"""
dictValue: JSONObject
```

This is a convenience property and is only populated for `dict` features.

## Data Types in Function
Function supports a fixed set of data types, which are used for serializing and deserializing features during predictions. These are contained in the `Dtype` scalar type:

{% table .text-sm .ring .ring-gray-800 .ring-1 .ring-inset .rounded-lg .divide-y .divide-gray-800 .w-full %}
* `Dtype`
* Python Type
* Serialization
* Notes
---
* `float16`
* `float` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `float32`
* `float` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `float64`
* `float` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `int8`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `int16`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `int32`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `int64`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `uint8`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `uint16`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `uint32`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `uint64`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `bool`
* `int` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `string`
* `str`
* Raw bytes
* Python type depends on `shape`
---
* `list`
* `list`
* JSON string
* 
---
* `dict`
* `dict`
* JSON string
*
---
* `image`
* `PIL.Image`
* User-defined
* 
---
* `video`
* `Path`
* User-defined
* Predictor receives video path.
---
* `audio`
* `Path`
* User-defined
* Predictor receives audio path.
---
* `model`
* `Path`
* User-defined
* Predictor receives 3D model path.
---
* `binary`
* `Path`
* User-defined
* Predictor receives binary path.
{% /table %}
