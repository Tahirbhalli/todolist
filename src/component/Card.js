import { comp } from './comp';
import { List } from './List';
// show assignments of tthe specific project

const showAssignments = (title) => {
  localStorage.setItem('user', title);
  const temp = document.getElementById('temp');
  if (temp !== null) {
    temp.parentNode.removeChild(temp);
  }

  const ul = comp('ul', 'list-group list-group-flush', 'temp');
  const data = JSON.parse(localStorage.getItem(title));
  const divlist = document.querySelector('#lists');
  data.forEach(element => {
    console.log(element.title);
    ul.appendChild(List(element.title));
  });
  divlist.appendChild(ul);
};

const Card = (title) => {
  const card = comp('div', 'card m-3 cursor');
  const cardBody = card.appendChild(comp('div', 'card-body'));
  cardBody.appendChild(comp('h5', 'card-title', '', title));
  const btn = comp('button', 'btn btn-info btn-lg', title, 'new');
  let att = document.createAttribute('data-toggle');
  att.value = 'modal';
  btn.setAttributeNode(att);
  att = document.createAttribute('data-target');
  att.value = '#model2';
  btn.setAttributeNode(att);
  cardBody.appendChild(btn);
  card.addEventListener('click', () => showAssignments(title));
  return card;
};
// eslint-disable-next-line import/prefer-default-export
export { Card };
