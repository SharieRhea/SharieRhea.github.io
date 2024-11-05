export class Project {
  title: string;
  link: string;
  subtitle: string;
  description: string;
  bullets:  Array<string>;
  technologies: Array<string>;

  constructor(title: string, link: string, subtitle: string, description: string, bullets: Array<string>, technologies: Array<string>) {
    this.title = title;
    this.link = link;
    this.subtitle = subtitle;
    this.description = description;
    this.bullets = bullets;
    this.technologies = technologies;
  }
}

export const projects = [
  new Project(
    "Track Tagger",
    "https://github.com/SharieRhea/TrackTagger",
    "A graphical application for editing .mp3 metadata.",
    "Last.fm is queried using an API key to provide automatic fetching of tags, album title and artist, and album cover.",
    [
      "graphical user interface(GUI) using the customtkinter library",
      "interacts with last.fm to query track information using their REST API",
      "highly customizable with options for manually entering fields"
    ],
    [
      "devicon-python-plain",
      "pi pi-book"
    ]
  ),
  new Project(
    // TODO: update this description
    "Advent of Code 2023",
    "https://github.com/SharieRhea/AdventOfCode2023",
    "25 Christmas-themed 2-part programming puzzles.",
    "My solutions to Eric Wastl's Advent of Code challenges! In 2023 I chose Kotlin in order to gain more familiarity with the language.",
    [
      "path-finding",
      "large dataset analysis",
      "dynamic programming"
    ],
    [
      "devicon-kotlin-plain"
    ]
  )
]
