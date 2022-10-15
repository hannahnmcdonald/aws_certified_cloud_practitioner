// Import React //
import React from 'react';
// import Img
import awsImg from "../img/aws.jpg"

const main = () => {
    return (
        <div className="center">
           <img className="logo" src={awsImg} alt="aws_cloud"></img>
           <h1 className="title"> Certified Cloud Practitioner Exam Prep </h1>
        </div>
    )
}

export default main