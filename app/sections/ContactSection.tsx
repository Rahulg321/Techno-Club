import { Link } from "@nextui-org/react";
import { CiLink } from "react-icons/ci";
import ContactForm from "@/components/ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className="min-h-[90vh] big-container flex flex-col md:flex-row">
      <div className="border-red-500 flex-1 flex flex-col items-center md:justify-center text-balance">
        <h1>Lets Chat💻</h1>
        <h2>Introduce Yourself🔥</h2>
        <p>Lets create something together</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <p>Send us a message🚀</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
