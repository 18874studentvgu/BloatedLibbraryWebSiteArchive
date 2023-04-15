const nodemailer=require('nodemailer')

const htmlContent=` //email content
  <h1>Hello</h1>
  <p>This is a test email</p>
  `;

  async function main(){
    const testAcc=await nodemailer.createTestAccount()
    const transporter=nodemailer.createTransport({
      host:'smtp.ethereal.email',
      port:465,
      secure:true,
      auth:{
        user:testAcc.user,
        pass:testAcc.pass
      }
    })
    const info=await transporter.sendMail({
      from:'foo@x.com',
      to:'bar@x.com',
      subject:'Testing',
      html:htmlContent,
    })
    console.log('Message sent: '+info.messageId)
    console.log('URL: '+nodemailer.getTestMessageUrl(info))
  }
main().catch(e=>console.log(e))