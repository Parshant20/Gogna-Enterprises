/**
 * Gogna Enterprises - Iron & Steel Trading
 * Products Catalog & Filter Engine (Vanilla JS)
 */

const PRODUCTS_DATA = [
  {
    id: 'tmt-bars-fe500d',
    name: 'Fe-500D High Tensile TMT Steel Bars',
    category: 'TMT Steel Bars',
    categorySlug: 'tmt-bars',
    image: 'assets/images/tmt-bars.jpg',
    description: 'Thermo-Mechanically Treated ribbed steel reinforcement bars offering superior yield strength, ductility, and high earthquake resistance for all residential and industrial structures.',
    specs: {
      'Grade / Standard': 'IS 1786 Fe 500D / Fe 550D',
      'Diameter Range': '8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm',
      'Standard Length': '12 Metres per bundle / custom cut',
      'Key Feature': 'Corrosion Resistant & High Bendability'
    }
  },
  {
    id: 'tmt-bars-fe550',
    name: 'Primary Mill TMT Structural Rebar',
    category: 'TMT Steel Bars',
    categorySlug: 'tmt-bars',
    image: 'assets/images/tmt-bars.jpg',
    description: 'Certified primary-route TMT bars sourced directly for critical infrastructure projects, flyovers, metro lines, and multi-storey commercial towers requiring highest fatigue strength.',
    specs: {
      'Grade / Standard': 'IS 1786 Fe 550 / Fe 600',
      'Diameter Range': '10mm to 36mm',
      'Test Certificate': 'Manufacturer MTC with heat number',
      'Applications': 'Bridges, Flyovers, Heavy Foundations'
    }
  },
  {
    id: 'ms-angles-equal',
    name: 'Mild Steel Equal Angles (L-Profiles)',
    category: 'MS Angles',
    categorySlug: 'ms-angles',
    image: 'assets/images/ms-angles-channels.jpg',
    description: 'Hot-rolled mild steel structural equal angles manufactured to stringent tolerances, ideal for transmission towers, roof trusses, industrial shelving, and frame fabrication.',
    specs: {
      'Grade / Standard': 'IS 2062 E250 / ASTM A36',
      'Size Range': '25 x 25 x 3mm to 200 x 200 x 20mm',
      'Standard Length': '6 Metres to 12 Metres',
      'Surface Finish': 'Black Mill Finish / Hot-Dip Galvanized'
    }
  },
  {
    id: 'ms-angles-unequal',
    name: 'MS Unequal Structural Angles',
    category: 'MS Angles',
    categorySlug: 'ms-angles',
    image: 'assets/images/ms-angles-channels.jpg',
    description: 'Heavy-duty unequal leg structural steel angles engineered for asymmetric structural framing, crane booms, bracket supports, and marine structures.',
    specs: {
      'Grade / Standard': 'IS 2062 Grade A / B',
      'Size Range': '75 x 50mm to 200 x 150mm',
      'Thickness': '6mm to 18mm',
      'Custom Processing': 'Pre-punched holes & cut-to-size'
    }
  },
  {
    id: 'ms-channels-ismc',
    name: 'ISMC Structural Mild Steel Channels',
    category: 'MS Channels',
    categorySlug: 'ms-channels',
    image: 'assets/images/ms-angles-channels.jpg',
    description: 'Standard C-shaped hot-rolled structural steel channels offering robust load-bearing capability for floor beams, vehicle chassis fabrication, building purlins, and wall framing.',
    specs: {
      'Grade / Standard': 'IS 2062 ISMC Standard',
      'Size Range': 'ISMC 75 x 40mm up to ISMC 400 x 100mm',
      'Section Weight': '6.8 kg/m to 50.1 kg/m',
      'Standard Length': '11 to 12 Metres'
    }
  },
  {
    id: 'ms-channels-heavy',
    name: 'Heavy Industrial Web & Flange Channels',
    category: 'MS Channels',
    categorySlug: 'ms-channels',
    image: 'assets/images/ms-angles-channels.jpg',
    description: 'Heavy structural parallel flange and tapered flange steel channels designed for gantry girders, mezzanine floors, warehouse racks, and bridge approach trestles.',
    specs: {
      'Standard': 'IS 2062 E250 / E350 High Tensile',
      'Dimensions': 'ISMC 150 to ISMC 300 Heavy Series',
      'Fabrication': 'Ready for welding, beveling & shot blasting',
      'Supply Mode': 'Full trailer loads or retail yard bundles'
    }
  },
  {
    id: 'steel-plates-hr',
    name: 'Hot Rolled (HR) Mild Steel Plates',
    category: 'Steel Plates',
    categorySlug: 'steel-plates',
    image: 'assets/images/steel-plates-sheets.jpg',
    description: 'Premium quality hot-rolled structural steel plates in mild steel and high-tensile grades, widely used for machine bases, storage tanks, pre-engineered buildings, and industrial platforms.',
    specs: {
      'Grade / Standard': 'IS 2062 E250BR / ASTM A36',
      'Thickness Range': '5mm to 100mm',
      'Plate Width': '1250mm, 1500mm, 2000mm, 2500mm',
      'Cutting Service': 'CNC Plasma / Flame Cutting available'
    }
  },
  {
    id: 'steel-plates-chequered',
    name: 'Industrial Chequered Tread Plates',
    category: 'Steel Plates',
    categorySlug: 'steel-plates',
    image: 'assets/images/steel-plates-sheets.jpg',
    description: 'Slip-resistant tear-drop and diamond pattern steel tread plates engineered for industrial walkways, factory ramps, staircase steps, truck bodies, and elevator flooring.',
    specs: {
      'Pattern Style': 'Tear Drop / Diamond Pattern',
      'Thickness Range': '3mm to 12mm',
      'Width x Length': '1250 x 2500mm & custom slabs',
      'Key Advantage': 'Anti-slip safety & wear resistance'
    }
  },
  {
    id: 'ms-pipes-round',
    name: 'Round ERW Structural Mild Steel Pipes',
    category: 'MS Pipes',
    categorySlug: 'ms-pipes',
    image: 'assets/images/ms-pipes-tubes.jpg',
    description: 'Electric Resistance Welded (ERW) circular hollow sections for industrial scaffolding, water pipelines, structural poles, handrails, and greenhouse frameworks.',
    specs: {
      'Grade / Standard': 'IS 1239 / IS 3589 / IS 1161',
      'Nominal Bore (NB)': '15mm (1/2") to 300mm (12")',
      'Class': 'Light, Medium, and Heavy Class',
      'Ends Finish': 'Plain end, bevelled end, or threaded'
    }
  },
  {
    id: 'ms-pipes-square-rect',
    name: 'Square & Rectangular Hollow Sections (SHS / RHS)',
    category: 'MS Pipes',
    categorySlug: 'ms-pipes',
    image: 'assets/images/ms-pipes-tubes.jpg',
    description: 'Cold-formed welded structural box sections offering modern aesthetic appeal, high torsional strength, and uniform weight distribution for architectural facades and space frames.',
    specs: {
      'Standard': 'IS 4923 Grade YSt 210 / 310',
      'Sizes (SHS)': '20x20mm to 200x200mm',
      'Sizes (RHS)': '40x20mm to 250x150mm',
      'Thickness': '1.6mm to 10mm'
    }
  },
  {
    id: 'steel-sheets-cr',
    name: 'Cold Rolled (CR) Close Annealed Steel Sheets',
    category: 'Steel Sheets',
    categorySlug: 'steel-sheets',
    image: 'assets/images/steel-plates-sheets.jpg',
    description: 'Precision cold-rolled steel sheets featuring ultra-smooth surface texture, high ductility, and tight gauge tolerance, suitable for electrical enclosures, auto panels, and steel furniture.',
    specs: {
      'Standard': 'IS 513 CR1 / CR2 / CR3 Quality',
      'Thickness Range': '0.50mm to 3.00mm',
      'Surface Quality': 'Matte / Oiled / Skin Passed',
      'Processing': 'Cut to sheet lengths from master coils'
    }
  },
  {
    id: 'steel-sheets-galvanized',
    name: 'Galvanized Corrugated (GC) & Plain (GP) Sheets',
    category: 'Steel Sheets',
    categorySlug: 'steel-sheets',
    image: 'assets/images/steel-plates-sheets.jpg',
    description: 'Corrosion-resistant zinc-coated sheets ideal for industrial roofing, warehouse cladding, agricultural grain silos, ducting, and outdoor protective barriers.',
    specs: {
      'Zinc Coating': '90 GSM to 275 GSM',
      'Thickness': '0.35mm to 1.6mm',
      'Profile': 'Standard Sine Wave Corrugated or Plain Flat',
      'Standard Lengths': '6 ft, 8 ft, 10 ft, 12 ft'
    }
  }
];

let currentCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('productSearchInput');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const resultsCount = document.getElementById('resultsCount');

  // Check URL query parameters (e.g. ?category=tmt-bars or ?q=rebar)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCat = urlParams.get('category');
  const paramQuery = urlParams.get('search');

  if (paramCat) {
    currentCategory = paramCat;
    categoryTabs.forEach(tab => {
      if (tab.getAttribute('data-category') === paramCat) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  if (paramQuery && searchInput) {
    searchQuery = paramQuery;
    searchInput.value = paramQuery;
  }

  // Category tab clicks
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search input with debounce
  if (searchInput) {
    let timeoutId;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
      }, 150);
    });
  }

  // Initial render
  renderProducts();

  function renderProducts() {
    if (!productsGrid) return;

    const filtered = PRODUCTS_DATA.filter(prod => {
      const matchCat = currentCategory === 'all' || prod.categorySlug === currentCategory;
      const matchSearch = !searchQuery || 
        prod.name.toLowerCase().includes(searchQuery) ||
        prod.category.toLowerCase().includes(searchQuery) ||
        prod.description.toLowerCase().includes(searchQuery) ||
        Object.values(prod.specs).some(val => val.toLowerCase().includes(searchQuery));
      return matchCat && matchSearch;
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" style="margin: 0 auto 1rem;">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          <h3>No matching steel products found</h3>
          <p style="color: #64748b; margin-bottom: 1.5rem;">We couldn't find any products matching "${escapeHtml(searchQuery)}". Try searching for "TMT", "Angle", "Plate", "ISMC", or "Pipe".</p>
          <button class="btn btn-secondary btn-sm" id="resetFilterBtn">Reset Search & Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          categoryTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-category') === 'all'));
          renderProducts();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(prod => `
      <article class="product-card">
        <div class="product-image-wrap">
          <img 
            src="${prod.image}" 
            alt="${escapeHtml(prod.name)}" 
            loading="lazy" 
            referrerPolicy="no-referrer"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80';"
          />
          <span class="product-category-tag">${escapeHtml(prod.category)}</span>
        </div>
        <div class="product-body">
          <h3 class="product-title">${escapeHtml(prod.name)}</h3>
          <p class="product-desc">${escapeHtml(prod.description)}</p>
          
          <div class="product-specs">
            ${Object.entries(prod.specs).map(([key, val]) => `
              <div class="product-spec-row">
                <span>${escapeHtml(key)}:</span>
                <strong>${escapeHtml(val)}</strong>
              </div>
            `).join('')}
          </div>

          <div class="product-footer">
            <span class="quote-badge">Wholesale Quote</span>
            <button 
              type="button" 
              class="btn btn-primary btn-sm" 
              data-open-enquiry 
              data-product="${escapeHtml(prod.name)}"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
