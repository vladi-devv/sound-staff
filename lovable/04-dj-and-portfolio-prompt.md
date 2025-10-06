### **Промпт 4: Секции "DJ Alexey Galickiy" и "Портфоліо"**

**Note:** These sections should follow the "Технічний персонал" section and adhere to the Global Styles.

---

### **Section 1: DJ Alexey Galickiy**

**1. Goal:** To highlight a special DJ service with its own dedicated, atmospheric block.

**2. Content:**
*   **Section Heading:** "DJ Alexey Galickiy"
*   **Description:** "Професійний діджей з досвідом роботи на великих заходах та фестивалях. Спеціалізується на створенні унікальної атмосфери за допомогою музики, що відповідає настрою вашого заходу."
*   **Call-to-Action (CTA) Button:**
    *   **Text:** "Забронювати діджея"
    *   **Action:** On click, it smoothly scrolls to the contact form and (if possible) pre-selects a "DJ-послуги" option in the form.
    *   **Style:** This is a primary button, styled with an `indigo-500` background and an animated gradient on hover.

**3. Background & Layout:**
*   This section's layout is similar to the main Hero section, with centered content.
*   **Desktop Version:**
    *   **Background:** Use a high-quality, dark, cinematic stock photo related to DJing (e.g., a DJ at the console, club lighting).
    *   **Effect:** Apply a slow, subtle Ken Burns effect to the background image.
    *   **Overlay:** Use a semi-transparent dark overlay to ensure text readability.
*   **Mobile Version:**
    *   **Background:** Use modern video embedding practices for optimal performance and compatibility. This includes providing multiple video formats (e.g., `dj_av1_crf60.webm` for AV1 and `dj_h264_crf30.mp4` for H.264) to ensure broad browser support and efficient delivery. The video should be looping, muted, and autoplaying.
    *   **Fallback:** If autoplay is blocked or video formats are not supported, display the first frame of the video as a static image.
    *   **Overlay:** Use a semi-transparent dark overlay for text readability.

---

### **Section 2: Портфоліо (Portfolio)**

**1. Goal:** To visually showcase past work and build credibility through a clean, modern gallery.

**2. Content:**
*   **Section Heading:** "Портфоліо"
*   **Gallery:** A gallery of 9 project images.
*   **Image Content:** Use placeholder stock images that fit the dark, cinematic, event-lighting theme.
*   **Overlay Content:** Each image should have an associated project title that is shown on interaction. Use realistic but fictional Ukrainian project names as placeholders (e.g., "Фестиваль 'Ніч на Івана Купала'", "Весілля в 'Grand Admiral Resort'", "Корпоратив IT-компанії 'Innovatech'").

**3. Layout & Style:**
*   **Grid:**
    *   **Desktop:** 3-column grid.
    *   **Tablet:** 2-column grid.
    *   **Mobile:** 2-column grid.
*   **Image Style:** All images in the gallery must have a 4:3 aspect ratio.
*   **Loading State:** While images are loading, display minimalist "skeleton" placeholders (gray animated blocks) in place of each image.

**4. Interactivity:**
*   **Desktop (Hover):** On hovering over an image, a semi-transparent overlay (`slate-900` with opacity) should appear, displaying the project title.
*   **Mobile (Tap):** On tapping an image, the same overlay with the project title should appear.
*   **Animation:** The gallery items should have a subtle fade-in animation as they scroll into the viewport.
*   **Empty State:** If no projects are available, display the message: "Наші кейси з'являться тут незабаром." (Our cases will appear here soon.)
