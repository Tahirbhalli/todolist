const comp = (element, classes = '', id = '', text = '') => {
  const el = document.createElement(element);
  if (classes !== '') el.classList = classes;
  if (id !== '') el.id = id;
  if (text !== '') el.innerText = text;
  return el;
};

export default comp;
