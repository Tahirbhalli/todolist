import {Card} from './Card'

const App = () => {
    var app=document.createElement('div');

    app.appendChild(Card('Asadf'));
    app.appendChild(Card('GSgsf'));
    app.appendChild(Card('Egdfg'));
    app.appendChild(Card('Ufhgfdg'));
    app.appendChild(Card('ERTEfsgs', 'ADfs sdfgsdg dsf gzsdfg fdsg dsfgsdfgsdfgasfg'));
    app.appendChild(Card('JTDghdgh dfg'));

    return app;

}
export {App};