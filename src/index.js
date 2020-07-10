import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './component/App'
import {Project} from './component/Project'

const index = () => {
    const f1=document.querySelector('form');
    f1.onsubmit=()=>handler(f1);
    const f2=document.querySelector('#form2');
    f2.onsubmit=()=>handler2(f2);
    const projects = document.querySelector('#projects');
    projects.appendChild(App.project());

    const lists = document.querySelector('#lists');
    lists.appendChild(App.List(8, 'safgsdg'));
    
};
const handler2=(form)=>{
    alert('yes')
}
function handler(form){
    var lists=App.loadedData();
    const a=form.querySelector('#title');
    lists.push(new Project(a.value));
    localStorage.setItem('projects', JSON.stringify(lists))
}
index();