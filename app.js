const WHATSAPP_NUMBER = '573175491833';

const products = [
  {
    id: 'trilogia-dorada',
    name: 'Trilogía Dorada',
    price: '$380.000 COP',
    shortDescription: '3 balines 5mm 18k, 2 neopreno negro y tejido ajustable.',
    fullDescription: 'Una referencia delicada pensada para uso diario. Mezcla hilo tejido de alta resistencia con balines de oro de 18 quilates para un acabado limpio, elegante y fácil de combinar.',
    image: 'https://nudo-de-oro.duckdns.org/uploads/prod-1776650135928.jpeg',
    bestSeller: true,
    tags: ['Más vendido', 'Oro 18K', 'Ajustable']
  },
  {
    id: 'linaje-real',
    name: 'Pulsera Linaje Real',
    price: '$87.000 COP',
    shortDescription: '2 balines 5mm de Oro Laminado 18k, 1 Dije Rolex de Oro Laminado, hilo negro y tejido de alta resistencia, cierre corredizo.',
    fullDescription: 'Más que un accesorio, es una declaración de identidad. Perfecta para el cliente que busca una joya con peso visual y un acabado de alta gama.',
    image: 'https://nudo-de-oro.duckdns.org/uploads/prod-1776650438518.jpeg',
    bestSeller: true,
    tags: ['Personalizable', 'Oro Laminado 18k', 'Ajustable']
  },
  {
    id: 'esencia-clasica',
    name: 'Pulsera Esencia Clásica',
    price: '$132.000 COP',
    shortDescription: '2 balines 4mm 18k, 2 neopreno vino tinto y nudo premium.',
    fullDescription: 'Diseño clásico para quienes prefieren una combinación sobria y refinada. Conserva el protagonismo del oro real con un tejido firme y detalles discretos.',
    image: 'https://picsum.photos/seed/esencia-bracelet/900/1100',
    bestSeller: true,
    tags: ['Clásica', 'Oro real', 'Regalo ideal']
  },
  {
    id: 'brisa-elegante',
    name: 'Pulsera Brisa Elegante',
    price: '$179.000 COP',
    shortDescription: '4 balines 4mm 18k, hilo marfil y tejido doble.',
    fullDescription: 'Una referencia más protagonista, con mayor brillo y una lectura visual sofisticada. Funciona muy bien como pieza especial o como detalle para ocasión importante.',
    image: 'https://picsum.photos/seed/brisa-bracelet/900/1100',
    bestSeller: true,
    tags: ['Premium', 'Tejido doble', 'Brillo sutil']
  },
  {
    id: 'alma-personalizada',
    name: 'Pulsera Alma Personalizada',
    price: '$154.000 COP',
    shortDescription: '2 balines 4mm 18k, color de hilo a elección y ajuste manual.',
    fullDescription: 'Pensada para pedidos personalizados. El cliente puede elegir tono del hilo y estilo general manteniendo la elegancia del acabado artesanal.',
    image: 'https://picsum.photos/seed/alma-bracelet/900/1100',
    bestSeller: false,
    tags: ['Personalizable', 'Oro 18K', 'Hecha a mano']
  },
  {
    id: 'nudo-real',
    name: 'Pulsera Nudo Real',
    price: '$188.000 COP',
    shortDescription: '5 balines 4mm 18k, tejido grafito y acabado reforzado.',
    fullDescription: 'Diseñada para quienes quieren una pulsera más marcada sin perder elegancia. Su tejido reforzado aporta durabilidad y una apariencia impecable.',
    image: 'https://picsum.photos/seed/nudo-real/900/1100',
    bestSeller: false,
    tags: ['Reforzada', 'Entrega rápida', 'Unisex']
  },
  {
    id: 'destello-suave',
    name: 'Pulsera Destello Suave',
    price: '$139.000 COP',
    shortDescription: '1 balín 6mm 18k, hilo beige y nudo corredizo.',
    fullDescription: 'Perfecta para una propuesta delicada y contemporánea. El balín central se convierte en el foco visual y resalta con un look muy limpio.',
    image: 'https://picsum.photos/seed/destello-bracelet/900/1100',
    bestSeller: false,
    tags: ['Minimal', 'Ligera', 'Oro real']
  },
  {
    id: 'legado-oro',
    name: 'Pulsera Legado Oro',
    price: '$205.000 COP',
    shortDescription: '6 balines 4mm 18k, hilo negro y composición de lujo.',
    fullDescription: 'Una referencia con más presencia y un carácter premium. Mantiene la línea minimalista de la marca con mayor protagonismo de los balines de oro.',
    image: 'https://picsum.photos/seed/legado-bracelet/900/1100',
    bestSeller: false,
    tags: ['Lujo', 'Más balines', 'Colección especial']
  }
];

const brand = {
  name: 'Nudo de Oro',
  tagline: 'Pulseras tejidas con detalle artesanal y brillo auténtico.'
};

const brandLogo = `
  <svg viewBox="0 0 64 64" fill="none" aria-label="Logo Nudo de Oro" role="img">
    <circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="1.8" opacity="0.35"/>
    <path d="M18 35.5C24 22.5 40 22.5 46 35.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="24" cy="31" r="3.3" fill="currentColor" opacity="0.92"/>
    <circle cx="32" cy="28" r="4.1" fill="currentColor"/>
    <circle cx="40" cy="31" r="3.3" fill="currentColor" opacity="0.92"/>
  </svg>
`;

function renderBrand() {
  document.querySelectorAll('[data-brand]').forEach((node) => {
    node.innerHTML = `${brandLogo}<div><span>Joyería artesanal</span><strong>${brand.name}</strong></div>`;
  });
  document.querySelectorAll('[data-brand-name]').forEach((node) => {
    node.textContent = brand.name;
  });
}

function createWhatsAppLink(product) {
  const text = `Hola, quiero información sobre ${product.name} - ${product.price}. Referencia: ${product.shortDescription}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function createProductCard(product) {
  return `
    <article class="product-card" data-reveal>
      <a href="./producto.html?id=${product.id}" aria-label="Ver detalle de ${product.name}">
        <img src="${product.image}" alt="${product.name}" width="900" height="1100" loading="lazy" decoding="async" style="object-fit: cover;" >
      </a>
      <div class="product-body">
        <div>
          <h3>${product.name}</h3>
          <div class="price">${product.price}</div>
        </div>
        <p class="meta">${product.shortDescription}</p>
        <div class="card-actions">
          <a class="btn btn-secondary" href="./producto.html?id=${product.id}">Ver detalle</a>
          <a class="btn btn-whatsapp" href="${createWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function mountFeaturedProducts() {
  const container = document.querySelector('[data-featured-products]');
  if (!container) return;
  const featured = products.filter((product) => product.bestSeller).slice(0, 4);
  container.innerHTML = featured.map(createProductCard).join('');
}

function mountCatalogProducts() {
  const container = document.querySelector('[data-catalog-products]');
  if (!container) return;
  container.innerHTML = products.map(createProductCard).join('');
}

function mountProductDetail() {
  const container = document.querySelector('[data-product-detail]');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find((item) => item.id === productId) || products[0];

  document.title = `${product.name} | ${brand.name}`;
  container.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <img src="${product.image}" alt="${product.name}" width="900" height="1100" loading="eager" decoding="async">
      </div>
    </div>
    <section class="product-detail product-info">
      <a class="back-link" href="./catalogo.html">← Volver al catálogo</a>
      <span class="section-kicker">Detalle de producto</span>
      <h1>${product.name}</h1>
      <div class="price">${product.price}</div>
      <p>${product.fullDescription}</p>
      <div class="product-tags">
        ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="product-specs">
        <div><strong>Descripción:</strong> ${product.shortDescription}</div>
        <div><strong>Disponibilidad:</strong> Sujeto a stock o fabricación inmediata.</div>
        <div><strong>Atención:</strong> Pedido y asesoría directa por WhatsApp.</div>
      </div>
      <div class="card-actions">
        <a class="btn btn-whatsapp" href="${createWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer">Pedir esta referencia</a>
        <a class="btn btn-secondary" href="./catalogo.html">Seguir viendo catálogo</a>
      </div>
    </section>
  `;
}

function setupThemeToggle() {
  const button = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function renderIcon(value) {
    button.innerHTML = value === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    button.setAttribute('aria-label', value === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  root.setAttribute('data-theme', theme);
  renderIcon(theme);

  button?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    renderIcon(theme);
  });
}

function setupMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  renderBrand();
  mountFeaturedProducts();
  mountCatalogProducts();
  mountProductDetail();
  setupThemeToggle();
  setupMenu();
  setupReveal();
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
