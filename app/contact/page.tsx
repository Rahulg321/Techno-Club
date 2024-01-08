import ContactSection from "../sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us for any future enquiries",
};

const Contact = () => {
  return (
    <>
      <ContactSection />

      <section className="narrow-container text-center">
        <h2>Come find Us!</h2>

        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3424.6322113824103!2d75.7553265!3d30.8689706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8149aab1f28b%3A0x6182c145432ffc4e!2sPCTE%20College%20of%20Computer%20Applications!5e0!3m2!1sen!2sin!4v1702120762784!5m2!1sen!2sin"
            // width="600"
            // height="450"
            className="border m-auto rounded-md max-w-[90%] w-[50rem] md:h-[30rem] h-[20rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
