const produtos = [
    {nome: 'coxinha', preco: 4.0},
    {nome: 'pastel', preco: 3.0},
    {nome: 'suco', preco: 2.0}

    
];

let exibirProduto = (p, i) => {
    console.log(i + '. ' + p.nome + ' R$ ' + p.preco.toFixed(2));
};

console.log('TODOS OS PRODUTOS');
produtos.forEach(exibirProduto);

console.log('\nPRODUTOS DE MENOS DE 3 R$');
produtos.filter(p => p.preco <= 3).forEach(exibirProduto);

console.log('\nAUMENTO DE 20% EM TODOS OS PRODUTOS');
produtos.map(p => {
    return{
        nome: p.nome,
        preco: p.preco *= 1.2
    }
}).forEach(exibirProduto);
