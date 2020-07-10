import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './component/App';
import { Project } from './component/Project';

const handler2 = (form) => {
  const keyvalue = {
    title: form.querySelector('#title1').value,
    description: form.querySelector('#desc').value,
    date: form.querySelector('#date').value,
    priority: form.querySelector('#prio').value,
  };
  const lists = App.loadedData();
  const user = localStorage.getItem('user');
  const da = new Project(user);
  da.additems(keyvalue);
  localStorage('projects', JSON.stringify(lists.push(da)));
};
function handler(form) {
  const lists = App.loadedData();
  const a = form.querySelector('#title');
  lists.push(new Project(a.value));
  localStorage.setItem(a.value, null);
}
const index = () => {
  const f1 = document.querySelector('form');
  f1.onsubmit = () => handler(f1);
  const f2 = document.querySelector('#form2');
  f2.onsubmit = () => handler2(f2);
  const projects = document.querySelector('#projects');
  projects.appendChild(App.project());

  const lists = document.querySelector('#lists');
  lists.appendChild(App.List(8, 'safgsdg'));
};

index();