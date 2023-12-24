// Get all outer anchor tags in document
const selector = 'a[href^=http]';
const links = document.querySelectorAll(selector);


[].forEach.call(links, link => {
  // Add rel='noopener noindex nofollow' attribute to each
  link.setAttribute('rel', 'noopener noindex nofollow'),
  // Add target ='_blank' attribute to each
  link.setAttribute('target', '_blank')
});
