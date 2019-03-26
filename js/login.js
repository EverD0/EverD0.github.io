/*
var usuarios = {usuer:"Mestre", senha:"Everardo"};



login(user_p,senha_p){

  x = getElementById('user');
  y = getElementById('senha');

  if(x == usuarios.usuer && y == usuarios.senha){
    window.location.href = "google.com";
  }else{
    getElementById('span').innerHTML = "Credenciais inválidas.</br> Verifique-as e tente novamente!";
  }
}
*/
//essa função da certo, só tem que saber como faz pra ela entrar direito no html
function login(){
  var usuarios = {user:"Mestre", senha:"Everardo"};
  var x = document.getElementById('user');
  var y = document.getElementById('senha');
  console.log("chamou o login")
  console.log(x,y)
  console.log(x.value);

  if(x.value == usuarios.user && y.value == usuarios.senha){
    window.location.href = "https://www.google.com";
    console.log("entrou no if")
  }else{
    document.getElementById('error').innerHTML = "Credenciais inválidas.</br> Verifique-as e tente novamente!";
  }
}
