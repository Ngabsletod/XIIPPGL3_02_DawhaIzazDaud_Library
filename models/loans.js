const db = require('../config/db');

class Loan {
    static getAllLoans(callback) {
        db.query('SELECT * FROM loans', callback);
    }

    static addLoan(book_id, user_id, loan_date, return_date, callback) {
        db.query(
            'INSERT INTO loans (book_id, user_id, loan_date, return_date) VALUES (?, ?, ?, ?)',
            [book_id, user_id, loan_date, return_date],
            callback
        );
    }

    static updateLoan(id, book_id, user_id, loan_date, return_date, callback) {
        db.query(
            'UPDATE loans SET book_id = ?, user_id = ?, loan_date = ?, return_date = ? WHERE id = ?',
            [book_id, user_id, loan_date, return_date, id],
            callback
        );
    }

    static deleteLoan(id, callback) {
        db.query('DELETE FROM loans WHERE id = ?', [id], callback);
    }
}

module.exports = Loan;
