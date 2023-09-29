import sgMail from '@sendgrid/mail';

export const sendEmail = async () => {
  console.log(process.env.send_grid_api_key);
  sgMail.setApiKey(process.env.send_grid_api_key);
  const msg = {
    to: "drolewski@gmail.com",
    from: 'swiadectwa.eko@gmail.com',
    subject: 'Test SD',
    text: 'TEST SENDGRID POZDRAWIAM SERDECZNIE xDDDDDDDDDDDDDDDDDDDDDDDDDDD',
  };
  sgMail.send(msg).catch(e => console.log(e));
};