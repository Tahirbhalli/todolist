import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './component/App'
import {Project} from './component/Project'

const index = () => {
    const f=document.querySelector('form');
    f.onsubmit=()=>handler(f);
    const projects = document.querySelector('#projects');
    projects.appendChild(App.project());

    const lists = document.querySelector('#lists');
    lists.appendChild(App.List(8, 'safgsdg'));
    
    
};
var list=new Array();
const setitems=()=>{
    localStorage.setItem('projects', JSON.stringify(list))
}
function handler(form){
    console.log(form);
    const a=form.querySelector('#title');
    alert(a.value)
    list.push(new Project(a.value));
    setitems();
    localStorage.setItem('asa','asasa');
}
index();