
const nome = document.getElementById('nome');
const cidade = document.getElementById("cidade");
const celular = document.getElementById('celular');
const email = document.getElementById("mail");
const criancas = document.getElementById("criancas");
const criancasUntilFive = document.getElementById("criancas-until-five");

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {


    if(nome.value === "" || nome.value == null || nome.value.indexOf(" ") >= 0) {
        alert("Preencha o nome!!");
        e.preventDefault();
        return false;
    }


    if(cidade.value === "" || cidade.value == null || cidade.value.indexOf(" ") >= 0) {
        alert("Preencha a cidade!!");
        e.preventDefault();
        return false;
    }



    if(celular.value === "" || celular.value == null || celular.value.indexOf(" ") >= 0 ) {

        alert("Preencha o número de celular");
        e.preventDefault();
        return false;

    } 

    if(email.value === "" || email.value == null || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {

        alert("Preencha o campo email");
        e.preventDefault();
        return false;
    
    }


});




 function setCriancaAge() {
    if(criancasUntilFive.value > 5) {
        alert("Esse campo é somente para crianças até 5 anos");
        e.preventDefault();
        return false;
    }
}





