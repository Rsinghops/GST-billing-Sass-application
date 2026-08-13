const Invoice = require("../models/Invoice");


// Create Invoice
const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);

    res.status(201).json({
      message: "Invoice created successfully",
      invoice,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get All Invoices
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find()
      .populate("customer")
      .populate("items.product");

    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createInvoice,
  getInvoices,
};