const headElem = document.getElementById("test-head");
const buttonsElem = document.getElementById("test-body");
const pagesElem = document.getElementById("test-pages");

//Класс, который представляет сам тест
class Quiz
{
  constructor(type, questions, results)
  {
    //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
    this.type = type;

    //Массив с вопросами
    this.questions = questions;

    //Массив с возможными результатами
    this.results = results;

    //Количество набранных очков
    this.score = 0;

    //Номер результата из массива
    this.result = 0;

    //Номер текущего вопроса
    this.current = 0;
  }

  Click(index)
  {
    //Добавляем очки
    let value = this.questions[this.current].Click(index);
    this.score += value;

    let correct = -1;

    //Если было добавлено хотя одно очко, то считаем, что ответ верный
    if(value >= 1)
    {
      correct = index;
    }
    else
    {
      //Иначе ищем, какой ответ может быть правильным
      for(let i = 0; i < this.questions[this.current].answers.length; i++)
      {
        if(this.questions[this.current].answers[i].value >= 1)
        {
          correct = i;
          break;
        }
      }
    }

    this.Next();

    return correct;
  }

  //Переход к следующему вопросу
  Next()
  {
    this.current++;

    if(this.current >= this.questions.length)
    {
      this.End();
    }
  }

  //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
  End()
  {
    for(let i = 0; i < this.results.length; i++)
    {
      if(this.results[i].Check(this.score))
      {
        this.result = i;
      }
    }
  }
}

//Класс, представляющий вопрос
class Question
{
  constructor(text, answers)
  {
    this.text = text;
    this.answers = answers;
  }

  Click(index)
  {
    return this.answers[index].value;
  }
}

//Класс, представляющий ответ
class Answer
{
  constructor(text, value)
  {
    this.text = text;
    this.value = value;
  }
}

//Класс, представляющий результат
class Result
{
  constructor(text, value)
  {
    this.text = text;
    this.value = value;
  }

  //Этот метод проверяет, достаточно ли очков набрал пользователь
  Check(value)
  {
    if(this.value <= value)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

//Массив с результатами
const results =
  [
    new Result("Вам многому нужно научиться", 0),
    new Result("Вы уже неплохо разбираетесь", 2),
    new Result("Ваш уровень выше среднего", 4),
    new Result("Вы в совершенстве знаете тему", 6)
  ];

//Массив с вопросами
const questions =
  [
    new Question("Форхенд/ Бекхенд",
      [
        new Answer("Только начинаю заниматься теннисом", 0),
        new Answer("Еще мало опыта, в основном стремлюсь удержать мяч в игре. Неполный замах; отсутствует направление удара.", 1),
        new Answer("Могу двигаться к мячу и держу мяч в среднем темпе 5-10 ударов.", 2),
        new Answer("Контролирую направление удара; отсутствует контроль за глубиной. 10 -15 ударов в среднем темпе", 3),
        new Answer("Выполняю средние по силе удары с хорошим контролем и направленностью, стараясь играть глубоко и стабильно. Могу атаковать. 15-20 ударов в среднем темпе", 4),
        new Answer("Могу разнообразно атаковать мяч, используя скорость и вращение, однако иногда ошибаются под давлением соперника. 5-10 ударов в быстром темпе.", 5),
        new Answer("Могу бить сильно и с контролем, глубиной и вращением, у меня развито чувство мяча, что позволяет стабильно выполнять обводящие удары и использовать разнообразное вращение. 10-15 ударов на высокой скорости.", 6),
      ]),

    new Question("Подача",
      [
        new Answer("Только начинаю заниматься теннисом.", 0),
        new Answer("Неполное движение при подаче; частые двойные ошибки; подброс нестабильный или неправильный.", 1),
        new Answer("Выполняю подачу с полным движением; невысокая скорость ввода мяча в игру; нестабильный подброс.", 2),
        new Answer("Появилось чувство ритма; при усилении подачу ошибаюсь; вторая подача слабее первой", 3),
        new Answer("Подаю с контролем и достаточной силой. Не очень разделаю первую и вторую подачу.", 4),
        new Answer("Первая и вторая подача по месту; выполняю первую подачу сильно, но иногда слишком сильно и в ущерб точности; умею вращать.", 5),
        new Answer("Агрессивная подача с небольшим числом двойных; использую силу и вращение; вторую подачу часто выполняю с хорошей глубиной и по месту.", 6),
      ]),

    new Question("С лёта",
      [
        new Answer("Хочу научиться играть с лета, еще не пробовал.", 0),
        new Answer("Избегаю сетки, не использую с лета слева, путаюсь в движении ног. Не уверен у сетки и часто исполняю бекхенд как форхенд", 1),
        new Answer("Успешно использую форхенд у сетки, ошибки с бекхендом и сложность с низкими и обводящими мячами.", 2),
        new Answer("Агрессивно играю у сетки, достаю обводящие удары и хорошо работаю ногами. Контролирую направление ударов.", 3),
        new Answer("Хорошая глубина и контроль с лета справа, иногда не хватает глубины с лета слева. Улучшаю прием низких и обводящих мячей.", 4),
        new Answer("Могу отражать разнообразные удары, хороший подход к мячу, я контролирую удары, но бывает играю слишком сильно. Мяч у сетки посылаю точно и глубоко, выигрываю очки.", 5),
      ]),

    new Question("Опыт игры на счёт",
      [
        new Answer("Никогда не играл", 0),
        new Answer("Немного знаю правила, но иногда путаюсь", 1),
        new Answer("Знаю правила одиночной и парной игры средне", 2),
        new Answer("Знаю правила одиночной и парной игры в совершенстве, принимал участие в турнирах", 3),
        new Answer("Постоянно играю турниры, есть призовые места", 4),
        new Answer("Единственный, кого я не победил - это Джокович. И то он не хочет.", 5),
      ]),

    new Question("Ноги в игре",
      [
        new Answer("Что с ними делать?", 0),
        new Answer("Знаю, какое положение ног должно быть на ударах. С движением трудно.", 1),
        new Answer("Знаю исходное положение, движение к мячу в сторону и вперед. Иногда перебегаю или не добегаю до мяча.", 2),
        new Answer("Нет проблем с движением вперед в сторону, есть проблемы с отходом от мяча назад", 3),
        new Answer("Свободно перемещаюсь по корту. Короткие, длинные мячи отбиваю легко. Могу предугадать, куда будет бить соперник.", 4),
        new Answer("Легко предугадываю, куда будет бить соперник. Умею во время забегать под нужный удар и не боюсь заходить в корт и играть слета.", 5),
        new Answer("Не испытываю проблем с работой ног. Играю в открытой, нейтральной и закрытой стойке, в зависимости от тактической ситуации.", 6),
      ]),

    new Question("Могу и использую удары в игре...",
      [
        new Answer("Никаких, я их еще не знаю.", 0),
        new Answer("Справа ( форхенд), слева ( бэкхенд), подача - 1 вариант", 1),
        new Answer("Справа ( форхенд), слева ( бэкхенд), подача - 1 вариант, слета, смеш", 2),
        new Answer("Справа ( форхенд), слева ( бэкхенд), подача - первая / вторая, прием, слета, смеш, резаные", 3),
        new Answer("Справа ( форхенд), слева ( бэкхенд), подача - первая / вторая, прием, слета, смеш, резаные, драйв, дроп-шоты", 4),
      ])
  ];

//Сам тест
const quiz = new Quiz(2, questions, results);

Update();

//Обновление теста
function Update()
{
  //Проверяем, есть ли ещё вопросы
  if(quiz.current < quiz.questions.length)
  {
    //Если есть, меняем вопрос в заголовке
    headElem.innerHTML = quiz.questions[quiz.current].text;

    //Удаляем старые варианты ответов
    buttonsElem.innerHTML = "";

    //Создаём кнопки для новых вариантов ответов
    for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
    {
      let btn = document.createElement("div");
      btn.className = "p2 button";

      btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

      btn.setAttribute("index", i);

      buttonsElem.appendChild(btn);
    }

    //Выводим номер текущего вопроса
    pagesElem.innerHTML = "0" +(quiz.current + 1) + " / 0" + quiz.questions.length;

    //Вызываем функцию, которая прикрепит события к новым кнопкам
    Init();
  }
  else
  {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = "";
    headElem.innerHTML = quiz.results[quiz.result].text;
    pagesElem.innerHTML = "Очки: " + quiz.score;
  }
}

function Init()
{
  //Находим все кнопки
  let btns = document.getElementsByClassName("button");

  for(let i = 0; i < btns.length; i++)
  {
    //Прикрепляем событие для каждой отдельной кнопки
    //При нажатии на кнопку будет вызываться функция Click()
    btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
  }
}

function Click(index)
{
  //Получаем номер правильного ответа
  let correct = quiz.Click(index);

  //Находим все кнопки
  let btns = document.getElementsByClassName("button");

  //Делаем кнопки серыми
  for(let i = 0; i < btns.length; i++) {
    btns[i].className = "button button_passive";
  }

  //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным

  if(quiz.type == 1) {
    if(correct >= 0)
    {
      btns[correct].className = "button button_correct";
    }

    if(index != correct)
    {
      btns[index].className = "button button_wrong";
    }
  } else {
    //Иначе просто подсвечиваем зелёным ответ пользователя
    btns[index].className = "button button_correct";
  }

  //Ждём секунду и обновляем тест
  setTimeout(Update, 1000);
}
