import comp from './comp';

const deleteitem = (element) => {
  const user = localStorage.getItem('user');
  const data = JSON.parse(localStorage.getItem(user));
  const newdata = [];

  for (let i = 0; i < data.length; i += 1) {
    const iterator = data[i];

    if (element !== iterator.title) {
      newdata.push(iterator);
    }
  }

  localStorage.setItem(user, JSON.stringify(newdata));
  window.location.reload();
};

const List = (element) => {
  const li = comp('li', 'list-group-item');
  const input = comp('input');
  input.setAttribute('type', 'checkbox');

  input.addEventListener('change', function clickListener() {
    if (this.checked) {
      const btn = comp('button', 'btn btn-success', `${element.title}btn`, 'delete');
      btn.addEventListener('click', () => deleteitem(element.title));
      li.appendChild(btn);
    } else {
      li.removeChild(document.getElementById(`${element.title}btn`));
    }
  });

  const h3 = comp('h3', '', '', element.title);
  const p = comp('p', '', '', element.description);
  const date = comp('p', '', '', element.date);
  const priority = comp('p', '', '', element.priority);


  li.appendChild(input);
  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(date);
  li.appendChild(priority);

  return li;
};

export default List;
