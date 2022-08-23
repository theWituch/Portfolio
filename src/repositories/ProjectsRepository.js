// List of projects
const projects = {
  first: {
    name: "Some first project",
    image: require("@/assets/images/project/project-placeholder.png"),
    category: ["project", "special"],
  },
  second: {
    name: "Some second project",
    image: require("@/assets/images/project/project-placeholder.png"),
    category: ["project"],
  },
  third: {
    name: "Some third project",
    image: require("@/assets/images/project/project-placeholder.png"),
    category: ["project"],
  },
  fourth: {
    name: "Some fourth project",
    image: require("@/assets/images/project/project-placeholder.png"),
    category: ["project", "special"],
  },
  fifth: {
    name: "Some fifth project",
    image: require("@/assets/images/project/project-placeholder.png"),
    category: ["project"],
  },
};

// Tricky insert ID key to each item
Object.entries(projects).forEach((e, i) => {
  projects[e[0]].id = i;
});

const getAll = () => {
  return Object.values(projects);
};

const getWithCategory = (...categories) => {
  return Object.values(projects).filter((project) => {
    return project.category?.includes(...categories);
  });
};

export default {
  getAll,
  getWithCategory,
};
