let count = 0;
const btn = document.getElementById('counterBtn');
btn.addEventListener('click', () => {
    count += 1;
    btn.textContent = 'Count: ' + count;
    document.getElementById('message').textContent = 'You clicked ' + count + ' times.';
});