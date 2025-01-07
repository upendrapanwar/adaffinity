import { Request, Response, NextFunction } from 'express';
import authservice from '../services/auth.service';
import { UserParams } from '../interfaces/user.interface';
import msg from '../helpers/messages.json';

export const register = async (req: Request<UserParams>, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { email } = req.body;
    
        // Example validation error
        if (!email) {
          const error: any = new Error('Email is required');
          error.status = 400; 
          throw error;
        }
    
        const result = await authservice.createAccount(req.body);
    
        if (!result) {
          return res.status(400).json({
            status: false,
            message: 'User already exists or something went wrong',
          });
        }
    
        res.status(201).json({
          status: true,
          message: msg.user.signup.success,
          data: result.data,
          authData: result.authData,
        });
      } catch (err) {
        next(err); 
      }
};
