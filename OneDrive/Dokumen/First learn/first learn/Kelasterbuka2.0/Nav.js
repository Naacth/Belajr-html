const sidebar = document.querySelector('.sidebar');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '☰';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.left = '20px';
toggleButton.style.fontSize = '24px';
toggleButton.style.zIndex = '1000';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

