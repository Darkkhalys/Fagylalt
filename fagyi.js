function init(){
    document.getElementById("button").addEventListener("click", email);
    document.getElementById("button").addEventListener("click", bigtext);
    document.getElementById("button").addEventListener("click", buttonas);
    let emailHelyes = 0;
    let textHelyes = 0;
    }
    
    function email()
    {
        let email = document.getElementById("email").value;
        if(email.includes('@'))
        {
            document.getElementById("emailHiba").innerText="megfelel"
            emailHelyes=1;
        }
        else
        {
            document.getElementById("emailHiba").innerText="Hibás email, @-ot tartalmaznia kell"
            emailHelyes = 0;
        }
    }
    
    function bigtext()
    {
        let text = document.getElementById("bigtext").value;
        if(text.length < 10)
        {
            document.getElementById("textHiba").innerText="Nem lehet rövidebb, mint 10 karakter!"
            textHelyes = 0;
        }
        else
        {
            document.getElementById("textHiba").innerText="megfelel"
            textHelyes=1;
        }
    
        if(text.length > 50)
        {
            document.getElementById("form").style.backgroundColor="green"
        }
        else
        {
            document.getElementById("form").style.backgroundColor="red"
        }
    }
    
    function buttonas()
    {
        if(emailHelyes == 1 && textHelyes == 1)
        {
            document.getElementById("Eredmeny").innerText="Köszönjök az értékelést!"
        }
        else
        {
            document.getElementById("Eredmeny").innerText=""
        }
    }
    
    document.addEventListener("DOMContentLoaded", init)