import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="bg-tertiary py-14 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 max-w-xl text-center">
            Prepared to turn your ideas into reality? I'm here to help
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
