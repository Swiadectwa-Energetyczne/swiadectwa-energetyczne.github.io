import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const handler = async (_request: Request): Promise<Response> => {
  if (_request.method === 'OPTIONS') {
    return new Response('ok', { headers: { ...corsHeaders }, status: 200 })
  }

  const {email, name, surname, tel, post, subject, content} = await _request.json();
  console.log(email);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
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

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  })
}

serve(handler)