const Loan = require('../models/loans');

// GET all loans
const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll();
        res.status(200).json(loans);
    } catch (err) {
        console.error("Database error:", err.message);
        res.status(500).json({ error: err.message });
    }
};

// POST add a new loan
const addLoan = async (req, res) => {
    try {
        const { book_id, user_id, loan_date, return_date } = req.body;
        if (!book_id || !user_id || !loan_date) {
            return res.status(400).json({ error: 'book_id, user_id, and loan_date are required' });
        }

        const loan = await Loan.create({ book_id, user_id, loan_date, return_date });
        res.status(201).json(loan);
    } catch (err) {
        console.error("Database error:", err.message);
        res.status(500).json({ error: err.message });
    }
};

// PUT update a loan
const updateLoan = async (req, res) => {
    try {
        const { id } = req.params;
        const { book_id, user_id, loan_date, return_date } = req.body;

        if (!book_id || !user_id || !loan_date) {
            return res.status(400).json({ error: 'book_id, user_id, and loan_date are required' });
        }

        const loan = await Loan.findByPk(id);
        if (!loan) return res.status(404).json({ error: 'Loan not found' });

        await loan.update({ book_id, user_id, loan_date, return_date });
        res.status(200).json({ message: 'Loan Updated', loan });
    } catch (err) {
        console.error("Database error:", err.message);
        res.status(500).json({ error: err.message });
    }
};

// DELETE a loan
const deleteLoan = async (req, res) => {
    try {
        const { id } = req.params;

        const loan = await Loan.findByPk(id);
        if (!loan) return res.status(404).json({ error: 'Loan not found' });

        await loan.destroy();
        res.status(200).json({ message: 'Loan Deleted', id });
    } catch (err) {
        console.error("Database error:", err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllLoans,
    addLoan,
    updateLoan,
    deleteLoan
};
 