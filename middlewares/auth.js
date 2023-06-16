const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    // Retrieve the token from the request headers
    const authHeader = req.header('Authorization');
  
    // Check if the Authorization header exists and starts with "Bearer"
    if (authHeader && authHeader.startsWith('Bearer ')) {
      // Extract the token
      const token = authHeader.slice(7); // Remove "Bearer " from the header
  
      try {
        // Verify the token
        const decoded = jwt.verify(token, 'secretKey');
  
        // Add the decoded token to the request object for further use
        req.user = decoded;
  
        // Call the next middleware
        next();
      } catch (err) {
        // Handle token verification error
        return res.status(401).json({ error: 'Invalid token' });
      }
    } else {
      // Handle missing or invalid Authorization header
      return res.status(401).json({ error: 'Unauthorized' });
    }
  };
  

module.exports = authenticateToken;
