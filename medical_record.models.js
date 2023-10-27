import mongooes from "mongoose";

const medicalRecordSchema = new mongooes.Schema({
},{timestamps: true});

export const MedicalRecordSchema = mongooes.model(
    "medicalRecord",medicalRecordSchema
);