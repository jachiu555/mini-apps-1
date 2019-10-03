const db = require('../database/index.js');

const models = {
  get: (callback) => {
    db.query('SELECT * FROM credentials', (err, result) => {
      callback(err, result);
    });
  },
  post: (info, callback) => {
    db.query(`INSERT INTO credentials (name, email, password, line_1, line_2, city, state, zip_code, phone_number, credit_card_number, expiry_date, CVV, billing_zip_code) VALUES ("${info.name}", "${info.email}", "${info.password}", "${info.line_1}", "${info.line_2}", "${info.city}", "${info.state}", "${info.zip_code}", "${info.phone_number}", "${info.credit_card_number}", "${info.expiry_date}", "${info.CVV}", "${info.billing_zip_code}")`, (err, result) => {
      callback(err, result);
    });
  },
  delete: (id, callback) => {
    db.query(`DELETE FROM credentials WHERE id = ${id}`, (err, result) => {
      callback(err, result);
    });
  }

}

module.exports = models;