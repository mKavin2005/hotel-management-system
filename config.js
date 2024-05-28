// Import mongoose
const mongoose = require('mongoose');

// Securely retrieve credentials from environment variables (recommended for production)
const user = process.env.DB_USER || "Adhi2312";
const pass = process.env.DB_PASS || "Adhi2004";
const cluster = process.env.DB_CLUSTER || "cluster0.1banref.mongodb.net";
const dbName = process.env.DB_NAME || "test"; // Replace with your database name

// Construct MongoDB connection string
const uri = `mongodb+srv://kavinm2022cse:kavi1234@cluster0.a7vl8qj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Declare options settings
const options = {
  useUnifiedTopology: true,
  // You can add SSL/TLS options here if needed
  // ssl: true,
  // tlsCAFile: '/path/to/ca.pem', // Uncomment and provide paths to SSL certificates if needed
  // tlsCertificateKeyFile: '/path/to/client.pem',
  // tlsAllowInvalidCertificates: true, // Not recommended for production
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(
  () => {
    console.log('Database connection established!');
  },
  err => {
    console.log("Error connecting Database instance due to:", err);
  }
);