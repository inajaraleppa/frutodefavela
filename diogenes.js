
var botao = document.getElementById('botao');
var meuNome = 'Inajara';

botao.onclick = function() {
  alert('Olá ' + meuNome);
}

var botaoComida = document.getElementById('botaoComida');

botaoComida.onclick = function() {
  var comida = prompt('Qual sua comida favorita?');
  alert('Hmmm, a comida ' + comida + ' é uma delícia mesmo!');
}

var primeiraImagem = "https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.6435-9/104690969_298643718191123_7609166083198954548_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=a26aad&_nc_ohc=yuacoPV5BTUAX8aSL5C&_nc_ht=scontent.fpoa4-1.fna&oh=148734a1c93ef5673955c1dd5d095486&oe=61311E79"
var segundaImagem = "https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.6435-9/90756155_236169021105260_30085769167110144_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=a26aad&_nc_ohc=zSiW0wgTIV4AX9zwE5o&_nc_ht=scontent.fpoa4-1.fna&oh=10107623f7194eccd563c0b88a3fe2de&oe=612F78FE"
var terceiraImagem = "https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.6435-9/104715164_300883581300470_4392951971785729761_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=sWeyf9_SpvQAX8h6wtS&tn=Gn_Y23ywRHi1rnYR&_nc_ht=scontent.fpoa4-1.fna&oh=a56ce5a36eaac95e286e7f103ed2d82c&oe=61312F1D"
var listaImagens = [primeiraImagem, segundaImagem, terceiraImagem];
var listaDescricao = ['Primeira imagem', 'Segunda imagem', 'Terceira imagem'];
var contador = 1;
var botaoAdicionarTarefa = document.getElementById('adicionaTarefa');
var listaDeTarefas = [];
var tarefa = document.getElementById('tarefa');

botaoAdicionarTarefa.onclick = function() {
  listaDeTarefas.push(tarefa.value);
  alert(listaDeTarefas);
}

var carrossel = document.getElementById('carrossel');
var botaoAtualizarCarrossel =  document.getElementById('atualizaCarrossel')
var descricaoCarrossel = document.getElementById('descricaoCarrossel')

botaoAtualizarCarrossel.onclick = function() {
  if(contador == listaImagens.length){
    contador = 0;
  }
  carrossel.setAttribute('src', listaImagens[contador]);
  descricaoCarrossel.innerHTML = listaDescricao[contador];

  contador = contador + 1;
}

// setTimeout(function(){
//   carrossel.setAttribute('src', terceiraImagem);
//   descricaoCarrossel.innerHTML = 'Alguma outra descrição de imagem';
// }, 2000);