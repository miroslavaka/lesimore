//circle text animation: https://www.youtube.com/watch?v=tqOSN4K5ha4

const text = document.querySelector('.animated__text');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

const element = document.querySelectorAll('span');
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = 'rotate(' + i * 19 + 'deg)';
}
