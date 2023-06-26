# react-mouse-follower

`React Mouse Follower` is a versatile package built on `React` and `Framer Motion`. This package offers a set of components that
allow you to effortlessly integrate and personalize an impressive mouse follower to your cursor. With React Mouse Follower, you
can easily enhance the user experience by adding **visually appealing** and **fully customizable** effects that follow the
movement of the mouse.

## Demo

Portfolio site showcasing the mouse follower:

https://adnansh.in

## Installation

Install through npm or yarn:

```
npm install react-mouse-follower

yarn add react-mouse-follower
```

## Features

#### Simple Syntax

Easy to use components to allow quick development and integration with your ui/ux.

#### Customisability

You can customise your mouse follower by changing - background color, shape, scale, radius, speed, rotation, component to render,
and many more.

```jsx
const mouseOptions = {
  zIndex: 2,
  backgroundColor: "blue",
  backgroundElement?: (
    <div>
      <p>Sample Text<p>
    </div>
  ),
  scale: 5,
  rotate: 0,
  customPosition: null,
  mixBlendMode: "difference",
}

```

#### Stackable Effects

You can update the mouse options by nesting the `UpdateFollower` component multiple times.

## Usage

Usecase implementing the `FollowerProvider` and `UpdateFollower` components.

```jsx
import './App.css';
import { FollowerProvider, UpdateFollower } from 'react-mouse-follower';

function App() {
  return (
    <FollowerProvider>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 2,
        }}
        className="App"
      >
        <h1>Sample to showcase react-mouse-follower</h1>
        <div className="card">
          <UpdateFollower
            mouseOptions={{
              scale: 4,
              backgroundColor: 'rgb(0, 0, 0, 0.6)',
              backgroundElement: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '2.5px',
                  }}
                >
                  <p>View Case</p>
                </div>
              ),
            }}
          >
            <button}>press</button>
          </UpdateFollower>
      </UpdateFollower>
    </FollowerProvider>
  );
}

export default App;
```

## Contribution

Your contributions and suggestions are heartily welcome.

## License

MIT
