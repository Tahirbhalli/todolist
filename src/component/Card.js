import { comp } from './comp';
// show assignments of tthe specific project

const showAssignments = () => {
  console.log('works poperly');
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
  btn.addEventListener('click', () => localStorage.setItem('user', title));
  cardBody.appendChild(btn);
  card.addEventListener('click', () => showAssignments());
  return card;
};
// eslint-disable-next-line import/prefer-default-export
export { Card };
