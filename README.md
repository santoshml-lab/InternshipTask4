# Responsive Enterprise Dashboard

A modern, responsive enterprise dashboard built using semantic HTML5, CSS3, CSS Custom Properties, CSS Grid, Flexbox, and JavaScript.

## 🚀 Live Demo

https://internship-task-4-jet.vercel.app/

## 📌 Project Overview

This project focuses on building a responsive dashboard interface using a modern CSS architecture.

The application uses reusable design tokens, responsive breakpoints, CSS Grid, Flexbox, glassmorphism effects, shadows, hover transitions, and light/dark theme variables.

The layout is designed to work smoothly across mobile, tablet, and desktop screen sizes.

## ✨ Features

- Responsive enterprise dashboard
- Mobile-first CSS architecture
- CSS Custom Properties / Design Tokens
- CSS Grid based dashboard layout
- Flexbox based navigation and components
- Responsive breakpoints
- Glassmorphism content cards
- Soft shadows and hover transitions
- Light and dark theme support
- Accessible focus states
- Reduced-motion support
- No horizontal scrolling on tested mobile viewport
- Responsive analytics and reports sections

## 🎨 Design Tokens

The project defines reusable CSS variables inside `:root`.

### Color Tokens

- Primary brand color
- Primary dark color
- Background color
- Surface color
- Text color
- Muted text color
- Border color
- Success color

### Typography Tokens

- Extra-small text
- Small text
- Base text
- Large text
- Extra-large text
- Heading scale

### Spacing Tokens

Reusable spacing variables are defined for consistent padding, margins, and gaps throughout the application.

### Border Radius Tokens

The project includes small, medium, and large radius variables for consistent component styling.

### Effect Tokens

Reusable shadow and transition variables are used to maintain visual consistency.

## 📱 Responsive Breakpoints

The dashboard was tested across the required responsive breakpoints.

| Breakpoint | Device / Viewport | Result |
|------------|------------------|--------|
| 320px | iPhone SE | ✅ PASS |
| 768px | iPad | ✅ PASS |
| 1024px | iPad Pro | ✅ PASS |
| 1440px | Desktop | ✅ PASS |

### 320px

The layout switches to a single-column mobile layout.

### 768px

The navigation becomes horizontal and dashboard/content grids expand into multiple columns.

### 1024px

The dashboard displays four metric cards in a row and the analytics section uses three columns.

### 1440px

The large desktop layout provides additional spacing while maintaining the responsive grid structure.

## 🧩 CSS Architecture

The stylesheet is organized into clear sections:

1. Design Tokens
2. Dark Theme Variables
3. Base Styles
4. Header and Navigation
5. Main Content
6. Button Styling
7. Section Headings
8. Dashboard Grid
9. Glassmorphism Content Grid
10. Report List
11. Accessibility
12. Responsive Breakpoints
13. Reduced Motion

This structure makes the CSS easier to maintain and extend.

## 🌙 Dark Theme

The application includes dark theme variables using CSS Custom Properties.

JavaScript dynamically changes the `data-theme` attribute on the root HTML element to switch between light and dark themes.

## 🪟 Glassmorphism

Analytics cards use modern glassmorphism styling with:

- Semi-transparent surfaces
- Backdrop blur
- Soft borders
- Subtle shadows
- Smooth hover transitions

## ♿ Accessibility

Accessibility considerations include:

- Semantic HTML5 elements
- Accessible navigation labels
- Visible keyboard focus states
- `:focus-visible` support
- Reduced-motion support
- Responsive text and layout
- Proper heading hierarchy

## 📂 Project Structure

```text
Responsive-Enterprise-Dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
🛠️ Technologies Used
HTML5
CSS3
CSS Custom Properties
CSS Grid
Flexbox
JavaScript
Responsive Web Design
Vercel
🧪 Responsive Testing
The live application was tested using responsive viewport testing.
Tested viewport sizes:
320 × 600
768 × 600
1024 × 600
1440 × 600
The application maintained its layout without visible horizontal overflow across the tested viewports.
📸 Responsive Screenshots
Responsive testing screenshots demonstrate the dashboard behavior at:
320px mobile
768px tablet
1024px desktop/tablet
1440px large desktop
🎯 Task Requirements Completed
[x] Design token palette in :root
[x] Primary brand colors
[x] Typography scale
[x] Spacing tokens
[x] Border radius tokens
[x] CSS Grid dashboard
[x] Flexbox components
[x] 320px responsive breakpoint
[x] 768px responsive breakpoint
[x] 1024px responsive breakpoint
[x] 1440px responsive breakpoint
[x] Glassmorphism styling
[x] Soft shadows
[x] Hover transitions
[x] Dark/light theme variables
[x] Mobile overflow testing
[x] Responsive demo
[x] Vercel deployment
👨‍💻 Author
Santosh Yadav
AI & Full-Stack Developer
GitHub: https://github.com/santoshml-lab⁠�
