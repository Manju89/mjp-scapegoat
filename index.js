let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

export const addPermission = (params, callback) => {
    sqs.addPermission(params, callback)
};

export const changeMessageVisibility = (params, callback) => {
    sqs.changeMessageVisibility(params, callback)
};

export const changeMessageVisibilityBatch = (params, callback) => {
    sqs.changeMessageVisibilityBatch(params, callback)
};

export const createQueue = (params, callback) => {
    sqs.createQueue(params, callback)
};

export const deleteMessage = (params, callback) => {
    sqs.deleteMessage(params, callback)
};

export const deleteMessageBatch = (params, callback) => {
    sqs.deleteMessageBatch(params, callback)
};

export const deleteQueue = (params, callback) => {
    sqs.deleteQueue(params, callback)
};

export const getQueueAttributes = (params, callback) => {
    sqs.getQueueAttributes(params, callback)
};

export const getQueueUrl = (params, callback) => {
    sqs.getQueueUrl(params, callback)
};

export const listDeadLetterSourceQueues = (params, callback) => {
    sqs.listDeadLetterSourceQueues(params, callback)
};

export const listQueues = (params, callback) => {
    sqs.listQueues(params, callback)
};

export const listQueueTags = (params, callback) => {
    sqs.listQueueTags(params, callback)
};

export const purgeQueue = (params, callback) => {
    sqs.purgeQueue(params, callback)
};

export const receiveMessage = (params, callback) => {
    sqs.receiveMessage(params, callback);
};

export const receiveAndDeleteMessages = (params, filteringCallBack, deleteCallBack) => {
    sqs.receiveMessage(params, function (error, data) {
        let filteredMessages = filteringCallBack(data.Messages, error);
        filteredMessages.forEach(message => {
            sqs.deleteMessage({
                QueueUrl: params["QueueUrl"],
                ReceiptHandle: message.ReceiptHandle
            }, deleteCallBack)
        })
    });
};

export const removePermission = (params, callback) => {
    sqs.removePermission(params, callback)
};

export const sendMessage = (params, callback) => {
    sqs.sendMessage(params, callback)
};

export const sendMessageBatch = (params, callback) => {
    sqs.sendMessageBatch(params, callback)
};

export const setQueueAttributes = (params, callback) => {
    sqs.setQueueAttributes(params, callback)
};

export const tagQueue = (params, callback) => {
    sqs.tagQueue(params, callback)
};

export const untagQueue = (params, callback) => {
    sqs.untagQueue(params, callback)
};

const SLSQS = {
    addPermission,
    changeMessageVisibility,
    changeMessageVisibilityBatch,
    createQueue,
    deleteMessage,
    deleteMessageBatch,
    deleteQueue,
    getQueueAttributes,
    getQueueUrl,
    listDeadLetterSourceQueues,
    listQueues,
    listQueueTags, purgeQueue,
    receiveMessage,
    receiveAndDeleteMessages,
    removePermission,
    sendMessage,
    sendMessageBatch,
    setQueueAttributes,
    tagQueue,
    untagQueue
};

module.exports = SLSQS;
