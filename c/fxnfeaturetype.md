---
title: FXNFeatureType
description: Inspecting model input and output feature types.
---

*INCOMPLETE*

## Inspecting the Feature Type Name
```c
/*!
 @function FXNFeatureTypeName
 @abstract Get the name of a given feature type.
 @param type ML feature type.
 @param name Destination UTF-8 string.
 @param size Size of destination buffer in bytes.
*/
void FXNFeatureTypeGetName (
    FXNFeatureType* type,
    char* name,
    int32_t size
);
```
*INCOMPLETE*

## Inspecting the Feature Type Data Type
```c
/*!
 @function FXNFeatureTypeDataType
 @abstract Get the data type of a given feature type.
 @param type ML feature type.
*/
FXNDataType FXNFeatureTypeGetDataType (
    FXNFeatureType* type
);
```
*INCOMPLETE*. NatML supports the following data types:

### Data Type

{% table %}
* `FXNDataType`
* Constant
* C/C++ Type
* .NET Type
---
* `FXN_DTYPE_UNDEFINED`
* 0
* None
* None
---
* `FXN_DTYPE_INT8`
* 10
* `int8_t`
* `sbyte`
---
* `FXN_DTYPE_INT16`
* 2
* `int16_t`
* `short`
---
* `FXN_DTYPE_INT32`
* 3
* `int32_t`
* `int`
---
* `FXN_DTYPE_INT64`
* 4
* `int64_t`
* `long`
---
* `FXN_DTYPE_UINT8`
* 1
* `uint8_t`
* `byte`
---
* `FXN_DTYPE_UINT16`
* 11
* `uint16_t`
* `ushort`
---
* `FXN_DTYPE_UINT32`
* 12
* `uint32_t`
* `uint`
---
* `FXN_DTYPE_UINT64`
* 13
* `uint64_t`
* `ulong`
---
* `FXN_DTYPE_FLOAT16`
* 14
* `__fp16` (non-standard)
* None
---
* `FXN_DTYPE_FLOAT32`
* 5
* `float`
* `float`
---
* `FXN_DTYPE_FLOAT64`
* 6
* `double`
* `double`
---
* `FXN_DTYPE_BOOL`
* 15
* `bool` (use `stdbool.h`)
* `bool`
---
* `FXN_DTYPE_STRING`
* 7
* `std::string` (C++ only)
* `string`
---
* `FXN_DTYPE_IMAGE`
* 16
* None
* None
---
* `FXN_DTYPE_BINARY`
* 17
* None
* None
---
* `FXN_DTYPE_LIST`
* 8
* None
* None
---
* `FXN_DTYPE_DICT`
* 9
* None
* None
---


{% /table %}
___

## Inspecting the Feature Type Dimensions
```c
/*!
 @function FXNFeatureTypeDimensions
 @abstract Get the number of dimensions for a given feature type.
 @param type ML feature type.
*/
int32_t FXNFeatureTypeGetDimensions (
    FXNFeatureType* type
);
```
Get the number of dimensions for a given feature type. If the type is not a tensor, this function will return `0`.

## Inspecting the Feature Type Shape
```c
/*!
 @function FXNFeatureTypeShape
 @abstract Get the shape of a given feature type.
 @param type ML feature type.
 @param shape Destination shape array.
 @param shapeLen Destination shape array length.
*/
void FXNFeatureTypeGetShape (
    FXNFeatureType* type,
    int32_t* shape,
    int32_t shapeLen
);
```
Get the shape of a given feature type. The length of the shape array must be at least as large as the number of dimensions present in the type.

{% callout title="Dynamic Tensor Shapes" %}
Features with dynamic axes will have `-1` in the corresponding axis of the feature type `shape`.
{% /callout %}

## Releasing the Feature Type
```c
/*!
 @function FXNReleaseFeatureType
 @abstract Release an ML feature type.
 @param type ML feature type to release.
*/
void FXNReleaseFeatureType (
    FXNFeatureType* type
);
```
*INCOMPLETE*