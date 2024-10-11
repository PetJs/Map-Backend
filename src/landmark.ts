import mongoose, { Document, Schema } from "mongoose";

// Extend the UnilagLandmark interface to include coordinates
export interface UnilagLandmark extends Document {
    name: string;
    latitude: number;  // Add coordinate
    longitude: number; // Add coordinate
    neighbours: {
        name: string;
        distance: number;
    }[];
}

// Update the schema to include top and left coordinates
const landmarkSchema = new mongoose.Schema<UnilagLandmark>({
    name: { type: String, required: true },
    latitude: { type: Number, required: true },    // Add coordinate to schema
    longitude: { type: Number, required: true },   // Add coordinate to schema
    neighbours: [
        { name: { type: String, required: true }, distance: { type: Number, required: true } }
    ]
});

const Landmark = mongoose.model<UnilagLandmark>("Landmark", landmarkSchema);

export default Landmark;
