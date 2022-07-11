const clearList = (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;
  const targetData = parseInt(clicked.getAttribute('data-check'), 10);
  const task = JSON.parse(localStorage.getItem('todo-list')) || [];
  const update = task.find((todo) => todo.index === targetData);
  update.completed = !update.completed;
  localStorage.setItem('todo-list', JSON.stringify(task));
};

export default clearList;
