// snow canvas from https://codepen.io/cojdev/pen/JEdYGP by Charles Ojukwu

const points = [];
const maxDist = 100;

class Point {
  constructor() {
    this.x = Math.random() * (canvas.width + maxDist) - maxDist / 2;
    this.y = Math.random() * (canvas.height + maxDist) - maxDist / 2;
    this.z = Math.random() * 0.5 + 0.5;
    this.vx = (Math.random() * 2 - 0.5) * this.z;
    this.vy = (Math.random() * 1.5 + 1.5) * this.z;
    this.fill = `rgba(255, 255, 255, ${0.5 * Math.random() + 0.5})`;
    this.dia = (Math.random() * 2.5 + 1.5) * this.z;
    points.push(this);
  }
}

const generatePoints = amount => {
  for (let i = 0; i < amount; i++) {
    new Point();
  }
};

const draw = obj => {
  ctx.beginPath();
  ctx.strokeStyle = 'transparent';
  ctx.fillStyle = obj.fill;
  ctx.arc(obj.x, obj.y, obj.dia, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

const update = obj => {
  obj.x += obj.vx;
  obj.y += obj.vy;
  if (obj.x > canvas.width + maxDist / 2) {
    obj.x = -(maxDist / 2);
  } else if (obj.x < -(maxDist / 2)) {
    obj.x = canvas.width + (maxDist / 2);
  }
  if (obj.y > canvas.height + maxDist / 2) {
    obj.y = -(maxDist / 2);
  } else if (obj.y < -(maxDist / 2)) {
    obj.y = canvas.height + (maxDist / 2);
  }
};

const pointFun = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  points.forEach(point => {
    draw(point);
    update(point);
  });
};

const resizeCanvas = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(pixelRatio, pixelRatio);
  points.length = 0;
  generatePoints(700);
  pointFun();
};

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
pixelRatio = window.devicePixelRatio || 1;
resizeCanvas();
generatePoints(700);
pointFun();
setInterval(pointFun, 25);
window.addEventListener('resize', resizeCanvas, false);
document.querySelector('.button').classList.add('snow');