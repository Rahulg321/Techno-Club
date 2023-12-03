import Link from 'next/link';
import ContactForm from '@/components/ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <section className="big-container">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1>Lets Chat💻</h1>
          <h2>Introduce Yourself🔥</h2>
          <p>Lets create something together</p>
          <p>
            Email us at
            <Link
              href=""
              className="link"
              data-tool-tip="Our official Email Account"
            >
              computerscience@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <p>Send us a message🚀</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
