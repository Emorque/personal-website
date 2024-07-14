import fs from "fs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
    


interface projectData {
    name : string
}

const getProjectInfo = (projectName : string) => {
    const folder = "projectsList/";
    const file = `${folder}${projectName}.json`;
    const description = fs.readFileSync(file, "utf8");
    return JSON.parse(description);
}

export function ProjectCard( {name} : projectData) {
    const projectInfo = getProjectInfo(name);
    return(
        // <div>
        //     <h1>This is a project called: {name}</h1>
        //     <h2>{projectInfo.name}</h2>
        //     <img src={projectInfo.picture} width="100px" height="100px"></img>
        //     <h2>{projectInfo.description}</h2>
        //     {/* <h2>{projectInfo.tech}</h2> */}
        //     {projectInfo.technologies.map((tech : string) => {
        //         return(
        //             <Badge>
        //                 {tech}
        //             </Badge>
        //         )
        //     })}
        //     <h2>{projectInfo.github}</h2>
        // </div>
        <Card key={projectInfo.name}  className="max-w-2xl bg-gradient-to-r from-purple-950 via-purple-600 to-purple-950">
            <CardHeader>
                <CardTitle>{projectInfo.name}</CardTitle>
                <CardTitle>{projectInfo.date}</CardTitle>
                <CardDescription>{projectInfo.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <a href={projectInfo.github}>
                    <Image 
                        alt={`Image of ${projectInfo.name}`} 
                        height={100}
                        width={100}
                        src={projectInfo.picture}>
                    </Image>
                </a>
                {projectInfo.technologies.map((tech : string) => {
                    return(
                        <Badge key={tech}>
                            {tech}
                        </Badge>
                    )
                })}
            </CardContent>
            {/* <CardFooter>
                <a href={projectInfo.github}>GitHub</a>
            </CardFooter> */}
        </Card>
    )
}