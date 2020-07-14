import Card from './Card';

const App = (() => {
  let projectlist = [];
  const loadedData = () => {
    const data = localStorage.getItem('projects');
    if (data === null) {
      return JSON.parse(localStorage.setItem('projects', JSON.stringify(['default'])));
    }
    projectlist = JSON.parse(data);
    return projectlist;
  };
  const project = () => {
    const projectDiv = document.createElement('div');
    const data = loadedData();

    data.forEach(element => {
      projectDiv.appendChild(Card(element));
    });
    return projectDiv;
  };

  return {
    project,
    loadedData,
  };
})();

export default App;
