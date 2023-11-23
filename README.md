# react-mouse-follower

`React Mouse Follower` is a versatile package built on `React` and `Framer Motion`. This package offers a set of components that
allow you to effortlessly integrate and personalize an impressive mouse follower to your cursor. With React Mouse Follower, you
can easily enhance the user experience by adding **_visually appealing_** and **_fully customizable_** effects that follow the
movement of the mouse.

## Installation

Install using npm:

```
npm install react-mouse-follower
```

Install through yarn:

```
yarn add react-mouse-follower
```

## Dependencies

ReactJS (https://reactjs.org/)

Framer Motion (https://github.com/framer/motion)

## Features

#### Simple Syntax

Easy to use components to allow quick development and integration with your ui/ux.

#### Stackable Effects

You can update the mouse options by nesting the `UpdateFollower` component multiple times.

#### Customisability

You can customise your mouse follower by changing - background color, scale, radius, speed, rotation, and many more.

## Usage

**FollowerProvider** - Creates and attaches the mouse follower to your mouse. Wrap your components with it once to initialise the
follower.

```jsx
import { MouseFollower } from 'react-mouse-follower';

function App() {
  return (
    <div>
      <MouseFollower />
      // rest of the code
    </div>
  );
}

export default App;
```

**UpdateFollower** - Updates the mouse follower settings when mouse enters the child components wrapped inside it. It can be
nested to produce cool effects.

```jsx
import './Component.css';
import { UpdateFollower } from 'react-mouse-follower';

function Component() {
  return (
    <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 2,
        followSpeed: 1.5,
      }}
    >
      <h1>Sample header</h1>
    </UpdateFollower>
  );
}

export default Component;
```

It takes the following arguments:

| Name         | Type           | Description                                                                   |
| ------------ | -------------- | ----------------------------------------------------------------------------- |
| className    | string \| null | CSS class name to apply on the div                                            |
| style        | object \| null | CSS styles for the div                                                        |
| onClick      | function       | Callback function to execute on click                                         |
| onMouseEnter | function       | Callback function to execute on mouse entering the div                        |
| onMouseLeave | function       | Callback function to execute on mouse leaving the div                         |
| mouseOptions | object         | Takes parameters to apply on the mouse follower when the mouse enters the div |

<br>

Mouse Options example with background element:

```jsx
const mouseOptions = {
  zIndex: 2,
  backgroundColor: 'blue',
  scale: 5,
  mixBlendMode: 'difference',
  backgroundElement: (
    <div style={{ width: '100%' }}>
      <img src="..." alt="..." />
    </div>
  ),
};
```

Mouse Options example with Text:

```jsx
const mouseOptions = {
  zIndex: 2,
  backgroundColor: 'black',
  radius: 60,
  text: 'Sample Text',
  textColor: 'white',
  textFontFamily: 'sans-serif',
  textFontSize: '25px',
};
```

All Mouse Options:

| Name              | Type              | Description                                                                                                           |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| zIndex            | integer           | Applies z-index to follower. Default value - 0                                                                        |
| scale             | number            | Changes the scale of follower. Default value - 1                                                                      |
| radius            | number            | Sets the radius in pixels of the follower circle. Default value - 12                                                  |
| rotate            | number(in degree) | Rotates the follower. Default value - 0                                                                               |
| backgroundColor   | string            | Sets the background color of the follower. Default value - "black"                                                    |
| followSpeed       | number            | Changes the speed of following animation. Default value - 1                                                           |
| visible           | boolean           | Sets the visibility of the follower                                                                                   |
| backgroundElement | JSX.Element       | Takes a react component and renders it in the follower circle center                                                  |
| customPosition    | RefObject         | Takes in a ref (from useRef react hook) and places the follower to center of the referenced div when the mouse enters |
| customLocation    | object            | Takes x and y co-ordinates and places the follower there                                                              |
| mixBlendMode      | string            | Applies mixBlendMode css property to follower div                                                                     |
| text              | string            | Adds text to the center of the follower                                                                               |
| textFontSize      | string            | Font size for the text property                                                                                       |
| textColor         | string            | Color for the text property. Default value - white                                                                    |
| textFontFamily    | string            | Font family for the text property                                                                                     |
| textLineHeight    | string            | Line height for the text property                                                                                     |
| textLetterSpacing | string            | Letter spacing for the text property                                                                                  |

<br>

**useControlOptions** - provides more functionality to utilise the mouse follower capabilities.

```jsx
import { useControlOptions } from 'react-mouse-follower';

export default function MyComponent() {
  const { removePreviousLayer, topLayer } = useControlOptions();
  useEffect(() => {
    console.log(removePreviousLayer());
    console.log(topLayer());
  }, []);
  return (
    <div>
      <h1>Text</h1>
      {/* Rest of your component */}
    </div>
  );
}
```

All functions provided:

| Name                | Description                         |
| ------------------- | ----------------------------------- |
| addOptionLayer      | pushes new options layer on the top |
| removePreviousLayer | removes top most layer              |
| clearLayers         | clears all previous layers          |
| log                 | logs all events on the console      |
| topLayer            | returns the top most layer          |

<br>

Nested UpdateFollower with custom position sample:

```jsx
export default function HamburgerIcon() {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <FollowerProvider>
      <div className="hamburger-container">
        <UpdateFollower
          style={{ padding: '30px' }}
          mouseOptions={{
            customPosition: containerRef,
            scale: 6,
          }}
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <div
            style={{ width: '30px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '10px', cursor: 'pointer' }}
            ref={containerRef}
          >
            <div className="hamburger-bar" style={{ backgroundColor: isHovering ? 'white' : 'black' }}></div>
            <div className="hamburger-bar" style={{ backgroundColor: isHovering ? 'white' : 'black' }}></div>
            <div className="hamburger-bar" style={{ backgroundColor: isHovering ? 'white' : 'black' }}></div>
          </div>
        </UpdateFollower>
      </div>
    </FollowerProvider>
  );
}
```

## Demo

Storybook on Chromatic:

https://main--64a0642601b6ce7e0e08189c.chromatic.com

Portfolio site showcasing the mouse follower:

https://adnansh.in

## Contribution

Your contributions and suggestions are heartily welcome.

## License

MIT
