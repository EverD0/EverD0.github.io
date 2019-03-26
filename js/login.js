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
