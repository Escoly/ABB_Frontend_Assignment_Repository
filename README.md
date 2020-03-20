# README

## Instructions

Download the project from GitHub

Extract


Run `npm install` to install project dependencies.

After that, use `npm start` to start the project.


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

# Details

The `Feature Cards` are dinamic, so you can put as many Controls as you wish. To do so you have to acces the script `Part Component` at `src/components/Part/index.js`. Once there locate the method `listFeatures` and use the `controls` prop of the `FeatureCard` component to introduce as many as needed.

```js
    listFeatures = (features) => {
        return features.map(feature => {
            return <FeatureCard key={feature} featureTitle={feature} 
            controls={['x', 'y', 'z', 'Diameter', 'Length']} />
        })
    }
```
