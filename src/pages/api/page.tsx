'use client'
type JSONProps = {
  data?: string[];
};

export default function API (props: JSONProps) {
  console.log(props.data);
  try {
    // await sendEmail();
    // res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getStaticProps = async () => {
  if (process.env.send_grid_api_key)
    return {
      props: {
        data: process.env.send_grid_api_key
          ? ['secret', 'data']
          : ['public', 'data'],
      },
    }
  throw new Error("Secrets don't exist");
};