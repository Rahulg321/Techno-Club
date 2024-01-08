import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className="h-[90vh] big-container flex flex-col lg:flex-row">
      <div className="border-red-500 flex-1 flex flex-col items-center justify-center">
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

      <div className="flex-1 flex flex-col items-center justify-center">
        <p>Send us a message🚀</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
