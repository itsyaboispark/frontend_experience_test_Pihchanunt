# frontend_experience_test

Next.js app for the **Experience Hub Portal** assignment (front-end only).

Production reference (do not edit unless told): `frontend/`

---

## What this repo is

- **Experience Hub only:** `/experience-hub` (event list) and `/experience-hub/[id]` (event detail).
- **No login** — opens on the Experience Hub dashboard as **Test User**.
- **Mock data** via `modules/experience/infrastructure/mock-events.ts` served through `app/api/events`.
- **Front-end scope only** — do not build a backend for this assignment.

**Out of scope:** Credential Cloud, Mission Room, onboarding, login, and any API integration work.

---

## Quick start

### Prerequisites

- Node.js 20+
- npm

```bash
npm install
npm run dev
```

Open **http://localhost:3000/app/experience-hub**

`.env.local` (default):

```env
APP_DATA_MODE=mock
NEXT_PUBLIC_APP_DATA_MODE=mock
```

---

## Assignment requirements

### 1. Front-end scope

This assignment is **front-end only**. You must ensure:

- UI matches Figma accurately
- Responsive layouts work on desktop, tablet, and mobile
- Mock event content is realistic and based on real-world events

### 2. UX / UI accuracy (Figma)

Match Figma as closely as possible for:

- Layout structure, spacing, typography, colors
- Cards, navigation, icons, buttons
- Interactions and visual hierarchy

The implementation should feel **visually identical** to the design.

### 3. Responsive design

Fully responsive for **desktop**, **tablet**, and **mobile**.

Some responsive screens exist in Figma; others do not. You must:

- Adapt remaining screens/components intelligently
- Stay consistent with the existing responsive system
- Ensure usable layout on smaller devices

Do **not** only scale down desktop layouts — implement proper responsive UX.

### 4. Navigation bar — logo

- Remove any temporary **Middleverse** logo from the Experience Hub nav bar (if still present).
- Replace with the **same logo** used on Credential Cloud: `/app/assets/logos/medalverse-logo.svg`
- **Logo asset only** — no full navigation redesign.

Sidebar logo is in `components/AppMainSidebar.tsx`.

### 5. Mock data — event content

Populate all event information with:

- Realistic, **current**, ongoing or recently held **real-world** events
- Production-ready feel (titles, organizers, dates, locations, benefits)

Primary file: `modules/experience/infrastructure/mock-events.ts`

### 6. Event quantity

Implement **exactly 10 events**.

Requirements:

- Every event must offer some form of **achievement, reward, or credential**
- Avoid events with no recognition or award

### 7. Award & credential icons on cards

Event cards show icons (medal, trophy, badge, certificate, etc.). Each icon must match the **actual reward type** for that event.

Example:

- Certificate event → certificate icon
- Badge event → badge icon
- Trophy / prize → trophy icon

Review: `modules/experience/presentation/components/experience-cards.tsx` and event types in `modules/experience/domain/dashboard.types.ts`.

### 8. Event information accuracy

For each mocked event, include appropriate fields, for example:

- Event title, organizer, event type
- Reward / credential type
- Event date, location or online status
- Participation benefits, award availability

Data should read like real event listings.

### 9. Quality checklist (before delivery)

- [ ] All pages responsive (desktop / tablet / mobile)
- [ ] Card layouts consistent
- [ ] Icons match reward types
- [ ] Exactly **10** realistic events with awards/credentials
- [ ] Nav logo matches Credential Cloud (`medalverse-logo.svg`)
- [ ] Figma match across key screens
- [ ] No broken layouts or overflow on mobile/tablet
- [ ] `npm run build` passes

---

## Project structure (main files)

```text
app/
  experience-hub/
    page.tsx                    # Hub home + banner
    layout.tsx                  # Sidebar shell
    [id]/page.tsx               # Event detail
  api/events/route.ts           # Mock event list endpoint
  api/events/[id]/route.ts      # Mock event detail endpoint
modules/experience/
  infrastructure/mock-events.ts
  presentation/experience-content.tsx
  presentation/event-detail-screen.tsx
  presentation/components/
    experience-cards.tsx
    experience-filters.tsx
    claim-dialog.tsx
  domain/dashboard.types.ts
components/
  AppMainSidebar.tsx            # Nav + logo
```

---

## Scripts

```bash
npm run dev      # Development
npm run build    # Production build (verify before submit)
npm run start    # Run production build locally
npm run lint     # ESLint
```

---

## Deploy (optional)

Candidates may host on **Vercel** (or similar). No deploy config is included in this repo.

Suggested env (mock mode):

| Variable | Value |
|----------|--------|
| `APP_DATA_MODE` | `mock` |
| `NEXT_PUBLIC_APP_DATA_MODE` | `mock` |

Root directory for Vercel: **`frontend_experience_test`**

---

## Known starter gaps (for candidates)

- Mock data currently has **more than 10** generic events — reduce to **exactly 10** real-world events with correct metadata (title, organizer, dates, location/online, benefits) and reward type.
- Card hero currently shows **multiple** award icons instead of the one matching each event — change it so the displayed icon(s) reflect each event’s actual reward/credential type per assignment §7.
- Confirm nav uses **Medalverse** logo, not Middleverse, if your branch still has a placeholder elsewhere in the hub UI.
