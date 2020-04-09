const student = {
    name: "David Silva",
    course: "POO",
    grade: 12
    }
function listarObjetos (){
    for (const key in student) {
        console.log(key)                
    }    
}
