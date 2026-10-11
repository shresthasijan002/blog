// Editorial Articles Catalog
const articles = [
  {
    id: 1,
    title:
      "The Craft of Modern Essayism: Rediscovering Precision in Prosaic Expression",
    category: "Editorial",
    readTime: "7 min read",
    date: "Oct 24, 2026",
    featured: true,
    snippet:
      "An examination of how thoughtful, measured writing cuts through the superficial noise of contemporary digital hyper-consumption.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Julian Vance",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    content: `
                    <p>In an epoch characterized by ephemeral social feeds and algorithmic brevity, the deliberate essay remains an sanctuary for complex thought. Writing with conviction demands a return to classical precision—where every adjective is weighed and every paragraph constructed with intent.</p>
                    <p>The essence of editorial mastery lies not in grandiosity, but in clarity. When we strip away decorative jargon, what remains is the pure resonance of a well-formed idea.</p>
                    <h3 class="font-serif text-2xl font-bold text-charcoal-900 dark:text-paper-100 mt-6">The Anatomy of Editorial Rhythm</h3>
                    <p>Great editorial pieces function much like chamber music: quiet passages build tension, while concise declarations provide resolution. The modern reader does not seek endless brevity; they seek depth presented with elegant pacing.</p>
                    <blockquote class="border-l-2 border-charcoal-900 dark:border-paper-100 pl-4 my-6 italic text-charcoal-800 dark:text-paper-300 font-serif">
                        "To write simply is to understand deeply. Elegance in prose is the ultimate declaration of clarity."
                    </blockquote>
                    <p>As creators, our responsibility is to protect the space for contemplative reading and continue crafting works that endure long after the browser tab is closed.</p>
                `,
    comments: [
      {
        name: "Clara Sterling",
        text: "A refreshing reminder of why long-form essays still matter so deeply.",
        date: "3 hours ago",
      },
      {
        name: "Edward Thorne",
        text: "The classical typography on this piece elevates the reading experience completely.",
        date: "Yesterday",
      },
    ],
  },
  {
    id: 2,
    title: "Monochrome & Minimalism: The Aesthetics of Restraint",
    category: "Design",
    readTime: "5 min read",
    date: "Oct 21, 2026",
    snippet:
      "Why monochrome palettes and deliberate typography continue to define timeless print and digital editorial identities.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Helena Rostova",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    content: `
                    <p>Restraint in graphic design is often misinterpreted as absence. In truth, minimalist design is the presence of utmost intentionality. By limiting visual noise, we allow typography and composition to speak with authority.</p>
                `,
    comments: [],
  },
  {
    id: 3,
    title: "On Solitude & Creative Focus: Lessons from Print Masters",
    category: "Creative",
    readTime: "6 min read",
    date: "Oct 18, 2026",
    snippet:
      "Exploring how historical editors and press founders cultivated deep focus in environments free from digital fragmentation.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Julian Vance",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    content: `
                    <p>Solitude is the laboratory of the creative mind. When we quiet external chatter, our internal narrative gains the space required to formulate original thesis and artistic vision.</p>
                `,
    comments: [
      {
        name: "Arthur Pendelton",
        text: "Essential reading for anyone trying to finish a manuscript this year.",
        date: "2 days ago",
      },
    ],
  },
  {
    id: 4,
    title: "The Printed Word in a Digital Epoch: An Archeology of Bookbinding",
    category: "Literature",
    readTime: "8 min read",
    date: "Oct 14, 2026",
    snippet:
      "Tracing the tactile tactile charm of linen covers, letterpress typography, and hand-bound editions in contemporary collecting.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Beatrice Mercier",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    content: `
                    <p>There is an undeniable permanence to physical print. A bound book carries weight, texture, and history—qualities that digital screens can emulate but never truly replace.</p>
                `,
    comments: [],
  },
  {
    id: 5,
    title: "Cultural Memory in the Age of Instant Repositories",
    category: "Culture",
    readTime: "6 min read",
    date: "Oct 09, 2026",
    snippet:
      "How digital archives shape collective human history, and why curated editorial filtering is essential to preserving truth.",
    image:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Beatrice Mercier",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    content: `
                    <p>Curation is an act of historical stewardship. Without editorial perspective, information becomes an unnavigable ocean. Editors serve as archivists of cultural memory.</p>
                `,
    comments: [],
  },
  {
    id: 6,
    title: "The Architectural Essay: Structuring Prose like Physical Monuments",
    category: "Essays",
    readTime: "7 min read",
    date: "Oct 03, 2026",
    snippet:
      "Comparing structural load-bearing design principles with arguments, subtext, and narrative pacing in critical literature.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Helena Rostova",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    content: `
                    <p>A essay requires foundation, pillars, and arches. Without sound structural logic, the grandest metaphors collapse under critical examination.</p>
                `,
    comments: [],
  },
];

// Editorial Categories
const categories = [
  "All",
  "Editorial",
  "Creative",
  "Essays",
  "Design",
  "Culture",
  "Literature",
];

// Application State
let currentCategory = "All";
let searchQuery = "";
let activeArticleId = null;

window.onload = function () {
  renderCategoryFilters();
  renderHeroPost();
  renderPosts();
  initTheme();
};

function initTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

function renderCategoryFilters() {
  const container = document.getElementById("categoryContainer");
  container.innerHTML = categories
    .map(
      (cat) => `
                <button onclick="setCategory('${cat}')" 
                        class="px-3.5 py-1.5 text-xs tracking-wider uppercase transition-all duration-200 ${
                          currentCategory === cat
                            ? "bg-charcoal-900 text-paper-100 dark:bg-paper-100 dark:text-charcoal-950 font-semibold"
                            : "text-charcoal-700 dark:text-paper-300 hover:text-charcoal-900 dark:hover:text-white border border-transparent hover:border-charcoal-900/10 dark:hover:border-paper-100/10"
                        }">
                    ${cat}
                </button>
            `,
    )
    .join("");
}

function renderHeroPost() {
  const hero = articles.find((a) => a.featured) || articles[0];
  const heroElem = document.getElementById("heroPost");

  heroElem.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-7 h-72 sm:h-96 overflow-hidden border border-charcoal-900/10 dark:border-paper-100/10 group cursor-pointer" onclick="openArticle(${hero.id})">
                        <img src="${hero.image}" alt="${hero.title}" class="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700">
                    </div>
                    <div class="lg:col-span-5 space-y-5">
                        <div class="flex items-center space-x-3 text-xs tracking-widest uppercase text-charcoal-700 dark:text-paper-300">
                            <span class="font-semibold text-charcoal-900 dark:text-paper-100 border-b border-charcoal-900/30 dark:border-paper-100/30">${hero.category}</span>
                            <span>•</span>
                            <span>Featured Essay</span>
                        </div>
                        <h1 onclick="openArticle(${hero.id})" class="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900 dark:text-paper-100 hover:opacity-80 transition cursor-pointer leading-tight">
                            ${hero.title}
                        </h1>
                        <p class="text-charcoal-700 dark:text-paper-300 text-sm leading-relaxed line-clamp-3">
                            ${hero.snippet}
                        </p>

                        <div class="pt-4 border-t border-charcoal-900/10 dark:border-paper-100/10 flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <img src="${hero.author.avatar}" alt="${hero.author.name}" class="w-8 h-8 rounded-full object-cover grayscale">
                                <div class="text-xs">
                                    <div class="font-bold uppercase tracking-wider text-charcoal-900 dark:text-paper-100">${hero.author.name}</div>
                                    <div class="text-charcoal-700 dark:text-paper-300">${hero.date} — ${hero.readTime}</div>
                                </div>
                            </div>
                            <button onclick="openArticle(${hero.id})" class="text-xs font-semibold uppercase tracking-wider text-charcoal-900 dark:text-paper-100 border-b border-charcoal-900 dark:border-paper-100 pb-0.5 hover:opacity-70 transition">
                                Read Essay <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
}

function renderPosts() {
  const grid = document.getElementById("postsGrid");
  const emptyState = document.getElementById("emptyState");

  const filtered = articles.filter((post) => {
    const matchesCategory =
      currentCategory === "All" || post.category === currentCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  document.getElementById("resultsCount").innerText =
    `Showing ${filtered.length} publication${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  grid.innerHTML = filtered
    .map(
      (post) => `
                <article class="flex flex-col justify-between border-b border-charcoal-900/10 dark:border-paper-100/10 pb-8 group">
                    <div class="space-y-4">
                        <div class="h-52 overflow-hidden border border-charcoal-900/10 dark:border-paper-100/10 cursor-pointer" onclick="openArticle(${post.id})">
                            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700">
                        </div>

                        <div class="flex items-center justify-between text-[11px] tracking-widest uppercase text-charcoal-700 dark:text-paper-300">
                            <span class="font-bold text-charcoal-900 dark:text-paper-100">${post.category}</span>
                            <span>${post.readTime}</span>
                        </div>

                        <h3 onclick="openArticle(${post.id})" class="font-serif text-xl font-bold text-charcoal-900 dark:text-paper-100 hover:opacity-75 transition cursor-pointer leading-snug">
                            ${post.title}
                        </h3>

                        <p class="text-charcoal-700 dark:text-paper-300 text-xs leading-relaxed line-clamp-3">
                            ${post.snippet}
                        </p>
                    </div>

                    <div class="pt-6 mt-6 border-t border-charcoal-900/5 dark:border-paper-100/5 flex items-center justify-between">
                        <span class="text-[11px] text-charcoal-700 dark:text-paper-300">${post.date} • By ${post.author.name}</span>
                        <button onclick="openArticle(${post.id})" class="text-xs font-semibold uppercase tracking-wider text-charcoal-900 dark:text-paper-100 border-b border-transparent hover:border-charcoal-900 dark:hover:border-paper-100 transition">
                            Read <i class="fa-solid fa-chevron-right text-[9px] ml-0.5"></i>
                        </button>
                    </div>
                </article>
            `,
    )
    .join("");
}

function setCategory(category) {
  currentCategory = category;
  renderCategoryFilters();
  renderPosts();
}

function handleSearch(event) {
  searchQuery = event.target.value;
  renderPosts();
}

function resetFilters() {
  currentCategory = "All";
  searchQuery = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("mobileSearchInput").value = "";
  renderCategoryFilters();
  renderPosts();
}

function focusSearch() {
  const mobileContainer = document.getElementById("mobileSearchContainer");
  mobileContainer.classList.toggle("hidden");
  if (!mobileContainer.classList.contains("hidden")) {
    document.getElementById("mobileSearchInput").focus();
  }
}

function openArticle(id) {
  const article = articles.find((a) => a.id === id);
  if (!article) return;

  activeArticleId = id;
  document.getElementById("modalTitle").innerText = article.title;
  document.getElementById("modalCategory").innerText = article.category;
  document.getElementById("modalReadTime").innerText = article.readTime;
  document.getElementById("modalAuthorName").innerText = article.author.name;
  document.getElementById("modalAuthorImg").src = article.author.avatar;
  document.getElementById("modalDate").innerText = article.date;
  document.getElementById("modalImage").src = article.image;
  document.getElementById("modalBody").innerHTML = article.content;

  renderComments(article.comments);

  const modal = document.getElementById("articleModal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("articleModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  activeArticleId = null;
}

function renderComments(comments) {
  document.getElementById("commentCount").innerText = comments.length;
  const container = document.getElementById("commentsList");

  if (comments.length === 0) {
    container.innerHTML = `<p class="text-xs text-charcoal-700 dark:text-paper-300 italic">No notes contributed yet. Be the first to share your reflection.</p>`;
    return;
  }

  container.innerHTML = comments
    .map(
      (c) => `
                <div class="p-4 bg-paper-200/50 dark:bg-charcoal-950 border border-charcoal-900/10 dark:border-paper-100/10 space-y-1">
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-xs uppercase tracking-wider text-charcoal-900 dark:text-paper-100">${c.name}</span>
                        <span class="text-[10px] text-charcoal-700 dark:text-paper-300">${c.date}</span>
                    </div>
                    <p class="text-xs text-charcoal-800 dark:text-paper-200 leading-relaxed font-sans">${c.text}</p>
                </div>
            `,
    )
    .join("");
}

function postComment(event) {
  event.preventDefault();
  const nameInput = document.getElementById("commenterName");
  const textInput = document.getElementById("commentText");

  const article = articles.find((a) => a.id === activeArticleId);
  if (article) {
    article.comments.unshift({
      name: nameInput.value,
      text: textInput.value,
      date: "Just now",
    });
    renderComments(article.comments);
    nameInput.value = "";
    textInput.value = "";
  }
}

function shareArticle() {
  if (navigator.share) {
    navigator
      .share({
        title: document.getElementById("modalTitle").innerText,
        url: window.location.href,
      })
      .catch(() => {});
  } else {
    document.execCommand("copy");
    alert("Piece URL copied to clipboard.");
  }
}

function handleSubscribe(event) {
  event.preventDefault();
  const form = document.getElementById("subscribeForm");
  const success = document.getElementById("subscribeSuccess");

  form.reset();
  success.classList.remove("hidden");
  setTimeout(() => {
    success.classList.add("hidden");
  }, 5000);
}
