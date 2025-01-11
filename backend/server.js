const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Models
const ReviewSchema = new mongoose.Schema({
  attractionId: String,
  comment: String,
  user: String,
  createdAt: { type: Date, default: Date.now },
});
const Review = mongoose.model('Review', ReviewSchema);

// Routes

// Fetch YouTube Comments
app.get('/api/youtube-comments', async (req, res) => {
  try {
    const videoId = 'SqoozK8twsc'; 
    const apiKey = process.env.YOUTUBE_API_KEY; 
    if (!apiKey) {
      return res.status(500).send('YouTube API Key is missing');
    }

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`
    );
    const comments = response.data.items.map((item) => ({
      user: item.snippet.topLevelComment.snippet.authorDisplayName,
      comment: item.snippet.topLevelComment.snippet.textDisplay,
      createdAt: item.snippet.topLevelComment.snippet.publishedAt,
    }));
    res.json(comments);
  } catch (error) {
    console.error('Error fetching YouTube comments:', error);
    res.status(500).send('Failed to fetch YouTube comments');
  }
});

// Add a new review
app.post('/api/reviews/:attractionId', async (req, res) => {
  const { comment, user } = req.body;
  const newReview = new Review({
    attractionId: req.params.attractionId,
    comment,
    user: user || 'Anonymous',
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).send('Failed to save review');
  }
});

// Fetch reviews by attraction ID
app.get('/api/reviews/:attractionId', async (req, res) => {
  try {
    const reviews = await Review.find({ attractionId: req.params.attractionId });
    if (!reviews.length) {
      return res.status(404).send('No reviews found for this attraction');
    }
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching user comments:', error);
    res.status(500).send('Failed to fetch reviews');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
