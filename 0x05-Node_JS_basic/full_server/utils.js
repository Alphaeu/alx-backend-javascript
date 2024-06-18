import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const header = lines[0].split(',');
    const students = lines.slice(1).map(line => {
      const student = line.split(',');
      return header.reduce((acc, key, index) => {
        acc[key] = student[index];
        return acc;
      }, {});
    });

    const fields = {};
    students.forEach(student => {
      const field = student.field;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.firstname);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

