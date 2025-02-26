"use client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { sendMail } from "@/lib/mail";

const Form = () => {
  const [status, setStatus] = useState(1);
  async function handleSubmit(formData) {
    setStatus(2);
    try {
      await sendMail(formData);
      setStatus(3);
    } catch (error) {
      setStatus(4);
    }
  }
  return (
    <>
      {status <= 2 && (
        <form
          className="flex flex-col gap-y-4"
          action={async (formData) => {
            await setStatus(2);
            handleSubmit(formData);
          }}
        >
          {/* input */}
          <div className="relative flex items-center">
            <Input
              type="name"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <User size={20} className="absolute right-6" />
          </div>
          {/* input */}
          <div className="relative flex items-center">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <MailIcon size={20} className="absolute right-6" />
          </div>
          {/* textarea */}
          <div className="relative flex items-center">
            <Textarea placeholder="Type Your Message" name="message" required />
            <MessageSquare size={20} className="absolute right-6 top-4" />
          </div>
          {status === 1 && (
            <Button
              type="submit"
              className="flex max-w-[166px] items-center gap-x-1"
            >
              Let's Talk
              <ArrowRightIcon size={20} className="ml-2" />
            </Button>
          )}
          {status === 2 && (
            <Button
              disabled
              className="flex max-w-[166px] items-center gap-x-1"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </Button>
          )}
        </form>
      )}
      {status === 3 && (
        <p className="text-green-500 xl:text-center">
          Message sent successfully!
        </p>
      )}
      {status === 4 && (
        <p className="text-center text-red-500">
          Failed to send the message. Please try again.
        </p>
      )}
    </>
  );
};

export default Form;
