import mongooes from "mongoose";

const hospitalSchema = new mongooes.Schema({
},{timestamps: true});

export const Hospital= mongooes.model(
    "Hospital",hospitalSchema
);