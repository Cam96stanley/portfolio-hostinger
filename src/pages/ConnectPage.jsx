export default function ConnectPage() {
  return (
    <section className="p-2">
      <h1 className="my-2 text-3xl">Connect With Me</h1>
      <p className="my-2">
        Have a project you've been thinking about? I'd love to hear about it!
      </p>
      <form className="flex flex-col gap-4 mt-10 max-w-75">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="border-2 border-(--color-accent) rounded px-2 py-1"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="border-2 border-(--color-accent) rounded px-2 py-1"
        />
        <label htmlFor="body">How can I help?</label>
        <textarea
          name="body"
          id="body"
          className="border-2 border-(--color-accent) rounded px-2 py-1"
          rows={8}
        ></textarea>
      </form>
    </section>
  );
}
