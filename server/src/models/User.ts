import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    borrowedBooks: mongoose.Types.ObjectId[];
    returnDates: Map<string, Date>; 
    reviews: mongoose.Types.ObjectId[];
}

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    returnDates: { type: Map, of: Date },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

userSchema.index({ name: 'text', email: 'text' });
userSchema.index({ borrowedBooks: 1 });
userSchema.index({ returnDate: 1 });

const User = mongoose.model<IUser>('User', userSchema);
