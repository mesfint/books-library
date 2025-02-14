import mongoose, { Document, Schema } from 'mongoose';

interface IReview extends Document {
    user: mongoose.Types.ObjectId;
    book: mongoose.Types.ObjectId;
    rating: number;
    comments: string;
    likes: number[];
    createdAt: Date;
    updatedAt: Date;
}

const reviewSchema = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    book: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book',
        required: true 
    },
    rating: { 
        type: Number, 
        required: true,
        min: 1,
        max: 5 
    },
    comments: { 
        type: String, 
        required: true 
    },
    likes: { 
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'User',
        default: [] 
    }
}, { timestamps: true });

// Compound index for user and book to ensure one review per book per user
reviewSchema.index({ user: 1, book: 1 }, { unique: true });
// Index for sorting by rating
reviewSchema.index({ rating: -1 });
// Index for sorting by likes
reviewSchema.index({ likes: -1 });

const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review; 