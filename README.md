# Tony Ken — Portfolio

A static site: one `index.html` plus an `images/` folder. No build step, no dependencies.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy (free)

**Vercel**
1. Push this folder to a new GitHub repo, e.g. `github.com/ktonysites/portfolio`.
2. Go to vercel.com → Add New → Project → import the repo.
3. Framework preset: **Other**. Leave the build command empty and keep the output directory as the root. Click Deploy.

**Netlify (drag and drop, no Git needed)**
1. Go to app.netlify.com → Add new site → Deploy manually.
2. Drag this whole folder onto the page. Done.

**GitHub Pages**
1. Push to a repo named `ktonysites.github.io`.
2. Settings → Pages → Source: `main` branch, `/ (root)`.

## Editing content

All project content is in the `PROJECTS` array inside the `<script>` at the bottom of `index.html`.

- **Add a project:** copy an entry, give it a unique `id` (used in the URL, e.g. `#kukia`), set `cat` to one of
  `fintech`, `proptech`, `logistics`, `health` or `commerce`, and put its screenshot in `images/`.
- **Feature a project on the home page:** set `featured: true`. The first five featured projects fill the "Selected work" grid.
- **Hide code links:** set `confidential: true` to show "Confidential client work — code not public" instead of the GitHub link.
- **No screenshot yet:** set `img: null` to show a "Screenshot coming soon" placeholder.

The skills, principles and marquee words are the `SKILLS`, `PRINCIPLES` and `MARQUEE` arrays just below.

## Still to add
- LinkedIn link (contact section)
- CV download link
- PhoneStoreKE "What I learned" (`learned: null` in its entry)
- LocalEats screenshot
