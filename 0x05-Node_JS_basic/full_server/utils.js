import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  try {
    let data = fs.readFileSync(path, 'utf8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    const headers = rows[0].split(',').map((header) => header.trim());
    data = rows.slice(1).map((row) => {
      const values = row.split(',').map((value) => value.trim());
      return Object.fromEntries(headers.map((header, i) => [header, values[i]]));
    });
    const fields = {};
    data.forEach((student) => {
      if (!fields[student.field]) fields[student.field] = [];
      fields[student.field].push(student.firstname);
    });
    resolve(fields);
  } catch (error) {
    reject(new Error('Cannot load the database'));
  }
});

export default readDatabase;
