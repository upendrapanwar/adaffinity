const { expressjwt: jwtt } = require('express-jwt');
const userService = require('../services/user.service'); // Assuming you have a method to get the user by id

module.exports = jwt;

function jwt() {
    const secret = process.env.SECRET;

    return jwtt({ secret, isRevoked, algorithms: ['HS256'] }).unless({
        path: [
            '/auth/signin',
        ]
    });
}

async function isRevoked(req, payload) {
    try {
        console.log(req); // For debugging purposes
        const url = req.originalUrl;
        
        // If the URL includes 'user/', you want to check the user status
        if (url.includes('auth/')) {
            let param = { id: payload.id, role: ["advertisor", "creator"] }; 

            // Query the user service to get the user based on the id and role
            const user = await userService.getUserById(param.id); // This is an example; adjust as per your actual method

            // Check if the user exists and if their role matches
            if (!user || !param.role.includes(user.role)) {
                return true; // Token is revoked, return true
            }
        }

        return false; // Token is not revoked, return false
    } catch (error) {
        console.error("Error checking token revocation:", error);
        return true; // If an error occurs, assume token should be revoked
    }
}
