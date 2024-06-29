import fs from "fs";
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
        <Card className="max-w-2xl">
            <CardHeader>
                <CardTitle>{projectInfo.name}</CardTitle>
                <CardDescription>{projectInfo.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={projectInfo.picture} width="100px" height="100px"></img>
                {projectInfo.technologies.map((tech : string) => {
                    return(
                        <Badge key={tech}>
                            {tech}
                        </Badge>
                    )
                })}
            </CardContent>
            <CardFooter>
                <a href={projectInfo.github}>GitHub</a>
            </CardFooter>
        </Card>
    )
}