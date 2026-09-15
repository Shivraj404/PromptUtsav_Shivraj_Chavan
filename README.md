# Inside an Engineer's Mind

> Wisdom. Curiosity. Creation.

A cinematic, scroll-driven Engineers' Day experience that visualizes how an engineer turns a problem into an innovation: **Observe → Think → Idea → Design → Build → Fail → Learn → Iterate → Innovate**.

The project uses geometric, abstract symbolism inspired by qualities traditionally associated with Ganesha—listening, focus, wisdom, adaptability, exploration, and perseverance—without using a literal or devotional illustration. The result is a single continuous story where cultural symbolism and engineering process share one visual language.

## Live experience

- **WebDev preview:** [Open the website](https://engmind-9d4ijfpu.manus.space)
- **GitHub repository:** [Shivraj404/PromptUtsav_Shivraj_Chavan](https://github.com/Shivraj404/PromptUtsav_Shivraj_Chavan)

## Highlights

- Cinematic hero with an abstract geometric wisdom mark and blueprint/circuit motifs.
- Interactive Wisdom constellation with six engineering instincts.
- Problem explorer for Water, Energy, Mobility, Healthcare, Climate, and Access.
- Scroll-led Think / Idea section with floating questions and convergence.
- Blueprint interface with PLAN, MODEL, and SIMULATE modes.
- Interactive prototype assembly sequence.
- Failure cutscene with a replayable test sequence and critical-failure state.
- Version switcher showing how iteration improves the prototype.
- Innovation climax where the process resolves into one system.
- Interactive engineering field map across eight disciplines.
- Future timeline ending with an intentionally open “????” node.
- Responsive mobile composition rather than a simple desktop shrink.
- Reduced-motion support via `prefers-reduced-motion`.
- Keyboard-focusable buttons and semantic interactive controls.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons
- CSS animations and responsive layout primitives
- WebDev static frontend scaffold

The experience is frontend-only. It has no backend, database, authentication, external API dependency, or persisted user data.

## Project structure

```text
client/
  index.html
  src/
    App.tsx
    index.css
    main.tsx
    pages/
      Home.tsx
    components/
      ui/

server/
  index.ts              # scaffold compatibility server

shared/
  const.ts              # scaffold compatibility constants

package.json
vite.config.ts
tsconfig.json
```

## Local development

### Requirements

- Node.js 22+
- pnpm 10+

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

The Vite development server runs on `http://localhost:3000` by default.

### Type-check the project

```bash
pnpm check
```

### Create a production build

```bash
pnpm build
```

The client build is emitted to `dist/public` and the scaffold server bundle is emitted to `dist/index.js`.

### Preview the production client

```bash
pnpm preview
```

## Vercel deployment

This repository is a Vite + React static frontend and can be deployed directly through Vercel.

Recommended Vercel settings:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output directory | `dist/public` |
| Node.js version | 22 or newer |

Import the repository from Vercel:

```text
https://github.com/Shivraj404/PromptUtsav_Shivraj_Chavan
```

No environment variables are required for the core experience.

## Design direction

The visual system is intentionally restrained and technical:

- **Near-black charcoal** creates a cinematic stage.
- **Saffron and warm amber** mark action, curiosity, and the moment an idea becomes visible.
- **Muted cyan** carries blueprint lines, systems, and connective tissue.
- **Space Grotesk** provides the expressive display voice.
- **Manrope** keeps supporting copy legible.
- **DM Mono** is used for coordinates, labels, statuses, and technical metadata.
- A low-opacity blueprint grid and geometric linework unify every scene.

The experience avoids bright multi-colour gradients, generic card grids, literal deity illustration, and decorative cultural claims. Ganesha-inspired symbolism is framed as a creative association rather than a religious or theological explanation.

## Accessibility and performance

- Interactive nodes, tabs, cards, and controls are native buttons.
- Visible focus rings are retained for keyboard users.
- Reduced-motion users receive simplified motion through the global `prefers-reduced-motion` media query.
- The page uses lightweight CSS/SVG-like geometry and icon primitives instead of heavy image or video assets.
- Animation is primarily limited to transform, opacity, and GPU-friendly visual properties.
- Mobile layouts reduce density, reflow spatial constellations, and convert horizontal structures into vertical rhythms where needed.

## Content roadmap

Possible next refinements include:

1. Add deeper scroll-scrubbed choreography with GSAP for the hero, blueprint, and innovation sections.
2. Add a lightweight `/credits` route for team, acknowledgements, and technology details.
3. Add optional Engineers’ Day / Ganeshotsav closing-copy variants for different judging contexts.
4. Add analytics only if the deployed demo needs walkthrough or engagement measurement.

## License

This project is intended as a frontend competition/demo experience. Add a project-specific license before redistributing it as an open-source package.
