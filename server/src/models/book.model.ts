import mongoose, { Document, Schema } from 'mongoose';

interface IBook extends Document {
    isbn: string;
    title: string;
    description: string;
    publisher: string;
    authors: mongoose.Types.ObjectId[];
    status: 'available' | 'borrowed' | 'maintenance';
    borrowerId: mongoose.Types.ObjectId;
    publishedDate: Date;
    borrowedDate: Date;
    returnDate: Date;
    categories: string[];
    imageLinks: {   
        thumbnail: string;
        smallThumbnail: string;
    },
    reviews: mongoose.Types.ObjectId[];
} 

const bookSchema = new Schema({
    isbn: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true, index: true },
    description: { type: String, required: true },
    publisher: { type: String, required: true },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    status: { type: String, enum: ['available', 'borrowed', 'maintenance'], default: 'available' },
    borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    publishedDate: { type: Date, required: true },
    borrowedDate: { type: Date },
    returnDate: { type: Date },
    categories: [{ type: String, index: true }],
    imageLinks: {
        thumbnail: { type: String },
        smallThumbnail: { type: String },
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

bookSchema.index({ title: 'text', description: 'text', publisher: 'text', authors: 'text', categories: 'text' });
bookSchema.index({ authors: 1 });
bookSchema.index({ categories: 1 });
bookSchema.index({ status: 1 });



const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;