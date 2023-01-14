---
marp: true
class: invert
paginate: true
---

# TypeScript

TypeScript Learning Project
Basic Gym web page

---

# What is TypeScript

### TypeScript is a powerful tool that can improve the development process and help prevent errors in large and complex codebases.

```javascript
const obj = { width: 10, height: 15 };

const area = obj.width * obj.heigth;

> undefined
// Why is this undefined? Spelling is hard!
```

---

## Some of the benefits of using TypeScript

- Better type support: TypeScript detects the type error before it occurs, with its definition type and validation properties.

```TypeScript
let name: string = "John";

name = 12;

// TypeScript warn you.
// Type 'number' is not assignable to type 'string'.(2322)
```

---

- Better code integrity: TypeScript makes your code much more organized and easier to understand.

```TypeScript
// interface defined for the "user" object
interface User {
  name: string;
  age: number;
  email: string;
}

// thus making it clearer which fields the "user" object should have.
const user: User = {
  name: "John",
  salary: 25, // TypeScript warn you.
  email: "john@example.com"

};

// Type '{ name: string; salary: number; email: string; }' is not assignable to type 'User'.
// Object literal may only specify known properties, and 'salary' does not exist in type 'User'.(2322)

```

---

- Less runtime error: TypeScript detects type errors in your code beforehand, reducing runtime errors.

```TypeScript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2)); // 3

console.log(add("1", 2)); // TypeScript warn you

// Argument of type 'string' is not assignable to parameter of type 'number'.(2345)
```

---

# TypeScript in ReactJS

## useState

```Jsx
// 1. basic useState defination
const [isOpen, setIsOpen] = useState<boolean>(true)

setIsTopOfPage("false")
//Argument of type '"false"' is not assignable to parameter of type 'SetStateAction<boolean>'.ts(2345)
```

---

```jsx
// 2. interface useState defination
// types.ts file
export interface SelectedPage {
  open = boolean,
}

// in component
const [isOpen, setIsOpen] = useState<SelectedPage>(
   { open: false }
  )

setIsOpen({open: true})
```

---

```jsx
// 3. enums
//types.ts file
export enum SelectedPage {
  Open = false,
  Close = true,
  ...
}

// in component
const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Open
  )

setSelectedPage(SelectedPage.Close)
```
