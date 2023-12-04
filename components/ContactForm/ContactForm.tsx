import SubmitButton from '../SubmitButton/SubmitButton';

const ContactForm = () => {
  const addContactInquiry = async (formData: FormData) => {
    'use server';

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const name = formData.get('name');
    console.log(name);
  };

  return (
    <form action={addContactInquiry} className="flex flex-col gap-3">
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
      <input
        type="text"
        placeholder="subject"
        name="subject"
        required
        className="input-field"
      />

      <textarea
        name="message"
        cols={30}
        rows={5}
        className="input-field"
        placeholder="your message here"
        required
      ></textarea>

      <SubmitButton buttonCaption="Submit"/>
    </form>
  );
};

export default ContactForm;
