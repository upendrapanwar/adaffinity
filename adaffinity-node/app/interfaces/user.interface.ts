export interface UserParams {
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
    password:string,
    reset_password: {
        verif_code: string,
        code_valid_at: Date,
        is_pass_req: boolean,
    }
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}