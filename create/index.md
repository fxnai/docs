---
title: Creating a Predictor
pageTitle: Creating Predictors - Function
description: Create and share your predictors.
---

Create and share your predictors. {% .text-2xl .text-gray-500 .font-normal %}

Function uses Jupyter Notebooks as a self-contained format for creating predictors. Let's create a predictor that says a greeting to a user.

## Creating the Predictor
First, create a `predictor.ipynb` notebook and add this function in a Python cell:
```python
# Function requires your prediction function to be called "predict"
def predict (first_name: str):
    return f"Hello {first_name}!"
```

{% callout %} The vast majority of predictors you create will have no Function-specific code or concepts. {% /callout %}

Our prediction function accepts a `first_name` string and returns a greeting. With this, we can create the predictor on Function to run it from anywhere. Open a terminal and run the following command:
```bash
# Create the predictor
fxn create @username/greeting predictor.ipynb --overwrite
```

{% callout %} Make sure to replace `@username` with your Function username. {% /callout %}

Once you run this command, Function does three things:

1. Creates a *predictor signature* by analyzing your code.
2. Invokes the code in your notebook, *up until the `predict` function*.
3. Containerizes and deploys your code.

## Defining the Predictor Signature
The predictor signature provides information about the input and output values of your prediction function. It is the second most important component of any predictor, second to the actual code.

Function relies solely on code annotations to infer the signature of your predictor. For example, Function will infer the following signature from our predictor above:
```json
{
  "inputs": [
    {
      "name": "first_name",
      "type": "string"
    }
  ],
  "outputs": []
}
```

{% callout %} We strongly recommend using type annotations on all parameters in your prediction function. It makes for better code. {% /callout %}

Function is also able to infer more of your predictor signature from your prediction function's docstring. For example, let's add an `age` parameter to our original function:
```python {% highlight=[1,7,9] %}
def predict (first_name: str, age: int):
    """
    Say a greeting to a user.

    Parameters:
        first_name (str): The user's first name.
        age (int): The user's age. This should be more than 13 but less than 80.
    """
    return f"Hello {first_name}! You are {age} years old"
```

With the added docstring, Function will infer the following signature from the predictor:
```json {% highlight=["9..12"] %}
{
  "inputs": [
    {
      "name": "first_name",
      "type": "string",
      "description": "The user's first name."
    },
    {
      "name": "age",
      "type": "int32",
      "description": "The user's age. This should be more than 13 but less than 80.",
      "range": [14, 79] // Function infers this from your docstring
    }
  ],
  "outputs": []
}
```

{% callout %} Function is able to infer the parameter name, type, description, range, default value, enumeration values, and whether it is optional. {% /callout %}

{% callout %} You can think of Function as a software engineer on your team. It understands clearly written and documented code. {% /callout %}

## Defining the Predictor Card
The predictor card is effectively a readme for the predictor. It informs prospective users about what the predictor does, any considerations on its usage, the predictor license, and more. It is shown prominently on [fxn.ai](https://fxn.ai/explore), and will be the first thing that users will read.

To define a predictor card, simply add a Markdown cell as the very first cell in your predictor notebook. During provisioning, Function will automatically pull it out as the predictor card.

{% callout %} Because the predictor cell is written in Markdown, you can use rich text formatting such as headings, image and video embeds, and more. {% /callout %}

## Installing Dependencies
When creating a prediction function, you will often need to use third-party libraries. Function relies on Jupyter magic commands to install these dependencies:

### Installing Python Packages
Recreate the modified predictor from above on Function by opening a terminal and running the following command:
```bash
# Recreate the predictor
fxn create @username/greeting predictor.ipynb --overwrite
```

{% callout %} Make sure to replace `@username` with your Function username. {% /callout %}

Once the predictor is active, run the following command to make a prediction:
```bash
# Make a prediction with age=1
fxn predict @username/greeting --name "John" --age 1
```

{% callout %} Make sure to replace `@username` with your Function username. {% /callout %}

You should see the following result:
```json {% highlight=[4] %}
{
  ...,
  "results": [
    "Hello John! You are 1 years old"
  ]
}
```

We have a typo! We aren't properly pluralizing the word "years". Thankfully, we can use the [`pluralizer`](https://pypi.org/project/pluralizer/) Python package to fix this.

To install the package, add a code cell *before* the `predict` function and add the following:
```python
# Install the pluralizer package
%pip install pluralizer
```

Then modify the `predict` function to use the pluralizer:
```python {% highlight=[1,"3..4","14..15",17] %}
from pluralizer import Pluralizer

# Create a pluralizer
pluralizer = Pluralizer()

def predict (first_name: str, age: int):
    """
    Say a greeting to a user.

    Parameters:
        first_name (str): The user's first name.
        age (int): The user's age. This should be more than 13 but less than 80.
    """
    # Pluralize "year"
    years_str = pluralizer.pluralize("year", age)
    # Return the greeting
    return f"Hello {first_name}! You are {age} {years_str} old"
```

{% callout %} Note that the `pluralizer` global variable is created when our predictor is first made active. All prediction requests will use the same `pluralizer` instance. {% /callout %}

You can test the updated predictor right in the notebook. Simply create a new cell and call the `predict` function:
```bash
# Test out the updated predictor
greeting = predict("John", 1)
print(greeting)
#: Hello John! You are 1 year old
```

### Installing System Packages
You can install system packages to be installed while your predictor is being provisioned. Simply use the `apt-get` package manager tool:
```bash
# Install FFmpeg so that our predictor can use it
!apt-get install ffmpeg
```

{% callout %} The `!` IPython magic command can be used to run arbitrary system commands, in addition to installing system packages. {% /callout %}