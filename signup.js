let patterns={
    phone: /^((\+91|91)?[6-9]{1})\d{9}$/i,
    naam: /^[A-Za-z]+(\s[A-Za-z]+(\s[A-Za-z]+)?)$/i,
    umar: /^[1-9]\d{1,2}$/i,
    pass: /^[A-Za-z][\w\.\+\@\$\-\_]{7,20}$/i,
    sheher: /^([A-Za-z]+(\s[A-Za-z]+)?)$/i,
    e_mail: /[a-z\d_\-\.]+@[A-Za-z]+\.[A-Za-z]{2,6}((\.[A-Za-z]{2,6})+)?/i                 //sanjeet_m14.@gmail.com
}
function validateForm(){
    var name=document.getElementById("Name").value;
    var q=document.getElementById("Qualification").value;
    var mobile=document.getElementById("Mobile").value;
    var age=document.getElementById("age").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("Cpassword").value;
    var city=document.getElementById("city").value;
    if(!patterns.naam.test(name)){
        document.getElementById("Name").style.borderColor = "red";
        alert("Enter a valid name")
        return false;
    }
    else if(q=="None"){
        document.getElementById("Qualification").style.borderColor = "red";
        alert("Select an educational qualification.")
        return false;
    }
    else if(!patterns.phone.test(mobile)){
        document.getElementById("Mobile").style.borderColor = "red";
        alert("Enter a valid mobile no.")
        return false;
    }
    else if(!patterns.umar.test(age)){
        document.getElementById("age").style.borderColor = "red";
        alert("Enter a valid age")
        return false;
    }
    else if(!patterns.pass.test(password)){
        document.getElementById("password").style.borderColor = "red";
        alert("Enter a valid password")
        return false;
    }
    else if(password!=cpassword){
        document.getElementById("Cpassword").style.borderColor = "red";
        alert("Password and confirm password do not match")
        return false;
    }
    else if(!patterns.sheher.test(city)){
        document.getElementById("city").style.borderColor = "red";
        alert("Enter a valid city")
        return false;
    }
    else if(!patterns.e_mail.test(email)){
        document.getElementById("email").style.borderColor = "red";
        alert("Enter a valid email address")
        return false;
    }
    else{
        return true;
    }
}
