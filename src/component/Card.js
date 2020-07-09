import { comp } from './comp'
const Card = () => {
    const card = comp('div','card');
    card.appendChild(comp('div','card-header','','Header'));
    card.appendChild(comp('div','card-body bg-primary','','Body'));
    card.appendChild(comp('div','card-footer','','footer'));
    return card
}
export {Card};
