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
      const btn1 = comp('button', 'btn btn-success', `${element.title}btndelete`, 'delete');
      btn1.addEventListener('click', () => deleteitem(element.title));
      li.appendChild(btn1);
      const btn2 = comp('button', 'btn btn-success ml-2', `${element.title}btnedit`, 'edit');
      let att = document.createAttribute('data-toggle');
      att.value = 'modal';
      btn2.setAttributeNode(att);
      att = document.createAttribute('data-target');
      att.value = '#model3';
      btn2.setAttributeNode(att);
      btn2.onclick = localStorage.setItem('title', element.title);
      li.appendChild(btn2);
    } else {
      li.removeChild(document.getElementById(`${element.title}btndelete`));
      li.removeChild(document.getElementById(`${element.title}btnedit`));
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
