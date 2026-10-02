// ===== Settings =====
const CONTACT_EMAIL = 'cheesy.bites11@gmail.com';

// Product listing (no prices). `crop` picks one pack out of the wholesale poster.
const PRODUCTS = [
  { cat: 'fresh',     tag: 'Signature',      img: 'corndogs.jpg', name: 'Cheese Sticks & Corndogs', desc: 'Crispy golden batter around a stretchy mozzarella or sausage core. The cheese pull we are known for.', where: 'Our outlets & franchise outlets' },
  { cat: 'fresh',     tag: 'Outlet favourite', img: 'burger.jpg', name: 'Cheesy Bites Burgers', desc: 'Juicy patties, melted cheese and our house sauce in a soft sesame bun.', where: 'Our outlets & delivery partners' },
  { cat: 'fresh',     tag: 'Ready to eat',   img: 'fries.jpg',    name: 'Fries & Potato Sticks', desc: 'Crispy fries and potato sticks, great on their own or with cheese sauce.', where: 'Outlets & Ocean supermarkets' },
  { cat: 'frozen',    tag: 'Ready to fry',   img: 'frozen.jpg',   name: 'Frozen Cheese Sticks & Corndogs', desc: 'The outlet taste at home. Fry straight from the freezer in about five minutes.', where: 'Marketplace & Ocean supermarkets' },
  { cat: 'wholesale', tag: '1 kg pack',      img: 'wholesale.jpg', crop: '2% 52%',  name: 'Potato Ball', desc: 'Bite-size potato balls with a soft centre. Fried crisp in minutes.', where: 'Makro Myanmar' },
  { cat: 'wholesale', tag: '1 kg pack',      img: 'wholesale.jpg', crop: '29% 52%', name: 'Potato Triangle', desc: 'Crunchy potato triangles, perfect for snack menus and sharing plates.', where: 'Makro Myanmar' },
  { cat: 'wholesale', tag: '1 kg pack',      img: 'wholesale.jpg', crop: '55% 52%', name: 'Chicken Popcorn', desc: 'Juicy bite-size chicken pieces in a crispy coating.', where: 'Makro Myanmar' },
  { cat: 'wholesale', tag: '300 ml pack',    img: 'wholesale.jpg', crop: '81% 52%', name: 'Cheese Sauce', desc: 'Rich, smooth cheese sauce for dipping, drizzling and topping.', where: 'Makro Myanmar' },
];

const LABELS = { fresh: 'Ready to Eat', frozen: 'Frozen', wholesale: 'Wholesale' };

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// ===== Mobile nav =====
const burger = $('#burger');
const navLinks = $('#navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
$$('#navLinks a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  navLinks.classList.remove('open');
}));

// ===== Products render + filter =====
const grid = $('#productGrid');
function renderProducts(filter = 'all') {
  grid.innerHTML = PRODUCTS
    .filter(p => filter === 'all' || p.cat === filter)
    .map((p, idx) => {
      const style = p.crop
        ? `background-image:url(assets/img/${p.img});background-size:400%;background-position:${p.crop}`
        : `background-image:url(assets/img/${p.img})`;
      return `
      <article class="item" style="animation-delay:${idx * 50}ms">
        <div class="item__img" style="${style}" role="img" aria-label="${p.name}"><span class="item__tag">${p.tag}</span></div>
        <div class="item__body">
          <span class="item__cat">${LABELS[p.cat]}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="item__where">📍 ${p.where}</div>
        </div>
      </article>`;
    }).join('');
}
$('#tabs').addEventListener('click', e => {
  if (!e.target.matches('.tab')) return;
  $$('.tab').forEach(t => t.classList.toggle('is-active', t === e.target));
  renderProducts(e.target.dataset.filter);
});

// ===== Franchise form → opens email =====
$('#franchiseForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const required = $$('[required]', form);
  required.forEach(f => f.classList.toggle('invalid', !f.value.trim()));
  if (required.some(f => !f.value.trim())) {
    $('#formMsg').textContent = 'Please fill in the highlighted fields.';
    return;
  }
  const d = Object.fromEntries(new FormData(form));
  const body = `Name: ${d.name}\nPhone: ${d.phone}\nCity: ${d.city}\nFormat: ${d.format}\n\n${d.message}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Franchise Enquiry: ' + d.name)}&body=${encodeURIComponent(body)}`;
  $('#formMsg').textContent = 'Thanks! Your email app is opening. Just hit send. 🧀';
  form.reset();
});

// ===== Lightbox for outlet photos =====
const lightbox = $('#lightbox');
$$('.gallery img').forEach(img => img.addEventListener('click', () => {
  $('img', lightbox).src = img.src;
  $('img', lightbox).alt = img.alt;
  lightbox.classList.add('open');
}));
lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
document.addEventListener('keydown', e => e.key === 'Escape' && lightbox.classList.remove('open'));

// ===== Count-up stats =====
function countUp(el) {
  const target = +el.dataset.count;
  const start = +(el.dataset.start || 0);
  const t0 = performance.now();
  const step = now => {
    const k = Math.min((now - t0) / 1000, 1);
    el.textContent = Math.round(start + (target - start) * k);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ===== Reveal on scroll =====
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('visible');
  if (en.target.dataset.count) countUp(en.target);
  io.unobserve(en.target);
}), { threshold: .15 });
$$('.section__title, .feature, .pillar, .split__art, .split__text, .card, .photo, .visit__map').forEach(el => { el.classList.add('reveal'); io.observe(el); });
$$('[data-count]').forEach(el => io.observe(el));

// ===== Mascot eyes follow the cursor =====
const pupils = $$('.pupil');
const base = pupils.map(p => ({ x: +p.getAttribute('cx'), y: +p.getAttribute('cy') }));
document.addEventListener('mousemove', e => {
  const r = $('.mascot').getBoundingClientRect();
  const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / 300));
  const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 3)) / 300));
  pupils.forEach((p, i) => { p.setAttribute('cx', base[i].x + dx * 5); p.setAttribute('cy', base[i].y + dy * 6); });
});

// ===== Init =====
$('#year').textContent = new Date().getFullYear();
renderProducts();
