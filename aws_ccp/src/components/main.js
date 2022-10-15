// Import React //
import React from 'react';
// import Img
import awsImg from "../img/aws.jpg"

const main = () => {
    return (
        <div className="center">
           <img className="logo" src={awsImg} alt="aws_cloud"></img>
           <div className="main">
                <h1 className="title"> Certified Cloud Practitioner Exam Prep </h1>
                <h6 className="info"> A comprehensive study guide & study notes for the AWS Certified Cloud Practioner Exam</h6>
           </div>
        </div>
    )
}

export default main