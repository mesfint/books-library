import mongoose, { Document, Schema } from 'mongoose';

interface IAuthor extends Document {
    name: string;
    bio: string;
    books: mongoose.Types.ObjectId[];
    imageUrl?: string;
    nationality?: string;
    birthDate?: Date;
    genres: string[];
    awards: string[];
}

const authorSchema = new Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    imageUrl: { type: String },
    nationality: { type: String },
    birthDate: { type: Date },
    genres: { type: [String], default: [] },
    awards: { type: [String], default: [] },
}, { timestamps: true });

authorSchema.index({ name: 'text', bio: 'text' });
authorSchema.index({ books: 1 });

const Author = mongoose.model<IAuthor>('Author', authorSchema);

export default Author;