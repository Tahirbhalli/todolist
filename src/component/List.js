import { comp } from './comp';

const List = (element) => {  
  const h3 = comp('h3', '', '', element.title);
  const p = comp('p', '', '', element.description);
  const date = comp('p', '', '', element.date);
  const priority = comp('p', '', '', element.priority);

  const li = comp('li', 'list-group-item');

  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(date);
  li.appendChild(priority);

  return li;
};

// eslint-disable-next-line import/prefer-default-export
export { List };
