'use client'
import Input from '@/components/input';
import {useState} from 'react';
import Textarea from '@/components/textarea';
import Checkbox from '@/components/checkbox';
import TextContent from '@/components/text-content';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const Contact = () => {

  const supabase = createClientComponentClient()

  const [name, setName] = useState<string | undefined>();
  const [surname, setSurname] = useState<string | undefined>();
  const [tel, setTel] = useState<string | undefined>();
  const [telValidation, setTelValidation] = useState<string>('');
  const [email, setEmail] = useState<string | undefined>();
  const [emailValidation, setEmailValidation] = useState<string>('');
  const [post, setPost] = useState<string | undefined>();
  const [postValidation, setPostValidation] = useState<string>('');
  const [subject, setSubject] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const [isPrivacyChecked, setPrivacyChecked] = useState<boolean>(false);
  const [isContactVisible, setContactVisible] = useState<boolean>(true);

  const validateTel = (value: string) => {
    const numberWithoutDash = value.replaceAll('-', '');
    if (numberWithoutDash.length !== 9) {
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

  const validatePost = (value: string) => {
    const postWithDashRegExp = /^[0-9]{2}-[0-9]{3}$/
    const postRegExp = /^[0-9]{5}$/
    const normalizedValue = value.replaceAll(" ", "");
    if (!postWithDashRegExp.test(normalizedValue) && !postRegExp.test(normalizedValue)) {
      setPost(normalizedValue);
      setPostValidation('Twój kod pocztowy jest niepoprawny');
      return;
    }

    if (!normalizedValue.includes('-')) {
      const postWithDash = `${normalizedValue.substring(0, 2)}-${normalizedValue.substring(2, 5)}`
      setPost(postWithDash);
    }
    setPostValidation('');
  }

  const send = () => {
    if (name && surname && tel && email && post && subject && content && isPrivacyChecked) {
      supabase.functions.invoke('contact-email', {
        body: {name, surname, tel, email, post, subject, content}
      }).then(console.log)
      setContactVisible(false);
    }
    setContactVisible(true);
  }

  return (
    <div className="flex flex-col text-lg font-medium break-normal my-32">
      {isContactVisible && <>
          <div className="font-bold text-3xl my-2">Kontakt</div>
          <Input placeholder="Imię" id="name" label="Imię" type="text" maxLength={60}
                 setValue={(value) => setName(value)}
                 requiredError='Twoje imię jest wymagane'/>
          <Input placeholder="Nazwisko" id="surname" label="Nazwisko" type="text" maxLength={60}
                 setValue={(value) => setSurname(value)} requiredError='Twoje nazwisko jest wymagane'/>
          <Input placeholder="Telefon kontaktowy" id="tel" label="Telefon kontaktowy" maxLength={14} type="tel"
                 inputMode="numeric" setValue={(value) => validateTel(value)} validationError={telValidation}
                 requiredError='Twój numer telefonu jest wymagany'/>
          <Input placeholder="Email" id="email" label="Email" type="email" setValue={(value) => validateEmail(value)}
                 validationError={emailValidation} requiredError='Twój email jest wymagany'/>
          <Input placeholder="Kod pocztowy" id="zip" label="Kod pocztowy" type="text" pattern="[0-9]{5}"
                 inputMode="numeric"
                 maxLength={6} minLength={5} setValue={(value) => validatePost(value)} validationError={postValidation}
                 requiredError='Twój kod pocztowy jest wymagany'/>
          <Input placeholder="Temat" id="subject" label="Temat" type="text" setValue={(value) => setSubject(value)}
                 requiredError='Temat wiadomości jest wymagany'/>
          <Textarea placeholder="Treść wiadomości" label="Treść wiadomości" id="content"
                    setValue={(value) => setContent(value)} requiredError='Treść wiadomości jest wymagana' rows={8}/>
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