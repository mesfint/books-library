import { Document, Model, FilterQuery, UpdateQuery } from 'mongoose';

export class BaseService<T extends Document> {
    constructor(private model: Model<T>) {}
    

    async create(data: Partial<T>): Promise<T> {
        const doc = new this.model(data);
        await doc.save();
        return doc;
    }
    
    async findById(id: string): Promise<T | null> {
        return this.model.findById(id);
    }
    async findOne()