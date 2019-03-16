-- BUILD THE SCHEMA
BEGIN;

-- remove the database to save the updated version
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS items_id_seq CASCADE;

-- create table
CREATE TABLE items (
  -- add in the serial
  id SERIAL PRIMARY KEY,
  -- set data type for text, cannot be empty
  name VARCHAR(50) NOT NULL,
  -- set data type for the amount
  amount INT NOT NULL,
  -- set data type for amount unit
  unit VARCHAR(10) NOT NULL,
  -- set data type for availablility
  available BOOLEAN NOT NULL
);

INSERT INTO items (name, amount, unit, available) VALUES
('cucumber', '200', 'grams', 'false'),
('tomato', '600', 'grams', 'true'),
('milk', '1', 'L', 'true');

COMMIT;
