import { Card } from './Card';

const App = (() => {
  let projectlist = [];
  const loadedData = () => {
    const data = localStorage.getItem('projects');
    if (data === null) {
      return [];
    }
    projectlist = JSON.parse(data);
    return projectlist;
  };
  const project = () => {
    const projectDiv = document.createElement('div');
    const data = loadedData();
    // for (let i = 0; i < data.length; i += 1) {
    //   projectDiv.appendChild(Card(data[i].name));
    // }
    if (data !== '') {
      data.forEach(element => {
        projectDiv.appendChild(Card(element));
      });
    }

    return projectDiv;
  };

  return {
    project,
    loadedData,
  };
})();

// eslint-disable-next-line import/prefer-default-export
export { App };
