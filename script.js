// ===== Settings =====
// Franchise enquiries are emailed to both addresses via FormSubmit (formsubmit.co).
const ENQUIRY_TO = 'cheesy.bites11@gmail.com';
const ENQUIRY_CC = 'linkhant98@gmail.com';

// Product listing (no prices). `crop` picks one pack out of the wholesale poster.
// `my` holds the Myanmar translation of tag / name / desc / where.
const PRODUCTS = [
  { cat: 'fresh', img: 'fb/cheesepull.jpg', pos: 'center 30%',
    tag: 'Signature', name: 'Cheese Sticks & Corndogs', desc: 'Crispy outside, cheesy inside. Golden batter around a thick core of stretchy mozzarella or sausage, made for the perfect cheese pull.', where: 'Our outlets & franchise outlets',
    my: { tag: 'အထူးလက်ရာ', name: 'ချိစ်ချောင်းနှင့် ကော်န်ဒေါ့', desc: 'အပြင်ကြွပ်ကြွပ်၊ အထဲချိစ်ပြည့်ပြည့်။ ရွှေဝါရောင်အလွှာအတွင်း ဆွဲဆန့်ရသော မိုဇာရဲလားချိစ် သို့မဟုတ် အသားချောင်း။ Cheese Pull အရသာ အပြည့်။', where: 'ကျွန်ုပ်တို့ဆိုင်ခွဲများနှင့် ဖရန်ချိုက်စ်ဆိုင်များ' } },
  { cat: 'fresh', img: 'fb/longpotato.jpg', pos: 'center 55%',
    tag: 'Signature · No chemicals', name: 'Signature Long Potato', desc: 'Our long potato sticks, found only at Cheesy Bites. Made from natural potatoes that are boiled first, then shaped step by step. No chemicals, so they are safe for kids too. Crispy, cheesy and made fresh every time.', where: 'Outlets & Ocean supermarkets',
    my: { tag: 'အထူးလက်ရာ · ဓာတုမပါ', name: 'Signature အာလူးချောင်းရှည်', desc: 'Cheesy Bites မှာသာ ရနိုင်သော မွမွရွရွ အာလူးချောင်းရှည်။ သဘာဝအာလူးကို ပြုတ်ပြီးမှ အဆင့်ဆင့် ပြုလုပ်ထားခြင်းဖြစ်ပြီး Chemical မပါသဖြင့် ကလေးများလည်း အန္တရာယ်ကင်းကင်း စားနိုင်ပါသည်။', where: 'ဆိုင်ခွဲများနှင့် Ocean စူပါမားကတ်များ' } },
  { cat: 'fresh', img: 'fb/combo.jpg', pos: 'center 55%',
    tag: 'Best seller', name: 'Best Seller Combo Sets', desc: 'Crispy chicken bites, corndogs, fries & sausage and crispy chicken, served together in one set. Great for sharing.', where: 'Our outlets & delivery partners',
    my: { tag: 'အရောင်းရဆုံး', name: 'Best Seller Combo Set များ', desc: 'ကြွပ်ကြွပ် ကြက်သားတုံး၊ ကော်န်ဒေါ့၊ အာလူးကြော်နှင့် အသားချောင်း၊ ကြက်ကြော်ကြွပ် တို့ကို တစ်စုံတည်း မျှဝေစားနိုင်ပါသည်။', where: 'ဆိုင်ခွဲများနှင့် ပို့ဆောင်ရေးမိတ်ဖက်များ' } },
  { cat: 'fresh', img: 'fb/tawwin-combo.jpg', pos: 'center 55%', exclusive: true,
    tag: '⭐ Only at Taw Win Center', name: 'Cheesy Combo: Fries & Burger', desc: 'Cheesy sausage & chicken popcorn covered in melted cheese, plus a Cheesy Burger. Crispy, cheesy and absolutely irresistible. Made fresh, made for you.', where: 'Taw Win Center outlet only',
    my: { tag: '⭐ တော်ဝင်စင်တာတွင်သာ', name: 'Cheesy Combo: အာလူးကြော်နှင့် ဘာဂါ', desc: 'ချိစ်အရည်ဖုံးထားသော အသားချောင်းနှင့် ချစ်ကင်ပေါ့ပ်ကော်န်၊ Cheesy Burger တို့ တစ်စုံတည်း။ ကြွပ်ရွ၊ ချိစ်ပြည့်ပြီး ငြင်းလို့မရတဲ့ အရသာ။', where: 'တော်ဝင်စင်တာ ဆိုင်ခွဲတွင်သာ' } },
  { cat: 'fresh', img: 'burger.jpg',
    tag: 'Outlet favourite', name: 'Cheesy Bites Burgers', desc: 'Juicy patties, melted cheese and our house sauce in a soft sesame bun.', where: 'Our outlets & delivery partners',
    my: { tag: 'ဆိုင်တွင် လူကြိုက်များ', name: 'Cheesy Bites ဘာဂါ', desc: 'အရည်ရွှမ်းသော အသားပြား၊ အရည်ပျော်ချိစ်နှင့် ဆိုင်ကိုယ်ပိုင်ဆော့စ်ကို နှမ်းစေ့ပေါင်မုန့်အပျော့ထဲ ညှပ်ထားပါသည်။', where: 'ဆိုင်ခွဲများနှင့် ပို့ဆောင်ရေးမိတ်ဖက်များ' } },
  { cat: 'frozen', img: 'frozen.jpg',
    tag: 'Ready to fry', name: 'Frozen Cheese Sticks & Corndogs', desc: 'The outlet taste at home. Fry straight from the freezer in about five minutes.', where: 'Ocean, City Mart & Marketplace',
    my: { tag: 'အသင့်ကြော်', name: 'အေးခဲ ချိစ်ချောင်းနှင့် ကော်န်ဒေါ့', desc: 'ဆိုင်ကအရသာအတိုင်း အိမ်မှာ စားနိုင်ပါပြီ။ ရေခဲသေတ္တာထဲမှ တိုက်ရိုက် ငါးမိနစ်ခန့် ကြော်ရုံသာ။', where: 'Ocean၊ City Mart နှင့် Marketplace' } },
  { cat: 'frozen', img: 'fb/readytofry.jpg', pos: 'center 45%',
    tag: 'Ready in minutes', name: 'Frozen Chicken Popcorn & Long Potato', desc: 'Crispy, cheesy and delicious. Keep frozen, then fry and enjoy in minutes. A perfect combo snack or meal for home, shops and franchise outlets.', where: 'Order via Messenger · franchise supply',
    my: { tag: 'မိနစ်ပိုင်းအတွင်း အသင့်', name: 'အေးခဲ ချစ်ကင်ပေါ့ပ်ကော်န်နှင့် အာလူးချောင်းရှည်', desc: 'ကြွပ်ရွ၊ ချိစ်ပါပြီး အရသာရှိသည်။ အေးခဲထားပြီး မိနစ်ပိုင်းအတွင်း ကြော်စားနိုင်သည်။ အိမ်၊ ဆိုင်နှင့် ဖရန်ချိုက်စ်ဆိုင်များအတွက် အကောင်းဆုံး Combo။', where: 'Messenger မှ မှာယူနိုင် · ဖရန်ချိုက်စ် ထောက်ပံ့မှု' } },
  { cat: 'wholesale', img: 'wholesale.jpg', crop: '2% 52%',
    tag: '1 kg pack', name: 'Potato Ball', desc: 'Bite-size potato balls with a soft centre. Fried crisp in minutes.', where: 'Makro Myanmar',
    my: { tag: '၁ ကီလို ထုပ်', name: 'အာလူးလုံး', desc: 'အလယ်ပျော့ပျော့ပါသော တစ်ကိုက်စာ အာလူးလုံးများ။ မိနစ်ပိုင်းအတွင်း ကြွပ်ကြွပ် ကြော်နိုင်ပါသည်။', where: 'Makro Myanmar' } },
  { cat: 'wholesale', img: 'wholesale.jpg', crop: '29% 52%',
    tag: '1 kg pack', name: 'Potato Triangle', desc: 'Crunchy potato triangles, perfect for snack menus and sharing plates.', where: 'Makro Myanmar',
    my: { tag: '၁ ကီလို ထုပ်', name: 'အာလူးတြိဂံ', desc: 'မုန့်မီနူးနှင့် မျှဝေစားရန်အတွက် အကောင်းဆုံး ကြွပ်ရွသော အာလူးတြိဂံများ။', where: 'Makro Myanmar' } },
  { cat: 'wholesale', img: 'wholesale.jpg', crop: '55% 52%',
    tag: '1 kg pack', name: 'Chicken Popcorn', desc: 'Juicy bite-size chicken pieces in a crispy coating.', where: 'Makro Myanmar',
    my: { tag: '၁ ကီလို ထုပ်', name: 'ချစ်ကင် ပေါ့ပ်ကော်န်', desc: 'ကြွပ်ရွသောအလွှာဖြင့် အရည်ရွှမ်းသော တစ်ကိုက်စာ ကြက်သားတုံးများ။', where: 'Makro Myanmar' } },
  { cat: 'wholesale', img: 'wholesale.jpg', crop: '81% 52%',
    tag: '300 ml pack', name: 'Cheese Sauce', desc: 'Rich, smooth cheese sauce for dipping, drizzling and topping.', where: 'Makro Myanmar',
    my: { tag: '၃၀၀ မီလီ ထုပ်', name: 'ချိစ်ဆော့စ်', desc: 'နှစ်စားရန်၊ ဖြန်းရန်နှင့် အပေါ်တင်ရန် ချောမွေ့ပြီး အရသာကြွယ်ဝသော ချိစ်ဆော့စ်။', where: 'Makro Myanmar' } },
];

const LABELS = {
  en: { fresh: 'Ready to Eat', frozen: 'Frozen', wholesale: 'Wholesale' },
  my: { fresh: 'အသင့်စား', frozen: 'အေးခဲ', wholesale: 'လက်ကား' },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
let lang = 'en';
let currentFilter = 'all';

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
  try { localStorage.setItem('cb-lang', lang); } catch {}
}
$('#langBtn').addEventListener('click', () => setLang(lang === 'my' ? 'en' : 'my'));

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
const form = $('#franchiseForm');
const fallback = $('#formFallback');

function validate(field) {
  const v = field.value.trim();
  const ok = field.name === 'phone' ? v.replace(/\D/g, '').length >= 7 : v !== '';
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

  const d = Object.fromEntries(new FormData(form));
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
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || String(data.success) !== 'true') {
      console.warn('FormSubmit:', data.message || res.status);
      throw new Error(data.message || res.status);
    }
    msg.textContent = M.sent;
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
let saved = 'en';
try { saved = localStorage.getItem('cb-lang') || 'en'; } catch {}
setLang(saved);
