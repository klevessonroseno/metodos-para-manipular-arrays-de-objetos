const alunos = [
    {
        nome: 'Paulo Vilela',
        media: 5.25
    },
    {
        nome: 'Maria Cláudia',
        media: 6.9
    },
    {
        nome: 'Roberto Augusto',
        media: 2.8
    },
    {
        nome: 'Carla Maria',
        media: 8.25
    },
    {
        nome: 'André Silva',
        media: 8.2
    }
];
// const novasMedias = alunos.map(({ media }) => media + 2);
// const novasMedias = alunos.map(aluno => aluno.media + 2);
/*var novasMedias = alunos.map(function(aluno){
    return aluno.media + 2;
});*/

const novasMedias = alunos.map(({ media }) => {
    if(media <= 8) return media + 2;

    return 10;
});

console.log(novasMedias); // Saída [ 7.25, 8.9, 4.8, 10, 10 ]