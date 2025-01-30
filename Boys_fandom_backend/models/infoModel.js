import mongoose from "mongoose";

const infoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    desc: {
      type: String,
      required: [true, "Please add the string"],
    },
    img: {
      type: String,
      required: [true, "Please add the url"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Info", infoSchema);
