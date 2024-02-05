const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {email, name, tel, subject, content} = await req.json();

    console.log(email, name, tel, subject, content);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'swiadectwa.eko.kontakt@swiadectwa-eko.pl',
        reply_to: `${email}`,
        to: `swiadectwa.eko.kontakt@gmail.com`,
        subject: `Zapytanie kontaktowe: ${subject}`,
        html: `<h1>Nowe zapytanie o kontakt od: ${email}</h1><h2>Dane osobowe interesanta:</h2><h3>Imię: ${name}</h3><h3>Numer telefonu: ${tel ?? ""}</h3><h3>Email: ${email}</h3><h3>Temat wiadomości: ${subject}</h3><h3>Tresć wiadomości:</h3><h3>${content ?? ""}</h3>`,
      }),
    })

    const data = await res.json()

    return new Response(
      JSON.stringify(data), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else {
    return new Response(
      JSON.stringify({error: 'Method Not Allowed'}), {
        headers: {"content-type": "application/json"},
        status: 405
      });
  }
}

export {handler as POST};