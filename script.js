
let studants = [
    {
        nome : "Adriano",
        firstNote : 5,
        secondNote : 6,
    },

    {
        nome : "Gustavo",
        firstNote : 7,
        secondNote : 8 
    }
];

function average (firstNote, secondNote) {

    let average = (firstNote + secondNote)/2;
    return average
}


for ( let studant of studants ) {

    let result = average ( studant.firstNote, studant.secondNote)

    console.log(result);
    
    if (result < 7) {
        alert(`A media do(a) aluno(a) ${studant.nome} é : ${result},
        Não foi dessa vez ${studant.nome} !!!! Tente novamente`)
    }else{
        alert(`A media do(a) aluno(a) ${studant.nome} é : ${result} 
        Parbéns,  ${studant.nome}!!!! Você foi aprovada`)
    
    }

}







