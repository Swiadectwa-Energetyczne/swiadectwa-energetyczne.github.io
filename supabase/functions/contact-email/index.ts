import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const handler = async (_request: Request): Promise<Response> => {
  const requestBody = _request.body;
  console.log(requestBody);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `${requestBody.email}`,
      to: 'swiadectwa.eko.kontakt@gmail.com',
      subject: `Zapytanie kontaktowe: ${requestBody.subject}`,
      html: ```
            <h1>Nowe zapytanie o kontakt od: ${requestBody.email}</h1>
            <h2>Dane osobowe interesanta:</h2>
            <h3>Imię: ${requestBody.name}</h3>
            <h3>Nazwisko: ${requestBody.surname}</h3>
            <h3>Numer telefonu: ${requestBody.tel}</h3>
            <h3>Email: ${requestBody.email}</h3>
            <h3>Adres pocztowy: ${requestBody.post}</h3>
            <h3>Temat wiadomości: ${requestBody.subject}</h3>
            <h3>Tresć wiadomości:</h3>
            <h4>${requestBody.content}</h4>
        ```,
    }),
  })

  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  })
}

serve(handler)