import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="big-container">
      <div className="flex flex-col lg:flex-row gap-4 border-class justify-around">
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

        <div className="px-4 py-6">
          <p>Send us a message 🚀</p>
          <form action="" className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="name"
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="subject"
              required
              className="input-field"
            />
            <input
              type="email"
              placeholder="email"
              required
              className="input-field"
            />

            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className="input-field"
              placeholder="your message here"
              required
            ></textarea>

            <button className="primary-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
