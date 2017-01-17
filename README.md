# React Losant Dashboard Block

A component for embedding Losant dashboard blocks in your React.js projects.

## Demo & Examples

Live demo: [losant.github.io/react-losant-dashboard-block](http://losant.github.io/react-losant-dashboard-block/)

The demo shows the block in action displaying the moisture level of the Losant office plants, as found on [this dashboard](https://app.losant.com/#/dashboards/56f0918f2d198e01002b05d4).

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation

The easiest way to use the component is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-losant-dashboard-block.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-losant-dashboard-block --save
```

## Usage

To use the component, simply import it into your React app and then include the tag in your `render` function.

```
import LosantDashboardBlock 'react-losant-dashboard-block';

<LosantDashboardBlock
  dashboardId={dashboardId}
  blockId={blockId}
  theme={theme}
  width={width}
  height={height}
  style={style}
/>
```

### Props

| Name        | Required? | Description                                                                                                     | Default |
| ----------- |:---------:| --------------------------------------------------------------------------------------------------------------- | ------- |
| dashboardId | Y         | String. The ID of the dashboard from which the block is being pulled.                                           |         |
| blockId     | Y         | String. The ID of the block. The block MUST come from the dashboard stipulated in the `dashboardId`.            |         |
| width       |           | String. The width of the iframe in which the block is rendered. Must be in CSS units (e.g. `400px` or `100%`).  | 100%    |
| height      |           | String. The height of the iframe in which the block is rendered. Must be in CSS units (e.g. `400px` or `100%`). | 240px   |
| theme       |           | String. Must be either `light` or `dark`. Additional themes may be supported at a later time.                   | 'light' |
| style       |           | Object. CSS styles that will be applied to the `iframe` tag.                                                    |         |

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT licensed. Copyright (c) 2017 Losant IoT.
