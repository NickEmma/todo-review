"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["crud"],{

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearList = (e) => {
  const clicked = e.target.closest('.check');
  if (!clicked) return;
  const targetData = parseInt(clicked.getAttribute('data-check'), 10);
  const task = JSON.parse(localStorage.getItem('todo-list')) || [];
  const update = task.find((todo) => todo.index === targetData);
  update.completed = !update.completed;
  localStorage.setItem('todo-list', JSON.stringify(task));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearList);


/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/clear.js");


const taskInput = document.querySelector('.input-container');
const taskHandler = document.querySelector('.todo-input');
const UI = document.querySelector('.lists');
const clear = document.querySelector('.btn-clear');

let todos = JSON.parse(localStorage.getItem('todo-list'));
const showTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo) => {
      const flag = todo.completed ? 'checked' : '';
      li += ` <li class="list-info">
          <div class="check">
            <label for="">
              <input type="checkbox" ${flag} class="check" data-check="${todo.index}"/>
              <input type="text" class="todo-input style" data-desc="${todo.index}" value="${todo.description}" />
            </label>
          </div>
          <div class="icon">
          <i class="fa-solid fa-trash" id="${todo.index}"></i>
          </div>
        </li>`;
    });
  }
  UI.innerHTML = li;
};
showTodo();

taskInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = taskHandler.value.trim();
  taskHandler.value = '';
  if (!userInput) return;
  if (!todos) {
    todos = [];
  }
  const task = {
    description: userInput,
    completed: false,
    index: todos.length,
  };
  todos.push(task);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
});

const removeTask = (index) => {
  const newArr = todos.filter((element) => element.index !== index);
  todos.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });

  todos.push(...newArr);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
};

UI.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

const update = (e) => {
  const clicked = e.target.closest('.todo-input');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const task = JSON.parse(localStorage.getItem('todo-list')) || [];
    const targetData = parseInt(clicked.getAttribute('data-desc'), 10);
    const update = task.find((todo) => todo.index === targetData);
    update.description = clicked.value.trim();
    localStorage.setItem('todo-list', JSON.stringify(task));
  });
};

UI.addEventListener('click', update);

clear.addEventListener('click', () => {
  const setting = JSON.parse(localStorage.getItem('todo-list')) || [];
  const notCompleted = setting.filter((todo) => !todo.completed);
  todos.length = 0;
  let i = 0;
  notCompleted.forEach((element) => {
    element.index = i;
    i += 1;
  });

  todos.push(...notCompleted);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
});

UI.addEventListener('click', _clear__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNWTzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU0sNEJBQTRCLFdBQVc7QUFDcEYsdUVBQXVFLFdBQVcsV0FBVyxpQkFBaUI7QUFDOUc7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDZCQUE2Qiw4Q0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3J1ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGVhckxpc3QgPSAoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkID0gZS50YXJnZXQuY2xvc2VzdCgnLmNoZWNrJyk7XG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xuICBjb25zdCB0YXJnZXREYXRhID0gcGFyc2VJbnQoY2xpY2tlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hlY2snKSwgMTApO1xuICBjb25zdCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kby1saXN0JykpIHx8IFtdO1xuICBjb25zdCB1cGRhdGUgPSB0YXNrLmZpbmQoKHRvZG8pID0+IHRvZG8uaW5kZXggPT09IHRhcmdldERhdGEpO1xuICB1cGRhdGUuY29tcGxldGVkID0gIXVwZGF0ZS5jb21wbGV0ZWQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGVhckxpc3Q7XG4iLCJpbXBvcnQgY2xlYXJMaXN0IGZyb20gJy4vY2xlYXInO1xuXG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJyk7XG5jb25zdCB0YXNrSGFuZGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucHV0Jyk7XG5jb25zdCBVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsZWFyJyk7XG5cbmxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdCcpKTtcbmNvbnN0IHNob3dUb2RvID0gKCkgPT4ge1xuICBsZXQgbGkgPSAnJztcbiAgaWYgKHRvZG9zKSB7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgZmxhZyA9IHRvZG8uY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICBsaSArPSBgIDxsaSBjbGFzcz1cImxpc3QtaW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtmbGFnfSBjbGFzcz1cImNoZWNrXCIgZGF0YS1jaGVjaz1cIiR7dG9kby5pbmRleH1cIi8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidG9kby1pbnB1dCBzdHlsZVwiIGRhdGEtZGVzYz1cIiR7dG9kby5pbmRleH1cIiB2YWx1ZT1cIiR7dG9kby5kZXNjcmlwdGlvbn1cIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIiBpZD1cIiR7dG9kby5pbmRleH1cIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+YDtcbiAgICB9KTtcbiAgfVxuICBVSS5pbm5lckhUTUwgPSBsaTtcbn07XG5zaG93VG9kbygpO1xuXG50YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB1c2VySW5wdXQgPSB0YXNrSGFuZGxlci52YWx1ZS50cmltKCk7XG4gIHRhc2tIYW5kbGVyLnZhbHVlID0gJyc7XG4gIGlmICghdXNlcklucHV0KSByZXR1cm47XG4gIGlmICghdG9kb3MpIHtcbiAgICB0b2RvcyA9IFtdO1xuICB9XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgZGVzY3JpcHRpb246IHVzZXJJbnB1dCxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiB0b2Rvcy5sZW5ndGgsXG4gIH07XG4gIHRvZG9zLnB1c2godGFzayk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICBzaG93VG9kbygpO1xufSk7XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgbmV3QXJyID0gdG9kb3MuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmluZGV4ICE9PSBpbmRleCk7XG4gIHRvZG9zLmxlbmd0aCA9IDA7XG4gIGxldCBpID0gMDtcbiAgbmV3QXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmluZGV4ID0gaTtcbiAgICBpICs9IDE7XG4gIH0pO1xuXG4gIHRvZG9zLnB1c2goLi4ubmV3QXJyKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gIHNob3dUb2RvKCk7XG59O1xuXG5VSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXNvbGlkJykpIHtcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSwgMTApO1xuICAgIHJlbW92ZVRhc2soaW5kZXgpO1xuICB9XG59KTtcblxuY29uc3QgdXBkYXRlID0gKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWlucHV0Jyk7XG4gIGlmICghY2xpY2tlZCkgcmV0dXJuO1xuICBjbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWxpc3QnKSkgfHwgW107XG4gICAgY29uc3QgdGFyZ2V0RGF0YSA9IHBhcnNlSW50KGNsaWNrZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlc2MnKSwgMTApO1xuICAgIGNvbnN0IHVwZGF0ZSA9IHRhc2suZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gdGFyZ2V0RGF0YSk7XG4gICAgdXBkYXRlLmRlc2NyaXB0aW9uID0gY2xpY2tlZC52YWx1ZS50cmltKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgfSk7XG59O1xuXG5VSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZSk7XG5cbmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBzZXR0aW5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kby1saXN0JykpIHx8IFtdO1xuICBjb25zdCBub3RDb21wbGV0ZWQgPSBzZXR0aW5nLmZpbHRlcigodG9kbykgPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgdG9kb3MubGVuZ3RoID0gMDtcbiAgbGV0IGkgPSAwO1xuICBub3RDb21wbGV0ZWQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5kZXggPSBpO1xuICAgIGkgKz0gMTtcbiAgfSk7XG5cbiAgdG9kb3MucHVzaCguLi5ub3RDb21wbGV0ZWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgc2hvd1RvZG8oKTtcbn0pO1xuXG5VSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyTGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=