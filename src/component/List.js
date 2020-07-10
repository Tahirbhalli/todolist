import { comp } from './comp';

const List = (n, text) => {
  const ul = comp('ul', 'list-group list-group-flush');

  for (let i = 1; i <= n; i++) {
    ul.appendChild(comp('li', 'list-group-item', '', text));
  }

  return ul;
};

export { List };
