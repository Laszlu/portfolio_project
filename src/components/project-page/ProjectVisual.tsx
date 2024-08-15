import { ProjectVisualProps } from "../../data/Interfaces.ts"

function ProjectVisualElement(props: ProjectVisualProps) {
  if(props.visual.source === "") {
    return (
      <></>
    )
  } else {
    return (
      <div className={"project-visual-box-element"}>
        <img src={props.visual.source} alt={props.visual.title}/>
      </div>
    )
  }
}

export default ProjectVisualElement;