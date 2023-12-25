// Link processing

// Add rel='noopener noindex nofollow' and target ='_blank' attribute to each
// https://stackoverflow.com/questions/55442000/do-no-index-no-follow-on-certain-links
const extlinks = document.querySelectorAll('a[href^=http]');
[].forEach.call(extlinks, link =>{
  link.setAttribute('rel', 'noopener noindex nofollow'),
  link.setAttribute('target', '_blank')
});


// https://ru.stackoverflow.com/questions/414614/Найти-ссылку-по-содержимому-и-заменить-текст-Как-сделать-на-js
const langlinks = document.querySelectorAll('a');
[].forEach.call(langlinks, link => {
  if(link.innerHTML == 'en') {
    link.classList.add('lang_link', 'en_link');
    link.innerHTML = '<span>English</span>';
  } else if(link.innerHTML == 'ru') {
    link.classList.add('lang_link', 'ru_link');
    link.innerHTML = 'Russian';
  }
});
