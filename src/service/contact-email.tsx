import {SupabaseClient} from '@supabase/supabase-js';

export interface ContactEmailRequest {
  name: string;
  surname: string;
  email: string;
  tel: string;
  post: string;
  subject: string;
  content: string;
}

export const contactEmail = (supabaseContext: SupabaseClient, request: ContactEmailRequest) => {
  supabaseContext.functions.invoke('contact-email', {body : request}).then(console.log)
}