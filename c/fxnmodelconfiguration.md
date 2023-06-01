---
title: FXNModelConfiguration
description: Configuring how models are run on device.
---

*INCOMPLETE*

## Creating a Model Configuration
```c
/*!
 @function FXNCreateModelConfiguration
 @abstract Create an ML model configuration.
 @param configuration Destination configuration. Must not be `NULL`.
*/
void FXNCreateModelConfiguration (
    FXNModelConfiguration** configuration
);
```
*INCOMPLETE*

## Specifying the Compute Target
```c
/*!
 @function FXNModelConfigurationSetComputeTarget
 @abstract Specify the compute target used for ML model predictions.
 @param configuration ML model configuration.
 @param target Compute target used for ML model predictions.
*/
void FXNModelConfigurationSetComputeTarget (
    FXNModelConfiguration* configuration,
    FXNComputeTarget target
);
```
*INCOMPLETE*. NatML currently supports the following compute targets:

### Compute Target
{% table %}
* `FXNComputeTarget`
* Constant
* Notes
---
* `FXN_COMPUTE_TARGET_DEFAULT`
* 0
* This will use all available compute targets.
---
* `FXN_COMPUTE_TARGET_CPU`
* 1
* This is always implicitly enabled.
---
* `FXN_COMPUTE_TARGET_GPU`
* 2
* DirectML, Metal (MPS), OpenCL, OpenGL ES, Vulkan.
---
* `FXN_COMPUTE_TARGET_NPU`
* 4
* CoreML (iOS, macOS M1+), NNAPI (Android).
---
* `FXN_COMPUTE_TARGET_ALL`
* 7
* Use the CPU, GPU, and NPU.
{% /table %}

{% callout title="Specifying Multiple Targets" %}
Each member of the `FXNComputeTarget` enumeration is a bit flag, so multiple targets can be requested using a logical OR (`|`).
{% /callout %}

## Specifying the Compute Device
```c
/*!
 @function FXNModelConfigurationSetComputeDevice
 @abstract Specify the compute device used for ML model predictions.
 @param configuration ML model configuration.
 @param device Compute device used for ML model predictions.
*/
void FXNModelConfigurationSetComputeDevice (
    FXNModelConfiguration* configuration,
    void* device
);
```
*INCOMPLETE*. The underlying type of `device` is platform-specific:

### Compute Device

{% table %}
* Platform
* Device Type
* Notes
---
* Android
* None
* Not supported.
---
* iOS
* `id<MTLDevice>`
* Only applies with `FXN_COMPUTE_TARGET_GPU` compute target.
---
* macOS
* `id<MTLDevice>`
* Only applies with `FXN_COMPUTE_TARGET_GPU` compute target.
---
* Web (WASM)
* None
* Not supported.
---
* Windows
* `ID3D12Device`
* Only applies with `FXN_COMPUTE_TARGET_GPU` compute target.
{% /table %}

{% callout title="Using the Default Device" %}
Pass `NULL` to use the default compute device.
{% /callout %}

## Specifying the Model Fingerprint
```c
/*!
 @function FXNModelCofigurationSetFingerprint
 @abstract Set the model fingerprint.
 @param configuration ML model configuration.
 @param fingerprint Model fingerprint. Can be `NULL`.
*/
void FXNModelConfigurationSetFingerprint (
    FXNModelConfiguration* configuration,
    const char* fingerprint
);
```
*INCOMPLETE*

## Releasing the Model Configuration
```c
/*!
 @function FXNReleaseModelConfiguration
 @abstract Release ML model configuration.
 @param configuration ML model configuration.
*/
void FXNReleaseModelConfiguration (
    FXNModelConfiguration* configuration
);
```
*INCOMPLETE*