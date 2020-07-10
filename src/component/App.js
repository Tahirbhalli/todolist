import { Card } from './Card';
import { List } from './List';
import { comp } from './comp'

const App = (() => {
    var projectlist=new Array();
    const loadedData=()=>{
        var data=localStorage.getItem('projects');
        projectlist = JSON.parse(data);
        return projectlist;
    }
    const project = () => {
       
        const projectDiv = document.createElement('div');
        const data=loadedData();
        for (const iterator of data) {
            projectDiv.appendChild(Card(iterator.name))
        }
        return projectDiv;
    };

    return {
        project,
        List,
        loadedData,
    } ;

})();

export { App };
