// List of skills, technologies and tools
// TODO: Maybe some backend?
const skillset = {
  java: {
    name: "Java",
    url: "https://www.java.com/",
    image: require("@/assets/images/icons/java.svg"),
    category: ["language"],
  },
  javascript: {
    name: "JavaScript",
    url: "https://www.javascript.com/",
    image: require("@/assets/images/icons/javascript.svg"),
    category: ["language"],
  },
  php: {
    name: "PHP",
    url: "https://www.php.net/",
    image: require("@/assets/images/icons/php.svg"),
    category: ["language"],
  },
  cpp: {
    name: "C++",
    url: "https://wikipedia.org/wiki/C++",
    image: require("@/assets/images/icons/cpp.svg"),
    category: ["language"],
  },
  c: {
    name: "C",
    url: "https://simple.wikipedia.org/wiki/C_(programming_language)",
    image: require("@/assets/images/icons/c.svg"),
    category: ["language"],
  },
  python: {
    name: "Python",
    url: "https://www.python.org/",
    image: require("@/assets/images/icons/python.svg"),
    category: ["language"],
  },
  groovy: {
    name: "Groovy",
    url: "https://groovy-lang.org/",
    image: require("@/assets/images/icons/groovy.svg"),
    category: ["language"],
  },

  nodejs: {
    name: "Node.JS",
    url: "https://www.nodejs.org/",
    image: require("@/assets/images/icons/nodejs.svg"),
    category: ["technology"],
  },
  vuejs: {
    name: "Vue.JS",
    url: "https://www.vuejs.org/",
    image: require("@/assets/images/icons/vue-js.svg"),
    category: ["language", "technology", "framework"],
  },
  bootstrap: {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    image: require("@/assets/images/icons/bootstrap-5.svg"),
    category: ["framework", "tool"],
  },
  html: {
    name: "HTML5",
    url: "https:///",
    image: require("@/assets/images/icons/html.svg"),
    category: ["language", "technology"],
  },
  css: {
    name: "CSS3",
    url: "https:///",
    image: require("@/assets/images/icons/css.svg"),
    category: ["language", "technology"],
  },

  git: {
    name: "Git",
    url: "https://git-scm.com/",
    image: require("@/assets/images/icons/git.svg"),
    category: ["technology", "tool"],
  },
  maven: {
    name: "Maven",
    url: "https://maven.apache.org/",
    image: require("@/assets/images/icons/maven.svg"),
    category: ["technology", "tool"],
  },
  gradle: {
    name: "Gradle",
    url: "https://gradle.org/",
    image: require("@/assets/images/icons/gradle.svg"),
    category: ["technology", "tool"],
  },

  markdown: {
    name: "Markdown",
    image: require("@/assets/images/icons/markdown.svg"),
    category: ["language"],
  },

  eclipse: {
    name: "Eclipse IDE",
    url: "https://www.eclipse.org/",
    image: require("@/assets/images/icons/eclipse.svg"),
    category: ["tool"],
  },
  intellij: {
    name: "IntelliJ IDEA",
    url: "https://www.jetbrains.com/idea/",
    image: require("@/assets/images/icons/intellij_idea.svg"),
    category: ["tool"],
  },
  vscode: {
    name: "Visial Studio Code",
    url: "https://code.visualstudio.com/",
    image: require("@/assets/images/icons/vscode.svg"),
    category: ["tool"],
  },

  arduino: {
    name: "Arduino",
    url: "https://www.arduino.cc/",
    image: require("@/assets/images/icons/arduino.svg"),
    category: ["tool"],
  },
  mplabx: {
    name: "MPLAB X IDE",
    url: "https://www.microchip.com/mplab/",
    image: require("@/assets/images/icons/mplabx.png"),
    category: ["tool"],
  },

  fusion360: {
    name: "Fusion360",
    url: "https://www.autodesk.pl/products/fusion-360/",
    image: require("@/assets/images/icons/fusion360.png"),
    category: ["tool"],
  },
  eagle: {
    name: "Eagle",
    url: "https://eagle.autodesk.com/eagle",
    image: require("@/assets/images/icons/eagle.png"),
    category: ["tool"],
  },
  eplanelectric: {
    name: "EPLAN Electric",
    url: "https://www.eplan.com/",
    image: require("@/assets/images/icons/eplan.png"),
    category: ["tool"],
  },
};

// Tricky insert ID key to each grid item
Object.entries(skillset).forEach((e, i) => {
  skillset[e[0]].id = i;
});

const getAll = () => {
  return Object.values(skillset);
};

const getWithCategory = (...categories) => {
  return Object.values(skillset).filter((skill) => {
    return skill.category?.includes(...categories);
  });
};

const getWithAnyCategory = (...categories) => {
  return Object.values(skillset).filter((skill) => {
    return skill.category?.some((skillCategory) => categories.includes(skillCategory));
  });
};

export default {
  getAll,
  getWithCategory,
  getWithAnyCategory,
};
