// List of skills, technologies and tools
// TODO: Maybe some backend?
const skillset = {
  java: {
    name: "Java",
    url: "https://www.java.com/",
    image: require("@/assets/images/icons/java.svg"),
  },
  javascript: {
    name: "JavaScript",
    url: "https://www.javascript.com/",
    image: require("@/assets/images/icons/javascript.svg"),
  },
  php: {
    name: "PHP",
    url: "https://www.php.net/",
    image: require("@/assets/images/icons/php.svg"),
  },
  cpp: {
    name: "C++",
    url: "https://wikipedia.org/wiki/C++",
    image: require("@/assets/images/icons/cpp.svg"),
  },
  c: {
    name: "C",
    url: "https://simple.wikipedia.org/wiki/C_(programming_language)",
    image: require("@/assets/images/icons/c.svg"),
  },
  python: {
    name: "Python",
    url: "https://www.python.org/",
    image: require("@/assets/images/icons/python.svg"),
  },
  groovy: {
    name: "Groovy",
    url: "https://groovy-lang.org/",
    image: require("@/assets/images/icons/groovy.svg"),
  },

  nodejs: {
    name: "Node.JS",
    url: "https://www.nodejs.org/",
    image: require("@/assets/images/icons/nodejs.svg"),
  },
  vuejs: {
    name: "Vue.JS",
    url: "https://www.vuejs.org/",
    image: require("@/assets/images/icons/vue-js.svg"),
  },
  bootstrap: {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    image: require("@/assets/images/icons/bootstrap-5.svg"),
  },
  html: {
    name: "HTML5",
    url: "https:///",
    image: require("@/assets/images/icons/html.svg"),
  },
  css: {
    name: "CSS3",
    url: "https:///",
    image: require("@/assets/images/icons/css.svg"),
  },

  git: {
    name: "Git",
    url: "https://git-scm.com/",
    image: require("@/assets/images/icons/git.svg"),
  },
  maven: {
    name: "Maven",
    url: "https://maven.apache.org/",
    image: require("@/assets/images/icons/maven.svg"),
  },
  gradle: {
    name: "Gradle",
    url: "https://gradle.org/",
    image: require("@/assets/images/icons/gradle.svg"),
  },

  markdown: {
    name: "Markdown",
    image: require("@/assets/images/icons/markdown.svg"),
  },

  eclipse: {
    name: "Eclipse IDE",
    url: "https://www.eclipse.org/",
    image: require("@/assets/images/icons/eclipse.svg"),
  },
  intellij: {
    name: "IntelliJ IDEA",
    url: "https://www.jetbrains.com/idea/",
    image: require("@/assets/images/icons/intellij_idea.svg"),
  },
  vscode: {
    name: "Visial Studio Code",
    url: "https://code.visualstudio.com/",
    image: require("@/assets/images/icons/vscode.svg"),
  },

  arduino: {
    name: "Arduino",
    url: "https://www.arduino.cc/",
    image: require("@/assets/images/icons/arduino.svg"),
  },
  mplabx: {
    name: "MPLAB X IDE",
    url: "https://www.microchip.com/mplab/",
    image: require("@/assets/images/icons/mplabx.png"),
  },

  fusion360: {
    name: "Fusion360",
    url: "https://www.autodesk.pl/products/fusion-360/",
    image: require("@/assets/images/icons/fusion360.png"),
  },
  eagle: {
    name: "Eagle",
    url: "https://eagle.autodesk.com/eagle",
    image: require("@/assets/images/icons/eagle.png"),
  },
  eplanelectric: {
    name: "EPLAN Electric",
    url: "https://www.eplan.com/",
    image: require("@/assets/images/icons/eplan.png"),
  },
};

// Tricky insert ID key to each grid item
Object.entries(skillset).forEach((e, i) => {
  skillset[e[0]].id = i;
});

export { skillset };
