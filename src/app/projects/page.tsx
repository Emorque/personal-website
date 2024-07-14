import Image from "next/image";
import { ProjectCard } from "@/ui/projectCard";

import fs from "fs";

const getProjectsName = () => {
    const folder = "projectsList/";
    const files = fs.readdirSync(folder);
    const markdownProjects = files.filter(
      (file) => file.endsWith(".json")
    );
    const slugs = markdownProjects.map(
      (file) => file.replace(".json", "")
    );
    return slugs
  };

export default function projectPage() {
    const projectNames = getProjectsName();

  return (
    <div>
        {projectNames.map((name : string) => {
            console.log(name);
            return(
                <>
                    <ProjectCard key="name" name={name}></ProjectCard>
                    <br/>
                </>
            )
        })}
        <br/> {/*Added to give some space at the bottom*/}
        <br/>
        <br/>
    </div>
  );
}