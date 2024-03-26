---
title: Making Predictions in JavaScript
pageTitle: JavaScript Predictions - Function
description: Make predictions in JavaScript.
---

Make predctions in the browser and in Node.js. {% .text-2xl .text-gray-500 .font-normal %}

Function provides a JavaScript client for making predictions in the browser, in frameworks like React and Next.js, and in Node.js.

In this example, we'll make a minimal Next.js website that accepts a prompt and generates an image using [`@samples/stable-diffusion`](https://fxn.ai/@samples/stable-diffusion)

## Creating a Next.js Project
Following the [Next.js quickstart](https://nextjs.org/learn/basics/create-nextjs-app/setup), open a terminal and run the following command:
```bash
# Clone the Next.js starter app
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

You should see a `nextjs-blog` directory. Open the directory in your text editor, then open a terminal and start the development server:
```bash
# Start the development server
npm run dev
```

Once it's started, open [http://localhost:3000](http://localhost:3000) in the browser and you should see a page that says "Welcome to Next.js!"

![next welcome](/next-welcome.png)

## Installing Function
Open a terminal and run the following command:
```bash
# Open a terminal and run the following command:
npm install --save fxnjs
```

{% callout type="danger" %} When building websites, do not specify your Function access key in code or environment variables that run in the browser. Your key will be visible and can be extracted. {% /callout %}

### Installing without a Bundler
When building websites without a JavaScript bundler like webpack, you can import Function using a `<script>` tag:
```html
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/fxnjs"></script>
  <script type="text/javascript">
    const fxn = new fxnjs.Function();
    // Do stuff with `fxn` instance
  </script>
</html>
```

## Implementing the Page
Now, let's modify `pages/index.js` to show an input field for the prompt, a generation button, and the resulting image:
```jsx
import { Function } from "fxnjs"
import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Function in Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Title */}
        <h1 className={styles.title}>
          Welcome to <a href="https://fxn.ai">Function</a> for JavaScript
        </h1>
        {/* Prompt input */}
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          className={styles.description}
        />
        {/* Generate button */}
        <button
          disabled={loading}
          style={{ marginTop: "16px", fontSize: "1.5rem" }}
        >
          {loading ? "Loading..." : "Generate" }
        </button>
        {/* Result image */}
        <img src={imageUrl} style={{ marginTop: "16px" }} />
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
```

## Making a Prediction
Once you replace the contents of `index.js` with the code above, you'll notice that the "Generate" button doesn't do anything. Let's implement the actual prediction. First, add the following `generate` function:
```jsx {% highlight=["4..13"] %}
const [prompt, setPrompt] = useState("");
const [imageUrl, setImageUrl] = useState("");
const [loading, setLoading] = useState(false);
const generate = async () => {
  setLoading(true);
  const fxn = new Function({ accessKey: "<ACCESS KEY>" });
  const prediction = await fxn.predictions.create({
    tag: "@samples/stable-diffusion",
    inputs: { prompt }
  });
  setImageUrl(prediction.results[0].data);
  setLoading(false);
};
return (
    ...
);
```

Then navigate down to the `<button>` tag and add the following `onClick` handler:
```jsx {% highlight=[3] %}
{/* Generate button */}
<button
  onClick={generate}
  disabled={loading}
  style={{ marginTop: "16px", fontSize: "1.5rem" }}
>
  {loading ? "Loading..." : "Generate" }
</button>
```

That's it!

![Prediction in Next.js](/next-predict.gif)