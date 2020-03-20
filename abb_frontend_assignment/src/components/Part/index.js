import React, { Component } from 'react';
import FeatureCard from '../FeatureCard/index.js'
import './index.css'

export default class Part extends Component {

    state = {}


    listFeatures = (features) => {
        return features.map(feature => {
            return <FeatureCard key={feature} featureTitle={feature} controls={['x', 'y', 'z', 'Diameter', 'Length']} />
        })

    }

    render() {
        const { namePart, features } = this.props
        const { listFeatures } = this

        return <div className="partContainer">
            <div>

                <p className="partTitle">{namePart}</p>
                <div className="featuresContainer">
                    {listFeatures(features)}
                </div>

            </div>
        </div>
    }

}

