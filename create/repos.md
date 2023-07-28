---
title: Using Git Repos
pageTitle: Git Repos - Function
description: Creating predictors that pull code from git repos.
---

Creating predictors that pull code from git repos. {% .text-2xl .text-gray-500 .font-normal %}

Depending on the complexity of your predictor, you might often find yourself needing to pull code from an existing Git repository. In this guide, we'll run the [GFPGAN](https://github.com/TencentARC/GFPGAN) face restoration model from Tencent ARC.

## Cloning the Repository
We'll largely be following the GPFGAN readme, with minimal additions. First, create a `repos.ipynb` notebook and add the following code cell to clone the repo:
```python
# Clone GFPGAN
!git clone https://github.com/TencentARC/GFPGAN.git

# Enter the GFPGAN directory
%cd GFPGAN
```

{% callout %} Function automatically installs `git` in predictors, so you don't have to. {% /callout %}

{% callout type="warning" %} When changing directories, use the `%cd` magic command instead of the `!cd` system command. {% /callout %}

### Cloning Private Repos
To clone a private repository, you will need to specify your Git credentials. First, head over to GitHub to generate a [personal access token](https://github.com/settings/tokens?type=beta) (PAT):

![generating a personal access token](/github-pat.gif)

Next, open a terminal and run the following command to create a Function secret with the PAT you just created:
```bash
# Create a global secret for our GitHub PAT
fxn env create GITHUB_PAT <Your GitHub PAT>
```

{% callout %} You can also define the `GITHUB_PAT` secret when creating the predictor. {% /callout %}

With this, you can pull from private repos in your predictor notebook:
```python
# Clone a private GitHub repo
!git clone https://username:$GITHUB_PAT@github.com/TencentARC/GFPGAN.git
```

{% callout %} Replace `username` with your GitHub username. {% /callout %}

## Installing Dependencies
The GPFGAN repository readme lists a set of dependencies that must be installed. Add a code cell and paste the following code:
```python
# Install basicsr - https://github.com/xinntao/BasicSR
%pip install basicsr
# Install facexlib - https://github.com/xinntao/facexlib
%pip install facexlib
# Install OpenCV
%pip install opencv-python-headless
# Install other requirements from the repo
%pip install -r requirements.txt
# Install GPFGAN as a python package
!python setup.py develop
# Install Real-ESRGAN
%pip install realesrgan
```

Next, let's download the pre-trained model. Paste the following in a new code cell:
```python
# Download the pretrained model
!wget https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth -P experiments/pretrained_models
```

{% callout %} Function automatically installs `wget` in predictors, so you don't have to. {% /callout %}

## Implementing the Predictor
We will use the [`inference_gfpgan`](https://github.com/TencentARC/GFPGAN/blob/master/inference_gfpgan.py) script from the repo directly. Add a new code cell and paste the following:
```python
from pathlib import Path
from PIL import Image
import sys
from tempfile import mkstemp, TemporaryDirectory

# This script will be available after cloning the repo
from inference_gfpgan import main

def predict (image: Image.Image):
    # Write input image to file
    _, image_path = mkstemp(suffix=".jpg")
    image.save(image_path)
    # Run GPFGAN
    with TemporaryDirectory() as result_dir:
        # Run the inference script directly
        command = f"python inference_gfpgan.py -i {image_path} -o {result_dir} -v 1.3 -s 2"
        sys.argv = command.split(" ")[1:]
        main()
        # Load the result image
        image_name = Path(image_path).name
        result_path = Path(result_dir) / "restored_imgs" / image_name'
        result = Image.open(result_path)
        result.load()
    # Return the image
    return result
```

## Creating the Predictor
Now, let's provision the predictor on Function. We will be running our predictor on an `A40` GPU. Open a terminal and run the following command:
```bash
# Create the predictor on Function
fxn create @username/repos repos.ipynb --acceleration A40
```

{% callout %} Replace `username` with your Function username. {% /callout %}

## Making a Prediction
Once the predictor is active, test it out on this headshot of 21 Savage:

![21 savage](/savage.jpg)

Open a terminal and run the following command:
```bash
# Make a prediction
fxn predict @username/repos --image @savage.jpg
```

{% callout %} Replace `username` with your Function username. {% /callout %}

![face restoration on 21 savage](/savage-predict.gif)