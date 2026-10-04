// ===== Clickjacking guard: never run inside another site's frame =====
if (window.top !== window.self) {
  try { window.top.location = window.self.location.href; } catch { document.documentElement.style.display = 'none'; }
}

function renderMenu() {
  const T = MENU_TEXT[lang];
  $('#menuBoards').innerHTML = MENU.map(b => {
    const t = b[lang];
    const bg = b.crop
      ? `background-image:url(assets/img/${b.img});background-size:400%;background-position:${b.crop}`
      : `background-image:url(assets/img/${b.img});background-position:${b.pos || 'center'}`;
    const groups = t.groups.map(g => `
        ${g.label ? `<h4 class="board__group">${g.label}</h4>` : ''}
        <ul class="board__items">${g.items.map(i => `<li>${i}</li>`).join('')}</ul>`).join('');
    const flavours = b.flavours ? `
        <div class="board__flavours">
          <p>${T.flavours}</p>
          <ul>${FLAVOURS[lang].map(f => `<li>${f}</li>`).join('')}<li class="cheese">${T.cheese}</li></ul>
        </div>` : '';
    return `
      <article class="board${b.wide ? ' board--wide' : ''}${b.span ? ' board--span' : ''}">
        <div class="board__img" style="${bg}" role="img" aria-label="${t.title}">
          ${b.special ? `<span class="board__ribbon">${T.special}</span>` : ''}
        </div>
        <div class="board__body">
          <h3 class="board__title"><span>${b.icon}</span>${t.title}</h3>
          ${groups}
          ${flavours}
        </div>
      </article>`;
  }).join('');
}

const LABELS = {
  en: { fresh: 'Ready to Eat', frozen: 'Frozen', wholesale: 'Wholesale' },
  my: { fresh: 'အသင့်စား', frozen: 'အေးခဲ', wholesale: 'လက်ကား' },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
let lang = 'en';
let currentFilter = 'all';

// ===== Numbers and cities from data.js =====
const MY_DIGITS = '၀၁၂၃၄၅၆၇၈၉';
const toMy = n => String(n).replace(/\d/g, d => MY_DIGITS[d]);
const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  my: ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'ဩဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'],
};
$$('[data-stat]').forEach(el => { el.dataset.count = SITE_STATS[el.dataset.stat]; });
$$('[data-stat-text]').forEach(el => { el.textContent = SITE_STATS[el.dataset.statText]; });

function renderStatsText() {
  const [y, m, d] = SITE_STATS.asOf.split('-').map(Number);
  const text = lang === 'my'
    ? `${toMy(y)} ${MONTHS.my[m - 1]} ${toMy(d)} ရက်နေ့ထိ`
    : `as of ${d} ${MONTHS.en[m - 1]} ${y}`;
  $$('[data-asof]').forEach(el => { el.textContent = text; });
  $('#cityList').innerHTML = CITIES
    .map(c => `<li${c.hot ? ' class="hot"' : ''}>${c[lang] || c.en}</li>`).join('');
}

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

// ===== Language (English / Myanmar) =====
const i18nEls = $$('[data-i18n]');
i18nEls.forEach(el => { el._en = el.innerHTML; });

function setLang(next) {
  lang = next === 'my' ? 'my' : 'en';
  document.documentElement.lang = lang;
  i18nEls.forEach(el => {
    const t = lang === 'my' ? I18N_MY[el.dataset.i18n] : undefined;
    el.innerHTML = t ?? el._en;
  });
  $('#langBtn').textContent = lang === 'my' ? 'English' : 'မြန်မာ';
  renderProducts(currentFilter);
  renderMenu();
  renderStatsText();
  const br = $('#brochureLink');
  if (br) br.href = `assets/brochure/cheesy-bites-franchise-${lang}.pdf`;
  try { localStorage.setItem('cb-lang', lang); } catch {}
}
$('#langBtn').addEventListener('click', () => { setLang(lang === 'my' ? 'en' : 'my'); track('lang-' + lang, 'Language: ' + lang); });

// ===== Products render + filter =====
const grid = $('#productGrid');
function renderProducts(filter = 'all') {
  currentFilter = filter;
  grid.innerHTML = PRODUCTS
    .filter(p => filter === 'all' || p.cat === filter)
    .map((p, idx) => {
      const t = lang === 'my' ? p.my : p;
      const style = p.crop
        ? `background-image:url(assets/img/${p.img});background-size:400%;background-position:${p.crop}`
        : `background-image:url(assets/img/${p.img})${p.pos ? `;background-position:${p.pos}` : ''}`;
      return `
      <article class="item${p.exclusive ? ' item--exclusive' : ''}" style="animation-delay:${idx * 50}ms">
        <div class="item__img" style="${style}" role="img" aria-label="${t.name}"><span class="item__tag">${t.tag}</span></div>
        <div class="item__body">
          <span class="item__cat">${LABELS[lang][p.cat]}</span>
          <h3>${t.name}</h3>
          <p>${t.desc}</p>
          <div class="item__where">📍 ${t.where}</div>
        </div>
      </article>`;
    }).join('');
}
$('#tabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  $$('.tab').forEach(t => t.classList.toggle('is-active', t === tab));
  renderProducts(tab.dataset.filter);
});

// ===== Franchise form → email to both addresses =====
const COOLDOWN_MS = 30000;
let lastSent = 0;
// Strip HTML tags and control characters, collapse whitespace, cap length
const clean = (v, max = 200) => String(v || '')
  .replace(/<[^>]*>/g, '')
  .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
  .replace(/[ \t]+/g, ' ')
  .trim()
  .slice(0, max);

const form = $('#franchiseForm');
const fallback = $('#formFallback');

function validate(field) {
  const v = field.value.trim();
  const ok = field.name === 'phone'
    ? /^[0-9+()\s-]{7,20}$/.test(v) && v.replace(/\D/g, '').length >= 7
    : v !== '';
  field.classList.toggle('invalid', !ok);
  return ok;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const msg = $('#formMsg');
  const btn = $('#formBtn');
  const M = I18N_MSG[lang];
  fallback.hidden = true;

  const required = $$('[required]', form);
  const results = required.map(validate);
  if (results.includes(false)) {
    const onlyPhoneWrong = results.filter(r => !r).length === 1 && form.phone.classList.contains('invalid') && form.phone.value.trim();
    msg.textContent = onlyPhoneWrong ? M.phone : M.required;
    required.find(f => f.classList.contains('invalid')).focus();
    return;
  }

  const raw = Object.fromEntries(new FormData(form));
  // Honeypot: real visitors never see or fill this field; bots do
  if (raw.website) { msg.textContent = M.sent; form.reset(); return; }
  if (Date.now() - lastSent < COOLDOWN_MS) { msg.textContent = M.wait; return; }
  const d = {
    name: clean(raw.name, 80),
    phone: clean(raw.phone, 20),
    city: clean(raw.city, 40),
    township: clean(raw.township, 60),
    format: clean(raw.format, 40),
    message: clean(raw.message, 1000),
  };
  const place = d.township ? `${d.township}, ${d.city}` : d.city;
  const subject = `Franchise Enquiry: ${d.name} (${place})`;
  btn.disabled = true;
  msg.textContent = M.sending;

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_TO}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        Name: d.name,
        Phone: d.phone,
        City: d.city,
        Township: d.township || '-',
        Format: d.format,
        Message: d.message || '-',
        'Website language': lang === 'my' ? 'Myanmar' : 'English',
        _subject: subject,
        _cc: ENQUIRY_CC,
        _template: 'table',
        _captcha: 'false',
        _honey: '',
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) !== 'true') {
      console.warn('FormSubmit:', data.message || res.status);
      throw new Error(data.message || res.status);
    }
    msg.textContent = M.sent;
    lastSent = Date.now();
    track('enquiry-sent', 'Franchise enquiry sent');
    form.reset();
  } catch (err) {
    // Couldn't send online: offer email (pre-filled, to both addresses) or Messenger
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nCity: ${d.city}\nTownship: ${d.township || '-'}\nFormat: ${d.format}\n\n${d.message}`;
    $('#fbEmail').href = `mailto:${ENQUIRY_TO},${ENQUIRY_CC}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    msg.textContent = M.fallback;
    fallback.hidden = false;
  } finally {
    btn.disabled = false;
  }
});

// Clear the red highlight as soon as a field is fixed
$$('[required]', form).forEach(f => {
  f.addEventListener('input', () => f.classList.contains('invalid') && validate(f));
  f.addEventListener('change', () => f.classList.contains('invalid') && validate(f));
});

// ===== Visitor statistics (only runs when a GoatCounter code is set in data.js) =====
const gcCode = (ANALYTICS.goatcounterCode || '').trim().toLowerCase();
const track = (name, title) => {
  if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, title: title || name, event: true });
};
if (/^[a-z0-9-]{2,50}$/.test(gcCode)) {
  const gc = document.createElement('script');
  gc.async = true;
  gc.src = 'https://gc.zgo.at/count.js';
  gc.dataset.goatcounter = `https://${gcCode}.goatcounter.com/count`;
  document.head.appendChild(gc);
}
// Count key actions as events
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  if (a.href.includes('m.me/')) track('click-messenger', 'Messenger tap');
  else if (a.href.startsWith('mailto:')) track('click-email', 'Email tap');
  else if (a.href.includes('maps.google')) track('click-directions', 'Get directions');
  else if (a.href.endsWith('.pdf')) track('download-brochure', 'Brochure download');
});

// ===== Floating chat button: hide while the enquiry form or contact section is on screen =====
const fab = $('.fab');
const fabIO = new IntersectionObserver(entries => {
  fabIO.visible = fabIO.visible || new Set();
  entries.forEach(en => en.isIntersecting ? fabIO.visible.add(en.target) : fabIO.visible.delete(en.target));
  fab.classList.toggle('is-hidden', fabIO.visible.size > 0);
}, { threshold: 0.25 });
['#franchiseForm', '#contact'].forEach(sel => $(sel) && fabIO.observe($(sel)));

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
  // Fallback: show the final number even if animations are paused (hidden tab, battery saver)
  setTimeout(() => { el.textContent = target; }, 1200);
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
let saved = 'en';
try { saved = localStorage.getItem('cb-lang') || 'en'; } catch {}
setLang(saved);
