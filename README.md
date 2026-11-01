# Gogna Enterprises - Iron & Steel Trading Website
**Cloud Computing Academic College Project**

A modern, responsive, multi-page business website built for **Gogna Enterprises**, an established iron and steel trading company supplying structural steel, high-tensile TMT rebar, mild steel angles, channels, plates, and pipes to contractors, builders, and fabricators.

---

## 1. Project Architecture & Cloud Computing Overview

This project is architected as a **pure frontend, high-performance static web application** using:
- **HTML5**: Semantic document structure across 4 core pages.
- **CSS3**: Modern industrial design system with custom CSS variables, flexbox, CSS grid, and responsive media queries.
- **Vanilla JavaScript (ES6+)**: Zero external framework dependencies; pure client-side event listeners for dynamic search, category filtering, form validation, modals, and demo authentication.

### Why Static Web Architecture for Cloud Computing?
1. **Edge CDN Distribution**: Static assets (HTML, CSS, JS, images) can be cached globally across Content Delivery Network (CDN) edge locations (such as Netlify Edge, Cloudflare, AWS CloudFront), ensuring sub-50ms latency worldwide.
2. **Infinite Scalability & Zero Idle Server Costs**: Because there is no application server or database executing on every request, the application scales effortlessly to handle traffic spikes without incurring compute fees.
3. **High Security Posture**: A purely static frontend eliminates server-side vulnerabilities (e.g. SQL injection, remote code execution, database credential leaks).
4. **Resilience & High Availability**: Static files are stored on distributed object stores, delivering 99.99%+ availability.

---

## 2. Directory & File Structure

```
gogna-enterprises/
│
├── index.html              # Page 1: Home Page (Hero, Warehouse Photo, Intro, Featured Products, Guarantees)
├── products.html           # Page 2: Products Page (6 Categories, Live Search Bar, Category Filter, Enquiry Modal)
├── about.html              # Page 3: About Us & Contact Page (Heritage, Values, Validated Form, Maps Link)
├── login.html              # Page 4: Client Portal Demo Login (Show/Hide Password, Validation, Demo Account View)
│
├── css/
│   └── style.css           # Unified stylesheet (Industrial theme: Charcoal, Steel Grey, Safety Orange)
│
├── js/
│   ├── main.js             # Shared JavaScript (Mobile nav toggle, active nav highlight, modal engine, toasts)
│   ├── products.js         # Products catalog data, dynamic rendering, search filter, category tabs
│   ├── contact.js          # Contact form real-time validation and submission handler
│   └── login.js            # Demo login simulation, password visibility toggle, credentials autofill
│
├── assets/
│   └── images/             # Authentic commercial photographs of steel warehouse, rebar, angles, plates, pipes
│       ├── hero-warehouse.jpg
│       ├── tmt-bars.jpg
│       ├── ms-angles-channels.jpg
│       ├── steel-plates-sheets.jpg
│       ├── ms-pipes-tubes.jpg
│       └── about-logistics.jpg
│
└── README.md               # Project documentation and deployment guide
```

---

## 3. Web Pages & Features

### Page 1: Home Page (`index.html`)
- **Brand Lockup**: Single clean wordmark and industrial logo emblem.
- **3-Zone Top Navigation**: Conforms to modern UX guidelines with single-line links and high-visibility "Request a Quote" CTA.
- **Atmospheric Hero Section**: Features an authentic commercial photograph of a steel warehouse with overhead gantry crane and stacked rebar, with a dark contrast scrim.
- **Trust Statistics Strip**: Tabular figure metrics (`25+ Years`, `65,000 MT`, `100% Certified`, `24-48hr Delivery`).
- **Core Product Teaser**: Direct links to primary TMT bars, structural angles, channels, and plates.
- **Why Choose Us Bento Grid**: Highlights primary mill tie-ups (SAIL, Tata, Jindal), dedicated flatbed fleet, and custom cutting.
- **Global Footer**: Comprehensive company details, business hours, and academic project attribution.

### Page 2: Products Catalog (`products.html`)
- **6 Steel Categories**:
  1. **TMT Steel Bars** (Fe 500D, Fe 550D High Tensile Rebar)
  2. **MS Angles** (Equal & Unequal Structural Angles)
  3. **MS Channels** (ISMC Standard Heavy Structural Channels)
  4. **Steel Plates** (Hot Rolled Plates & Chequered Tread Plates)
  5. **MS Pipes** (Round ERW Pipes & Square/Rectangular Box Sections)
  6. **Steel Sheets** (Cold Rolled CR & Galvanized Corrugated Sheets)
- **Live Search Bar**: Instantly filters products by name, standard (e.g. `IS 1786`, `IS 2062`), dimension, or application keywords with debounced input.
- **Interactive Category Filter Tabs**: Dynamically updates the product grid without page reloads.
- **Enquiry Modal ("Request a Quote")**: Clicking "Enquire Now" on any product opens an interactive modal with the selected product pre-filled.

### Page 3: About Us & Contact (`about.html`)
- **Company Heritage**: Story of Gogna Enterprises' growth into an established regional steel stockist.
- **Core Values**: Uncompromising Quality, Fair Wholesale Pricing, and Punctual Logistics Fleet.
- **Value-Added Processing**: Custom flame cutting, bar bending schedule (BBS) support, and electronic weighbridge facilities.
- **Interactive Contact Form**: Real-time JavaScript validation for Name ($\ge 2$ chars), Business Email (regex), Phone ($\ge 8$ digits), Subject, and Project Details ($\ge 10$ chars).
- **Interactive Map Card**: Industrial Focal Point location details with direct link to Google Maps.

### Page 4: Client Portal Demo Login (`login.html`)
- **Show/Hide Password**: Toggles password masking with SVG eye icon.
- **Client-Side Validation**: Ensures valid email format and minimum 6-character password.
- **One-Click Auto-Fill**: Quick button to populate demo credentials for evaluators:
  - **Demo Email**: `demo@gognaenterprises.com`
  - **Demo Password**: `Steel2026!`
- **Demo Dashboard Simulation**: Upon successful validation, reveals a client shipment view showing active consignment tracking and MTC download link.
- **Academic Disclaimer**: Clearly explains that the login is a frontend demonstration for college evaluation and does not store credentials.

---

## 4. Instructions to Run Locally

You can test and run this website locally on your computer using any of the following methods:

### Method A: Direct Browser Opening (Zero Setup)
1. Download or clone this folder.
2. Double-click `index.html` or right-click `index.html` &rarr; **Open with Google Chrome / Firefox / Edge / Safari**.
3. All navigation links, search filters, modals, and forms work immediately.

### Method B: Using VS Code "Live Server" Extension
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will open automatically at `http://127.0.0.1:5500`.

### Method C: Using Python's Built-in HTTP Server (Mac/Linux/Windows)
1. Open terminal or command prompt in the project root directory.
2. Run:
   ```bash
   python3 -m http.server 8080
   ```
   *(or `python -m http.server 8080` on Windows)*
3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

### Method D: Using Vite (Development Server & Production Build)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.
4. To test a production build:
   ```bash
   npm run build
   ```
   This generates the optimized static bundle in the `dist/` directory.

---

## 5. Instructions to Deploy on Netlify (Free Static Hosting)

Deploying this website on Netlify takes less than 2 minutes:

### Option 1: Netlify Drop (Drag-and-Drop — Easiest, No Git Required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and sign in or create a free Netlify account.
2. Drag and drop the **entire project folder** (containing `index.html`, `products.html`, `about.html`, `login.html`, `css/`, `js/`, and `assets/`) into the designated upload area.
3. Netlify will deploy the site instantaneously and provide a live URL (e.g. `https://gogna-enterprises-steel.netlify.app`).
4. (Optional) In **Site Configuration &rarr; Change site name**, customize your URL to `gogna-enterprises.netlify.app`.

### Option 2: Continuous Deployment via GitHub & Netlify
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Gogna Enterprises website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/gogna-enterprises.git
   git push -u origin main
   ```
2. Log into [Netlify](https://www.netlify.com) and click **"Add new site" &rarr; "Import an existing project"**.
3. Connect your **GitHub** account and choose the `gogna-enterprises` repository.
4. Set the build settings:
   - **Base directory**: Leave blank (root)
   - **Build command**: `npm run build` (or leave empty if deploying raw files)
   - **Publish directory**: `dist` (if using build) or `.` (if deploying direct HTML)
5. Click **Deploy Site**. Every future git push will automatically trigger a new deployment.

---

## 6. Project Checklist & Verification

- [x] Frontend-only using HTML5, CSS3, and Vanilla JavaScript.
- [x] Zero backend, zero PHP, zero Node.js server dependencies at runtime.
- [x] Exactly 4 pages: `index.html`, `products.html`, `about.html`, `login.html`.
- [x] Real industrial photographs of steel warehouses, rebar bundles, structural angles, plates, and pipes.
- [x] Complete product categories: TMT Steel Bars, MS Angles, MS Channels, Steel Plates, MS Pipes, Steel Sheets.
- [x] Real-time JavaScript search bar and category filter tabs.
- [x] "Request a Quote" / "Enquire Now" interactive modal with product pre-fill.
- [x] Validated contact form with inline error indicators.
- [x] Modern login page with show/hide password, autofill helper, demo authentication, and academic disclaimer.
- [x] Industrial theme palette (Charcoal `#0b0f17`, Steel Grey, Safety Orange `#ea580c`).
- [x] Fully responsive across mobile, tablet, and desktop viewports.
- [x] Fully ready for static deployment on Netlify.
