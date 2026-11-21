# NordicCraft (`nordiccraft.io`)

Offisiell nettside for **NordicCraft** – bygget med Vite, React og TypeScript for lynrask statisk publisering på **GitHub Pages**.

---

## Slik oppdaterer du nettsiden på 30 sekunder

Alt innhold på nettsiden er skilt ut i to enkle filer slik at du slipper å røre designkoden:

1. **Legge til eller redigere prosjekter:** Åpne [`src/data/projects.ts`](src/data/projects.ts) og legg til/rediger et objekt i `PROJECTS`-listen (norsk + engelsk tekst).
2. **Endre firmainfo, e-post, tekster eller tjenester:** Åpne [`src/data/siteConfig.ts`](src/data/siteConfig.ts).

---

## Kjør lokalt

```bash
npm install
npm run dev
```

Åpne deretter `http://localhost:5173` i nettleseren.

---

## Publisere til GitHub Pages + koble `nordiccraft.io`

Prosjektet er allerede klargjort med:
- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) – automatisk bygging og publisering ved hver `git push` til `main`
- [`public/CNAME`](public/CNAME) – satt til `nordiccraft.io`

### Steg 1: Push til GitHub
1. Opprett et repo under `github.com/nordiccraft` (f.eks. `nordiccraft.io` eller `nordiccraft.github.io`).
2. Push koden til `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial NordicCraft website"
   git branch -M main
   git remote add origin https://github.com/nordiccraft/nordiccraft.io.git
   git push -u origin main
   ```
3. Gå til **Settings → Pages** i repoet på GitHub og velg **Source: GitHub Actions**.

### Steg 2: Koble domenet `nordiccraft.io` (DNS)
Når du har kjøpt `nordiccraft.io` (f.eks. hos Cloudflare Registrar, Porkbun eller Domeneshop), legg inn disse DNS-oppføringene:

| Type | Host / Name | Value |
| --- | --- | --- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `nordiccraft.github.io` |

Når DNS har propagert (ofte 5–15 minutter), huk av for **Enforce HTTPS** under **Settings → Pages** på GitHub. Ferdig!
