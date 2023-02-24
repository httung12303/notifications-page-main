const toggle = document.querySelector('.toggle-all');
toggle.addEventListener('click', toggleAllRead);

const unreads = document.querySelectorAll('.unread');
unreads.forEach((unread) => unread.addEventListener('click', toggleRead));

function toggleAllRead() {
  const unreads = document.querySelectorAll('.unread');
  unreads.forEach((unread) => unread.classList.remove('unread'));
  const unreadCount = document.querySelector('.unread-count');
  unreadCount.textContent = '0';
}

function toggleRead(e) {
  const target = e.currentTarget;
  target.classList.remove('unread');
  const unreadCount = document.querySelector('.unread-count');
  if (unreadCount.textContent != '0') {
    unreadCount.textContent = parseInt(unreadCount.textContent) - 1;
  }
}
