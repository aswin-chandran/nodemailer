const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:"aswin1998ply@gmail.com",
        pass : "tnef anfx hnwk huwv"
    }
})

let details = {
    from:"aswin1998ply@gmail.com",
    to :"arjith131997@gmail.com",
    subject :" testing nodemailer",
    text :"testing sender",


}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("it has an error",err)
    }
    else{
        console.log('Email has been send')
    }
})