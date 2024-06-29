import fs from "fs";

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
        <div>
            <h1>This is a project called: {name}</h1>
            <h2>{projectInfo.name}</h2>
            <img src={projectInfo.picture} width="100px" height="100px"></img>
            <h2>{projectInfo.description}</h2>
            <h2>{projectInfo.tech}</h2>
            <h2>{projectInfo.github}</h2>
        </div>
    )
}