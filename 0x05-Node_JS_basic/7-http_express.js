const express = require('express');
const fs = require('fs').promises;

const path = process.argv[2];
const countStudents = async (path) => {
  let res = 'This is the list of our students\n';
  try {
    let data = await fs.readFile(path, 'utf8');
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
    res += `Number of students: ${data.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      res += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
  } catch (error) {
    res += 'Cannot load the database';
  }
  return res;
};
const app = express();
app.get('/', (_req, res) => res.send('Hello Holberton School!'));
app.get('/students', async (_req, res) => res.send((await countStudents(path)).trim()));
app.listen(1245);
module.exports = app;
