import React, { useState, useEffect } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents SSR mismatch

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:abhinavkangale123@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=Hi, my name is ${encodeURIComponent(
      formData.name
    )}. ${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative">
      <h3 className="absolute top-14 md:top-16 lg:top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 mt-24 md:mt-28">
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Let's connect and discuss!{" "}
          <span className="decoration-darkGreen/50 underline">Reach out.</span>
        </h4>

        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-md md:text-lg lg:text-xl">+91 8660050809</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-md md:text-lg lg:text-xl">
              abhinavkangale123@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-md md:text-lg lg:text-xl">Belagavi, Karnataka</p>
          </div>
        </div>

        <form
  onSubmit={handleSubmit(onSubmit)}
  className="flex flex-col space-y-2 w-[90%] md:w-[600px] lg:w-[700px] mx-auto"
>
  <input
    {...register("name")}
    placeholder="Name"
    className="contactInput w-full"
    type="text"
    required
  />
  <input
    {...register("email")}
    placeholder="Email"
    className="contactInput w-full"
    type="email"
    required
  />
  <input
    {...register("subject")}
    placeholder="Subject"
    className="contactInput w-full"
    type="text"
    required
  />
  <textarea
    {...register("message")}
    placeholder="Message"
    className="contactInput w-full"
    required
  />
  <button className="bg-lightGreen py-3 px-10 rounded-lg text-white font-bold text-lg">
    Submit
  </button>
</form>

      </div>
    </div>
  );
}
