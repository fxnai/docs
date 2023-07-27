---
title: Rendering with Blender
pageTitle: Rendering - Function
description: Rendering Images and Animations on Function.
---

Rendering Images and Animations on Function. {% .text-2xl .text-gray-500 .font-normal %}

Function can be used for much more than AI predictions. In this example, we will render an image by leveraging the GPU on Function:

## Implementing the Predictor
Create a `rendering.ipynb` notebook and add the following code cell to install system libraries that Blender requires:
```python
# Install system library dependencies for Blender
!apt-get install build-essential subversion cmake       \
    libx11-dev libsm-dev libxxf86vm-dev libxcursor-dev  \
    libxi-dev libxrandr-dev libxinerama-dev libegl-dev  \
    libwayland-dev wayland-protocols libxkbcommon-dev   \
    libdbus-1-dev linux-libc-dev -y
```

Next, create a new code cell to install Blender for Python:
```python
# Install Blender for Python
%pip install bpy
```

With these dependencies, we can now implement our prediction function. The function will simply render the default Blender scene with the Cycles renderer and return it:
```python
from PIL import Image
from tempfile import mkstemp

def predict () -> Image.Image:
    # Load the default scene
    from bpy import context, data, ops
    ops.wm.read_homefile()    
    # Configure Cycles renderer to use all available GPUs
    context.scene.render.engine = "CYCLES"
    cycles_settings = context.scene.cycles
    cycles_settings.samples = 16
    context.scene.cycles.device = "GPU"
    context.preferences.addons["cycles"].preferences.compute_device_type = "OPTIX"
    context.preferences.addons["cycles"].preferences.get_devices()
    for device in context.preferences.addons["cycles"].preferences.devices:
        device["use"] = True
    # Render to image
    _, render_path = mkstemp(suffix=".png")
    context.scene.render.filepath = render_path
    ops.render.render(write_still=True)
    # Load rendered image
    result = Image.open(render_path)
    # Return
    return result
```

{% callout %} Note that our prediction function takes no input parameters. Predictors are not required to accept or return anything. {% /callout %}

## Creating the Predictor
Now, let's provision the predictor on Function. We will be running our predictor on an `A40` GPU to reduce our rendering times. Open a terminal and run the following command:
```bash
# Create the predictor on Function
fxn create @username/rendering rendering.ipynb --acceleration A40
```

{% callout %} Replace `username` with your Function username. {% /callout %}

## Rendering an Image
Once the predictor is active, run the following command in a terminal to render out an image:
```bash
# Render an image with our predictor
fxn predict @username/rendering
```

{% callout %} Replace `username` with your Function username. {% /callout %}

![rendering with blender](/blender-predict.gif)