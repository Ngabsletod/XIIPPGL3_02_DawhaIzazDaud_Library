const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loans');

router.get('/loans', loanController.getAllLoans);
router.post('/loans', loanController.addLoan);
router.put('/loans/:id', loanController.updateLoan);
router.delete('/loans/:id', loanController.deleteLoan);

module.exports = router;
