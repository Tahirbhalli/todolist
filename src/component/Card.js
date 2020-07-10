import { comp } from './comp';

const Card = (title, description='') => {
    const card = comp('div', 'card m-3 cursor');
    const cardBody = card.appendChild(comp('div','card-body'));
    cardBody.appendChild(comp('h5', 'card-title', '', title));
    cardBody.appendChild(comp('p', 'card-text', '', description));
    
    return card;
}
export { Card };
