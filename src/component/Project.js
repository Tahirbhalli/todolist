function Project(name) {
  this.name = name;
  this.assignment = [];
  this.additems = (hashmap) => {
    this.assignment.push(hashmap);
  };
}

export default Project;
