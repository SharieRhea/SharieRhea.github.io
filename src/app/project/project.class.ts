export class Project {
  title: string;
  link: string;
  image: string;
  subtitle: string;
  description: string;
  bullets:  Array<string>;
  technologies: Array<[string, string]>;

  constructor(
    title: string,
    link: string,
    image: string,
    subtitle: string,
    description: string,
    bullets: Array<string>,
    technologies: Array<[string, string]>,
  ) {
    this.title = title;
    this.link = link;
    this.image = image;
    this.subtitle = subtitle;
    this.description = description;
    this.bullets = bullets;
    this.technologies = technologies;
  }
}

export const PROJECTS: Record<string, Project> = {
  "track-tagger": new Project(
    "Track Tagger",
    "https://github.com/SharieRhea/TrackTagger",
    "images/track-tagger.png",
    "A graphical application for editing .mp3 metadata.",
    "Queries Last.fm using an API key to provide automatic fetching of tags, album title and artist, and album cover.",
    [
      "graphical user interface(GUI) using the customtkinter library",
      "interacts with last.fm to query track information using their REST API",
      "highly customizable with options for manually entering fields"
    ],
    [
      ["python", "devicon-python-plain"],
      ["customtkinter", "pi pi-book"]
    ]
  ),
  "aoc-2024": new Project(
    "Advent of Code 2024",
    "https://github.com/SharieRhea/AdventOfCode2024",
    "images/aoc-2024.png",
    "25 Christmas-themed 2-part programming puzzles.",
    "My solutions to Eric Wastl's Advent of Code challenges! In 2024 I chose Rust in order to learn the language. Some problem topics include:",
    [
      "data structures: hashmaps, graphs, trees, ...",
      "recursion, dynamic programming, memoization, ...",
      "breadth-first search, Karger's, Dijkstra's, ..."
    ],
    [
      ["rust", "devicon-rust-original"]
    ]
  ),
  "aoc-2023": new Project(
    "Advent of Code 2023",
    "https://github.com/SharieRhea/AdventOfCode2023",
    "images/aoc-2023.png",
    "25 Christmas-themed 2-part programming puzzles.",
    "My solutions to Eric Wastl's Advent of Code challenges! In 2023 I chose Kotlin in order to gain more familiarity with the language. Some problem topics include:",
    [
      "data structures: hashmaps, graphs, trees, ...",
      "recursion, dynamic programming, memoization, ...",
      "breadth-first search, Karger's, Dijkstra's, ..."
    ],
    [
      ["kotlin", "devicon-kotlin-plain"]
    ]
  ),
  "operating-system": new Project(
    "Operating System Simulation",
    "https://github.com/SharieRhea/OperatingSystem",
    "images/operating-system.png",
    "Simulation of a single-core operating system in Java.",
    "This multi-threaded simulation uses cooperative multitasking and a priority scheduler to manage processes. Memory is managed using paging and virtual memory. Additional features:",
    [
      "devices",
      "filesystems",
      "message passing",
    ],
    [
      ["java", "devicon-java-plain"]
    ]
  ),
  "processor": new Project(
    "Processor Simulation",
    "https://github.com/SharieRhea/Processor",
    "images/processor.png",
    "Simulation of a 32-bit processor in Java.",
    "This simulation includes a custom assembly language, SIA32, and functionality for running instructions built from the ground up using Bits and Words.",
    [
      "level 1 instruction cache",
      "level 2 instruction and data cache",
      "5 sample assembly programs"
    ],
    [
      ["java", "devicon-java-plain"]
    ]
  ),
  "ny-eats": new Project(
    "NY Eats",
    "https://github.com/SharieRhea/NY-Eats",
    "images/ny-eats.png",
    "Information Android app that lists (fictional) places to eat in New York City.",
    "Users may choose from 3 common categories: coffee shops, fast food, and restaurants. Features:",
    [
      "light and dark mode",
      "compact (phone) and expanded (tablet) views"
    ],
    [
      ["kotlin", "devicon-kotlin-plain"],
      ["jetpack compose", "devicon-jetpackcompose-plain"]
    ]
  ),
  "tic-tac-toe": new Project(
    "Tic-Tac-Toe",
    "https://github.com/SharieRhea/ticTacToe",
    "images/tic-tac-toe.png",
    "A pixelated tic-tac-toe game with 3 computer players to challenge.",
    "",
    [
      "random: selects a random move each turn",
      "human: wins the game if possible, if not, blocks the other player from winning on the next turn if possible, otherwise plays a random move",
      "insane: uses a recursive N-ary tree to determine the best move"
    ],
    [
      ["python", "devicon-python-plain"],
      ["pygame", "pi pi-book"]
    ]
  )
}
