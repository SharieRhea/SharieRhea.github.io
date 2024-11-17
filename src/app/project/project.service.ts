import { Injectable} from "@angular/core";
import { PROJECTS } from "./project.class";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects() {
    return PROJECTS;
  }
}
