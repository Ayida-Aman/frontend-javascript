interface Student{
        firstName: string;
        lastName: string;
        age: number;
        location: string;
}

const student1: Student = {
    firstName: "Ayida Aman",
    lastName: "Shifa",
    age: 21,
    location: "Addis Ababa, Ethiopia"
}

const student2: Student = {
    firstName: "Sekina Aman",
    lastName: "Shifa",
    age: 21,
    location: "Riyad, Saudi"
}

const studentsList: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement("table")

studentsList.forEach((student)=>{
    const row = table.insertRow()
    const cell1 = row.insertCell()
    const cell2 = row.insertCell()

    cell1.innerText = student.firstName
    cell2.innerText = student.location
})