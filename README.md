# IT Student Portfolio

Welcome to my personal portfolio website! This site showcases my journey as an IT student, highlighting my skills, projects, and passion for technology.

## Technologies Used

- HTML5
- Tailwind CSS
- Hosted on GitHub Pages with HTTPS/SSL

## Sections

- **About**: Learn more about my background and interests
- **Skills**: Overview of my technical skills and competencies
- **Projects**: Showcase of my coding projects and achievements
- **Contact**: Get in touch with me

## HTTPS/SSL Configuration

This portfolio is configured to use HTTPS with automatic SSL certificate from GitHub Pages.

### Setup Instructions

1. **GitHub Pages Settings**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "Deploy from a branch"
   - Select main branch and save
   - Under "Custom domain", enter `phutrong.me`
   - ✅ Check "Enforce HTTPS" (appears after custom domain is configured)

2. **Security Features**:
   - All resources use HTTPS
   - HTTP Strict-Transport-Security (HSTS) enabled
   - Content Security Policy configured to upgrade insecure requests
   - Custom domain configured in CNAME file

3. **Files**:
   - `CNAME`: Contains custom domain (phutrong.me)
   - `_config.yml`: GitHub Pages configuration
   - `.nojekyll`: Tells GitHub to treat as static site
   - `index.html`: Main portfolio page with security meta tags

### Verify HTTPS is Working

Visit https://phutrong.me and check:

- URL shows 🔒 lock icon
- No mixed content warnings in browser console
- SSL certificate is valid

Feel free to explore and reach out if you'd like to collaborate or learn more about my work!
