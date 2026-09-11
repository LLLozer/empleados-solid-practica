import mongoose from "mongoose";

export const DBStart = async () => {
    const mongoUri = process.env.MONGO_URI

    try {
        await mongoose.connect(mongoUri)
        console.log("MongoDB conectado")
    } catch (error) {
        console.log("No se pudo conectar a MongoDB", error)
    }
}