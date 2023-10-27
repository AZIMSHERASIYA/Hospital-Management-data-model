import mongooes from "mongoose";

const patientSchema = new mongooes.Schema({
},{timestamps: true});

export const Patient= mongooes.model(
    "Patient",patientSchema
);