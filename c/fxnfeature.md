---
title: FXNFeature
description: Working with input and output features.
---

*INCOMPLETE*

## Creating a Feature
```c
/*!
 @function FXNCreateArrayFeature
 @abstract Create an array feature from a data buffer.
 @param data Feature data.
 @param shape Feature shape.
 @param dims Number of dimensions in shape.
 @param dtype Feature data type.
 @param flags Feature creation flags.
 @param feature Output ML feature.
*/
void FXNCreateArrayFeature (
    void* data,
    const int32_t* shape,
    int32_t dims,
    FXNDataType dtype,
    FXNFeatureFlags flags,
    FXNFeature** feature
);
```
*INCOMPLETE*

{% callout title="Ownership Semantics" %}
The `data` will not be released when the `feature` is released.
{% /callout %}

## Inspecting the Feature Type
```c
/*!
 @function FXNFeatureGetType
 @abstract Get the feature type.
 @param feature ML feature.
 @param type Output feature type. This type should be released once it is no longer in use.
*/
void FXNFeatureGetType (
    FXNFeature* feature,
    FXNFeatureType** type
);
```
*INCOMPLETE*

## Accessing the Feature Data
```c
/*!
 @function FXNFeatureGetData
 @abstract Get the feature data.
 @param feature ML feature.
 @returns Opaque pointer to feature data.
*/
void* FXNFeatureGetData (
    FXNFeature* feature
);
```

## Releasing the Feature
```c
/*!
 @function FXNReleaseFeature
 @abstract Release an ML feature.
 @param feature ML feature.
*/
void FXNReleaseFeature (
    FXNFeature* feature
);
```
*INCOMPLETE*