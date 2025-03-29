# 🎲 Two Dice Roller Web Component 🎲

![Two Dice Roller](two-dice-roller.png)

## Introduction

Welcome to the **TwoDiceRoller Web Component**!  
This component is a reusable custom HTML element that allows users to roll two dice with smooth animation and realistic dot layouts. It's lightweight, framework-free, and perfect for learning or enhancing interactive projects.

## Key Features

- 🎯 **Realistic Dice Faces:** Each die displays dots like real-world dice (1 to 6).
- 🌀 **Animated Rolls:** Smooth rotation animation on roll.
- 🧩 **Web Component:** Built using the native Web Components API.
-  ⚡ **No Dependencies:** Just vanilla JavaScript, HTML, and CSS.

## Content

The project includes the following files:

- **index.html** – Usage example of the component.
- **two-dice-roller.js** – The custom element logic and style.

## Implementation Details

### ✅ HTML

The `two-dice-roller` component is declared as a custom element and used as a regular tag:
```html
<two-dice-roller></two-dice-roller>
```

### 🎨 CSS
The component is styled within its Shadow DOM, ensuring scoped and conflict-free styles. Dice have rounded corners, drop shadows, and animated transitions.


### 🧠 JavaScript

JavaScript is used to:
* Define the custom element class.
* Randomize values from 1 to 6 on click.
* Render dot positions based on a dot matrix.
* Handle animations and re-rendering.

### Usage
To use the component, insert the tag mentioned above in your HTML file where you want the dice roller to appear.

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Two Dice Roller 🎲🎲</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        two-dice-roller {
            width: 80%;
            max-width: 600px;
        }
    </style>
</head>
<body>
<two-dice-roller></two-dice-roller>

<script src="two-dice-roller.js"></script>
</body>
</html>
```
### 🎬 Appearance
When you open the example, you’ll see two dice and a button below them. Clicking the button triggers the roll animation and updates the dice faces.

### 🛠 How It Works
1. The component extends HTMLElement and defines a Shadow DOM.

2. Two dice are dynamically rendered using a 3x3 grid system.

3. Dot positions are calculated from a diceFaces matrix.

4. Rolling applies a quick 360° rotation before updating the faces.

### 📄 License
MIT License © 2025 [Cotoară Damian - Laurențiu]

Enjoy rolling! 🎲✨