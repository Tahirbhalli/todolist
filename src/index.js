import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './component/App'

const index = () => {
    const projects = document.querySelector('#projects');
    projects.appendChild(App.project());

    const lists = document.querySelector('#lists');
    lists.appendChild(App.List(8, 'safgsdg'));
};
index();
