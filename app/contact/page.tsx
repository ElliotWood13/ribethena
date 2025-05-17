import ContactForm from "../components/contact-form";
import { Chau_Philomene_One } from "next/font/google";

const chauPhilomeneOne = Chau_Philomene_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1
        className={`text-[70px] font-bold text-center text-black ${chauPhilomeneOne.className}`}
      >
        Contact Us
      </h1>
      <p className="text-center max-w-2xl" data-testid="contact-description">
        Have questions? Fill out the form below to get in touch with us.
      </p>
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  );
}
