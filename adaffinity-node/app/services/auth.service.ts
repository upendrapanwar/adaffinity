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
import SendEmail from '../helpers/email';

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
            first_name: param.first_name,
            last_name: param.last_name,
            email: param.email,
            password: bcrypt.hashSync(param.password, 10),
            role: param.role,
            isActive: false,
          });

          const data = await user.save();
          const authData = await authenticate({ email: param.email, password: param.password })
          if (data) {
            sendWellcomeEmail(param);
            
            let res = await User.findById(data.id).select(
              "-password -social_accounts -reset_password -image_url"
            );
      
            if (res && authData) {
              let response = {
                data: data,
                authData: {
                  token: authData.token,
                  expTime: authData.expTimeTimestamp 
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

  async function sendWellcomeEmail(param:any) {
    try {
    const verifyEmailUrl: string | number = (process.env.LOCAL_URL || "http://localhost:3000") + "/verify-email";
    const customData = {
      title: 'Welcome Email',
      emailTemplate: 'welcomeEmail',
      firstName: param.body.first_name,
      lastname: param.body.last_name,
      verificationUrl: verifyEmailUrl,
      copyrightDate: new Date().getFullYear()
      
    }
    const mailOptions = {
      from: `"Adaffinity" <${process.env.ADMIN_EMAIL}>`,
      replyTo: `"Booking App Live" <${process.env.ADMIN_EMAIL}>`,
      to: `"Adaffinity" <${param.body.email}>`,
      subject: 'Welcome to Adaffinity!',
      html: '',
      data: customData
    };
    
      const emailResult = await SendEmail(mailOptions);
      if(emailResult) {
        console.log("Wellcome email sent successfully");
      } else {
        console.log("Failed to send wellcome email");
      }
      //return { success: true, message: "Wellcome email sent successfully" };
    } catch (error) {
      console.error("Error sending wellcome email:", error);
      //return { success: false, message: "Failed to send wellcome email" };
    }
  }