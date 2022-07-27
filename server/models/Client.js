const {Schema, model} = require('mongoose');
const arrestSchema = require('./Arrest')
const emergencySchema = require('./EMER')

const identificationSchema = new Schema ({
    name: {
        type: String,
        required: true, 
    },
    PID: {
        type: Number,
        required: true,
        default: 0,
    },
    SID: {
        type: Number,
        required: true,
        default: 0,
    },
    aliasName: {
        type: String,
    },
    FBI: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        requried: true,
    },
    race: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    ethnicity: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    DL: {
        type: Number,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    hair: {
        type: String,
        required: true,
    },
    eyes: {
        type: String,
        required: true,
    },
    build: {
        type: String,
        required: true,
    },
    complexion: {
        type: String,
        required: true,
    },
    SSN: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    placeofbirth: {
        type: String,
        required: true
    },
    arrests: [arrestSchema],
    emergencyInfo: [emergencySchema]
})

const Client = model('Client', identificationSchema); 
module.exports = Client;