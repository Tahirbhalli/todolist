function Project(name) {
  this.name = name;
  this.assignment = [];
  this.additems = (hashmap) => {
    this.assignment.push(hashmap);
  };
}

// eslint-disable-next-line import/prefer-default-export
export { Project };