import { projects } from "./ExternalInfo.json";
import LettyImage from "./projects/0.png";
import DigitalDenImage from "./projects/1.png";

export default function parsedProjects() {
  const newProjects = projects;
  newProjects[0].background = LettyImage;
  newProjects[1].background = DigitalDenImage;

  return newProjects;
}
