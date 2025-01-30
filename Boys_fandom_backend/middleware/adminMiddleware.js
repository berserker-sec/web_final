const adminMiddleware = async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403);
        throw new Error("Admin yetkisi gerekli");
    }
};

export default adminMiddleware;