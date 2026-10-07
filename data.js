/* =====================================================================
   CHEESY BITES – EASY-EDIT DATA FILE
   ---------------------------------------------------------------------
   Change the website's numbers, cities, products and menu here.
   You don't need to touch any other file.

   HOW TO EDIT
   • Only change text inside quotes '...'. Keep every comma and bracket.
   • Each item has English text and a Myanmar version under `my:`.
     Please update both.
   • Images live in assets/img/. Use the file name, e.g. 'burger.jpg'.
   • After editing, open the site and press refresh to check it.
   • Also update the share-preview description in index.html
     (<meta property="og:description">) when the outlet count changes.
   ===================================================================== */

// ===== Visitor statistics (GoatCounter, free & cookie-free) =====
// 1. Create a free account at https://www.goatcounter.com/signup
// 2. Put your account code below, e.g. 'cheesybites' for cheesybites.goatcounter.com
// Leave it empty ('') to keep statistics switched off.
const ANALYTICS = {
  goatcounterCode: '',
};

// ===== Outlet numbers (shown at the top, in Outlets and in Franchise) =====
const SITE_STATS = {
  outlets: 63,          // total outlets open
  cities: 21,           // number of cities (shown as "21+")
  asOf: '2026-10-04',   // date of the outlet count (YYYY-MM-DD)
};

// ===== Cities with Cheesy Bites outlets =====
// hot: true → highlighted as a recently opened franchise town
const CITIES = [
  { en: 'Yangon', my: 'ရန်ကုန်', hot: true },
  { en: 'Mandalay', my: 'မန္တလေး' },
  { en: 'Naypyitaw', my: 'နေပြည်တော်' },
  { en: 'Bago', my: 'ပဲခူး' },
  { en: 'Mawlamyine', my: 'မော်လမြိုင်', hot: true },
  { en: 'Hpa-An', my: 'ဘားအံ', hot: true },
  { en: 'Myaing Kalay', my: 'မြိုင်ကလေး', hot: true },
  { en: 'Meiktila', my: 'မိတ္ထီလာ', hot: true },
  { en: 'Yamethin', my: 'ရမည်းသင်း', hot: true },
  { en: 'Pyin Oo Lwin', my: 'ပြင်ဦးလွင်', hot: true },
  { en: 'Taunggyi', my: 'တောင်ကြီး' },
  { en: 'Kyaukse', my: 'ကျောက်ဆည်' },
  { en: 'Taungoo', my: 'တောင်ငူ' },
  { en: 'Hinthada', my: 'ဟင်္သာတ' },
  { en: 'Nyaunglebin', my: 'ညောင်လေးပင်' },
  { en: 'Shwebo', my: 'ရွှေဘို' },
  { en: 'Lashio', my: 'လားရှိုး' },
  { en: 'Muse', my: 'မူဆယ်' },
  { en: 'Chauk', my: 'ချောက်' },
  { en: 'Salin', my: 'စလင်း' },
  { en: 'Yatsauk', my: 'ရပ်စောက်' },
];

// ===== Enquiry form emails =====
// Franchise enquiries are emailed to both addresses via FormSubmit (formsubmit.co).
// ENQUIRY_TO receives each enquiry (and FormSubmit's one-time "Activate Form" email).
// ENQUIRY_CC gets a copy; separate several addresses with commas.
const ENQUIRY_TO = 'linkhant98@gmail.com';
const ENQUIRY_CC = 'contact@cheesybites.com.mm,cheesy.bites11@gmail.com';

// ===== Product cards (no prices) =====
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

// ===== Full menu (same at main outlet and franchise outlets). No prices. =====
const FLAVOURS = {
  en: ['🌶️ Mala', '🔥 Hot & Spicy', '🌿 Seaweed', '🍋 Tom Yum', '🍖 BBQ'],
  my: ['🌶️ မာလာ', '🔥 စပ်စပ်', '🌿 ရေညှိ', '🍋 တုံယမ်း', '🍖 BBQ'],
};
const MENU = [
  { icon: '🧀', img: 'wholesale.jpg', crop: '2% 52%',
    en: { title: 'Cheese Balls', groups: [{ items: ['Corn Cheese Ball', 'Potato Cheese Ball', 'Original Cheese Ball'] }] },
    my: { title: 'ချိစ်ဘော', groups: [{ items: ['ပြောင်းဖူး ချိစ်ဘော', 'အာလူး ချိစ်ဘော', 'မူရင်း ချိစ်ဘော'] }] } },
  { icon: '🌭', img: 'fb/cheesepull.jpg', pos: 'center 25%', wide: true,
    en: { title: 'Corndogs', groups: [
      { label: 'Full Cheese', items: ['Original', 'Seaweed', 'Potato', 'Chocolate', 'Sweet Potato'] },
      { label: 'Full Sausage', items: ['Original', 'Potato'] },
      { label: 'Half & Half', items: ['Half Sausage, Half Cheese'] } ] },
    my: { title: 'ကော်န်ဒေါ့', groups: [
      { label: 'ချိစ်အပြည့်', items: ['မူရင်း', 'ရေညှိ', 'အာလူး', 'ချောကလက်', 'ကန်စွန်းဥ'] },
      { label: 'အသားချောင်းအပြည့်', items: ['မူရင်း', 'အာလူး'] },
      { label: 'တစ်ဝက်စီ', items: ['တစ်ဝက်အသားချောင်း၊ တစ်ဝက်ချိစ်'] } ] } },
  { icon: '🍗', img: 'fb/combo.jpg', pos: 'center 40%', flavours: true,
    en: { title: 'Fried Chicken', groups: [{ items: ['Fried Chicken Tender', 'Chicken Skin', 'Chicken Popcorn'] }] },
    my: { title: 'ကြက်ကြော်', groups: [{ items: ['ကြက်ရင်ပုံသားလွှာကြော်', 'ကြက်အရေခွံကြော်', 'ချစ်ကင် ပေါ့ပ်ကော်န်'] }] } },
  { icon: '🍟', img: 'fb/longpotato.jpg', pos: 'center 55%', flavours: true,
    en: { title: 'Potatoes', groups: [
      { label: 'Little Potato', items: ['Little Potato Bites'] },
      { label: 'Long Potato', items: ['Signature Long Potato'] } ] },
    my: { title: 'အာလူးချောင်း', groups: [
      { label: 'အာလူးချောင်းတို', items: ['အာလူးချောင်းတို ကြော်'] },
      { label: 'အာလူးချောင်းရှည်', items: ['Signature အာလူးချောင်းရှည်'] } ] } },
  { icon: '🍔', img: 'burger.jpg', pos: 'center 70%', special: true, wide: true, span: true,
    en: { title: 'Burgers & Hotdogs', groups: [
      { label: 'Burgers', items: ['Chicken Burger (single meat)', 'Chicken Burger (double meat)', 'Prawn Burger', 'Beef Burger'] },
      { label: 'Hotdogs', items: ['Cheesy / Mayo Chicken-Sausage Hotdog', 'Cheesy / Mayo Beef Hotdog'] } ] },
    my: { title: 'ဘာဂါနှင့် ဟော့ဒေါ့', groups: [
      { label: 'ဘာဂါ', items: ['ကြက်သားဘာဂါ (အသားတစ်ထပ်)', 'ကြက်သားဘာဂါ (အသားနှစ်ထပ်)', 'ပုစွန်ဘာဂါ', 'အမဲသားဘာဂါ'] },
      { label: 'ဟော့ဒေါ့', items: ['ချိစ် / မာယို ကြက်သားအသားချောင်း ဟော့ဒေါ့', 'ချိစ် / မာယို အမဲသား ဟော့ဒေါ့'] } ] } },
];
const MENU_TEXT = {
  en: { flavours: 'Choose a flavour', cheese: '🧀 + Add cheese', special: 'Special menu' },
  my: { flavours: 'အရသာ ရွေးချယ်ပါ', cheese: '🧀 + ချိစ်ထပ်ထည့်နိုင်', special: 'အထူးမီနူး' },
};
