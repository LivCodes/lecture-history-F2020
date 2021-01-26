# DOM API
- DOM (Document Object Model)
- API (Application Programming Interface)
  - a bunch of methods and properties we can use to interact with the DOM 
  - API is for other developers and programs to use!
  - UI (User interface) for your average user

## DOM
- A tree of nodes and elements that make up a webpage
- Types of nodes
  * document 
  * text node
  * comment node 
  * **HTML element**

## Wikipedia Walkthrough
- Sketch out the DOM 
- Right click and inspect the HTML element

### Reading Elements (Selecting from the DOM)
- We can read the elements by traversing the tree, but that takes forever!

| Selector name                   | Return shape   | Return type    | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | --------------------- | -------- |
| `node.getElementById()`         | Single element | Element        | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza | Yes      |

You can copy the exact CSS selector using the Chrome Developer Tools!

### Updating elements (Setting their properties)
- `.innerText`
- `.href`
- `.src`
- `.style` 
  * We can access CSS properties by converting them to camelCase
- `innerHTML`

### Fun with Wikipedia!!

## API 
- Create DOM elements - create a mini-program that adds a new instructor to our table
- Read DOM elements (selecting elements)
- Update DOM elements
- Delete DOM elements

### Creating elements 
- `document.createElement()`
- `parentNode.appendChild()`
- `parentNode.append()`
- `.innerHTML`

### Removing elements
- `parentNode.removeChild()`

