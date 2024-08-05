
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()

    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'

    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


// Получаем элементы формы и кнопки
const form = document.getElementById('frm');
const button = document.getElementById('bttn');

// Добавляем обработчик события на кнопку
button.addEventListener('click', validateForm);

// Функция валидации формы
function validateForm(event) {
  event.preventDefault(); // Отменяем отправку формы по умолчанию

  // Получаем значения полей ввода
  const nameInput = document.getElementById('name-txt-f');
  const emailInput = document.getElementById('email-txt-f');
  const comInput = document.getElementById('com-txt-f');
  const nameCount = nameInput.value.length;
  const commentCount = comInput.value.length;
  // Валидация полей ввода
  if (nameCount < 2 || !validateName(nameInput.value)) {
    nameInput.style.border = '1px solid #E74A3B';
    // alert('Write correct name.');
    return;
  } else {
    nameInput.style.border = '1px solid #3CBC81';
  }

  if (!validateEmail(emailInput.value)) {
    // alert('Write correct email.');
    emailInput.style.border = '1px solid #E74A3B';
    return;
  } else {
    emailInput.style.border = '1px solid #3CBC81';
  }

  if (commentCount > 1024) {
    alert('Максимальное количество символов: 1024.');
    comInput.style.border = '1px solid #E74A3B';
    // alert('Write correct comment.');                           
    return;
  } else {
    comInput.style.border = '1px solid #3CBC81';
  }

  comInput.style.border = '1px solid #576F35';
  emailInput.style.border = '1px solid #576F35';
  nameInput.style.border = '1px solid #576F35';
  // Если все поля валидны, отправляем форму
  setTimeout(function() {
    form.submit();
  }, 3000);


  alert('Form was below.');
}
// Функция валидации Имени
function validateName(name) {
    const emailRegex = /^[a-zA-Zа-яА-я]{2,}$/;
    return emailRegex.test(name);
}
// Функция валидации email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
})


const bur = document.querySelector('.burger')

document.querySelector('.Worksk').addEventListener('click', function() {
  bur.classList.toggle('active');
  var section = document.getElementById('animatedSection');
  section.classList.toggle('show');

  document.querySelector('.startpage').classList.toggle('act')
  document.querySelector('header').classList.toggle('act')
  document.querySelector('.startImg').classList.toggle('act')
  document.querySelector('.HIW').classList.toggle('act')
  document.querySelector('.Block').classList.toggle('act')
  document.querySelector('.adv-txt').classList.toggle('act')
  document.querySelector('.vegetables').classList.toggle('act')
  document.querySelector('.reviews').classList.toggle('act')
  document.querySelector('.orders').classList.toggle('act')
  document.querySelector('footer').classList.toggle('act')
})

document.querySelector('.Vegsk').addEventListener('click', function() {
  bur.classList.toggle('active');
  var section = document.getElementById('animatedSection');
  section.classList.toggle('show');

  document.querySelector('.startpage').classList.toggle('act')
  document.querySelector('header').classList.toggle('act')
  document.querySelector('.startImg').classList.toggle('act')
  document.querySelector('.HIW').classList.toggle('act')
  document.querySelector('.Block').classList.toggle('act')
  document.querySelector('.adv-txt').classList.toggle('act')
  document.querySelector('.vegetables').classList.toggle('act')
  document.querySelector('.reviews').classList.toggle('act')
  document.querySelector('.orders').classList.toggle('act')
  document.querySelector('footer').classList.toggle('act')
})

document.querySelector('.Reviewsk').addEventListener('click', function() {
  bur.classList.toggle('active');
  var section = document.getElementById('animatedSection');
  section.classList.toggle('show');

  document.querySelector('.startpage').classList.toggle('act')
  document.querySelector('header').classList.toggle('act')
  document.querySelector('.startImg').classList.toggle('act')
  document.querySelector('.HIW').classList.toggle('act')
  document.querySelector('.Block').classList.toggle('act')
  document.querySelector('.adv-txt').classList.toggle('act')
  document.querySelector('.vegetables').classList.toggle('act')
  document.querySelector('.reviews').classList.toggle('act')
  document.querySelector('.orders').classList.toggle('act')
  document.querySelector('footer').classList.toggle('act')
})



document.getElementById('toggleButton').addEventListener('click', function() {
  var section = document.getElementById('animatedSection');
  section.classList.toggle('show');

  document.querySelector('.startpage').classList.toggle('act')
  document.querySelector('header').classList.toggle('act')
  document.querySelector('.startImg').classList.toggle('act')
  document.querySelector('.HIW').classList.toggle('act')
  document.querySelector('.Block').classList.toggle('act')
  document.querySelector('.adv-txt').classList.toggle('act')
  document.querySelector('.vegetables').classList.toggle('act')
  document.querySelector('.reviews').classList.toggle('act')
  document.querySelector('.orders').classList.toggle('act')
  document.querySelector('footer').classList.toggle('act')
});

document.querySelector('.btns').addEventListener('click', function() {
  bur.classList.toggle('active');
  var section = document.getElementById('animatedSection');
  section.classList.toggle('show');

  document.querySelector('.startpage').classList.toggle('act')
  document.querySelector('header').classList.toggle('act')
  document.querySelector('.startImg').classList.toggle('act')
  document.querySelector('.HIW').classList.toggle('act')
  document.querySelector('.Block').classList.toggle('act')
  document.querySelector('.adv-txt').classList.toggle('act')
  document.querySelector('.vegetables').classList.toggle('act')
  document.querySelector('.reviews').classList.toggle('act')
  document.querySelector('.orders').classList.toggle('act')
  document.querySelector('footer').classList.toggle('act')
})
