const mongoose = require('mongoose')

const tripPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    tripDetails: {
      destination: {
        type: String,
        required: [true, 'Destination is required'],
      },
      duration: {
        type: Number,
        required: [true, 'Duration is required'],
      },
      numberOfTravelers: {
        type: Number,
        required: [true, 'Number of travelers is required'],
      },
    },
    preferences: {
      interests: {
        type: [String],
        default: [],
      },
      budget: {
        type: String,
        enum: ['Budget', 'Mid-Range', 'Luxury'],
        required: [true, 'Budget preference is required'],
      },
    },
    schedule: {
      startDate: {
        type: Date,
        required: [true, 'Start date is required'],
      },
    },
    contactInfo: {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
      },
      phone: {
        type: String,
        required: [true, 'Phone is required'],
      },
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('TripPlan', tripPlanSchema)
