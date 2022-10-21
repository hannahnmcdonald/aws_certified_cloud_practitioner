// Import React //
import React from 'react';
// Import react Icons
import { 
    DiAws
} from "react-icons/di";

const cloudConcepts = () => {
    return (
        <div className="cloudConcepts">
            <div className="section-title">
                <h2>Cloud Concepts</h2>
                <h6 className="info">This section of the exam will be worth&nbsp;<strong>26%</strong>&nbsp;of your total score</h6>
            </div>    
            <div className="deploymentModels">
            {/* <DiAws className="icon display-4" title="aws_icon"/> */}
            <h4>Deployment Models of the Cloud</h4>
                <ul>
                    <li>Private Cloud</li>
                    <li>Public Cloud</li>
                    <li>Hybrid Cloud</li>
                </ul>
            </div>
        </div>
    )
}

export default cloudConcepts
