const {Schema, model} = require('mongoose')

const arrestSchema = new Schema ({
    arrestID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    arrestAgency: {
        type: Number,
        required: true,
    },
    arrestingOfficer: {
        type: String,
        required: true,
    },
    arrestDate: {
        type: Date,
        defualt: Date.now,
        required: true
    },
    arrestTime: {
        type: Date,
        defualt: Date.now,
        required: true,
    },
    arrestLocation: {
        type: String,
        required: true,
    },
    vehicleMake: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    licenseNo: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    towedBy: {
        type: String
    },
    vehicleLocation: {
        type: String,
        required: true,
    }

})

module.exports = arrestSchema;