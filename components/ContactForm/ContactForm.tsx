'use client';

import SubmitButton from '../SubmitButton/SubmitButton';
import { sendContactFormEmail } from '@/app/actions';
import toast from 'react-hot-toast';

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        // toast('sending message');
        const response = await sendContactFormEmail(formData);
        if (response.success) {
          toast.success('successfully send message');
        }
        if (response.error) {
          toast.error('Could not send message');
        }
      }}
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="name"
        name="name"
        required
        className="input-field"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        required
        className="input-field"
      />

      <textarea
        name="content"
        cols={30}
        rows={5}
        className="input-field"
        placeholder="your message here"
        required
      ></textarea>

      <SubmitButton buttonCaption="Submit" />
    </form>
  );
};

export default ContactForm;
