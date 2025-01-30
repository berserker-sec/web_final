import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import User from "../models/userModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// .env dosyasının yolunu doğru şekilde belirt
dotenv.config({ path: join(__dirname, '../.env') });

const createInitialAdmin = async () => {
    try {
        // Bağlantı URI'sini kontrol et
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI bulunamadı. Lütfen .env dosyanızı kontrol edin.');
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB bağlantısı başarılı');
        
        const adminExists = await User.findOne({ isAdmin: true });
        
        if (!adminExists) {
            const hashedPassword = await bcrypt.hash("admin123", 10);
            
            await User.create({
                username: "admin",
                email: "admin@example.com",
                password: hashedPassword,
                isAdmin: true
            });
            
            console.log("İlk admin kullanıcısı oluşturuldu");
        } else {
            console.log("Admin kullanıcısı zaten mevcut");
        }
        
    } catch (error) {
        console.error("Hata:", error.message);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
};

createInitialAdmin();