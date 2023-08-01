const jwt = require("jsonwebtoken");

function validateAccessToken(req, res, next) {
    console.log(req)
  const token = req.header("Authorization"); // Assuming the token is sent in the "Authorization" header

  if (!token) {
    return res.status(401).json({ message: "Access token not provided" });
  }

  jwt.verify(token, "your_secret_key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid access token" });
    }

    req.user = decoded; 
    next();
  });


// Protected routes - These require a valid access token

}

module.exports={validateAccessToken}