import { expressjwt as jwtMiddleware } from 'express-jwt';
import authService from '../services/auth.service'; // Assuming this service exists and is typed
import { Request } from 'express'; // Import Express types for better type safety

export default function jwt() {
    const secret = process.env.SECRET;

    if (!secret) {
        throw new Error('JWT secret is not defined in environment variables.');
    }

    return jwtMiddleware({
        secret,
        isRevoked,
        algorithms: ['HS256'],
    }).unless({
        path: [
            '/auth/signin', // Define paths that don't require authentication
        ],
    });
}

// Function to check if the token should be revoked
async function isRevoked(req: Request, payload: any): Promise<boolean> {
    try {
        const url = req.originalUrl;

        // Check if the URL includes 'auth/' for specific logic
        if (url.includes('auth/')) {
            const params = { id: payload.id, role: ['advertisor', 'creator'] };

            // Fetch the user by ID
            const user = await authService.getUserById(params.id);

            // Validate the user's existence and role
            if (!user || !params.role.includes(user.role)) {
                return true; // Revoke the token
            }
        }

        return false; // Token is valid
    } catch (error) {
        console.error('Error checking token revocation:', error);
        return true; // Assume token should be revoked on error
    }
}
