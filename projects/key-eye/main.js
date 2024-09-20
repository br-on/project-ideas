const root = document.documentElement;
const olho = document.getElementById('bt-olho');
const beam = document.getElementById('beam');
const senhaInput = document.getElementById('senha');

root.addEventListener('mousemove', (e) => {
  let rect = beam.getBoundingClientRect();
  let mouseX = rect.right + (rect.width / 2); 
  let mouseY = rect.top + (rect.height / 2);
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = (rad * (20 / Math.PI) * -1) - 350;

  root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

olho.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.toggle('show-senha');
  senhaInput.type = passwordInput.type === 'password' ? 'text' : 'password'
  senhaInput.focus();
});