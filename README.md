# Sotka — Online Exam Preparation Platform (EGE & OGE)

A modern web platform for preparing students for Russian state exams (EGE and OGE), connecting them with qualified tutors and transparent study plans.

---

## 🏗️ Architecture & Engineering Approach

- **Component-Driven Development:** Built with a modular structure, ensuring high reusability of UI components and clean separation of concerns.
- **Modular Styling (CSS Modules):** Utilized SCSS Modules for component-scoped styles, preventing global namespace conflicts and enforcing strict encapsulation.
- **Performance & SSR:** Leveraged Next.js Server-Side Rendering and static generation to optimize page loads, asset delivery, and SEO indexing.
- **Predictable State Management:** Centralized application state and asynchronous logic managed via Redux Toolkit.
- **Type Safety:** Strict TypeScript configuration across the entire codebase to reduce runtime errors and improve developer experience.

---

## 🧰 Tech Stack

- **Framework:** Next.js (v13.4), React 18
- **Language:** TypeScript 5.1
- **State Management:** Redux Toolkit, React Redux
- **Styling:** SCSS Modules, responsive design patterns
- **Data Fetching & Services:** Axios, EmailJS
- **UI & Media:** React Player, React Paginate, React Range, React Icons
- **Quality Assurance:** ESLint, Next Lint

---

## ✨ Key Features & Highlights

- **Dynamic Tutor Catalog:** Dedicated, filterable sections for EGE and OGE preparation tracks with rich tutor profiles.
- **Transparent Pricing & Plans:** Interactive pricing pages displaying subscription tiers and available study opportunities.
- **Media Integration:** Integrated video player components (`react-player`) for educational content delivery.
- **Custom UI Controls:** Implemented pagination and custom range sliders for interactive elements.
- **Fully Responsive:** Mobile-first architecture ensuring seamless experience across all viewports.

---

## 👨‍💻 Role & Engineering Contributions

- Designed and implemented responsive, component-driven layouts using SCSS Modules for isolated and scalable styling.
- Configured Next.js routing structure, build pipelines, and optimized asset delivery.
- Structured predictable state management using Redux Toolkit to handle complex application flows.
- Integrated third-party UI libraries and media players to enrich the user experience.

---

## 🚀 Getting Started

Clone the repository and install dependencies to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Elon26/sotka-study.git

# Install dependencies
npm install

# Run the development server
npm run dev
