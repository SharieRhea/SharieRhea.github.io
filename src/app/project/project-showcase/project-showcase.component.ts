import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { ProjectShowcaseCard } from "../project-showcase-card/project-showcase-card.component";
import { NavigationBar } from "../../navigation-bar/navigation-bar.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'project-showcase',
  standalone: true,
  templateUrl : './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css'],
  imports: [NavigationBar, ProjectShowcaseCard]
})
export class ProjectShowcase implements OnInit {
  @Input() projectKey!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectKey = this.route.snapshot.paramMap.get('projectKey') ?? "track-tagger";
  }
}
