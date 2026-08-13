const express = require("express");

const {
  createInvoice,
  getInvoices,
} = require("../controllers/invoiceController");

const router = express.Router();


// Create Invoice
router.post("/", createInvoice);


// Get All Invoices
router.get("/", getInvoices);


module.exports = router;