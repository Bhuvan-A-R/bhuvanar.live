import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase4Fill,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Roles from "./Roles";

const Hero = () => {
  return (
    <section className="h-[84vh] bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[300px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 cursor-grab text-sm font-semibold uppercase tracking-[4px] text-primary">
              <Roles />
            </div>
            <h1 className="h1">Hello, I'm Bhuvan</h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Nice to meet you
            </p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <a href="/resume.pdf" download>
                <Button variant="secondary" className="gap-x-2">
                  My Resume <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="gap-x-6 mx-auto xl:mx-0 flex"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* internship badge */}
            <Badge
              containerStyles="absolute top-[24%] -left-[8.5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Internships Completed"
            />
            {/* finsihed projects badge */}
            <Badge
              containerStyles="absolute top-[0%] -right-10"
              icon={<RiTodoFill />}
              endCountNum={2}
              // endCountText="k"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            {/* <Badge
              containerStyles="absolute top-[55%] -right-10"
              icon={<RiTeamFill />}
              endCountNum={4}
              // endCountText="k"
              badgeText="Hackathons Won"
            /> */}
            <div className="absolute -right-2 -top-1 h-[500px] w-[500px]  bg-no-repeat dark:bg-hero_shape2_dark"></div>
            <DevImg
              containerStyles=" w-[510px] h-[492px] bg-no-repeat relative"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
