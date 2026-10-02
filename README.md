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
| `script.js` | Product list (edit `PRODUCTS` to add or change items), filters, franchise form, animations |
| `assets/img/` | Logo and photos from the company profile |

## Editing products

Open `script.js` and edit the `PRODUCTS` list at the top. Each item has a category (`fresh`, `frozen`, `wholesale`), a photo from `assets/img/`, a name, a description, and where to buy it.

## Languages (English / မြန်မာ)

The **မြန်မာ / English** button in the top menu switches language, and the site remembers the visitor's choice.

- English text is in `index.html`.
- Myanmar text is in `i18n.js`. Each key matches a `data-i18n="..."` attribute in `index.html`.
- Product names and descriptions in Myanmar are in the `my:` field of each product in `script.js`.

## Franchise enquiry emails

The franchise form sends each enquiry by email to **cheesy.bites11@gmail.com**, with a copy to **linkhant98@gmail.com**. It uses the free [FormSubmit](https://formsubmit.co) service (settings are at the top of `script.js`).

**One-time setup:** the first time someone submits the form, FormSubmit sends an activation email to cheesy.bites11@gmail.com. Click **Activate Form** in that email. After that, every enquiry arrives automatically. If sending fails, the form opens the visitor's email app addressed to both emails instead.
