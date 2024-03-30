import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "jeevan",
        title: "G-one(Jeevan)",
        file: "https://raw.githubusercontent.com/mkswagger/G.ONE_DS-Hack/main/README.md",
        icon: "i-fa-solid:dumbbell",
        excerpt: "Immersive Physiotherapy with AI and Motion Capture .. ",
        link: "https://github.com/mkswagger/G.ONE_DS-Hack"
      },
      // {
      //   id: "portfolio-macos",
      //   title: "Portfolio macOS",
      //   file: "https://raw.githubusercontent.com/Renovamen/playground-macos/main/README.md",
      //   icon: "i-ri:gamepad-line",
      //   excerpt: "My portfolio website simulating macOS's GUI...",
      //   link: "https://github.com/Renovamen/playground-macos"
      // },
      {
        id: "raasta",
        title: "Raasta",
        file: "https://raw.githubusercontent.com/mkswagger/Raasta/main/README.md",
        icon: "i-ri:traffic-light-fill",
        excerpt: "LLM powered multilinguistic travel companion app ..",
        link: "https://github.com/mkswagger/Raasta"
      },
      {
        id: "reviewroom",
        title: "Review Room",
        file: "https://raw.githubusercontent.com/mkswagger/review_room_mozohack4.0/master/README.md",
        icon: "i-ri:bar-chart-2-fill",
        excerpt: "AI powered product review platform ..",
        link: "https://github.com/mkswagger/review_room_mozohack4.0"
      },
      {
        id: "beatoven",
        title: "BeatOven - WIP",
        file: "https://raw.githubusercontent.com/mkswagger/mkswagger/master/README.md",
        icon: "i-ri:music-fill",
        excerpt: "Music Collaboration iOS App .. WIP ",
        link: ""
      }
    ]
  }
];

export default bear;
