const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    hsnCode: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    gstRate: {
      type: Number,
      required: true,
      default: 18,
      min: 0,
      max: 100,
    },

    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    unit: {
      type: String,
      default: "pcs",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);