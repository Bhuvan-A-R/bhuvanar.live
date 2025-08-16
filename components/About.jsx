import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaDotCircle } from "react-icons/fa";

// data
import { AboutMeBasicInfo } from "@/data/AboutMeBasicInfo";
import { WorkExperience } from "@/data/WorkExperience";
import { Education } from "@/data/Education";
import { SkillsTools } from "@/data/SkillsTools";
import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="pb-12 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImg
              containerStyles="bg-about_shape_dark dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative overflow-hidden"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="Personal">
              <TabsList className="grid w-full dark:border-none xl:max-w-[600px] xl:grid-cols-4 xl:border">
                <TabsTrigger
                  className="w-full px-2 py-3 text-base sm:text-lg xl:w-[150px]"
                  value="Personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-full px-2 py-3 text-base sm:text-lg xl:w-[150px]"
                  value="Experience"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  className="w-full px-2 py-3 text-base sm:text-lg xl:w-[150px]"
                  value="Education"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  className="w-full px-2 py-3 text-base sm:text-lg xl:w-[150px]"
                  value="SkillsTools"
                >
                  Skills & Tools
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent value="Personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Bringing ideas to life</h3>
                    <p className="subtitle max-auto max-w-xl xl:mx-0">
                      {" "}
                      A curious person, who wants to know how things work
                    </p>
                    {/* icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {AboutMeBasicInfo.map((item, index) => {
                        return (
                          <div
                            className="mx-auto flex items-center gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languagues */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Kannada, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Experience Content */}
                <TabsContent value="Experience">
                  <h3 className="mb-8 text-center text-3xl font-bold xl:text-left">
                    My Awesome Journey
                  </h3>
                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-4 text-[22px] text-primary">
                      <Briefcase />
                      <h4 className="font-medium capitalize">Experience</h4>
                    </div>
                    <div className="flex flex-col gap-y-8">
                      {WorkExperience.map((item, index) => {
                        return (
                          <div className="group flex gap-x-8" key={index}>
                            <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                              <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                            </div>
                            <div>
                              <div className="leading-none-mb-2 text-xl font-semibold">
                                {item.company}
                              </div>
                              <div className="mb-4 text-lg leading-none text-muted-foreground">
                                {item.role}
                              </div>
                              <div className="text-base font-medium">
                                {item.time}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* Education Content */}
                <TabsContent value="Education">
                  <h3 className="mb-8 text-center text-3xl font-bold xl:text-left">
                    My Educational Journey
                  </h3>
                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-4 text-[22px] text-primary">
                      <GraduationCap size={28} />
                      <h4 className="font-medium capitalize">Education</h4>
                    </div>
                    {/* education list */}
                    <div className="flex flex-col gap-y-8">
                      {Education.map((item, index) => {
                        return (
                          <div className="group flex gap-x-8" key={index}>
                            <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                              <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                            </div>
                            <div>
                              <div className="leading-none-mb-2 text-xl font-semibold">
                                {item.institution}
                              </div>
                              <div className="mb-4 text-lg leading-none text-muted-foreground">
                                {item.course}
                              </div>
                              <div className="text-base font-medium">
                                {item.time}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* Skills & Tools Content */}
                <TabsContent
                  value="SkillsTools"
                  className="text-center xl:text-left"
                >
                  <h3 className="mb-8 text-3xl font-bold">
                    Tools I use Everyday
                  </h3>
                  {/* skills  */}
                  <div className="grid grid-cols-2 gap-1">
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skill list */}
                      <div className="mb-12 grid gap-4 md:grid-cols-2">
                        {SkillsTools.skills.map((item, index) => {
                          return (
                            <div
                              className="flex items-center gap-x-4 xl:mx-0"
                              key={index}
                            >
                              <div className="flex items-center justify-center gap-x-3">
                                <FaDotCircle className="text-sm text-primary" />
                                {item}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Tools
                      </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* tool list */}
                      <div className="ml-4 flex flex-wrap justify-start gap-x-8 gap-y-8 text-3xl">
                        {SkillsTools.tools.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="text-foreground transition-all hover:text-primary"
                            >
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
