import sgMail from '@sendgrid/mail';

export const sendEmail = async () => {
  // sgMail.setApiKey(process.env.send_grid_api_key);
  console.log(process.env.send_grid_api_key);

  const msg = {
    to: "drolewski@gmail.com",
    from: 'swiadectwa.eko@gmail.com',
    subject: 'Test SD',
    text: 'TEST SENDGRID POZDRAWIAM SERDECZNIE xDDDDDDDDDDDDDDDDDDDDDDDDDDD',
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to drolewski@gmail.com`);
    console.log(process.env.send_grid_api_key);
    return process.env.send_grid_api_key
  } catch (error) {
    console.error(error);
  }
};