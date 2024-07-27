const fs = require('fs').promises;

const countStudents = async (path) => {
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
    console.log(`Number of students: ${data.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
