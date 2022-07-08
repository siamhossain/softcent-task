import React from 'react';
import workflowUnderline from '../assets/images/workflow-underline.png';
import workflow from '../assets/images/workflow.png';
import '../styles/workflow.css';




const Workflow = () => {
  return (
    <div>
        <div className="workflow-section">
            <div className="container">
                <div className="workflow-heading">
                    <h1>Workflow</h1>
                    <div className="workflow-heading-underline">
                        <img src={workflowUnderline} alt="" />
                    </div>
                </div>  
        
                <div className="workflow-content-area">
                    <div className="workflow-list">
                        <ol>
                            <li>Defining Goal<br/><span>Project analysis, defining project requirements and objectives<br/>based on clients needs, cost and effort estimation, creating<br/> value and process planning.</span></li>
                            <li>Development</li>
                            <li>Testing</li>
                            <li>Product Release</li>
                            <li>Maintenance Support</li>
                        </ol>
                    </div>
                    <div className="workflow-img">
                          <img src={workflow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow
