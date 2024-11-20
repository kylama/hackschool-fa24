const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const activitySchema = new mongoose.Schema({
    // Define schema here
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trips' },
    activitySpot: { type: String },
    rating: { type: String },
    review: { type: String }
});

// Create a model for our activity based on the schema
const Activity = mongoose.model('Activity', activitySchema);

// Export model schema
module.exports = Activity;