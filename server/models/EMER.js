const {Schema, model} =  require ('mongoose')

const emergencySchema = new Schema ({
    emergencyContactName: {
        type: String,
    },
    emergencyContactAddress: {
        type: String,
    },
    emergencyContactPhone: {
        type: String,
    },
    numbersCalledAtBooking: [],
    relationShip: {
        type: String,
    }
})

module.exports = emergencySchema