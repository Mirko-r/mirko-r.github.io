$("#mail_form").on('submit', function (event) {
    event.preventDefault();
    submitForm();
});

function submitForm(){
    var nome = $("#input-name").val();
    var email = $("#input-email").val();
    var messaggio = $("#input-message").val();
    Email.send({
        Host : "smtp.libero.it ",
        Username : "04mirko@liebro.it",
        Password : "C!9a!qy9bCGpiA+",
        To : '04mirko@libero.it',
        From : email,
        Subject : "nuova mail dal form",
        Body : "<b>Una nuova mail da : </b>" +nome + "<br><br>" + "<b>Messaggio: </b>" + messaggio
        }).then(
            alert("mes")
        );
}

function formSuccess(){
    $("#mail_form")[0].reset();
}

/*function hideForm() {
    var x = document.getElementById("mail_form");
    x.style.display = "none";
    document.getElementById("success-box").style.visibility = "visible";
    $('#continua').on('click', function(event){
        event.preventDefault();
        displayForm();
    });
} 

function displayForm(){
    document.getElementById("success-box").style.visibility = "hidden";
    var x = document.getElementById("mail_form");
    x.style.display = "";
}*/