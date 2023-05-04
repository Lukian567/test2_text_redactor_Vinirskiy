const icons = document.querySelectorAll('.icon')
const text = document.querySelectorAll('.text')
const bold = document.querySelector('.bold')

//додаємо функцію яка робить текст товстішим

bold.addEventListener('click', () => {
  //перший варіант
  if (text[0].style.fontWeight === 'bold') {
    text.forEach((text) => {
      text.style.fontWeight = 'normal'
    })
    bold.style.backgroundColor = ' rgb(226, 224, 224)'

  } else {
    text.forEach((text) => {
      text.style.fontWeight = 'bold'
    })

    bold.style.backgroundColor = 'rgb(146, 146, 146)'
  }
  // другий варіант
  // text.forEach((text) => {
  //  if (text.style.fontWeight === 'bold') {
  //   text.style.fontWeight = 'normal'
  //  } else {
  //   text.style.fontWeight = 'bold'
  //  }
  // })
})

//додаємо функцію яка робить текст курсивним
const cursive = document.querySelector('.cursive')
cursive.addEventListener('click', () => {
  text.forEach((text) => {
    if (text.style.fontStyle === 'italic') {
      text.style.fontStyle = 'normal'
      cursive.style.backgroundColor = ' rgb(226, 224, 224)'
    } else {
      text.style.fontStyle = 'italic'
      cursive.style.backgroundColor = 'rgb(146, 146, 146)'
    }
  })
})

//додаємо функцію яка робить текст підкресленим

const underline = document.querySelector('.underline')
underline.addEventListener('click', () => {
  text.forEach((text) => {
    if (text.style.textDecoration === 'underline') {
      text.style.textDecoration = 'none'
      underline.style.backgroundColor = ' rgb(226, 224, 224)'
    } else {
      text.style.textDecoration = 'underline'
      underline.style.backgroundColor = 'rgb(146, 146, 146)'
    }
  })
})

//додаємо функцію яка робить текст закреслиним

const lines = document.querySelector('.line')
lines.addEventListener('click', () => {
  text.forEach((text) => {
    if (text.style.textDecoration === 'line-through') {
      text.style.textDecoration = 'none'
      lines.style.backgroundColor = ' rgb(226, 224, 224)'
    } else {
      text.style.textDecoration = 'line-through'
      lines.style.backgroundColor = 'rgb(146, 146, 146)'
    }
  })
})

//додаємо функцію яка робить текст з лівого блоку

const block = document.querySelector('.block')
const left = document.querySelector('.left')
left.addEventListener('click', () => {
  block.style.alignItems = 'flex-start'
})

//додаємо функцію яка робить текст по центру

const center = document.querySelector('.center')
center.addEventListener('click', () => {
  block.style.alignItems = 'center'
})

//додаємо функцію яка робить текст з правого блоку

const right = document.querySelector('.right')
right.addEventListener('click', () => {
  block.style.alignItems = 'flex-end'
})

//додаємо функцію яка при нажатті на кнопку буде виводити блок з кольорами для тексту

const color = document.querySelectorAll('.color')
const main_color_conteiner = document.querySelector('.main_color_conteiner')
const shadow = document.querySelector('.shadow')
const exit_color_btn = document.querySelector('.color_return')
const text_color_btn = document.querySelector('.text_color_btn')

text_color_btn.addEventListener('click', () => {
  main_color_conteiner.style.display = 'flex'
  shadow.style.backgroundColor = ' rgba(0, 0, 0, 0.301)'
  icons.forEach((icon) => {
    icon.style.backgroundColor = 'rgba(255, 255, 255, 0.301)'
  });
})

//додаємо функцію яка при нажатті на кнопку буде закривати блок з кольорами для тексту

exit_color_btn.addEventListener('click', () => {
  main_color_conteiner.style.display = 'none'
  icons.forEach((icon) => {
    icon.style.backgroundColor = ' rgb(226, 224, 224)'
  });
  shadow.style.backgroundColor = ' rgba(226, 224, 224, 0)'
})

//додаємо функцію яка при нажатті на певний блок з кольором буде міняти кольор тексту

color.forEach((color) => {
  color.addEventListener('click', () => {
    text.forEach((text_color) => {
      text_color.style.color = color.style.backgroundColor
    })
  })
})

const background_color = document.querySelectorAll('.background_color')
const background_color_conteiner = document.querySelector('.background_color_conteiner')
const background_color_btn = document.querySelector('.background_color_btn')
const background_color_exit_btn = document.querySelector('.background_color_exit_btn')
const image_background_choose = document.querySelector('.image_background_choose')
const main_image_conteiner = document.querySelector('.main_image_conteiner')
const image = document.querySelectorAll('.image')
const color_background_choose = document.querySelector('.color_background_choose')
const exit_image_btn = document.querySelector('.exit_image_btn')
const file_choose = document.querySelector('.file_choose')
const main_file_conteiner = document.querySelector('.main_file_conteiner')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

// ддаємо кнопку яка буде закривати вікно з кольорами для заднього фону

exit_image_btn.addEventListener('click', () => {
  main_image_conteiner.style.display = 'none'
  icons.forEach((icon) => {
    icon.style.backgroundColor = ' rgb(226, 224, 224)'
  });
  shadow.style.backgroundColor = ' rgba(226, 224, 224, 0)'
})

// додаємо кнопку яка буде відкривати вікно з кольорами для заднього фону

background_color_btn.addEventListener('click', () => {
  background_color_conteiner.style.display = 'flex'
  shadow.style.backgroundColor = ' rgba(0, 0, 0, 0.301)'
  icons.forEach((icon) => {
    icon.style.backgroundColor = 'rgba(255, 255, 255, 0.301)'
  });
  color_background_choose.style.color = 'blue'
})

// додаємо функцію яка буде змінювати кольор для заднього фону

background_color.forEach((background_color) => {
  background_color.addEventListener('click', () => {
    block.style.backgroundImage = 'none'
    block.style.backgroundColor = background_color.style.backgroundColor
  })
})

// додаємо кнопку яка буде закривати вікно з кольорами для заднього фону

background_color_exit_btn.addEventListener('click', () => {
  background_color_conteiner.style.display = 'none'
  icons.forEach((icon) => {
    icon.style.backgroundColor = ' rgb(226, 224, 224)'
  });
  shadow.style.backgroundColor = ' rgba(226, 224, 224, 0)'
})

// додаємо кнопку яка буде відкривати вікно з зображеннями для заднього фону

image_background_choose.addEventListener('click', () => {
  main_image_conteiner.style.display = 'flex'
  background_color_conteiner.style.display = 'none'
  main_file_conteiner.style.display = 'none'
  two.style.color = 'blue'
  one.style.color = 'black'
})

// додаємо функцію щоб при натисенні на напис відкривалося вікно з вибором заднього кольору

one.addEventListener('click', () => {
  main_image_conteiner.style.display = 'none'
  main_file_conteiner.style.display = 'none'
  background_color_conteiner.style.display = 'flex'
  one.style.color = 'blue'
})

// додаємо функцію яка буде змінювати зображення для заднього фону

image.forEach((image) => {
  image.addEventListener('click', () => {
    block.style.backgroundImage = image.style.backgroundImage
  })
})

// додаємо функцію щоб при натисенні на напис відкривалося вікно з вибором файла для заднього фону

const blue = document.querySelector('.blue')
file_choose.addEventListener('click', () => {
  main_image_conteiner.style.display = 'none'
  background_color_conteiner.style.display = 'none'
  main_file_conteiner.style.display = 'flex'
  three.style.color = 'blue'
})

// додаємо фунцію щоб відкривалося вікно з задніми кольрами при натисненні на напис в вікні з вибором файла

const background_color_in_file_choose = document.querySelector('.background_color_in_file_choose')
background_color_in_file_choose.addEventListener('click', () => {
  main_image_conteiner.style.display = 'none'
  main_file_conteiner.style.display = 'none'
  background_color_conteiner.style.display = 'flex'
  one.style.color = 'blue'
})

// додаємо фунцію щоб відкривалося вікно з задніми зображеннями при натисненні на напис в вікні з вибором файла

const background_image_in_file_choose = document.querySelector('.background_image_in_file_choose')
background_image_in_file_choose.addEventListener('click', () => {
  main_image_conteiner.style.display = 'flex'
  main_file_conteiner.style.display = 'none'
  background_color_conteiner.style.display = 'none'
  two.style.color = 'blue'
})

// додаємо фунцію щоб відкривалося вікно з вибром файла при натисненні на напис в вікні з вибором зображення

const file_in_image = document.querySelector('.file_in_image')
file_in_image.addEventListener('click', () => {
  main_image_conteiner.style.display = 'none'
  main_file_conteiner.style.display = 'flex'
  background_color_conteiner.style.display = 'none'
  three.style.color = 'blue'
})

// додаємо функції щоб ми могли встановити зображення заднього фону з інпута

const input_file = document.querySelector('.input_file');
input_file.addEventListener('change', () => {
  const file = input_file.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    block.style.backgroundImage = `url(${reader.result})`;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    block.style.backgroundImage = "";
  }
})

//додаємо функцію яка закриває вікно з інпут файлом заднього фону

const exit_file_button = document.querySelector('.exit_file_button')
exit_file_button.addEventListener('click', () => {
  main_file_conteiner.style.display = 'none'
  icons.forEach((icon) => {
    icon.style.backgroundColor = ' rgb(226, 224, 224)'
  });
  shadow.style.backgroundColor = ' rgba(226, 224, 224, 0)'
})

const font_family = document.querySelector('.font_family')
const font_family_dropdown = document.getElementById('font_family_dropdown')

//додаємо кнопку яка буде відкривати викідний список зі шрифтами

font_family.addEventListener('click', () => {
  font_family_dropdown.style.display = 'flex'
})

// робимо фунцію яка буде міняти шрифт тексту в залежності від вибраного в викідному списку

font_family_dropdown.addEventListener('change', () => {
  const selected_font = event.target.value;
  text.forEach((text) => {
    text.style.fontFamily = selected_font;
  });
})

//робимо функція яка при кліці на будь яку частини сторінки буде закривати викідний список

document.body.addEventListener('click', (event) => {
  if (event.target !== font_family && event.target !== font_family_dropdown) {
    font_family_dropdown.style.display = 'none';
  }
});

const text_size_dropdown = document.getElementById('text_size_dropdown')
const text_size_dropdown_btn = document.getElementById('text_size_dropdown_btn')

//додаємо кнопку яка буде відкривати викідний список зі розміром текста

text_size_dropdown_btn.addEventListener('click', () => {
  text_size_dropdown.style.display = 'flex';
});

// робимо фунцію яка буде міняти розмір тексту в залежності від вибраного в викідному списку

text_size_dropdown.addEventListener('change', () => {
  const selected_size = event.target.value;
  text.forEach((text) => {
    text.style.fontSize = selected_size + 'px';
  });
});

//робимо функція яка при кліці на будь яку частини сторінки буде закривати викідний список 

document.body.addEventListener('click', (event) => {
  if (event.target !== text_size_dropdown_btn && event.target !== text_size_dropdown) {
    text_size_dropdown.style.display = 'none';
  }
});

const main_sing_up_container = document.querySelector('.main_sing_up_container');
const sign_text_conteiner = document.querySelector('.sign_text_conteiner');
const sign_up_input_login = document.querySelector('.sign_up_input.login');
const sign_up_input_password = document.querySelector('.sign_up_input.password');
const sign_up_button = document.querySelector('.sign_up_button');
const login_btn = document.querySelector('.login_btn')
const sing_up_container = document.querySelector('.sing_up_container')

//робимо фунцію яка при кліці на кнопку логін буде відкривати вікно з входом

login_btn.addEventListener('click', () => {
  main_sing_up_container.style.display = 'flex'
  shadow.style.backgroundColor = ' rgba(0, 0, 0, 0.301)'
  icons.forEach((icon) => {
    icon.style.backgroundColor = 'rgba(255, 255, 255, 0.301)'
  });
})

//робимо фунцію яка при кліці на будь яку частину сторінки буде закривати вікно з входом

document.body.addEventListener('click', (event) => {
  if (event.target !== main_sing_up_container && event.target !== sign_up_input_login && event.target !== sign_up_input_password && event.target !== sign_up_button && event.target !== login_btn && event.target !== sign_text_conteiner && event.target !== sing_up_container && !event.target.classList.contains('icon')) {
    main_sing_up_container.style.display = 'none';
    icons.forEach((icon) => {
      icon.style.backgroundColor = ' rgb(226, 224, 224)'
    });
    shadow.style.backgroundColor = ' rgba(226, 224, 224, 0)'
  }
});

const name_regex = /^[a-zA-Z]{1,20}$/;
const password_regex = /^[a-zA-Z0-9]{8,15}$/;
const first_message = document.querySelector('.first_message')
const second_message = document.querySelector('.second_message')

const first_editor = document.getElementById('first_editor')
const second_editor = document.getElementById('second_editor')
const third_editor = document.getElementById('third_editor')
const fourth_editor = document.getElementById('fourth_editor')
const fifth_editor = document.getElementById('fifth_editor')
const first_text = document.getElementById('first_text')
const second_text = document.getElementById('second_text')
const third_text = document.getElementById('third_text')
const fourth_text = document.getElementById('fourth_text')
const fifth_text = document.getElementById('fifth_text')
const save_button = document.getElementById('save_button');

//робимо функцію яка буде перевіряти чи підходь логін(admin) і пароль користувача(123ABCabc), якщо підходе то кнопка редактора почне відкривати редактор тексту

sign_up_button.addEventListener('click', () => {
  if (sign_up_input_login.value === '') {
    first_message.style.display = 'flex'
    sign_up_input_login.style.border = '2px solid red';
  } else if (!name_regex.test(sign_up_input_login.value) || !sign_up_input_login.value.includes('admin')) {
    sign_up_input_login.style.border = '2px solid red';
    first_message.style.display = 'none'
    second_message.style.display = 'flex'
  } else {
    sign_up_input_login.style.border = '2px solid green';
    first_message.style.display = 'none'
    second_message.style.display = 'none'
  }
  if (sign_up_input_password.value === '') {
    first_message.style.display = 'flex'
    sign_up_input_password.style.border = '2px solid red';
  } else if (!password_regex.test(sign_up_input_password.value) || !sign_up_input_password.value.includes('123ABCabc')) {
    sign_up_input_password.style.border = '2px solid red';
    first_message.style.display = 'none'
    second_message.style.display = 'flex'
  } else {
    sign_up_input_password.style.border = '2px solid green';
    first_message.style.display = 'none'
    second_message.style.display = 'none'
  }
  if (sign_up_input_login.value.includes('admin') && sign_up_input_password.value.includes('123ABCabc')) {
    main_sing_up_container.style.display = 'none';
    icons.forEach((icon) => {
      icon.style.backgroundColor = 'rgb(226, 224, 224)';
    });
    shadow.style.backgroundColor = 'rgba(226, 224, 224, 0)';

    lock.addEventListener('click', () => {
      all_in_all.style.display = 'none'
      editor_text.style.display = 'block'
    });
  }
})

const all_in_all = document.querySelector('.all_in_all')
const lock = document.getElementById('lock');
const editor_text = document.querySelector('.editor')

// робимо функцію яка при кліці на кнопку буде зберігати значення інпутів та буде застосоване тексту на головній сторінці

save_button.addEventListener('click', () => {
  first_text.innerHTML = first_editor.value
  second_text.innerHTML = second_editor.value
  third_text.innerHTML = third_editor.value
  fourth_text.innerHTML = fourth_editor.value
  fifth_text.innerHTML = fifth_editor.value
  all_in_all.style.display = 'block'
  editor_text.style.display = 'none'
})

