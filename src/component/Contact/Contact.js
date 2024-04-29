import React, { useState } from "react";
import ContactDataService from "../../service/Contact-Service";

const Contact = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      fullName,
      email,
      message,
    };

    try {
      await ContactDataService.addContacts(newContact);
      alert("contact added");
    } catch (error) {
      console.log(error);
    }

    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center p-5">
      <div className="flex flex-col justify-center items-center shadow-lg  bg-[#E5E8F2] w-screen">
        <h1 className="text-[22px] font-medium mt-2 text-center">Contact Us</h1>
        <div className=" flex max-w-3xl p-5 items-center lg:flex lg:flex-row  md:flex md:flex-row min-[320px]:flex min-[320px]:flex-col">
          <div className="w-1/2">
            <p className="text-[14px]">
              Have a question or need assistance? Reach out to us directly! Our
              team is here to help, and we're just a message away
            </p>
          </div>
          <div className="md:w-1/2 px-8 md:px-16">
            <form
              action=""
              className="flex flex-col gap-4 py-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="fullName">Full Name</label>
                <input
                  className="p-2 mt-1 rounded-xl border bg-gray-50"
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="p-2 mt-1 rounded-xl border bg-gray-50"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="5"
                  className="p-2 mt-1 rounded-xl border w-full bg-gray-50"
                ></textarea>
              </div>

              <button className="bg-[#545AFA] rounded-md text-white py-2 hover:scale-105 duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
