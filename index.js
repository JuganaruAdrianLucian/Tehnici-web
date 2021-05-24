var accounts = [{username: 'Matei', email: '123@123', password: '123123'}, {username: 'Razvan', email: '456@456', password: '456456'}];

function createAccount(){
    var info = document.getElementById("sign-up-form");
    accounts.concat(info);
    document.getElementById("saved-credentials-message").display = block;
}

function verifyInfo(){
    var info = document.getElementById("sign-in-form");
    var correctCredentials = false;
    for(i = 0; i < accounts.length; i++)
    {
        if(accounts[i].email == info.email && accounts[i].password == info.password)
        {
            correctCredentials = true;
        }
    }
    if(correctCredentials == false)
    {
        document.getElementById("wrong-credentials-message").display = block;
    }
}