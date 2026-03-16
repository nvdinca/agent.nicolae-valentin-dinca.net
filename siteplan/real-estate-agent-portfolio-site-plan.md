# Real Estate Agent Portfolio Site – Plan (Global Market, English)

> EN: This site plan and the corresponding implementation are created by **Nicolae-Valentin Dinca** purely for portfolio and presentation purposes. The real estate agent is fictional and no real transactions or personal data are involved.

## Ce trebuie să știi / What you need to know

### 1. Public țintă / Target audience
- RO: Cumpărători/vânzători internaționali (expatriates, investitori, relocări)  
  EN: International buyers and sellers (expats, investors, people relocating)
- RO: Limbă: engleză (UK/US) – consistentă în tot site-ul  
  EN: Language: English (UK/US), consistent across the whole site
- RO: Time zone-uri și formulare de contact clare (ex: „We reply within 24h”)  
  EN: Clear time zones and contact expectations (e.g. “We reply within 24h”)

### 2. Conținut și mesaj / Content and messaging
- RO: **Value proposition** clară: de ce acest agent (ex: „Global reach, local expertise”, „Luxury & investment properties worldwide”).  
  EN: Clear **value proposition** explaining why this agent (e.g. “Global reach, local expertise”, “Luxury & investment properties worldwide”).
- RO: **Servicii**: vânzare, cumpărare, închiriere, investiții, relocări, property management (în funcție de ce vrei să simulezi).  
  EN: **Services**: selling, buying, renting, investment, relocation, property management (depending on what you want to simulate).
- RO: **Zone/Locații**: orașe/țări unde „activează” agentul (poți inventa sau folosi piețe reale: London, Dubai, Lisbon, etc.).  
  EN: **Areas/Locations**: cities/countries where the agent “operates” (you can invent them or use real markets like London, Dubai, Lisbon, etc.).

### 3. Aspecte legale/etice (fictiv) / Legal & ethical aspects (fictional)
- RO: Mențiune că e **portfolio / concept** (ex. în footer: „This is a fictional agent & portfolio project”).  
  EN: Clearly mention it is a **portfolio / concept** (e.g. in the footer: “This is a fictional agent & portfolio project”).
- RO: Nu folosi date reale de persoane fără acord; poze de proprietăți: stock photos sau site-uri care permit usage (Unsplash, Pexels, etc.).  
  EN: Do not use real people’s data without consent; property photos should come from stock/allowed sources (Unsplash, Pexels, etc.).

### 4. Design & UX
- RO: Trust: design curat, profesionist, foto de calitate.  
  EN: Trust-building: clean, professional design with high-quality photos.
- RO: Mobile-first (mulți caută pe telefon).  
  EN: Mobile-first (many visitors will browse on their phones).
- RO: Call-to-action evidente: „Contact”, „Schedule a viewing”, „Get in touch”.  
  EN: Clear calls to action: “Contact”, “Schedule a viewing”, “Get in touch”.
- RO: Formular de contact sau email clar.  
  EN: A clear contact form or visible email.

---

## Structura site-ului (RO) / Site structure (EN)

| Secțiune (RO) | Section (EN) | Conținut (RO) / Content (EN) |
|---------------|-------------|-------------------------------|
| **Hero** | **Hero** | RO: Titlu + subtext (ex: „Your trusted partner in global real estate”), CTA (ex. „View properties” / „Contact me”).<br/>EN: Main headline + subtitle (e.g. “Your trusted partner in global real estate”), plus primary CTAs (“View properties” / “Contact me”). |
| **About** | **About** | RO: Scurtă poveste a agentului fictiv, experiență, abordare („client-first”, „discrete”, etc.).<br/>EN: Short story about the fictional agent, experience, and approach (“client-first”, “discrete”, etc.). |
| **Services** | **Services** | RO: Buying, Selling, Renting, Investment, Relocation – scurt, cu beneficii clare.<br/>EN: Buying, Selling, Renting, Investment, Relocation — short descriptions focused on benefits. |
| **Listings / Properties** | **Listings / Properties** | RO: 4–6 proprietăți fictive: locație, preț (ex. EUR/USD/GBP), tip (apartment, house, villa), 1–2 poze fiecare. Poți avea filtre: location, price, type.<br/>EN: 4–6 fictional properties: location, price (EUR/USD/GBP), type (apartment, house, villa), 1–2 images each. Optional filters by location, price, and type. |
| **Areas / Markets** | **Areas / Markets** | RO: Orașe/regiuni unde „lucrează” (ex. Europe, Middle East, Asia) – poate doar text + hărți sau carduri.<br/>EN: Cities/regions where the agent “works” (e.g. Europe, Middle East, Asia) as text and/or map-style cards. |
| **Testimonials** | **Testimonials** | RO: 2–4 citate fictive de „clienți” (nume și locație inventate, menționează în footer că e concept).<br/>EN: 2–4 fictional client quotes (invented names and locations, with a note in the footer that they are fictional). |
| **Contact** | **Contact** | RO: Email, formular (Name, Email, Message, optional: Interest – Buy/Sell/Rent), eventual „Schedule a call” (link către Calendly fictiv sau placeholder).<br/>EN: Email and contact form (Name, Email, Message, optional Interest – Buy/Sell/Rent), optionally a “Schedule a call” link (fake Calendly or placeholder). |
| **Footer** | **Footer** | RO: Disclaimer (fictional/portfolio), link-uri sociale (opțional), copyright.<br/>EN: Disclaimer (fictional/portfolio), optional social links, and copyright. |

---

## Elemente importante pentru „global” / Global considerations

- RO: **Prețuri** în mai multe valute (ex. EUR, USD, GBP) sau una principală + mențiune „Prices in local currency on request”.  
  EN: **Pricing** in multiple currencies (e.g. EUR, USD, GBP) or one main currency with a note “Prices in local currency on request”.
- RO: **Limbă**: doar engleză e suficient pentru portfolio; dacă vrei să arăți că știi i18n, poți adăuga un selector EN/RO (optional).  
  EN: **Language**: English-only is fine for a portfolio; if you want to show i18n skills, you can add an EN/RO language switcher.
- RO: **Trust**: secțiune scurtă despre proces („How we work”), confidențialitate, profesionalism.  
  EN: **Trust**: a short “How we work” section, mentioning confidentiality and professionalism.
- RO: **SEO**: titluri și meta description în engleză (e.g. „Global real estate agent – luxury & investment properties”).  
  EN: **SEO**: titles and meta descriptions in English (e.g. “Global real estate agent – luxury & investment properties”).

---

## Tehnologii (sugestii pentru portofoliu) / Tech stack suggestions

- RO: **Static site**: Next.js, Astro sau HTML/CSS/JS – rapid de hostat (Vercel, Netlify).  
  EN: **Static site**: Next.js, Astro, or plain HTML/CSS/JS – easy to host (Vercel, Netlify).
- RO: **Listings**: poți hardcoda JSON-ul proprietăților și filtra în frontend, fără backend.  
  EN: **Listings**: you can hard-code a JSON list of properties and filter on the frontend, without a backend.
- RO: **Formular**: Formspree, Netlify Forms sau un serverless function ca să nu ai server propriu.  
  EN: **Form**: use Formspree, Netlify Forms, or a simple serverless function so you don’t need your own server.

---

## Licensing / Usage (English)

This plan and the resulting website are created by **Nicolae-Valentin Dinca** as a personal portfolio project. You may:

- **View and study** the structure, copy, and layout ideas.
- **Adapt the concept** for your own learning or non-commercial demos, with attribution.

You may **not**:

- Present this exact project as your own work without attribution.
- Use the fictional agent identity in a way that could mislead real users into thinking it represents a real company or service.

If you reuse parts of this plan, please include a short credit such as:

> “Based on the portfolio project by Nicolae-Valentin Dinca.”
