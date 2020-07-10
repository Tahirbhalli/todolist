import { Card } from './Card';
import { List } from './List';
import { comp } from './comp'

const App = (() => {
    const form=()=>{
        const fm=comp('form','')
    }
    const project = () => {

        const projectDiv = document.createElement('div');

        projectDiv.appendChild(Card('Asadf'));
        projectDiv.appendChild(Card('GSgsf'));
        projectDiv.appendChild(Card('Egdfg'));
        projectDiv.appendChild(Card('Ufhgfdg'));
        projectDiv.appendChild(Card('ERTEfsgs', 'ADfs sdfgsdg dsf gzsdfg fdsg dsfgsdfgsdfgasfg'));
        projectDiv.appendChild(Card('JTDghdgh dfg'));

        return projectDiv;
    };

    return {
        project,
        List,
    } ;

})();

export { App };
