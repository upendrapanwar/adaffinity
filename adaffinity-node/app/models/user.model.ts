import mongoose, { Schema, Document } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

interface User extends Document {
    first_name: string,
    last_name: string,
    fb_loginId: string,
    google_loginId: string,
    email: string,
    phone: string,
    role: string,
    address: string,
    city: string,
    county: string,
    country: string,
    postcode: string,
    isActive: boolean,
    password: string,
    reset_password: {
        verif_code: string,
        code_valid_at: Date,
        is_pass_req: boolean,
    }
}

const userSchema: Schema = new Schema({
    first_name: { type: String, required: false, default: '' },
    last_name: { type: String, required: false, default: '' },
    fb_loginId: { type: String, required: false, default: '' },
    google_loginId: { type: String, required: false, default: '' },
    email: { type: String, unique: true, required: false, index: true, default: '' },
    phone: { type: String, required: false, default: '' },
    role: { type: String, required: false, default: 'creator' },
    address: { type: String, required: false, default: '' },
    city: { type: String, required: false, default: '' },
    county: { type: String, required: false, default: '' },
    country: { type: String, required: false, default: '' },
    postcode: { type: String, required: false, default: '' },
    isActive: { type: Boolean, required: false, default: true },
    password: { type: String, required: false, default: '' },
    reset_password: {
    verif_code: { type: String, required: false, default: null },
    code_valid_at: { type: Date, required: false, default: null },
    is_pass_req: { type: Boolean, required: false, default: false },
}
    
}, {
    timestamps: true
});

userSchema.set('toJSON', { virtuals: true, versionKey: false });

userSchema.plugin(mongoosePaginate);

export default mongoose.model<User>('User', userSchema);