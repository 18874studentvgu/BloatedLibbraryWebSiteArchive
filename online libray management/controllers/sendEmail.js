const nodemailer=require('nodemailer')

  async function main(){
    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'vgulibpeteam3@gmail.com',
        pass:'xittksaucqhzwgiz'
      }
    })
    const info=await transporter.sendMail({
      from:'vgulibpeteam3@gmail.com',
      to:'dodinhdong28092002@gmail.com',
      subject:'NodeJs Email',
      text:'Sending email with NodeJs'
    })
    console.log('Message sent: '+info.messageId)
    console.log('URL: '+nodemailer.getTestMessageUrl(info))
  }
main().catch(e=>console.log(e))