---
title: Values
pageTitle: Values - Function
description: Sending and receiving data to and from predictors.
---

Sending and receiving data to and from predictors. {% .text-2xl .text-gray-500 .font-normal %}

```graphql
"""
Prediction value.
"""
type Value {
    ...
}
```

Values are any data consumed or produced by a predictor.

## The `Value` Type
Function represent values with a URL that points to the value data, along with type and shape information. Function also provides convenience fields for accessing the value as plain types.

### Accessing the Value Data
```graphql
"""
Value data URL.
"""
data: URL
```

The `data` field holds a URL that points to the value data.

{% callout %} This is either a web (`https://`) or data (`data:`) URL. {% /callout %}

{% callout %} This is `null` when the value `type` is `null`. {% /callout %}

### Inspecting the Value Type
```graphql
"""
Value type.
"""
type: Dtype!
```

Every value specifies its type. This information is critical in serializing and deserializing values when making predictions.

### Inspecting the Value Shape
```graphql
"""
Value shape.
"""
shape: [Int!]
```

The `shape` is populated for all numerical values. For tensor values, the shape provides crucial information used to serialize and deserialize the value into a numpy `ndarray` for prediction.

{% callout %} This is `null` if shape information is not available or applicable. {% /callout %}

### Accessing the String Value
```graphql
"""
Value as a `string`.
"""
stringValue: String
```

This is a convenience property and is only populated for `string` values.

### Accessing the Float Value
```graphql
"""
Value as a `float`.
"""
floatValue: Float
```

This is a convenience property and is only populated for `float32` or `float64` scalar values.

### Accessing the Float Array
```graphql
"""
Value as a flattened `float` array.
"""
floatArray: [Float!]
```

This is a convenience property and is only populated for `float32` tensor values.

### Accessing the Integer Value
```graphql
"""
Value as an integer.
"""
intValue: Int
```

This is a convenience property and is only populated for integer scalar values.

### Accessing the Integer Array
```graphql
"""
Value as a flattened `int32` array.
"""
intArray: [Int!]
```

This is a convenience property and is only populated for `int32` tensor values.

### Accessing the Boolean Value
```graphql
"""
Value as a boolean.
"""
boolValue: Boolean
```

This is a convenience property and is only populated for `bool` scalar values.

### Accessing the Boolean Array
```graphql
"""
Value as a flattened boolean array.
"""
boolArray: [Boolean!]
```

This is a convenience property and is only populated for `bool` tensor values.

### Accessing the List Value
```graphql
"""
Value as a list.
"""
listValue: JSON
```

This is a convenience property and is only populated for `list` values.

### Accessing the Dictionary Value
```graphql
"""
Value as a dictionary.
"""
dictValue: JSONObject
```

This is a convenience property and is only populated for `dict` values.

## Data Types in Function
Function supports a fixed set of data types, which are used for serializing and deserializing values during predictions. These are contained in the `Dtype` scalar type:

{% table .text-sm .ring .text-gray-200 .ring-gray-800 .ring-1 .ring-inset .rounded-lg .divide-y .divide-gray-800 .w-full %}
* `Dtype`
* Python Type
* Serialization
* Notes
---
* `null`
* `None`
* None
* 
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
* `bool` or `ndarray`
* Raw bytes
* Python type depends on `shape`
---
* `string`
* `str`
* UTF-8 bytes
* 
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
* Predictor receives video `Path`.
---
* `audio`
* `Path`
* User-defined
* Predictor receives audio `Path`.
---
* `model`
* `Path`
* User-defined
* Predictor receives 3D model `Path`.
---
* `binary`
* `Path`
* User-defined
* Predictor receives binary `Path`.
{% /table %}
