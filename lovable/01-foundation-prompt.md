### **Промпт 1: Фундамент (Global Styles & Layout)**

**1. Executive Summary**

*   **Product:** Create a single-page website for "Sound & Staff", a company providing premium sound and lighting services for events. The language of the site is Ukrainian.
*   **Brand Personality:** Reliable and Cinematic. It should feel like professional studio equipment combined with the atmosphere of a major event.
*   **Target Audience:** Event industry professionals (managers, art directors) and demanding private clients who value quality and reliability.
*   **Goal:** Create a sense of premium quality, technology, and reliability. Build trust by demonstrating experience.
*   **Anti-Goals:** Avoid a cheap, cluttered, or outdated look. No insincere-looking stock photos. No harsh, inappropriate animations or "acidic" colors outside the approved palette.

**2. Global Styles (Design System)**

*   **Color Palette (Dark Theme):**
    *   **Background:** Use `slate-900` from the Tailwind CSS palette.
    *   **Primary Accent:** Use `indigo-500` for main buttons and interactive elements.
    *   **Secondary Accent:** Use `indigo-600` for less important accents.
    *   **Hover/Focus Accent:** Use `indigo-400`.
    *   **Main Text:** Use `slate-300` for good readability.
    *   **Headings:** Use `slate-100`.
    *   **Error State:** Use `red-500` for form validation errors.
*   **Typography:**
    *   **Font:** Use the "Inter" font from Google Fonts for all text.
    *   **Logo Font:** Use "Exo 2" from Google Fonts for the logo "Sound & Staff". It should be a distinct, elegant, and modern sans-serif font that conveys reliability and a premium feel, different from "Inter" but complementary.
*   **Icons:**
    *   **Style:** Use a "line" (outline) style for all icons, with a stroke width of 1.5px. Libraries like Lucide or Heroicons are preferred.
*   **Spacing & Grid:**
    *   Use an 8px grid system for all margins, paddocks, and gaps (e.g., 8px, 16px, 24px, 32px, 64px).
*   **Border Radius:**
    *   Apply a medium border-radius of 8px (`rounded-lg` in Tailwind) to elements like buttons and cards.
*   **Shadows & Depth:**
    *   For interactive elements, use a colored "glow" effect instead of a standard black shadow. The shadow should be based on the primary accent color, for example: `box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);`.
    *   For non-interactive cards, use soft, multi-layered shadows to create a sense of depth.
*   **Animations & Transitions:**
    *   All transitions (like hover effects) should be smooth and elegant (`ease-in-out`) with a duration of 0.2 seconds.
*   **Custom Browser Elements:**
    *   **Scrollbar:** Style the browser scrollbar to match the theme. Use a dark track (e.g., `zinc-800`) and an `indigo-500` thumb (for desktop, native for mobile).
    *   **Text Selection:** When text is selected, the background should be `indigo-500` and the text color should be `white`.
*   **Accessibility:**
    *   WCAG contrast check for text and elements.
    *   Logical tab order for all interactive elements.
    *   Specific error messages for form fields (e.g., "Неверный формат email", "Поле не может быть пустым") appearing on blur or form submission.
*   **SEO:**
    *   Implement Schema.org microdata (EventService).
    *   **Open Graph Image:** Create a 1200x630px image with `slate-900` background, logo icon, "Sound & Staff" text logo, and slogan "Створюємо. Вражаємо.".
*   **Cookie Banner:**
    *   Compact card style, glassmorphism effect, positioned in the bottom-left or bottom-right corner.
    *   Background: `slate-900/70%`.
    *   Text: "Цей сайт використовує файли cookie для покращення вашого досвіду. Залишаючись на сайті, ви погоджуєтесь з нашою політикою конфіденційності."
    *   Button: "Прийняти".
    *   Animation: Smooth slide-in from bottom and fade-in.
*   **Global Loading Indicator:**
    *   Thin progress bar at the top of the screen for asynchronous operations or internal transitions.

**3. Technology Stack**

*   **Frontend Framework:** Astro
*   **Styling Framework:** Tailwind CSS
*   **UI Components:** Shadcn UI
*   **Backend:** No backend
*   **Deployment:** GitHub Pages with GitHub Actions

**4. Performance Optimization**

*   **General Goal:** Prioritize fast loading times and smooth interactions, especially for mobile users (90% of traffic).
*   **Image Optimization:** Use modern formats (WebP, AVIF) and responsive images (`srcset`) for all images. Implement lazy loading for all images below the first viewport.
*   **Video Optimization:** Use modern video formats (AV1, H.264) and ensure videos are compressed for web delivery.
*   **Code Optimization:** Minify and bundle CSS/JS. Implement tree-shaking where applicable.

**5. Layout & Components**

*   **Header:**
    *   The header is sticky and remains at the top of the page on scroll.
    *   On scroll, it should become semi-transparent with a "glassmorphism" (background blur) effect.
    *   It contains the text logo "Sound & Staff" on the left.
    *   On desktop, it has a navigation menu on the right with the links: "Послуги", "Технічний персонал", "Портфоліо", "Контакти".
    *   On mobile, the menu is replaced by a "hamburger" icon. Next to the hamburger icon, place a compact CTA button with the text "Обговорити".
    *   **Mobile Menu:** Full-screen overlay with `slate-900` opaque background, close button (cross), and smooth scroll on link click. Duplicates logo and includes "Обговорити" button/phone icon leading to contacts.
*   **Footer:**
    *   The footer should have a dark background (`slate-900`).
    *   It contains:
        *   The text logo "Sound & Staff".
        *   A duplication of the main navigation links.
        *   Social media icons for Instagram and Telegram.
        *   The brand slogan: "Sound & Staff: Створюємо. Вражаємо."
        *   A copyright notice.
*   **Favicon:**
    *   The favicon should be based on the logo icon concept: a minimalist, line-style icon combining a sound wave and light rays.
    *   Provide both a light version (for dark OS themes) and a dark version (for light OS themes).
*   **Scroll-to-Top Button:**
    *   Round button with an arrow-up icon (↑) in `indigo-500`.
    *   Appears in the bottom-right corner on scroll.
    *   Has a glow effect on hover.
