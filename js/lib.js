var obj = {

  questionsCount: 3,
  answersCount: 3,

  createTest: function() {
    var element = document.createElement('div');
    
    element.classList.add('wrapper');
    
    var parentElement = document.getElementsByTagName('body')[0].appendChild(element);

    element = document.createElement('h1');
    element.classList.add('test-header');
    element.innerHTML = 'Тест по программированию';
    parentElement.appendChild(element);

    element = document. createElement('form');
    element.action = '#';
    element.method = 'post';
    element.classList.add('questions-form');
    parentElement = parentElement.appendChild(element);

    var answers, questions = this.getQuestionsList();
    var questionElement, answerElement;

    if (questions.length) {
      element = document.createElement('ol');
      element.classList.add('questions');
      parentElement = parentElement.appendChild(element);

      for (var i = 0; i < questions.length; i++) {
        element = document.createElement('li');
        element.classList.add('question-item');
        element.innerHTML = questions[i];
        questionElement = parentElement.appendChild(element);
        answers = this.getAnswersList();
        
        if (answers.length) {
          element = document.createElement('ul');
          element.classList.add('answers')
          questionElement = questionElement.appendChild(element);

          for (var j = 0; j < answers.length; j++) {
            element = document.createElement('li');
            element.classList.add('answer-item');
            answerElement = questionElement.appendChild(element);

            var answerId = 'q' + (i +1) + '-a' + (j + 1);
            
            element = document.createElement('input');
            element.type = 'hidden';
            element.name = answerId;
            answerElement.appendChild(element);

            element = document.createElement('input');
            element.type = 'checkbox';
            element.id = answerId; 
            element.name = answerId;
            answerElement.appendChild(element);

            element = document.createElement('label');
            element.setAttribute('for', answerId);
            element.innerHTML = answers[j];
            answerElement.appendChild(element);
          }
        }
      }
    }

    parentElement = document.querySelector('.questions-form');
    element = document.createElement('input');
    element.type = 'submit';
    element.classList.add('test-button');
    element.value = 'Проверить мои результаты';
    parentElement.appendChild(element);
  },

  getQuestionsList: function() {
    var list = [];
    for (var i = 0; i < this.questionsCount; i++) {
      list.push('Вопрос №' + (i+1));
    }
    return list;
  },

  getAnswersList: function(questionId) {
    var list = [];
    if (!questionId) {
      for (var i = 0; i < this.answersCount; i++) {
        list.push('Вариант ответа №' + (i+1));
      }
    } else {
      /* Сюда вставлять код для отбора вариантов ответа в зависимости от вопроса*/
    }
    return list;
  }

}

obj.createTest();