import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos. repellant.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos. repellant.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos. repellant.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center xl:mb-24">
          My Services
        </h2>
        {/* grid items */}
        <div className="xl: grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16"
                key={index}
              >
                <CardHeader className="absolute -top-[60px] text-primary">
                  <div className="flex h-[80px] w-[140px] items-center justify-center bg-white dark:bg-background">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
