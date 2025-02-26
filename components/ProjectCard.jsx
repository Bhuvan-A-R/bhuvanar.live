import Link from "next/link";
import Image from "next/image";

// icons
import { Github, Link2Icon, Linkedin } from "lucide-react";

// components
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark">
          {/* image */}
          <Image
            className="absolute bottom-0 rounded-t-lg shadow-2xl"
            src={project.image}
            width={247}
            height={130}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-4">
            {project.linkedin != null ? (
              <Link
                href={project.linkedin}
                target="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <Linkedin className="text-white" />
              </Link>
            ) : (
              ""
            )}
            {project.link != null ? (
              <Link
                href={project.link}
                target="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <Link2Icon className="text-white" />
              </Link>
            ) : (
              ""
            )}
            {project.github != null ? (
              <Link
                href={project.github}
                target="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <Github className="text-white" />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="top-4 mb-2 flex flex-wrap justify-start">
          {Array.isArray(project.techStack)
            ? project.techStack.map((badge_name, index) => (
                <Badge
                  key={index}
                  className="mb-2 mr-2 text-sm font-medium uppercase"
                >
                  {badge_name}
                </Badge>
              ))
            : null}
        </div>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
