const {Schema, model} = require('mongoose');

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
    AliasName: {
        type: String,
    },
    FBI: {
        type: Number,
        required: true,
        default: 0,
    },
    Image: {
        type: String,
        requried: true,
    },
    Race: {
        type: String,
        required: true,
    },
    Sex: {
        type: String,
        required: true,
    },
    Ethnicity: {
        type: String,
        required: true,
    },
    DateOfBirth: {
        type: Date,
        required: true,
    }
})