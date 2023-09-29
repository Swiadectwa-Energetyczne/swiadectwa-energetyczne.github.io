import sgMail from '@sendgrid/mail';

export const sendEmail = async () => {
  sgMail.setApiKey(process.env.send_grid_api_key);

  const msg = {
    to: "drolewski@gmail.com",
    from: 'swiadectwa.eko@gmail.com',
    subject: 'Test SD',
    text: 'TEST SENDGRID POZDRAWIAM SERDECZNIE',
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to drolewski@gmail.com`);
  } catch (error) {
    console.error(error);
  }
};