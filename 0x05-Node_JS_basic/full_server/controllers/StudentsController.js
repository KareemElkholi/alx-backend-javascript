import readDatabase from '../utils';

const majors = ['CS', 'SWE'];
class StudentsController {
  static async getAllStudents(_req, res) {
    const path = process.argv[2];
    try {
      const data = await readDatabase(path);
      const resParts = ['This is the list of our students'];
      const compare = (a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase());
      for (const [field, names] of Object.entries(data).sort(compare)) {
        resParts.push([
          `Number of students in ${field}: ${names.length}.`,
          'List:',
          names.join(', '),
        ].join(' '));
      }
      res.send(resParts.join('\n'));
    } catch (err) {
      res.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;
    if (!majors.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(path);
      const group = data[major];
      let resText = '';
      if (Array.isArray(group) && group.length > 0) {
        resText = `List: ${group.join(', ')}`;
      } else {
        resText = 'No students found for this major.';
      }
      res.send(resText);
    } catch (err) {
      res.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
