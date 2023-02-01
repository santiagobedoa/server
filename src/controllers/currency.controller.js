import { getConnection } from "../database/database";
const convert = require("../currencyAPI/convert");

// Get all the records of transactions schema
const getTransactions = (req, res) => {
  try {
    const connection = getConnection();
    connection.query("select * from transactions", function (error, results) {
      if (error) throw error;
      console.log(results);
      res.json(results);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Add a record to transactions schema
const addTransaction = (req, res) => {
  try {
    const cop = req.body.COP_amount;
    const usd = req.body.USD_amount;
    const connection = getConnection();
    connection.query(
      `insert into transactions (COP_amount, USD_amount) values (${cop}, ${usd})`
    );
    res.json("transaction added");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const convertCurrency = async (req, res) => {
  try {
    const cop = req.body.COP_amount;
    const data = await convert(cop);
    const usd = JSON.parse(data)["result"];
    const connection = getConnection();
    connection.query(
      `insert into transactions (COP_amount, USD_amount) values (${cop}, ${usd})`
    );
    res.json({
      USD: usd,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getTransactions,
  addTransaction,
  convertCurrency,
};
