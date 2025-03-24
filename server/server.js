import { v2 } from 'cloudinary';
import Razorpay from 'razorpay';
import bcrypt from 'bcryptjs';

import app from './app.js';
import connectToDB from './configs/dbConn.js';
import User from './models/user.model.js';

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  console.log("Connected to MongoDB");
  initializeAdminUser(); // Run after database connection
  console.log(`App is running at http://localhost:${PORT}`);
});


// Function to create an initial admin user
const initializeAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ role: "ADMIN" });
    if (!existingAdmin) {
      // Save the password as plaintext (NOT RECOMMENDED FOR PRODUCTION)
      await User.create({
        fullName: "admin",
        email: "admin@example.com",
        password: "admin123", // Plaintext password
        role: "ADMIN",
      });
      console.log("Admin user created successfully.");
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error) {
    console.error("Error initializing admin user:", error);
  }
};