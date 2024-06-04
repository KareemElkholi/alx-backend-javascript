export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const arr = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: arr ? arr.grade : 'N/A',
      };
    });
}
