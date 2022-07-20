const button = document.querySelector('#copy-to-clipboard');
const paragraph = document.querySelector('.text-content');

button.addEventListener('click', () => {
  const text = paragraph.innerHTML.trim();

  navigator.clipboard.writeText(text);
});