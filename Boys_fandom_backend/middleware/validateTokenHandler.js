import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("Kullanıcı yetkili değil");
            }
            
            req.user = decoded.user;
            next();
        });
    } else {
        res.status(401);
        throw new Error("Token bulunamadı");
    }
};

export default validateToken;