import { sendEmail } from '@/lib/send-grid';

export default async (req, res) => {
  try {
    await sendEmail();
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    console.error(res);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}