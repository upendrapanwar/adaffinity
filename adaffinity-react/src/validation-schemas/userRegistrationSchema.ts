import * as Yup from 'yup';

const userRegistrationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum.').max(20, 'Password is too long - should be 20 chars maximum.'),
    confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
    role: Yup.string().required('Role is required'),
    
});

export default userRegistrationSchema;