const comp = (element, classes = '', id = '', text = '') => {
  const el = document.createElement(element);
  if (classes !== '') el.classList = classes;
  if (id !== '') el.id = id;
  if (text !== '') el.innerText = text;
  return el;
};
// eslint-disable-next-line import/prefer-default-export
export { comp };