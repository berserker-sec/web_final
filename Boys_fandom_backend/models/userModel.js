import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Lütfen kullanıcı adı giriniz"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Lütfen email giriniz"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Lütfen şifre giriniz"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);