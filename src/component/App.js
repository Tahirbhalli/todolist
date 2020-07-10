import { Card } from './Card';
import { List } from './List';

const App = (() => {
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
