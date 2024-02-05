'use client'
import Input from '@/components/input';
import {useState} from 'react';
import Textarea from '@/components/textarea';
import Checkbox from '@/components/checkbox';
import TextContent from '@/components/text-content';

export const Contact = () => {

  const [name, setName] = useState<string | undefined>();
  const [tel, setTel] = useState<string | undefined>();
  const [telValidation, setTelValidation] = useState<string>('');
  const [email, setEmail] = useState<string | undefined>();
  const [emailValidation, setEmailValidation] = useState<string>('');
  const [subject, setSubject] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const [isPrivacyChecked, setPrivacyChecked] = useState<boolean>(false);
  const [isContactVisible, setContactVisible] = useState<boolean>(true);

  const validateTel = (value: string) => {
    const numberWithoutDash = value.replaceAll('-', '');
    if (numberWithoutDash.length > 0  && numberWithoutDash.length < 9) {
      setTelValidation('Twój numer telefonu powinien zawierać 9 cyfr');
      setTel(numberWithoutDash);
      return;
    }
    setTel(numberWithoutDash);
    setTelValidation('');
  }

  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegExp.test(value)) {
      setEmailValidation('Twój email jest niepoprawny')
      return;
    }
    setEmailValidation('');
  }

  const send = async () => {
    if (name && !telValidation && email && !emailValidation && subject && isPrivacyChecked) {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, tel, email, subject, content})
      });
      setContactVisible(false);
      return;
    }
    setContactVisible(true);
  }

  return (
    <div className="flex flex-col text-lg font-medium break-normal mb-32">
      {isContactVisible && <>
          <div className="font-bold text-3xl my-2">Kontakt</div>
          <div className="text-xl my-2">Zadzwoń pod numer telefonu: <a href="tel:607857352" className="font-bold">607857352</a> lub wyślij poniższy formularz kontaktowy.</div>
          <Input placeholder="Imię" id="name" label="Imię" type="text" maxLength={60}
                 setValue={(value) => setName(value)}
                 requiredError='Twoje imię jest wymagane'/>
          <Input placeholder="Telefon kontaktowy" id="tel" label="Telefon kontaktowy" maxLength={14} type="tel"
                 inputMode="numeric" setValue={(value) => validateTel(value)} validationError={telValidation}
                 subLabel="Opcjonalny"/>
          <Input placeholder="Email" id="email" label="Email" type="email" setValue={(value) => validateEmail(value)}
                 validationError={emailValidation} requiredError='Twój email jest wymagany'/>
          <Input placeholder="Temat" id="subject" label="Temat" type="text" setValue={(value) => setSubject(value)}
                 requiredError='Temat wiadomości jest wymagany'
                 subLabel="Jeśli Świadectwo jest pilnie potrzebne - proszę o dopisek - PILNE w temacie wiadomości."/>
          <Textarea placeholder="Treść wiadomości" label="Treść wiadomości" id="content"
                    setValue={(value) => setContent(value)} rows={8} subLabel="Opcjonalna"/>
          <Checkbox setValue={(value) => setPrivacyChecked(value)} requiredError={'Zgoda jest wymagana'} id="privacy"
                    textHtml={
                      ["Zgoda na przetwarzanie i ",
                        <a key="contact-privacy-policy" href="/privacy-policy" target="_blank">polityka
                          prywatności</a>]}/>
          <div className="flex justify-center w-full">
              <button className="py-2 px-4 bg-secondary-bg text-font-secondary rounded-md w-32 md:hover:animate-pulse"
                      type="button" onClick={() => send()}>Wyślij
              </button>
          </div>
      </>}
      {
        !isContactVisible && <TextContent additionalClass="font-semibold text-xl my-8"
                                          htmlText={["Dziękuję za wypełnienie formularza kontaktowego. Zrobię wszystko, co w jej mocy, aby odpowiedzieć na Państwa zapytanie jak najszybciej."]}/>
      }
    </div>
  )
}

export default Contact;