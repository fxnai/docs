---
title: FXNModel
description: Working with ML models at the edge.
---

*INCOMPLETE*

## Creating a Model
```c
/*!
 @function FXNCreateModel
 @abstract Create an ML model.
 @param buffer ML model data.
 @param bufferSize ML model data size.
 @param configuration ML model configuration.
 @param handler Callback to receive created model.
 @param context User context to pass to handler. Can be `NULL`.
*/
void FXNCreateModel (
    const uint8_t* buffer,
    int64_t bufferSize,
    FXNModelConfiguration* configuration,
    FXNModelCreationHandler handler,
    void* context
);
```
*INCOMPLETE*

```c
/*!
 @abstract Callback invoked with created model.
 @param context User context provided to the model creation function.
 @param model Created ML model or `NULL` if model creation fails for any reason.
*/
typedef void (*FXNModelCreationHandler) (
    void* context,
    FXNModel* model
);
```

## Inspecting Metadata
*INCOMPLETE*

### Inspecting Metadata Count
```c
/*!
 @function FXNModelGetMetadataCount
 @abstract Get the number of metadata keys in a model.
 @param model ML model.
 @returns Number of metadata keys in the model.
*/
int32_t FXNModelGetMetadataCount (
    FXNModel* model
);
```
*INCOMPLETE*

### Retrieving a Metadata Key
```c
/*!
 @function FXNModelGetMetadataKey
 @abstract Get the metadata key in a model.
 @param model ML model.
 @param index Metadata key index.
 @param key Destination UTF-8 encoded key string.
 @param size Size of destination buffer.
*/
void FXNModelGetMetadataKey (
    FXNModel* model,
    int32_t index,
    char* key,
    int32_t size
);
```
*INCOMPLETE*

### Retrieving a Metadata Value
```c
/*!
 @function FXNModelGetMetadataValue
 @abstract Get the metadata value for a correspondig key in a model.
 @param model ML model.
 @param key Metadata key.
 @param value Destination UTF-8 encoded value string.
 @param size Size of destination buffer.
*/
void FXNModelGetMetadataValue (
    FXNModel* model,
    const char* key,
    char* value,
    int32_t size
);
```
*INCOMPLETE*

## Inspecting Input Feature Types
*INCOMPLETE*

### Inspecting Input Feature Count
```c
/*!
 @function FXNModelGetInputFeatureCount
 @abstract Get the number of input features in a model.
 @param model ML model.
 @returns Number of input features in the model.
*/
int32_t FXNModelGetInputFeatureCount (
    FXNModel* model
);
```
*INCOMPLETE*

### Retrieving an Input Feature Type
```c
/*!
 @function FXNModelGetInputFeatureType
 @abstract Get the input feature type in a model.
 @param model ML model.
 @param index Input feature index.
 @param type
 Output feature type. This type should be released once it is no longer in use.
*/
void FXNModelGetInputFeatureType (
    FXNModel* model,
    int32_t index,
    FXNFeatureType** type
);
```
*INCOMPLETE*

## Inspecting Output Feature Types
*INCOMPLETE*

### Inspecting Output Feature Count
```c
/*!
 @function FXNModelGetOutputFeatureCount
 @abstract Get the number of output features in a model.
 @param model ML model.
 @returns Number of output features in the model.
*/
int32_t FXNModelGetOutputFeatureCount (
    FXNModel* model
);
```
*INCOMPLETE*

### Retrieving an Output Feature Type
```c
/*!
 @function FXNModelGetOutputFeatureType
 @abstract Get the output feature type in a model.
 @param model ML model.
 @param index Output feature index.
 @param type Output feature type. This type should be released once it is no longer in use.
*/
void FXNModelGetOutputFeatureType (
    FXNModel* model,
    int32_t index,
    FXNFeatureType** type
);
```
*INCOMPLETE*

## Making Predictions
```c
/*!
 @function FXNModelPredict
 @abstract Make a prediction with a model.
 @param model ML model.
 @param inputs Input features.
 @param outputs Output features.
*/
void FXNModelPredict (
    FXNModel* model,
    FXNFeature * const * inputs,
    FXNFeature** outputs
);
```
*INCOMPLETE*

## Releasing the Model
```c
/*!
 @function FXNReleaseModel
 @abstract Release an ML model.
 @param model ML model.
*/
void FXNReleaseModel (
    FXNModel* model
);
```
*INCOMPLETE*