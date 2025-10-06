### **Промпт 5: Финальные элементы (Контакты и UI-компоненты)**

**Note:** This prompt adds the final pieces to the page. Everything must adhere to the Global Styles.

---

### **Section 1: Контакти (Contacts)**

**1. Goal:** To capture leads through a form and provide clear contact information.

**2. Placement:** This section should be placed after the "Портфоліо" section.

**3. Layout:** 
*   On desktop and tablet, use a 2-column grid.
*   On mobile, the columns should stack vertically.

**4. Content (Column 1: Contact Form):**
*   **Heading:** "Зв'яжіться з нами"
*   **Form Fields:**
    1.  `Ім'я` (Text Input, required).
    2.  `Телефон` (Text Input, optional).
    3.  `Email` (Email Input, optional, must have format validation).
    4.  `Які послуги вас цікавлять?` (Dropdown with Checkboxes, allowing multiple selections). Options: "Звук", "Світло", "Райдер артистів", "DJ-послуги", "Комплексне рішення", "Інше".
    5.  `Ваше повідомлення` (Textarea, required).
*   **Submit Button:** Text should be "Замовити консультацію". It must be a primary CTA button.
*   **Validation & States:**
    *   Required fields must be validated. An error message should appear below the field if validation fails.
    *   Fields with errors should have a thin `red-500` border.
    *   Fields in focus should have a subtle outer glow using the `indigo-500` accent color.
*   **Success State:** After successful submission, the form is replaced by a styled toast notification card (using a `slate-800` background) with a checkmark icon (✓) in `indigo-500` and the text: "Дякуємо за вашу заявку! Ми зв'яжемося з вами найближчим часом."

**5. Content (Column 2: Contact Details):**
*   **Heading:** "Контакти"
*   **Details:**
    *   Phone: Use a placeholder Ukrainian phone number (e.g., +380 99 123 45 67).
    *   Email: Use a placeholder email (e.g., contact@soundandstaff.com.ua).
*   **Socials:** Display icons for Instagram and Telegram, linking to the respective social pages.

---

### **Section 2: Final UI Components**

**1. Mobile Menu Overlay:**
*   **Trigger:** Tapping the hamburger icon in the mobile header.
*   **Appearance:** A full-screen overlay with a solid, opaque `slate-900` background.
*   **Content:** It must contain a close icon (X), the "Sound & Staff" text logo, the list of navigation links, and a primary "Обговорити" CTA button.
*   **Behavior:** Clicking a navigation link or the close icon closes the menu.

**2. Scroll to Top Button:**
*   **Appearance:** A round button with an up-arrow icon (↑) using the `indigo-500` accent color.
*   **Behavior:** It should appear in the bottom-right corner when the user scrolls down the page. Clicking it smoothly scrolls the page to the top.
*   **Style:** It should have the same glow effect on hover as other interactive elements.

**3. Cookie Banner:**
*   **Appearance:** A compact card with a "glassmorphism" style (semi-transparent `slate-900` background with blur), positioned in the bottom-left corner.
*   **Animation:** It should smoothly slide in from the bottom and fade in when it appears.
*   **Content:** It contains the text "Цей сайт використовує файли cookie для покращення вашого досвіду. Залишаючись на сайті, ви погоджуєтесь з нашою політикою конфіденційності." and a button with the text "Прийняти".

**4. Open Graph Image:**
*   **Goal:** Create the preview image for social media sharing.
*   **Design:** Generate an image (1200x630px) with a `slate-900` background. In the center, place the brand's logo icon (wave + light rays). Below the icon, add the text logo "Sound & Staff" and the slogan "Створюємо. Вражаємо.".
