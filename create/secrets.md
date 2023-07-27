---
title: Using Secrets
pageTitle: Secrets - Function
description: Creating predictors that use secrets.
---

Inject your Environment Variables and API Keys. {% .text-2xl .text-gray-500 .font-normal %}

Function provides functionality for injecting environment variables into predictors while they are being provisioned. These are primarily used to pass secrets to the predictor, including API keys and other secure information.

{% callout %} Function stores all environment variables with encryption. As such, secrets and environment variables are the equivalent. {% /callout %}

In this guide, let's make a predictor uses OpenAI's managed Whisper service to transcribe an audio file:

## Implementing the Predictor
Create a `transcribe.ipynb` notebook and add the following cell to install a few dependencies we'll need:
```py
# Install OpenAI library
%pip install openai
```

Next, add a new code cell and paste the following implementation:
```py
import openai
from pathlib import Path

def predict (audio: Path) -> str:
    # Make sure that the audio file has a ".wav" extension
    audio = audio.rename(audio.with_suffix(f".wav"))
    # Transcribe
    with open(audio, "rb") as f:
        transcript = openai.Audio.transcribe("whisper-1", f)
    # Return
    return transcript["text"]
```

This predictor accepts an `audio` path pointing to an audio file on the system. It then transcribes the file using OpenAI's hosted Whisper service, then returns the transcribed text.

{% callout %} Function serializes any `audio` input value to a `Path` which points to the audio file. See more on [Value](/api/values) {% /callout %}

## Using Secrets in Code
We have to specify our OpenAI API key to use the Whisper service in our code. In Function, environment variables are accessed through the `os.environ` dictionary. Let's now update our code to set the API key:
```py {% highlight=[2,"5..6"] %}
import openai
from os import environ
from pathlib import Path

# Specify our OpenAI API key
openai.api_key = environ.get("OPENAI_API_KEY")

def predict (audio: Path) -> str:
    # Make sure that the audio file has a ".wav" extension
    audio = audio.rename(audio.with_suffix(f".wav"))
    # Transcribe
    with open(audio, "rb") as f:
        transcript = openai.Audio.transcribe("whisper-1", f)
    # Return
    return transcript["text"]
```

{% callout %} During provisioning, Function injects environment variables to your predictor container, making them globally accessible. {% /callout %}

{% callout %} We technically don't need the added lines above because the OpenAI library automatically finds the [`OPENAI_API_KEY`](https://github.com/openai/openai-python/blob/b82a3f7e4c462a8a10fa445193301a3cefef9a4a/openai/__init__.py#L42) env. {% /callout %}

## Defining Secrets
Function provides two ways to define environment variables to predictors:

### Global Secrets
Global secrets are available to all predictors under a given account. To define a global secret, use the Function CLI:
```bash
# Open a terminal and run the following command:
fxn env create OPENAI_API_KEY 1234abcd
```

{% callout %} You can use the `--organization` flag to create a global secret for an organization account. {% /callout %}

{% callout %} Once a secret is created, its value can only be viewed on [fxn.ai](https://fxn.ai/account/developers) {% /callout %}

You can also define global secrets on [fxn.ai](https://fxn.ai/account/developers)

![specifying global secrets on Function](/fxn-env.png)

### Predictor Secrets
As the name implies, predictor secrets are specific to a given predictor. To define a predictor secret, use the `--env` flag when creating the predictor in the Function CLI:
```bash
# Open a terminal and run this command to create our predictor
fxn create @username/transcribe transcribe.ipynb --env OPENAI_API_KEY=1234abcd
```

{% callout %} Replace `@username` with your Function username. {% /callout %}

{% callout %} When defining predictor secrets, you must use the following format: `--env NAME=VALUE`. {% /callout %}

## Making a Prediction
If you haven't already, head over to [OpenAI](https://platform.openai.com/account/api-keys) to generate a new API key. Then define a new global secret:
```bash
# Open a terminal and run the following command:
fxn env create OPENAI_API_KEY <YOUR OPENAI API KEY>
```

{% callout %} We recommend creating API keys as global secrets on Function. {% /callout %}

Now, let's create the predictor:
```bash
# Create the predictor
fxn create @username/transcribe transcribe.ipynb
```

{% callout %} Replace `@username` with your Function username. {% /callout %}

Once the predictor has been provisioned, head over to [voice-recorder-online.com](https://voice-recorder-online.com/) to record your voice to a waveform audio file.

{% callout type="warning" %} Function makes no guarantees about the functionality or security of voice-recorder-online.com. {% /callout %}

Next, open a terminal and run the following command:
```bash
# Test out our transcription predictor
fxn predict @username/transcribe --audio @record.wav
```

After a few moments, you should see the transcription:

![making a prediction with secrets](/secret-predict.png)