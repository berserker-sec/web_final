import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// @desc    Kullanıcı kaydı
// @route   POST /api/users/register
// @access  Public
export const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Lütfen tüm alanları doldurun");
    }
    
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("Bu email adresi zaten kayıtlı");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
    }
});

// @desc    Kullanıcı girişi
// @route   POST /api/users/login
// @access  Public
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Email veya şifre hatalı");
    }
});

// @desc    Mevcut kullanıcı bilgilerini getir
// @route   GET /api/users/current
// @access  Private
export const getCurrentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

// JWT token oluşturma
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};