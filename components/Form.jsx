"use client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Form = () => {
  const [status, setStatus] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(2);
    try {
      await addDoc(collection(db, "submissions"), {
        ...form,
        created: Timestamp.now(),
      });
      setStatus(3);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(4);
      console.error(error); // Add this line
      alert("Error submitting form");
    }
  }
  return (
    <>
      {(status <= 2 || success) && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* input */}
          <div className="relative flex items-center">
            <Input
              type="name"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
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
              value={form.email}
              onChange={handleChange}
              required
            />
            <MailIcon size={20} className="absolute right-6" />
          </div>
          {/* textarea */}
          <div className="relative flex items-center">
            <Textarea
              placeholder="Type Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
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
      {success && <p className="text-green-500">Submitted!</p>}
    </>
  );
};

export default Form;
