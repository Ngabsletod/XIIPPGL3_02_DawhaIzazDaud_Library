const Loan = require('../models/loans');

// GET all loans
const getAllLoans = (req, res) => {
    Loan.getAllLoans((err, results) => {
        if (err) {
            console.error("Database error:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

// POST add a new loan
const addLoan = (req, res) => {
    const { book_id, user_id, loan_date, return_date } = req.body;
    if (!book_id || !user_id || !loan_date) {
        return res.status(400).json({ error: 'book_id, user_id, and loan_date are required' });
    }

    Loan.addLoan(book_id, user_id, loan_date, return_date, (err, results) => {
        if (err) {
            console.error("Database error:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: results.insertId, book_id, user_id, loan_date, return_date });
        }
    });
};

// PUT update a loan
const updateLoan = (req, res) => {
    const { id } = req.params;
    const { book_id, user_id, loan_date, return_date } = req.body;

    if (!book_id || !user_id || !loan_date) {
        return res.status(400).json({ error: 'book_id, user_id, and loan_date are required' });
    }

    Loan.updateLoan(id, book_id, user_id, loan_date, return_date, (err, results) => {
        if (err) {
            console.error("Database error:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Loan Updated', id, book_id, user_id, loan_date, return_date });
        }
    });
};

// DELETE a loan
const deleteLoan = (req, res) => {
    const { id } = req.params;

    Loan.deleteLoan(id, (err, results) => {
        if (err) {
            console.error("Database error:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Loan Deleted', id });
        }
    });
};

module.exports = {
    getAllLoans,
    addLoan,
    updateLoan,
    deleteLoan
};
