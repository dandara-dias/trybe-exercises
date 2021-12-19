USE Pixar;

SET SQL_SAFE_UPDATES = 0;

UPDATE Movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';