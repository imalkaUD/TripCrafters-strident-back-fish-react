const express = require('express')
const router = express.Router()
const TripPlan = require('../models/TripPlan')
const { protect } = require('../middleware/auth')

// Create trip plan (protected - requires authentication)
router.post('/', protect, async (req, res) => {
  try {
    const { tripDetails, preferences, schedule, contactInfo } = req.body

    // Validate input
    if (!tripDetails || !preferences || !schedule || !contactInfo) {
      return res.status(400).json({ message: 'Please provide all required fields' })
    }

    const tripPlan = new TripPlan({
      userId: req.user.id,
      tripDetails,
      preferences,
      schedule,
      contactInfo,
    })

    await tripPlan.save()

    res.status(201).json({
      message: 'Trip plan created successfully',
      tripPlan,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error creating trip plan', error: error.message })
  }
})

// Get user's trip plans (protected)
router.get('/', protect, async (req, res) => {
  try {
    const tripPlans = await TripPlan.find({ userId: req.user.id })

    res.status(200).json({
      count: tripPlans.length,
      tripPlans,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trip plans', error: error.message })
  }
})

// Get single trip plan (protected)
router.get('/:id', protect, async (req, res) => {
  try {
    const tripPlan = await TripPlan.findById(req.params.id)

    if (!tripPlan) {
      return res.status(404).json({ message: 'Trip plan not found' })
    }

    // Check if user owns the trip plan
    if (tripPlan.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to access this trip plan' })
    }

    res.status(200).json(tripPlan)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trip plan', error: error.message })
  }
})

// Update trip plan (protected)
router.put('/:id', protect, async (req, res) => {
  try {
    let tripPlan = await TripPlan.findById(req.params.id)

    if (!tripPlan) {
      return res.status(404).json({ message: 'Trip plan not found' })
    }

    // Check if user owns the trip plan
    if (tripPlan.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this trip plan' })
    }

    tripPlan = await TripPlan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      message: 'Trip plan updated successfully',
      tripPlan,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error updating trip plan', error: error.message })
  }
})

// Delete trip plan (protected)
router.delete('/:id', protect, async (req, res) => {
  try {
    const tripPlan = await TripPlan.findById(req.params.id)

    if (!tripPlan) {
      return res.status(404).json({ message: 'Trip plan not found' })
    }

    // Check if user owns the trip plan
    if (tripPlan.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this trip plan' })
    }

    await TripPlan.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: 'Trip plan deleted successfully',
    })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting trip plan', error: error.message })
  }
})

module.exports = router
