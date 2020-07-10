import { comp } from './comp';

const Card = (title, description='') => {
    const card = comp('div', 'card m-3 cursor');
    const cardBody = card.appendChild(comp('div','card-body'));
    cardBody.appendChild(comp('h5', 'card-title', '', title));
    cardBody.appendChild(comp('p', 'card-text', '', description));
    const btn=comp('button','btn btn-info btn-lg','','new');
    var att = document.createAttribute("data-toggle");       // Create a "class" attribute
    att.value = "modal";
    btn.setAttributeNode(att);   
    var att = document.createAttribute("data-target");       // Create a "class" attribute
    att.value = "#model2";    
    btn.setAttributeNode(att);  
   
    cardBody.appendChild(btn);
    
    return card;
}
export { Card };
