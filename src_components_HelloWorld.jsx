```jsx
// src/components/HelloWorld.jsx
import React from 'react';

/**
 * A simple component that displays "Hello World" on the screen.
 */
const HelloWorld = () => {
    return (
        <div className="hello-world">
            Hello, World!
        </div>
    );
};

export default HelloWorld;
```

#### FILENAME: `src/index.html`
```html
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <link rel="stylesheet" href="./styles/main-styles.css">
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./scripts/main.js"></script>
</body>
</html>
```

### Installation/Setup Instructions
1. **Create a new directory for your project**:
   ```bash
   mkdir hello-world-project
   cd hello-world-project
   ```

2. **Create the file structure**:
   ```
   hello-world-project/
   ├── src/
   │   ├── components/
   │   │   └── HelloWorld.jsx
   │   └── index.html
   └── styles/
       └── main-styles.css
   ```

3. **Add the `HelloWorld.jsx` component**:
   ```jsx
   // src/components/HelloWorld.jsx
   import React from 'react';

   /**
    * A simple component that displays "Hello World" on the screen.
    */
   const HelloWorld = () => {
       return (
           <div className="hello-world">
               Hello, World!
           </div>
       );
   };

   export default HelloWorld;
   ```

4. **Add the `index.html` file**:
   ```html
   <!-- src/index.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Hello World</title>
       <link rel="stylesheet" href="./styles/main-styles.css">
   </head>
   <body>
       <div id="root"></div>
       <script type="module" src="./scripts/main.js"></script>
   </body>
   </html>
   ```

5. **Add the `main-styles.css` file**:
   ```css
   /* styles/main-styles.css */
   body {
       font-family: Arial, sans-serif;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       margin: 0;
   }

   .hello-world {
       font-size: 2em;
       color: #333;
   }
   ```

6. **Add the `main.js` file**:
   ```jsx
   // scripts/main.js
   import React from 'react';
   import ReactDOM from 'react-dom';
   import HelloWorld from '../src/components/HelloWorld.jsx';

   const App = () => {
       return (
           <div>
               <HelloWorld />
           </div>
       );
   };

   ReactDOM.render(<App />, document.getElementById('root'));
   ```

7. **Create the `scripts` directory**:
   ```bash
   mkdir scripts
   touch scripts/main.js
   ```

8. **Run your HTML page in a web server** (e.g., using Python's built-in HTTP server):
   ```bash
   python -m http.server
   ```
   Open your browser and go to `http://localhost:8000` to see the "Hello World" page.

This setup provides a simple, working implementation of a "Hello World" HTML page with proper file organization and basic React components.