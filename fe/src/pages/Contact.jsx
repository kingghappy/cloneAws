const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Contact Us
      </h2>
      <form className="max-w-lg mx-auto bg-white shadow-md rounded p-6 mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-2 border rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            className="w-full mt-2 p-2 border rounded"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
