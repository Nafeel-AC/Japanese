# M&Aサクセスパートナーズ - Landing Page

A modern, responsive landing page for M&A Success Partners, a Japanese M&A consulting company. This landing page is built based on a Figma design and uses a modular component-based architecture for better maintainability.

## 🚀 Features

- **Modular Architecture**: Component-based structure for easy maintenance and updates
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and smooth scrolling
- **Japanese Language Support**: Full Japanese text with proper font rendering
- **Performance Optimized**: Lazy loading, smooth animations, and optimized images

## 📁 Project Structure

```
Japanese/
├── index.html              # Main HTML file (minimal structure)
├── styles.css              # CSS styles and responsive design
├── components/             # Component files
│   ├── Header.js          # Header component
│   ├── Hero.js            # Hero section component
│   ├── Worries.js         # Worries section component
│   ├── Strengths.js       # Strengths section component
│   ├── UseCases.js        # Use cases section component
│   ├── Contact.js         # Contact section component
│   ├── Footer.js          # Footer component
│   └── App.js             # Main app component that imports all others
├── js/                     # JavaScript files
│   └── main.js            # Main JavaScript file that initializes the app
├── images/                 # Image assets from Figma design
│   ├── masp-logo.png
│   ├── hero-bg.png
│   ├── worries-bg.png
│   ├── masp-symbol.png
│   ├── case01-result.png
│   ├── case01-challenge.png
│   ├── case02-result.png
│   ├── case02-challenge.png
│   ├── case03-result.png
│   └── case03-challenge.png
└── README.md               # This file
```

## 🎨 Design Sections

### 1. Header Component
- Fixed navigation with company logo
- Navigation menu (SERVICE, USE CASE, PRICE, BLOG)
- Contact button

### 2. Hero Component
- Large hero image with overlay
- Company tagline and description
- Call-to-action button

### 3. Worries Component
- Common M&A challenges with checkboxes
- Background image with overlay
- Interactive hover effects

### 4. Strengths Component
- 5 key company strengths
- Numbered items with descriptions
- Company branding elements

### 5. Use Cases Component
- 3 detailed case studies
- Challenge → Support → Result flow
- Visual elements and descriptions

### 6. Contact Component
- Call-to-action for inquiries
- Professional contact form area

### 7. Footer Component
- Company information and links
- Copyright notice

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: ES6 modules, interactive functionality and animations
- **Google Fonts**: Noto Sans JP for Japanese text support
- **Responsive Design**: Mobile-first approach with media queries
- **Component Architecture**: Modular, reusable components

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Use Live Server**: The project is designed to work with VS Code Live Server extension
3. **Open in Browser**: Live Server will automatically open the page in your browser

### Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The page will open in your default browser with live reload

### Alternative: Local Development Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🔧 Component Architecture

### Component Structure
Each component is a JavaScript module that exports a function returning HTML:
```javascript
export function ComponentName() {
    return `
        <div class="component">
            <!-- Component HTML -->
        </div>
    `;
}
```

### Main App Component
The `App.js` component imports and renders all other components:
```javascript
import { Header } from './Header.js';
import { Hero } from './Hero.js';
// ... other imports

export function App() {
    return `
        ${Header()}
        ${Hero()}
        // ... other components
    `;
}
```

### App Initialization
The `main.js` file handles:
- Component rendering
- Event listeners
- Animations
- Mobile responsiveness
- All interactive functionality

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## 🎯 Key Features

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Scroll-triggered animations
- Mobile-friendly navigation menu

### Performance Features
- Lazy loading for images
- Smooth animations with CSS transitions
- Optimized scroll events
- Mobile-responsive design

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## 🔧 Customization

### Adding New Components
1. Create a new `.js` file in the `components/` folder
2. Export a function that returns HTML
3. Import and add it to `App.js`
4. Add any necessary CSS to `styles.css`

### Modifying Existing Components
- Edit the component file in `components/`
- The change will automatically reflect in the rendered page

### Colors
The main color scheme can be modified in `styles.css`:
- Primary: `#203060` (Dark Blue)
- Secondary: `#2A93C5` (Blue)
- Accent: `#FF9D00` (Orange)
- Background: `#f8f9fa` (Light Gray)

### Content
- Update text content in the respective component files
- Modify images in the `images/` folder
- Adjust styling in `styles.css`
- Customize interactions in `js/main.js`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All images are sourced from the Figma design
- Japanese text uses Noto Sans JP font for optimal rendering
- The design follows modern web design principles
- Mobile-first responsive approach
- Performance optimized for fast loading
- Uses ES6 modules for better code organization

## 🤝 Contributing

Feel free to modify and customize this landing page for your needs. The component-based architecture makes it easy to:
- Add new sections
- Modify existing components
- Reuse components in other projects
- Maintain and update the code

## 📄 License

This project is created for demonstration purposes. Please ensure you have the rights to use any images or content in your implementation.

---

**Built with ❤️ using HTML, CSS, and JavaScript ES6 Modules**
