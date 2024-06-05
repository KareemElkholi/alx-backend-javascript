interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Denise',
    lastName: 'Martin',
    age: 25,
    location: 'San Francisco',
}

const student2: Student = {
    firstName: 'Rachel',
    lastName: 'Russell',
    age: 20,
    location: 'New York',
}

const studentsList: Student[] = [student1, student2]

const renderTable = (studentsList: Student[]): void => {
    const table = document.createElement('table');
    let row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', '<th>firstName</th>');
    row.insertAdjacentHTML('beforeend', '<th>location</th>');
    table.insertAdjacentElement('beforeend', row);

    for (const student of studentsList) {
        row = document.createElement('tr')
        row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', row);
    }

    document.body.insertAdjacentElement('beforeend', table);
}
  
renderTable(studentsList);