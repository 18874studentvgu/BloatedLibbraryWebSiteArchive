const nodemailer=require('nodemailer')

const htmlContent=`
  email content here
  `;

  async function main(){
    const transporter=nodemailer.createTransport({
      service:'hotmail',
      auth:{
        user:'vgulibpeteam3@outlook.com.vn',
        pass:'vgupe2023'
      }
    })
    const info=await transporter.sendMail({
      from:'vgulibpeteam3@outlook.com.vn',
      to:'dodinhdong28092002@gmail.com',
      subject:'Sending email with nodejs',
      html:htmlContent,
    })
    console.log('Message sent: '+info.messageId)
    console.log('URL: '+nodemailer.getTestMessageUrl(info))
  }
main().catch(e=>console.log(e))