/**
 * File Name: Auth Service
 *
 * Description: Manages auth operations related with the advertisors and creactor module
 *
 * Author: Add Affinity
 */

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserParams } from '../interfaces/user.interface';

import {
    User
} from '../helpers/db';

export default {
    createAccount,
    getUserById,
    authenticate,
};

async function createAccount(param:any) {
    try {
        if (await User.findOne({ email: param.email })) {
            throw 'email "' + param.email + '" is already taken';
        }
        const user = new User({
            first_name: param.firstName,
            last_name: param.lastName,
            email: param.email,
            password: bcrypt.hashSync(param.password, 10),
            role: param.role,
            phone: param.phone_number,
            gender: param.gender,
            isActive: true,
            is_blocked: false,
          });

          const data = await user.save();
          const authData = await authenticate({ email: param.email, password: param.password })
          if (data) {
            let res = await User.findById(data.id).select(
              "-password -social_accounts -reset_password -image_url"
            );
      
            if (res && authData) {
              let response = {
                data: data,
                authData: {
                  token: authData.token,
                  expTime: authData.expTime
                }
              };
              //sendMail(mailOptions);
              return response;
            } else {
              return false;
            }
          } else {
            return false;
          }  
        
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}
/*****************************************************************************************/
/*****************************************************************************************/
async function getUserById(id:any) {
    try {
        const user = await User.findById(id); // Assuming you're using Mongoose
        return user;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error;
    }
}
/*****************************************************************************************/
/*****************************************************************************************/
/**
 * Manages user login operations
 *
 * @param {email,passwrd}
 *
 * @returns Object|null
 */
async function authenticate({ email, password }:{email: string, password: string}) {
    const user = await User.findOne({ email });
  
    if (user && bcrypt.compareSync(password, user.password)) {
      const {
        password,
        reset_password,
        __v,
        createdAt,
        updatedAt,
        
        ...userWithoutHash
      } = user.toObject();
      const token = jwt.sign({ id: user.id }, process.env.SECRET!, {
        expiresIn: "2h",
      });
      var expTime = new Date();
      expTime.setHours(expTime.getHours() + 2); //2 hours token expiration time
      //expTime.setMinutes(expTime.getMinutes() + 2);
      var expTimeTimestamp = expTime.getTime();
  
      return {
        ...userWithoutHash,
        token,
        expTimeTimestamp,
      };
    }
  }
  
  /*****************************************************************************************/
  /*****************************************************************************************/