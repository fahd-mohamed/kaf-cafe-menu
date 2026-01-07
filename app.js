const menuItems = [
  // مشروبات ساخنة
  {
    id: 1,
    name: 'إسبرسو',
    category: 'hot',
    price: 25,
    description: 'قهوة إسبرسو قوية ومكثفة من أجود أنواع الحبوب',
    tags: ['قهوة', 'قوية'],
    image: 'src/assets/cappuccino.jpg'
  },
  
  
  {
    id: 2,
    name: 'ايس كوفي',
    category: 'cold',
    price: 40,
    description: 'مزيج رائع من القهوة والشوكولاتة والحليب',
    tags: ['قهوة', 'شوكولاتة'],
    image: 'src/assets/icedcoffee.jpg'

  },
  {
    id: 3,
    name: 'موكا',
    category: 'cold',
    price: 40,
    description: 'مزيج رائع من القهوة والشوكولاتة والحليب',
    tags: ['قهوة', 'شوكولاتة'],
    image: 'src/assets/cappuccino.jpg'
  },
  
   {
    id: 1,
    name: 'إسبرسو',
    category: 'hot',
    price: 25,
    description: 'قهوة إسبرسو قوية ومكثفة من أجود أنواع الحبوب',
    tags: ['قهوة', 'قوية'],
    image: 'src/assets/cappuccino.jpg'
  },
  
  
  {
    id: 2,
    name: 'ايس كوفي',
    category: 'cold',
    price: 40,
    description: 'مزيج رائع من القهوة والشوكولاتة والحليب',
    tags: ['قهوة', 'شوكولاتة'],
    image: 'src/assets/icedcoffee.jpg'

  },
  {
    id: 3,
    name: 'موكا',
    category: 'cold',
    price: 40,
    description: 'مزيج رائع من القهوة والشوكولاتة والحليب',
    tags: ['قهوة', 'شوكولاتة'],
    image: 'src/assets/cappuccino.jpg'
  },
   
];

let currentCategory = 'all';
const menuGrid = document.getElementById('menuGrid');
const categoryButtons = document.querySelectorAll('.category-btn');

function formatPrice(price) {
  return `${price} ج.م`;
}

function renderMenu() {
  const filtered = currentCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === currentCategory);

  if (!filtered.length) {
    menuGrid.innerHTML = '<p style="text-align: center; color: var(--muted); grid-column: 1 / -1; padding: 40px;">لا توجد عناصر في هذه الفئة حالياً.</p>';
    return;
  }

  menuGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="menu-item" data-id="${item.id}">
        <div class="menu-item__image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-item__body">
          <div class="menu-item__header">
            <div class="menu-item__name">${item.name}</div>
            <div class="menu-item__price">${formatPrice(item.price)}</div>
          </div>
          <p class="menu-item__description">${item.description}</p>
          <div class="menu-item__tags">
            ${item.tags.map(tag => `<span class="menu-item__tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function attachEvents() {
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderMenu();
    });
  });

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لك! تم استلام رسالتك بنجاح، سنعود إليك في أقرب وقت ممكن.');
    e.target.reset();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // نازل لتحت
    navbar.classList.add('hide');
  } else {
    // طالع لفوق
    navbar.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});

// Initialize
renderMenu();
attachEvents();
