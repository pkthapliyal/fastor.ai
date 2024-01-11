require("dotenv").config();
const isLoggedIn = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.employeeId = decoded.employeeId;
        next();
    });
};

module.exports = { isLoggedIn };
