const jwt = require("jsonwebtoken");

function validateAccessToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access token not provided" });
  }

  const accessToken = token.split(" ")[1];
  
  const secretKey = "AUTH_001";

  jwt.verify(accessToken, secretKey, (err, verified) => {
    if (err) {
      return res.status(401).json({ message: "Invalid access token" });
    }

    req.user = verified;
    next();
  });
}

module.exports = {validateAccessToken};
