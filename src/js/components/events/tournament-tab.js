import List from "list.js";

const listsMap = new Map(); // Хранит объекты List

const listInit = () => {
  const lists = document.querySelectorAll('[data-list]');

  if (lists.length) {
    lists.forEach((list) => {
      let options = {
        valueNames: ['name', 'ntpr', 'wl', 'rating']
      };

      const LIST = new List(list, options);
      listsMap.set(list, LIST); // Сохраняем List в Map

      const searchFields = list.querySelectorAll('[data-list-search]');

      // ПОИСК
      if (searchFields.length) {
        searchFields.forEach(search => {
          search.addEventListener('input', () => {
            LIST.search(search.value.trim());
          });
        });
      }
    });
  }
};

function createTabsList(index) {
  const eventsTabButtons = document.querySelectorAll('[data-tournament-tab]');
  const eventsTabContents = document.querySelectorAll('[data-tournament-content]');

  eventsTabButtons[index].classList.add('active');
  eventsTabContents[index].classList.add('active');

  countColumns();

  eventsTabButtons.forEach((el, index) => {
    el.addEventListener('click', () => {
      clearActiveClass();
      el.classList.add('active');
      eventsTabContents[index].classList.add('active');

      // Очистка поиска при переключении вкладки
      const searchField = eventsTabContents[index].querySelector('[data-list-search]');
      if (searchField) {
        searchField.value = ''; // Очищаем поле поиска
      }

      // Перезапуск фильтрации через сохраненный объект List
      const listContainer = eventsTabContents[index].querySelector('[data-list]');
      const LIST = listsMap.get(listContainer);
      if (LIST) {
        LIST.search(""); // Сброс поиска
      }
    });
  });

  function clearActiveClass() {
    eventsTabButtons.forEach(el => el.classList.remove('active'));
    eventsTabContents.forEach(el => el.classList.remove('active'));
  }

  function countColumns() {
    eventsTabContents.forEach(table => {
      const columns = table.querySelectorAll('.calendar-table__head li');
      table.classList.add(`calendar-content__info--${columns.length}`);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createTabsList(0);
  listInit();
});
