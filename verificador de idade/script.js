function verificar() {
//função on click de verificação 

var data = new Date() //coleta a data para o calculo da idade
var ano = data.getFullYear() //coleta o ano 
var form = document.getElementById('thi') //coleta o ano de nascimento da pessoa
var res = document.getElementById('res') //ecibe o resultado apartir de uma div
if (form.value.length == 0 || Number(form.value > ano)) {
    //condição primaria -> diz que o ano de nascimento n pode ser de maior valor que o ano atual
    window.alert(`Erro! Por Favor Verifique os dados.`) //mensagem de erro em caso de inserção erronea de dados
} else {
    //essa chave só sera fechada na ultima linha do codigo e todo o resto deve estar dentro dela 

    //caso a condição acima seja satisfeita se abre outra aba 
  var sex = document.getElementsByName('sexm') //cria a variavel do sexo selecionado pela pessoa 
  var idade = ano - Number(form.value) //faz o calculo da idade a partir dos dois valores fornecidos (ano atual - ano de nascimento)
  var genero = '' //exibira o sexo escolhido como não sabemos qual é ela fica vazia por ora 
  var img = document.createElement('img') //método alternativo para criação e exibição de imagens 
  img.setAttribute('id', 'foto') 
 
  if (sex[0].checked) {
    //caso a caixa de sexo selecionada seja masc
    //a caixa 0 é a primeira e a 1 a segunda 
    genero = 'Homem' 

    // como agora o usuario já preencheu a informação do sexo adicionei o nome à variavel genero  
   // serie de condições de acordo com cada faixa etária 
    if (idade >= 0 && idade <= 3 ) {
        genero = 'bebe' //muda a exibição do genero 
        img.setAttribute('src', 'bebemen.png') //comando para a inserção da imagem que deve estar na mesma pasta do projeto
    } else if (idade > 3 && idade <= 12) {
        genero = 'menino'
        img.setAttribute('src', 'menino.png') 
    } else if (idade > 12 && idade <= 20) { 
        genero = 'adolescente'
        img.setAttribute('src', 'adolescentemen.png') 
    } else if (idade > 20 && idade < 60) {
        img.setAttribute('src', 'adultomen.png') 
    } else if (idade >= 60) {
        img.setAttribute('src', 'idosomen.png') 
    } 
  } //essa é a chave do if(sex[0].checked)

    else if (sex[1].checked) { 
        //o mesmo que foi feito acima 
        genero = 'Mulher' 
        if (idade >= 0 && idade <= 3 ) {
            genero = 'bebe'
            img.setAttribute('src', 'bebegirl.png') 
        } else if (idade > 3 && idade <= 12) {
            genero = 'menina'
            img.setAttribute('src', 'menina.png') 
        } else if (idade > 12 && idade <= 20) {
            genero = 'adolescente'
            img.setAttribute('src', 'adolescentegirl.png') 
        } else if (idade > 20 && idade <= 60) {
            img.setAttribute('src', 'adultagirl.png') 
        } else if (idade > 60) {
            img.setAttribute('src', 'idosagirl.png') 
        } 
    } //essa é a chave do if(sex[1].checked)

    res.style.textAlign = 'center' // alinhamento do texto feito diretamente pelo js 
res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //comando de exibição das infos
res.appendChild(img) // comando para exbir a imagem
    } 
}
//tomar cuidado com o fechamento das chaves nas condições 
