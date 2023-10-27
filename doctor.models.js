import mongooes from "mongoose";

const doctorSchema = new mongooes.Schema({
},{timestamps: true});

export const Doctor= mongooes.model(
    "Doctor",doctorSchema
);