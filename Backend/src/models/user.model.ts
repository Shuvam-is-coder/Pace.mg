import bcrypt from 'bcryptjs';
import mongoose, { Schema, Model } from 'mongoose'

interface IUser { 
    username: string,
    email: string,
    password: string,
    verified: boolean
}

interface IUserMethods { 
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser, Model<IUser, {}, IUserMethods>>({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "username must be unique"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"],
        trim: true,
        lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "password must be at least 6 characters long"],
      maxlength: [72, "password must be at most 72 characters long"],
      select: false, // Exclude password from query results by default
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password)
}

const userModel = mongoose.model('user', userSchema)

export default userModel;