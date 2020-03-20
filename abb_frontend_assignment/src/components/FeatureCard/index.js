import React, { Component } from 'react'
import './index.css'
import bbApi from '../../api/index'
export default class FeatureCard extends Component {
    state = {
        featureStatus: {}

    }

    componentDidMount() {
        const featureStatus = bbApi.retrieveFeatureStatus();
        this.setState({ featureStatus })
        this.handleRetrieveFeatureStatus();
    }

    randomId = () => bbApi.generateRandomKey()


    handleRetrieveFeatureStatus = () => {
        let featureStatus = bbApi.retrieveFeatureStatus();
        this.setState({ featureStatus });
        setTimeout(() => {
            this.handleRetrieveFeatureStatus();
        }, 10000)
    }

    handldeControlSection = (controls) => {
        const {randomId}=this
        return (controls.map(control => {
            const controlData = bbApi.retrieveControlData()
            return <tr key={`controlSection${randomId()}${randomId()}`}>
                <td key={`${control}${randomId()}`} className="controlDataField controlDataFieldFlex">{control}</td>
                <td key={`${controlData.controlDevData}${randomId()}`} className="controlDataField">{controlData.controlDevData}</td>
                <td key={`${controlData.controlDevOutToolData}${randomId()}`} className="controlDataField">{controlData.controlDevOutToolData}</td>
                <td key={`${controlData.controlStatusData}${randomId()}image${randomId()}`} className="controlDataField"><img className="controlDataIcon" alt={'controlStatusIcon'} src={require(`../../images/${controlData.controlStatusData === 0 ? 'okIcon.svg' : controlData.controlStatusData === 1 ? 'alertIcon.svg' : 'errorIcon.svg'}`)}></img></td>
            </tr>
        }))
    }


    render() {
        const { handldeControlSection, randomId } = this
        const { featureStatus } = this.state
        const { featureTitle, controls } = this.props

        return (
            <div className="featureContainer">
                <div className={`featureTitleContainer ${featureStatus === 0 ? " goodState" : featureStatus === 1 ? " alertState" : " errorState"}`}>
                    <img className="featureTitleContainerIcon" alt="circleIcon" src={require('../../images/circleIcon.svg')} ></img>
                    <div className="featureTitle">{featureTitle}</div>
                    <img className="featureTitleContainerIcon" alt="statusIcon" src={require(`../../images/${featureStatus === 0 ? "okIcon.svg" : featureStatus === 1 ? "alertIcon.svg" : "errorIcon.svg"}`)} ></img>
                </div>
                <table className="measuresContainer">
                    <thead>
                        <tr key={`controlTitles${randomId()}`}>
                            <th key={`ControlTitle${randomId()}`}>Control</th>
                            <th key={`Dev${randomId()}`}>Dev</th>
                            <th key={`DevOut${randomId()}`}>Dev Out Tool</th>
                            <th key={`controlStatus${randomId()}`}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {handldeControlSection(controls)}
                    </tbody>

                </table>
            </div >
        )
    }


}