import SampleJS from "./SampleJS";

let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

export const escape = (html) => {
    let sampleJS = new SampleJS();
    return sampleJS.customMethod(html);
};

export const escape2 = (html) => {
    let sampleJS = new SampleJS();
    return sampleJS.customMethod(html);
};

const SLSQS = {
    escape,
    escape2
};

export default SLSQS;
