const grades = [
    {
    name: 'Rui',
    grade: 8
    },
    {
    name: 'Ana',
    grade: 12
    },
    {
    name: 'Carla',
    grade: 14
    }]
    function adicionarObjeto() {
        const name = prompt("Nome:")
        const grade = +prompt("Nota:")

        const newObj = {
            name: name,
            grade: grade
        }
    }
    function mediaDasNotas(){
        let sum = 0;
        for (const object of grades) {
            sum += object.grade
        }
        console.log(sum/grades.length);
    }
    function notasPositivas(){
        let names = ''
            for (const obj of grades) {
                if(obj.grade >= 10) {
                    names += obj.name + '\n'
                }                
            }
            console.log(names)            
    }