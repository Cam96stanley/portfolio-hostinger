import { useState } from "react";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
New Contact Submission

Name: ${formData.name}
Email: ${formData.email}

Message: ${formData.body}
    `;

    try {
      const res = await fetch(import.meta.env.VITE_NTFY_URL, {
        method: "POST",
        headers: {
          Title: "New Contact Message",
          Priority: "high",
          Tags: "computer",
        },
        body: message,
      });

      if (res.ok) {
        setFormData({ name: "", email: "", body: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <section className="max-w-[500px] mx-auto flex flex-col items-center mt-10">
      <h1 className="my-2 text-3xl">Connect With Me</h1>
      <p className="my-2 max-w-75 text-center">
        Have a project you've been thinking about? I'd love to hear about it!
      </p>
      <form
        className=" px-2 flex flex-col gap-4 mt-10 w-full min-w-[300px] max-w-[500px]"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-2 border-(--color-accent) rounded px-2 py-1"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-2 border-(--color-accent) rounded px-2 py-1"
        />
        <label htmlFor="body">How can I help?</label>
        <textarea
          name="body"
          id="body"
          value={formData.body}
          onChange={handleChange}
          required
          className="border-2 border-(--color-accent) rounded px-2 py-1"
          rows={8}
        ></textarea>
        <button
          className="bg-(--color-accent) p-2 font-semibold text-white rounded cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
