const usuarios = [
    {
        nomeUsuario : "batata",
        email : "magalhes5@gmail.com",
        senha: "123456"
    },
    {
        nomeUsuario: "batataFrita",
        email: "contato.lucaslmagalhes@gmail.com",
        senha: "123456"
    },
];

const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha")
//botão de entrar
const btnEntrar = document.getElementById("btn-entrar")

btnEntrar.addEventListener("click" , () =>{
    // 1) capturar os dados dos campos
    const email = campoEmail.value
    const senha = campoSenha.value
    console.log(email,senha)
    //2) chegar no array se existe usuario com email digirado
    let usuarioValido = usuarios.find((usuarios) => usuarios.email === email);
    console.log(usuarioValido)
    //3) checar se a senha é correta
    if(usuarioValido !== undefined){
        if(usuarioValido.senha === senha){
            window.location.pathname = "./app.html"
        }else{
            alert("senha incorreta")
        }
    }else{
        alert("usuario no existe")
    }
})
