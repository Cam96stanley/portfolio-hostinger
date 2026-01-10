import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import map from "../../assets/map.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-accent-gradient flex justify-center items-center gap-8 lg:gap-24"
    >
      <div>
        <h2 className="text-3xl font-medium py-4">Get in touch</h2>
        <p className="w-[300px]">
          Have a project in mind? I'd love to hear about it.
        </p>
        <div className="py-4">
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <p className="font-bold">Email</p>
          </div>
          <a
            href="mailto:cam96stanley@gmail.com"
            className="hover:underline text-(--color-accent)"
          >
            cam96stanley@gmail.com
          </a>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IoLocationSharp />
            <p className="font-bold">Location</p>
          </div>
          <p>Charleston SC, USA</p>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={map}
          alt="Map of Charleston"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
