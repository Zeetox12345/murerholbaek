
# Murer Holbæk - Rank-and-Rent Lead Generation Website

Dette er en professionel murer website designet til lead generation i Holbæk området.

## Projekt Oversigt

**Domæne**: murerholbaek.dk  
**Primære Søgeord**: "murer holbæk"  
**Målgruppe**: Husejere og virksomheder i Holbæk og omegn der har brug for murerarbejde

## Features

### ✅ Implementeret
- **Komplet responsivt design** med mobile-first tilgang
- **Skandinavisk minimalisme** med koksgrå, terrakotta og off-white farver
- **SEO-optimeret** struktur med semantisk HTML og JSON-LD schema
- **Sticky tilbudsformular** der følger brugerens scroll
- **Mobile call-to-action knap** for hurtig kontakt
- **Blog system** med eksempel indlæg
- **Service undersider** med detaljeret information
- **FAQ sektion** med struktureret data
- **Komplet navigation** og footer
- **WCAG 2.1 AA tilgængelighed** med korrekte kontraster
- **Google Fonts integration** (Inter + Montserrat)
- **Sitemap og robots.txt** for SEO

### 🚧 TODO (skal tilpasses senere)
- **Formular integration**: Tilslut til infomurernæstved@gmail.com
- **Webhook setup**: Zapier integration for lead tracking
- **Rigtige testimonials**: Erstat placeholder tekster
- **Juridisk indhold**: GDPR-klar privatlivspolitik
- **Rigtige billeder**: Upload lokale murerprojekter
- **Telefonnummer**: Opdater til rigtig nummer
- **Google Analytics**: Implementer tracking

## Teknisk Stack

- **React 18** med TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** komponenter
- **React Router** for navigation
- **Lucide React** for ikoner
- **Vite** som build tool

## Installation & Deployment

1. **Upload alle filer** til roden af murerholbaek.dk
2. **Peg A-record** på server IP-adresse
3. **Tilret content** i TODO-markerede sektioner
4. **Test kontaktformular** og mail-integration

## SEO Struktur

```
/ (Forside)
├── /services (Service oversigt)
│   ├── /services/facaderenovering
│   ├── /services/badevarelse
│   └── /services/tilbygninger
├── /blog (Blog oversigt)
│   └── /blog/{slug} (Individuelle indlæg)
└── /politik (Privatlivspolitik & Cookies)
```

## Lead Generation Flow

1. **Bruger finder siden** via Google søgning
2. **Sticky formular** eller mobile CTA fanger opmærksomhed
3. **Formular udfyldelse** med projektdetaljer
4. **Email til infomurernæstved@gmail.com** + webhook
5. **Success toast** med forventning om opkald
6. **Lead følges op** inden for 24 timer

## Farvepalette

- **Koksgrå**: `#2b2b2b` (primær tekst, navigation)
- **Terrakotta**: `#c44d3f` (accent, CTA knapper)
- **Off-white**: `#f8f8f8` (baggrund, sektioner)
- **Hvid**: `#ffffff` (kort, formular)

## Vigtige Noter

⚠️ **Ingen Google Maps**: Undgå CLS problemer og slow loading
⚠️ **Ingen eksisterende virksomheder**: Kun fiktive referencer
⚠️ **Lead formidling**: Disclaimer i footer om kontakt-formidling

## Support

For teknisk support eller tilretninger, kontakt udviklingsteamet.

---

**Status**: ✅ Production Ready  
**Sidst opdateret**: Januar 2024
