const menuItems = [
  // مشروبات ساخنة


  // ☕ HOT COFFEE
  {
    id: 1,
    name: 'Latte',
    category: 'hot',
    price: 60,
    description: 'قهوة بالحليب بطعم ناعم وغني',
    tags: ['قهوة', 'حليب', 'ساخن'],
    image: 'src/assets/Photo/latte.jpg'
  },
  {
    id: 2,
    name: 'Espresso',
    category: 'hot',
    price: 45,
    description: 'قهوة إسبرسو قوية ومركزة من أجود أنواع البن',
    tags: ['قهوة', 'قوية'],
    image: 'src/assets/Photo/espresso.jpg'
  },
  {
    id: 3,
    name: 'Cappuccino',
    category: 'hot',
    price: 65,
    description: 'قهوة بالحليب مع رغوة كثيفة وطعم متوازن',
    tags: ['قهوة', 'حليب'],
    image: 'src/assets/Photo/cappuccino.jpg'
  },
  {
    id: 4,
    name: 'Flat White',
    category: 'hot',
    price: 55,
    description: 'قهوة ناعمة بالحليب مع رغوة خفيفة',
    tags: ['قهوة', 'ناعمة'],
    image: 'src/assets/Photo/flatwhite.jpg'
  },
  {
    id: 5,
    name: 'Mocha',
    category: 'hot',
    price: 65,
    description: 'مزيج غني من القهوة والشوكولاتة والحليب',
    tags: ['قهوة', 'شوكولاتة'],
    image: 'src/assets/Photo/mocha.jpg'
  },
  {
    id: 6,
    name: 'Spanish Latte',
    category: 'hot',
    price: 75,
    description: 'قهوة بالحليب المكثف بطعم مميز',
    tags: ['قهوة', 'حليب'],
    image: 'src/assets/Photo/spanish-latte.jpg'
  },
  {
    id: 7,
    name: 'Nescafe',
    category: 'hot',
    price: 45,
    description: 'نسكافيه ساخن بطعم كلاسيك',
    tags: ['قهوة'],
    image: 'src/assets/Photo/nescafe.jpg'
  },
  {
    id: 8,
    name: 'Macchiato',
    category: 'hot',
    price: 50,
    description: 'إسبرسو مع لمسة حليب خفيفة',
    tags: ['قهوة'],
    image: 'src/assets/Photo/macchiato.jpg'
  },
  {
    id: 9,
    name: 'Caramel Macchiato',
    category: 'hot',
    price: 75,
    description: 'قهوة بالحليب مع صوص كراميل غني',
    tags: ['قهوة', 'كراميل'],
    image: 'src/assets/Photo/caramel-macchiato.jpg'
  },
  {
    id: 10,
    name: 'Caramel Latte',
    category: 'hot',
    price: 70,
    description: 'لاتيه ساخن بصوص الكراميل',
    tags: ['قهوة', 'كراميل'],
    image: 'src/assets/Photo/caramel-latte.jpg'
  },
  {
    id: 11,
    name: 'Hazelnut Latte',
    category: 'hot',
    price: 70,
    description: 'لاتيه ساخن بنكهة البندق',
    tags: ['قهوة', 'بندق'],
    image: 'src/assets/Photo/hazelnut-latte.jpg'
  },
  {
    id: 12,
    name: 'Vanilla Latte',
    category: 'hot',
    price: 70,
    description: 'لاتيه ساخن بنكهة الفانيليا',
    tags: ['قهوة', 'فانيليا'],
    image: 'src/assets/Photo/vanilla-latte.jpg'
  },
  {
    id: 13,
    name: 'Turkish Coffee',
    category: 'hot',
    price: 35,
    description: 'قهوة تركي على الطريقة الأصلية',
    tags: ['قهوة', 'تركي'],
    image: 'src/assets/Photo/turkish-coffee.jpg'
  },
  {
    id: 14,
    name: 'Hazelnut Coffee',
    category: 'hot',
    price: 45,
    description: 'قهوة ساخنة بنكهة البندق',
    tags: ['قهوة', 'بندق'],
    image: 'src/assets/Photo/hazelnut-coffee.jpg'
  },
  {
    id: 15,
    name: 'Herbs',
    category: 'hot',
    price: 25,
    description: 'أعشاب ساخنة طبيعية',
    tags: ['أعشاب'],
    image: 'src/assets/Photo/herbs.jpg'
  },
  {
    id: 16,
    name: 'Tea',
    category: 'hot',
    price: 25,
    description: 'شاي ساخن',
    tags: ['شاي'],
    image: 'src/assets/Photo/tea.jpg'
  },
  {
    id: 17,
    name: 'American Coffee',
    category: 'hot',
    price: 50,
    description: 'قهوة أمريكانو كلاسيك',
    tags: ['قهوة'],
    image: 'src/assets/Photo/americano.jpg'
  },
  {
    id: 18,
    name: 'French Coffee',
    category: 'hot',
    price: 45,
    description: 'قهوة فرنسي خفيفة',
    tags: ['قهوة'],
    image: 'src/assets/Photo/french-coffee.jpg'
  },
  {
    id: 19,
    name: 'Hot Cider',
    category: 'hot',
    price: 45,
    description: 'مشروب تفاح ساخن',
    tags: ['تفاح'],
    image: 'src/assets/Photo/hot-cider.jpg'
  },
  {
    id: 20,
    name: 'Hot Chocolate',
    category: 'hot',
    price: 45,
    description: 'شوكولاتة ساخنة غنية',
    tags: ['شوكولاتة'],
    image: 'src/assets/Photo/hot-chocolate.jpg'
  },

  // 🧊 ICED COFFEE
  {
    id: 21,
    name: 'Ice Latte',
    category: 'iced',
    price: 60,
    description: 'لاتيه بارد ومنعش',
    tags: ['قهوة', 'بارد'],
    image: 'src/assets/Photo/ice-latte.jpg'
  },
  {
    id: 22,
    name: 'Ice Chocolate',
    category: 'iced',
    price: 50,
    description: 'شوكولاتة باردة بالحليب',
    tags: ['شوكولاتة', 'بارد'],
    image: 'src/assets/Photo/ice-chocolate.jpg'
  },
  {
    id: 23,
    name: 'Ice Mocha',
    category: 'iced',
    price: 65,
    description: 'موكا باردة بطعم غني',
    tags: ['قهوة', 'شوكولاتة'],
    image: 'src/assets/Photo/ice-mocha.jpg'
  },
  {
    id: 24,
    name: 'American Coffee',
    category: 'iced',
    price: 50,
    description: 'قهوة أمريكانو باردة',
    tags: ['قهوة', 'بارد'],
    image: 'src/assets/Photo/iced-americano.jpg'
  },
  {
    id: 25,
    name: 'Ice Spanish Latte',
    category: 'iced',
    price: 75,
    description: 'سبانيش لاتيه بارد',
    tags: ['قهوة', 'بارد'],
    image: 'src/assets/Photo/ice-spanish-latte.jpg'
  },
  {
    id: 26,
    name: 'Ice Caramel Macchiato',
    category: 'iced',
    price: 75,
    description: 'ماكياتو كراميل بارد',
    tags: ['قهوة', 'كراميل'],
    image: 'src/assets/Photo/ice-caramel-macchiato.jpg'
  },

  // 🥤 FRAPPÉ
  {
    id: 27,
    name: 'Caramel Frappé',
    category: 'frappe',
    price: 65,
    description: 'فرابيه كراميل بارد',
    tags: ['فرابيه', 'كراميل'],
    image: 'src/assets/Photo/frappe-caramel.jpg'
  },
  {
    id: 28,
    name: 'Hazelnut Frappé',
    category: 'frappe',
    price: 65,
    description: 'فرابيه بندق بارد',
    tags: ['فرابيه', 'بندق'],
    image: 'src/assets/Photo/frappe-hazelnut.jpg'
  },
  {
    id: 29,
    name: 'Vanilla Frappé',
    category: 'frappe',
    price: 65,
    description: 'فرابيه فانيليا',
    tags: ['فرابيه', 'فانيليا'],
    image: 'src/assets/Photo/frappe-vanilla.jpg'
  },
  {
    id: 30,
    name: 'Mocha Frappé',
    category: 'frappe',
    price: 65,
    description: 'فرابيه موكا',
    tags: ['فرابيه', 'شوكولاتة'],
    image: 'src/assets/Photo/frappe-mocha.jpg'
  },

  // 🥛 SHAKES
  {
    id: 31,
    name: 'Vanilla Shake',
    category: 'shakes',
    price: 65,
    description: 'ميلك شيك فانيليا',
    tags: ['ميلك شيك'],
    image: 'src/assets/Photo/vanilla-shake.jpg'
  },
  {
    id: 32,
    name: 'Oreo Shake',
    category: 'shakes',
    price: 65,
    description: 'ميلك شيك أوريو',
    tags: ['ميلك شيك', 'أوريو'],
    image: 'src/assets/Photo/oreo-shake.jpg'
  },
  {
    id: 33,
    name: 'Chocolate Shake',
    category: 'shakes',
    price: 65,
    description: 'ميلك شيك شوكولاتة',
    tags: ['ميلك شيك', 'شوكولاتة'],
    image: 'src/assets/Photo/chocolate-shake.jpg'
  },
  {
    id: 34,
    name: 'Fruity Shake',
    category: 'shakes',
    price: 65,
    description: 'ميلك شيك فواكه',
    tags: ['ميلك شيك', 'فواكه'],
    image: 'src/assets/Photo/fruity-shake.jpg'
  },

  // 🍹 SMOOTHIE & FRESH
  {
    id: 35,
    name: 'Mango',
    category: 'smoothie',
    price: 65,
    description: 'سموثي مانجو طازج',
    tags: ['سموثي', 'فريش'],
    image: 'src/assets/Photo/mango.jpg'
  },
  {
    id: 36,
    name: 'Lemon Mint',
    category: 'smoothie',
    price: 55,
    description: 'ليمون بالنعناع',
    tags: ['فريش'],
    image: 'src/assets/Photo/lemon-mint.jpg'
  },
  {
    id: 37,
    name: 'Lemon',
    category: 'smoothie',
    price: 50,
    description: 'ليمون فريش',
    tags: ['فريش'],
    image: 'src/assets/Photo/lemon.jpg'
  },
  {
    id: 38,
    name: 'Guava',
    category: 'smoothie',
    price: 55,
    description: 'جوافة طازجة',
    tags: ['فريش'],
    image: 'src/assets/Photo/guava.jpg'
  },
  {
    id: 39,
    name: 'Orange',
    category: 'smoothie',
    price: 50,
    description: 'برتقال طبيعي',
    tags: ['فريش'],
    image: 'src/assets/Photo/orange.jpg'
  },
  {
    id: 40,
    name: 'Strawberry',
    category: 'smoothie',
    price: 55,
    description: 'فراولة فريش',
    tags: ['فريش'],
    image: 'src/assets/Photo/strawberry.jpg'
  },
  {
    id: 41,
    name: 'Guava Mint',
    category: 'smoothie',
    price: 60,
    description: 'جوافة بالنعناع',
    tags: ['فريش'],
    image: 'src/assets/Photo/guava-mint.jpg'
  },
  {
    id: 42,
    name: 'Strawberry Mint',
    category: 'smoothie',
    price: 60,
    description: 'فراولة بالنعناع',
    tags: ['فريش'],
    image: 'src/assets/Photo/strawberry-mint.jpg'
  },
  {
    id: 43,
    name: 'Watermelon',
    category: 'smoothie',
    price: 55,
    description: 'بطيخ فريش',
    tags: ['فريش'],
    image: 'src/assets/Photo/watermelon.jpg'
  },
  {
    id: 44,
    name: 'Cantaloupe',
    category: 'smoothie',
    price: 50,
    description: 'شمام فريش',
    tags: ['فريش'],
    image: 'src/assets/Photo/cantaloupe.jpg'
  },
  {
    id: 45,
    name: 'Banana Milk',
    category: 'smoothie',
    price: 55,
    description: 'موز بالحليب',
    tags: ['فريش'],
    image: 'src/assets/Photo/banana-milk.jpg'
  },
  {
    id: 46,
    name: 'Pineapple',
    category: 'smoothie',
    price: 60,
    description: 'أناناس فريش',
    tags: ['فريش'],
    image: 'src/assets/Photo/pineapple.jpg'
  },
  {
    id: 47,
    name: 'Avocado',
    category: 'smoothie',
    price: 85,
    description: 'أفوكادو فريش',
    tags: ['فريش'],
    image: 'src/assets/Photo/avocado.jpg'
  },
  {
    id: 48,
    name: 'Seasonal Juices',
    category: 'smoothie',
    price: 60,
    description: 'عصائر موسمية',
    tags: ['فريش'],
    image: 'src/assets/Photo/seasonal.jpg'
  },

  // 🥫 SOFT DRINKS
  {
    id: 49,
    name: 'Can',
    category: 'soft',
    price: 35,
    description: 'مشروب غازي علبة',
    tags: ['مشروب'],
    image: 'src/assets/Photo/can.jpg'
  },
  {
    id: 50,
    name: 'Water',
    category: 'soft',
    price: 15,
    description: 'مياه معدنية',
    tags: ['مياه'],
    image: 'src/assets/Photo/water.jpg'
  },
  {
    id: 51,
    name: 'Red Bull',
    category: 'soft',
    price: 75,
    description: 'مشروب طاقة',
    tags: ['طاقة'],
    image: 'src/assets/Photo/redbull.jpg'
  },

  // 🍸 COCKTAILS
  {
    id: 52,
    name: 'Blue Paradise',
    category: 'cocktails',
    price: 65,
    description: 'كوكتيل فريش منعش',
    tags: ['كوكتيل'],
    image: 'src/assets/Photo/blue-paradise.jpg'
  },
  {
    id: 53,
    name: 'Blue Passion',
    category: 'cocktails',
    price: 65,
    description: 'كوكتيل بطعم مميز',
    tags: ['كوكتيل'],
    image: 'src/assets/Photo/blue-passion.jpg'
  },
  {
    id: 54,
    name: 'Mojito',
    category: 'cocktails',
    price: 50,
    description: 'موهيتو فريش بالنعناع',
    tags: ['كوكتيل', 'نعناع'],
    image: 'src/assets/Photo/mojito.jpg'
  },
  {
    id: 55,
    name: 'Mexican Red Bull',
    category: 'cocktails',
    price: 85,
    description: 'كوكتيل ريد بول',
    tags: ['كوكتيل', 'طاقة'],
    image: 'src/assets/Photo/mexican-redbull.jpg'
  },
  {
    id: 56,
    name: 'Florida Hub',
    category: 'cocktails',
    price: 65,
    description: 'كوكتيل فواكه',
    tags: ['كوكتيل'],
    image: 'src/assets/Photo/florida-hub.jpg'
  },
  {
    id: 57,
    name: 'Pinacolato',
    category: 'cocktails',
    price: 70,
    description: 'كوكتيل أناناس وكريمة',
    tags: ['كوكتيل'],
    image: 'src/assets/Photo/pinacolato.jpg'
  },

  // 🚬 SHISHA
  {
    id: 58,
    name: 'حجر بسام الشيشة',
    category: 'shisha',
    price: 20,
    description: 'حجر شيشة',
    tags: ['شيشة'],
    image: 'src/assets/Photo/shisha.jpg'
  },
  {
    id: 59,
    name: 'حجر قص البرج',
    category: 'shisha',
    price: 25,
    description: 'حجر شيشة فاخر',
    tags: ['شيشة'],
    image: 'src/assets/Photo/shisha.jpg'
  },
  {
    id: 60,
    name: 'حجر زغلول الفاخر',
    category: 'shisha',
    price: 20,
    description: 'حجر شيشة مميز',
    tags: ['شيشة'],
    image:'src/assets/Photo/shisha.jpg'
  },
  {
    id: 61,
    name: 'معسل اسطورة هادي',
    category: 'shisha',
    price: 15,
    description: 'معسل شيشة',
    tags: ['شيشة'],
    image: 'src/assets/Photo/shisha.jpg'
  },
  {
    id: 62,
    name: 'معسل فواكه فاخر – مزايا',
    category: 'shisha',
    price: 85,
    description: 'معسل فواكه فاخر',
    tags: ['شيشة', 'فواكه'],
    image: 'src/assets/Photo/shisha.jpg'
  }

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
