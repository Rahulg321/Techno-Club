const Contact = () => {
  return (
    <section className="big-container">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h2>Lets Chat💻</h2>
          <h2>Introduce Yourself🔥</h2>
          <p>Lets create something together</p>
          <p>Email us at computerscience@gmail.com</p>
        </div>

        <div>
          <form action="" className="flex flex-col gap-3">
            <input type="text" placeholder="name" required />
            <input type="email" placeholder="email" required />
            <input type="text" placeholder="subject" required />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="your message here"
              required
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
