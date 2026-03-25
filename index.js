require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.get('/', (req, res) => {
  res.send('StayNest backend is running');
});
app.use('/api/pgs', require('./routes/pgRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/mess', require('./routes/messRoutes'));
app.use('/api/owner', require('./routes/ownerRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
