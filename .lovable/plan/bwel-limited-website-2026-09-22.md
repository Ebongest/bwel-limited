# BWEL LIMITED website

## Direction
Create a premium, mobile-first corporate site with a crisp editorial feel: bright white space, confident BWEL blue, dark navy typography, documentary-style Lagos commerce imagery, and restrained motion. Preserve the existing wordmark treatment with a bold blue “B”, dark navy “BWEL”, and smaller “LIMITED”.

## Build
- Replace the placeholder home screen with one polished scrolling website covering Hero, About, How We Work, Online Shop, Company Profile, Contact, and Footer.
- Keep all company facts and links in one data file for easy future updates.
- Add a compact responsive header, clear shop calls-to-action, smooth in-page navigation, and accessible mobile layouts.
- Use meaningful commerce imagery and a cohesive visual system rather than generic corporate decoration.
- Embed Google Maps for the supplied Iju-Ishaga address.
- Load the supplied Ebongest chat widget safely in the browser with the exact agent configuration.
- Add a neighboring microphone control for Vapi web calls, with clear idle, connecting, active, and unavailable states. Because no Vapi public key was supplied, the control will remain visibly unavailable until a key is configured.
- Add page-specific search/social metadata and preserve fast loading and keyboard accessibility.

## Technical details
- TanStack Start single-page route at `/`, React, Tailwind v4 semantic tokens, and reusable small components.
- Third-party scripts load after hydration to avoid affecting server rendering.
- External shop links open securely, while section navigation remains on-page.
- Validate the final page at desktop and mobile sizes, including navigation, external links, map, widget loading, and microphone state.

## Assumptions
- The supplied phone number, address, registration details, and commencement date are authoritative.
- “Discover BWEL” scrolls to About.
- The voice button is prepared for Vapi but cannot place calls until a public key is provided.
