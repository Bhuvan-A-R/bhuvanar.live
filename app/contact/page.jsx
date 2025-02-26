import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

//components
import Form from "@/components/Form";
const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="mb-6 grid pt-12 xl:mb-2 xl:h-[480px] xl:grid-cols-2">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 mb-8 max-w-md">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              I am always looking for new opportunities to learn and grow. If
              you have a project in mind, or just want to say hi, feel free to
              get in touch.
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden w-full bg-contact_illustration_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustration_dark xl:flex"></div>
        </div>
        {/* info text & form */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/* info text */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>bhuvanamaravathi@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Bengaluru, Karnataka</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
