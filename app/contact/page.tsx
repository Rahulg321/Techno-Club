


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
            <input
              type="text"
              placeholder="name"
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="name"
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="name"
              required
              className="input-field"
            />

            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
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

export default Contact;
