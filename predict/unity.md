---
title: Making Predictions in Unity
pageTitle: Unity Predictions - Function
description: Make AI predictions in Unity.
---

Bring AI to your cross-platform Unity apps. {% .text-2xl .text-gray-500 .font-normal %}

Function provides a Unity3D client for making predictions in your cross-platform Unity apps.

In this example, we'll make a minimal app that accepts a prompt and generates an image using [`@samplefxn/stable-diffusion`](https://fxn.ai/@samplefxn/stable-diffusion)

## Installing Function
Open a blank Unity project, then open the `Packages/manifest.json` file and add the following items:
```json {% framework="unity" highlight=["3..9", 11] %}
// Add the highlighted lines to your `Packages/manifest.json` file:
{
  "scopedRegistries": [
    {
      "name": "Function",
      "url": "https://registry.npmjs.com",
      "scopes": ["ai.fxn"]
    }
  ],
  "dependencies": {
    "ai.fxn.fxn3d": "0.0.22",
    ...
  }
}
```

## Logging in to Function
Head over to your [Account](https://fxn.ai/account) page on Function to generate a new access key for Unity:

![generate access key](https://raw.githubusercontent.com/fxnai/.github/main/access_key.gif)

{% callout type="warning" %} We strongly recommend creating a separate access key to login on Unity, instead of reusing an existing access key. {% /callout %}

Next, head over to Unity and open 'Project Settings'. Open the 'Function' tab on the left and paste in your access key:

![specify your access key in Unity](/unity-key.gif)

## Making a Prediction
Let's create a `Predictor.cs` script to make a prediction:
```csharp
using UnityEngine;
using Function;
using Function.Types;

public class Predict : MonoBehaviour {

    [TextArea]
    public string prompt;
    public UnityEngine.UI.RawImage uiPanel;

    async void Start () {
        // Create Function client
        var fxn = FunctionUnity.Create();
        // Make a prediction
        var prediction = await fxn.Predictions.Create(
            tag: "@samples/stable-diffusion",
            inputs: new () { ["prompt"] = prompt }
        );
        // Get the result image as a texture
        var image = (Image)prediction.results[0];
        var texture = image.ToTexture();
        // Display the result
        uiPanel.texture = texture;
    }
}
```

In the Unity Editor, create an empty object and add this script. Then create a `RawImage` component and assign it in the script. Finally, add a prompt and press play!

![making a prediction in Unity](/unity-predict.gif)