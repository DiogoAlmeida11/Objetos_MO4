const student = {
    name: "David Silva",
    course: "POO",
    grade: 12
    }
listObjectNames()
function listObjectNames() {
    for (const key in student) {
        console.log(key)                
    }    
}
//console.log(student.grade);
//delete student.grade
//console.log(student.grade);

function calcObjectSize() {
    let count = 0
    for (const key in student) {
        count++                                
    }
    console.log(count)
}

