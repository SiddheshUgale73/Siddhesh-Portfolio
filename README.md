# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 📁 Folder Structure

```
portfolio/
├── index.html          # Main homepage
├── about.html          # About page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript file
├── images/             # All images
│   └── profile.jpg     # Your profile picture
└── assets/             # Other assets (optional)
```

## 🚀 Getting Started

### Step 1: Setup Files
All the basic files have been created. Make sure you have:
- ✅ `index.html`
- ✅ `about.html`
- ✅ `projects.html`
- ✅ `contact.html`
- ✅ `css/style.css`
- ✅ `js/script.js`
- ✅ `images/` folder

### Step 2: Add Your Images
1. Add your profile picture to the `images/` folder
   - Name it `profile.jpg` (or update the image paths in HTML files)
   - Recommended size: 400x400px or larger

2. Add project images (optional)
   - Add project screenshots to `images/` folder
   - Name them: `project1.jpg`, `project2.jpg`, etc.

### Step 3: Customize Content

#### Update Personal Information:
1. **index.html** - Change:
   - Line 12: Update page title
   - Line 30: Update your name in the hero section
   - Line 31: Update the subtitle/description
   - Line 43: Update footer text

2. **about.html** - Update:
   - Your bio/description
   - Skills list
   - Contact information

3. **contact.html** - Update:
   - Email address
   - Phone number
   - Location

4. **js/script.js** - Update:
   - Line 21: Change typing animation texts to your roles
   - Lines 51-63: Update projects data with your actual projects
   - Add more projects in `projects.html` if needed

### Step 4: Customize Colors (Optional)
In `css/style.css`, modify the CSS variables at the top:
```css
:root {
    --primary-color: #6366f1;    /* Change to your preferred color */
    --secondary-color: #8b5cf6;  /* Change to your preferred color */
    --dark-color: #1e293b;
    --light-color: #f8fafc;
}
```

### Step 5: Test Your Website
1. Open `index.html` in your web browser
2. Navigate through all pages to ensure everything works
3. Test the mobile menu (resize browser window)
4. Check all links and forms

## 📝 Features

- ✨ Modern, responsive design
- 📱 Mobile-friendly navigation
- 🎨 Beautiful gradient hero section
- ⌨️ Typing animation effect
- 🎯 Smooth scrolling
- 📄 Multiple pages (Home, About, Projects, Contact)
- 📧 Contact form
- 🌟 Hover effects and animations

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (Vanilla JS - No dependencies)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization Tips

1. **Change Colors**: Modify CSS variables in `style.css`
2. **Add More Projects**: Update the `sampleProjects` array in `script.js`
3. **Modify Typing Text**: Edit the `typingTexts` array in `script.js`
4. **Update Social Links**: Edit the social links in the footer section of each HTML file

## 📧 Contact Form Note

The contact form currently shows an alert on submission. To make it functional:
- Integrate with a backend service (like Formspree, Netlify Forms, or your own backend)
- Or connect to an email service

## 🚀 Deployment

You can deploy this website to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files to your hosting service.

## 📄 License

This project is open source and available for personal use.

---

**Happy Coding! 🎉**







