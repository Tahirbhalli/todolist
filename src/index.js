// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';
import { App } from './component/App';
import { Project } from './component/Project';

const handler2 = (form) => {
  const user = localStorage.getItem('user');
  const keyvalue1 = [{
    title: form.querySelector('#title1').value,
    description: form.querySelector('#desc').value,
    date: form.querySelector('#date').value,
    priority: form.querySelector('#prio').value,
  }];
  const d = JSON.parse(localStorage.getItem(user));
  if (d !== null) {
    d.forEach(element => {
      keyvalue1.push(element);
    });
  }
  localStorage.setItem(user, JSON.stringify(keyvalue1));
};
function handler(form) {
  const a = form.querySelector('#title');
  const lists = [];
  let prlist = [];
  prlist = App.loadedData();
  prlist.push(a.value);
  localStorage.setItem('projects', JSON.stringify(prlist));
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
};

index();