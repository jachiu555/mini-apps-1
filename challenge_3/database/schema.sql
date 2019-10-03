CREATE DATABASE checkout;

USE checkout;

CREATE TABLE credentials (
  id INT AUTO_INCREMENT,
  name varchar(20),
  email varchar(50),
  password varchar(50),
  PRIMARY KEY (id),
  line_1 varchar(100),
  line_2 varchar(100),
  city varchar(100),
  state varchar(5),
  zip_code INT,
  phone_number varchar(20name),
  credit_card_number varchar(20),
  expiry_date INT,
  CVV INT,
  billing_zip_code INT
);

-- CREATE TABLE address (
--   line_1 varchar(100) NOT NULL,
--   line_2 varchar(100) NOT NULL,
--   city varchar(100) NOT NULL,
--   state varchar(5) NOT NULL,
--   zip_code INT NOT NULL,
--   phone_number INT NOT NULL
-- );

-- CREATE TABLE payment (
--   credit_card_number INT NOT NULL,
--   expiry_date INT NOT NULL,
--   CVV INT NOT NULL,
--   billing_zip_code INT NOT NULL
-- );
