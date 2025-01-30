import asyncHandler from "express-async-handler";//veritabanı işlemleri için
import Info from "../models/infoModel.js";

//@desc Get all info
//@route GET /api/info
//@access public
const getAllInfo = asyncHandler(async (req, res) => {
  const info = await Info.find();
  res.json(info);
});

//@desc Create info
//@route POST /api/info
//@access public
const createInfo = asyncHandler(async (req, res) => {
  const { name, desc, img } = req.body;

  const info = await Info.create({
    name,
    desc,
    img,
  });
  res.status(201).send(info);
});

//@desc Get info
//@route GET /api/info/:info
//@access public
const getInfoById = asyncHandler(async (req, res) => {
  const info = await Info.findById(req.params.id);
  res.json(info);
});

export { getAllInfo, createInfo, getInfoById }; 
