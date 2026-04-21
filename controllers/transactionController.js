import Transaction from '../model/Transaction.js';

 
export const createTransaction = async (req, res, next) => {
  try {
    const { title, amount, type, category } = req.body;

    const transaction = await Transaction.create({
      title,
      amount,
      type,
      category,
      userId: req.user._id  
    });

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    next(error);  
  }
};

 
export const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id });
    res.status(200).json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    next(error);
  }
};