const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
<<<<<<< HEAD
const Trip = mongoose.model('trips', tripSchema);
=======
const Trip = mongoose.model('Trip', tripSchema);
>>>>>>> 4e5460bef880a1fd234a8fff03d628d0629379c6
module.exports = Trip;