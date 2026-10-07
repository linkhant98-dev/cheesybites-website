# Cheesy Bites Website

A plain HTML + CSS + JavaScript site. You don't need to build or install anything.

## Run it locally

**Mac:** double-click `start.command`. It starts a small local server and opens the site in your browser at http://localhost:8080.
(The first time, macOS may block it. If so, right-click it, choose **Open**, then click **Open** again.)

**Windows:** double-click `start.bat`. You need Python installed.

**From Terminal:**

```bash
cd cheesy-bites
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

**Quickest:** double-click `index.html`. The site works straight from the file too.

> You need an internet connection for the Google Fonts and the embedded map. Everything else (pages, photos, scripts) is local.

## Files

| File | What it is |
|------|------------|
| `index.html` | Page content: About Us, What We Are / Do, Products, Partners, Outlets, Franchise, Contact |
| `style.css` | Brand colours, layout, mobile styles |
| `data.js` | **Easy-edit file:** outlet numbers, city list, products, full menu, enquiry emails, statistics code |
| `script.js` | Page logic: filters, franchise form, language switch, animations |
| `assets/img/` | Logo and photos from the company profile |

## Editing content (data.js)

Open `data.js`. Everything your team usually needs to change is there, with instructions at the top:

- **`SITE_STATS`**: number of outlets, number of cities, and the date of the count
- **`CITIES`**: towns with outlets (`hot: true` highlights a recently opened franchise town)
- **`PRODUCTS`**: product cards (category, photo, English and Myanmar text)
- **`MENU`** / **`FLAVOURS`**: the full menu boards
- **`ENQUIRY_TO`** / **`ENQUIRY_CC`**: who receives franchise enquiries
- **`ANALYTICS`**: GoatCounter statistics code (empty = off)

When the outlet count changes, also update the share-preview text in `index.html` (`og:description`).

## Franchise brochure (PDF)

The downloadable brochures are `assets/brochure/cheesy-bites-franchise-en.pdf` and `-my.pdf`. They're generated from `brochure/brochure.html`, which reuses the website text and the numbers in `data.js`. After changing content, rebuild them on a Mac with Google Chrome:

```bash
bash brochure/build.sh
```

## Visitor statistics

1. Create a free account at https://www.goatcounter.com/signup (no cookies, no consent banner needed).
2. Put the account code in `data.js` → `ANALYTICS.goatcounterCode`.
3. Visits appear in your GoatCounter dashboard, plus these events: Messenger taps, email taps, directions, brochure downloads, enquiries sent and language switches.

## Google Business Profile

See [GOOGLE-BUSINESS-SETUP.md](GOOGLE-BUSINESS-SETUP.md) for step-by-step setup with ready-to-paste text in English and Myanmar.

## Languages (English / မြန်မာ)

The **မြန်မာ / English** button in the top menu switches language, and the site remembers the visitor's choice.

- English text is in `index.html`.
- Myanmar text is in `i18n.js`. Each key matches a `data-i18n="..."` attribute in `index.html`.
- Product names and descriptions in Myanmar are in the `my:` field of each product in `script.js`.

## Franchise enquiry emails

The franchise form sends each enquiry by email to **contact@cheesybites.com.mm**, with copies to **cheesy.bites11@gmail.com** and **linkhant98@gmail.com**. It uses the free [FormSubmit](https://formsubmit.co) service (addresses are set in `data.js`).

**One-time setup:** the first time someone submits the form, FormSubmit sends an activation email to contact@cheesybites.com.mm (company webmail: https://mx04.mtalk.net.mm/). Click **Activate Form** in that email. After that, every enquiry arrives automatically. If sending fails, the form opens the visitor's email app addressed to all three emails instead.

## SEO (search engines)

The site includes:
- A keyword-focused title and description in English, with a separate Myanmar title and description.
- A Myanmar version at `?lang=my`, linked to the English page with `hreflang` tags so Google can show the right language.
- Structured data (WebSite, Organization, FastFoodRestaurant with the Google Business Profile, FAQPage).
- `sitemap.xml`, share previews, and a no-JavaScript text fallback for the menu.

**Get indexed on Google (one time, by the owner):**
1. Go to https://search.google.com/search-console and click **Add property → URL prefix**.
2. Enter `https://linkhant98-dev.github.io/cheesybites-website/`.
3. Choose **HTML tag** verification and copy the `content="…"` code. Send it to your web developer, who adds it to `index.html` and publishes.
4. Click **Verify**, then go to **Sitemaps** and submit `sitemap.xml`.
5. Under **URL inspection**, test the home page and the `?lang=my` page and click **Request indexing**.

When content changes (for example, the outlet count), update `<lastmod>` in `sitemap.xml`.
