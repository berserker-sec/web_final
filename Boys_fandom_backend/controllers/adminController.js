import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// @desc    Tüm kullanıcıları getir
// @route   GET /api/admin/users
// @access  Admin
export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select('-password');
    res.json(users);
});

// @desc    Admin girişi
// @route   POST /api/admin/login
// @access  Public
export const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const admin = await User.findOne({ email, isAdmin: true });
    
    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin._id,
            username: admin.username,
            email: admin.email,
            isAdmin: admin.isAdmin,
            token: generateToken(admin._id),
        });
    } else {
        res.status(401);
        throw new Error("Geçersiz admin bilgileri");
    }
});

// @desc    Yeni admin oluştur
// @route   POST /api/admin/create
// @access  Admin
export const createAdmin = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Lütfen tüm alanları doldurun");
    }
    
    const adminExists = await User.findOne({ email });
    if (adminExists) {
        res.status(400);
        throw new Error("Bu email adresi zaten kayıtlı");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await User.create({
        username,
        email,
        password: hashedPassword,
        isAdmin: true
    });
    
    if (admin) {
        res.status(201).json({
            _id: admin._id,
            username: admin.username,
            email: admin.email,
            isAdmin: admin.isAdmin
        });
    }
});