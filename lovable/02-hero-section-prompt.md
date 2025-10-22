### **Промпт 2: Секция "Hero"**

**Note:** This section should be placed immediately after the Header created in the previous step. It should use the global styles we've already defined.

**1. Section Goal**

Create a powerful, cinematic first screen that immediately communicates the brand's professionalism and atmospheric quality. This is the main "wow" moment for the user.

**2. Content**

- **Main Heading (H1):** "Професійний звук та світло для ваших подій"
- **Subheading:** "Від затишних вечірок до масштабних фестивалів. Гарантуємо якість та надійність."
- **Call-to-Action (CTA) Button:**
  - **Text:** "Замовити консультацію"
  - **Icon:** The button must include a logical icon (e.g., an arrow `→`).
  - **Action:** On click, it smoothly scrolls the page to the "Contacts" section.
  - **Style:** This is a primary button. It should use the `indigo-500` background color. On hover, it should smoothly transition to an animated gradient from `indigo-500` to `violet-500`.

**3. Background & Layout**

The background and layout are different for desktop and mobile devices.

- **Desktop Version:**
  - **Background:** Use a high-quality, atmospheric, dark, cinematic-style stock photograph. The photo should focus on light rays, equipment details, or silhouettes in a concert setting, avoiding clear faces or staged scenes.
  - **Effect:** Apply a very slow, subtle Ken Burns effect (slow zoom or pan) to the background image to make it feel more alive.
  - **Overlay:** Place a semi-transparent dark overlay (e.g., `slate-900` with 60% opacity) over the image to ensure the white/light-gray text has excellent readability.

- **Mobile Version:**
  - **Background:** Use modern video embedding practices for optimal performance and compatibility. This includes providing multiple video formats (e.g., `sound_staff_1_av1_crf60.webm` for AV1 and `sound_staff_1_h264_crf33.mp4` for H.264) to ensure broad browser support and efficient delivery. The video should be looping, muted, and autoplaying.
  - **Controls:** The video should have no visible player controls.
  - **Fallback:** If the browser blocks video autoplay or video formats are not supported, the first frame of the video should be displayed as a static background image.
  - **Overlay:** Place a semi-transparent dark overlay (`slate-900` with 60% opacity) over the video to ensure the text is always readable against any frame of the video.

**4. Content Alignment**

The text and CTA button should be centrally aligned (both horizontally and vertically) within the section.
