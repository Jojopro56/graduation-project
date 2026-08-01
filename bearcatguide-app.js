// ==========================================================================
// 1. ARTICLES & CONTENT ARCHITECTURE DATA
// Simply copy & paste a new object block here to add articles!
// ==========================================================================
const ARTICLES_DATA = [
    {
        id: "finals-week-paper-wave",
        title: "Finals Week vs. The Recycle Bins: The Story Behind That 857-Pound Paper Wave",
        category: "Campus News",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "Late collection data reveals how academic calendars shape our physical footprint. On Dec 9th, campus paper collection hit a peak of 857 pounds in a single day...",
        featured: true,
        image: "images/article-images/paper-disposal.png",
        video: null,
        content: `
            <p>If you want to see a reflection of student stress, look at campus waste records. Late semester collection data reveals how academic calendars shape our physical footprint.</p>
            <p>Paper recycling stays steady throughout the semester, but when late-night cramming and final cleanouts hit, collection numbers surge dramatically across residence halls and academic halls.</p>
            
            <!-- CUSTOM CODE GRAPH VISUALIZER -->
            <div class="stats-graph-container">
                <div class="graph-title">Late Semester Single-Day Paper Collection Spikes</div>
                <div class="graph-subtitle">Source: Northwest Campus Waste Metrics Log (Lbs of paper collected)</div>
                
                <div class="bar-chart-flex">
                    <div class="chart-bar-group">
                        <div class="bar-pill" style="height: 87%;">
                            <span class="bar-value-label">751 lbs</span>
                        </div>
                        <span class="chart-x-label">Dec 02</span>
                    </div>

                    <div class="chart-bar-group">
                        <div class="bar-pill peak" style="height: 100%;">
                            <span class="bar-value-label">857 lbs 🔥</span>
                        </div>
                        <span class="chart-x-label">Dec 09 (Peak!)</span>
                    </div>

                    <div class="chart-bar-group">
                        <div class="bar-pill" style="height: 60%;">
                            <span class="bar-value-label">515 lbs</span>
                        </div>
                        <span class="chart-x-label">Dec 11</span>
                    </div>
                </div>
            </div>

            <p>On December 2nd, campus paper collection jumped to 751 pounds in a single day. On December 9th, it hit a peak of 857 pounds, followed by another 515-pound wave on December 11th.</p>
            <blockquote>"These single-day spikes showcase hundreds of students purging old notebooks, study guides, and scratch paper."</blockquote>
            <p>Keeping food waste and trash out of paper recycling bins (the ones with blue lids) ensures these hundreds of pounds of study materials can successfully be recycled instead of being sent to landfill channels.</p>
        `
    },
    {
        id: "laundry-room-hoard",
        title: "The Great Laundry Room Hoard: Why We All Keep Our Empty Detergent Jugs Too Long",
        category: "Behind the Bins",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "Do empty laundry detergent jugs linger under your bed for weeks? Data metrics show this is a shared campus ritual...",
        featured: false,
        image: "images/article-images/detergent-jug.png",
        video: null,
        content: `
            <p>Do empty laundry detergent jugs linger under your bed for weeks? Data metrics show this is a shared campus ritual.</p>
            <p>In late semester tracking, plastic recycling averaged 15 to 30 pounds a day. But right before break, plastic collection jumped to 100 pounds on Friday, and 123 pounds on Monday!</p>

            <!-- CUSTOM CODE GRAPH VISUALIZER -->
            <div class="stats-graph-container">
                <div class="graph-title">Detergent & Rigid Plastic Hoarding Surge (Lbs)</div>
                <div class="graph-subtitle">Comparison of daily average vs. end-of-term dormitory cleanout days</div>
                
                <div class="bar-chart-flex">
                    <div class="chart-bar-group">
                        <div class="bar-pill" style="height: 22%; background: #555;">
                            <span class="bar-value-label">25 lbs</span>
                        </div>
                        <span class="chart-x-label">Daily Avg</span>
                    </div>

                    <div class="chart-bar-group">
                        <div class="bar-pill" style="height: 81%;">
                            <span class="bar-value-label">100 lbs</span>
                        </div>
                        <span class="chart-x-label">Fri Dec 05</span>
                    </div>

                    <div class="chart-bar-group">
                        <div class="bar-pill peak" style="height: 100%;">
                            <span class="bar-value-label">123 lbs 🚀</span>
                        </div>
                        <span class="chart-x-label">Mon Dec 08</span>
                    </div>
                </div>
            </div>

            <p>Because large detergent jugs take up space, students hoard them until a room cleanout day hits. Make sure detergent jugs are completely empty before recycling to prevent sticky liquid leaks!</p>
            <blockquote>"Pro-Tip: Rinsing the jug with a bit of water gets you another load or two of laundry while keeping the recycling stream clean!"</blockquote>
        `
    },
    {
        id: "iced-coffee-myth",
        title: "Wait, My Iced Coffee Cup Can't Be Recycled? The Ultimate Campus Myth, Debunked",
        category: "Myth-Busting",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "We've all been there. You finish a refreshing iced drink or a hot coffee on campus, look at the cup, and head straight for a recycling bin. But single-use drink cups hide a secret...",
        featured: false,
        image: "images/article-images/plastic-cup.png",
        video: null,
        content: `
            <p>We've all been there. You finish a refreshing iced drink or a hot coffee on campus, look at the cup in your hand, and naturally head straight for a recycling bin. It feels like the right thing to do! But single-use drink cups are hiding a design secret.</p>
            <p>Whether it's a paper, plastic, or Styrofoam cup, Northwest does not accept single-use drink cups for recycling. Plastic and Styrofoam cups are made of materials not accepted by local processing channels. Paper cups might seem recyclable, but they are manufactured with an inner plastic liner or wax coating to prevent leaks. Paper recyclers cannot separate this thin plastic lining from the paper during the pulping process, making paper cups and coated milk cartons destined for landfill trash cans.</p>
            <blockquote>"When well-intentioned 'wish-cycling' happens, non-recyclable cups contaminate the bin—often causing the entire load to end up in the landfill."</blockquote>
            <p>The easiest rule of thumb for your next drink run? Toss your single-use drink cups into the landfill trash, and save the recycling bins for empty plastic bottles, aluminum cans, and clean paper.</p>
        `
    },
    {
        id: "2am-dorm-dilemma",
        title: "The 2 AM Dorm Dilemma: The Science Behind Why That Walk to the Lobby Feels So Long",
        category: "Campus News",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "It's two o'clock in the morning in Franken Hall. You finished a bottle of water. You know the recycling hub is down the hall, but your desk trash can is right at your foot...",
        featured: false,
        image: "images/article-images/hallway-bins.png",
        video: null,
        content: `
            <p>It's two o'clock in the morning. You've been studying for hours, your brain is fried, and you just finished a bottle of water. You know the main recycling hub is down the hall in the floor lounge, but your desk trash can is right next to your foot.</p>
            <p>Don't worry, you aren't lazy—it's pure psychology. Behavioral scientists call this "proximity friction." When we experience high cognitive busyness or exhaustion—like during a heavy study session in Franken Hall or South Complex—our brains choose the path of least physical resistance. If a recycling station is further than a short walk away, convenience wins almost every time.</p>
            <p>To beat this late-night friction without leaving your room in your pajamas, try the "Dorm Hack." Grab an empty cardboard shipping box from your online orders, slide it next to your desk, and use it as a staging bin for clean bottles and cans. Once full, carry it down to the lounge on your regular walk to class.</p>
        `
    },
    {
        id: "unsung-heroes",
        title: "The Unsung Heroes Keeping Campus Running",
        category: "Behind the Bins",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "Talking to custodial team members like Ted and Jonathan reveals that our choices at the bin have a direct human impact...",
        featured: false,
        image: "images/article-images/gator.png",
        video: null,
        content: `
            <p>Every morning before most of campus is awake, members of Northwest's hardworking custodial team are on the move, ensuring our classrooms, residence halls, and common spaces stay clean.</p>
            <p>When rushing between classes, it's easy to view recycling as an abstract institutional rule. But talking to team members reveals that our choices at the bin have a direct human impact. When trash or non-recyclable items are thrown into recycling bins, custodians have to manually sort out the mistakes—or, more likely, the entire contaminated bin must be sent to the landfill.</p>
            <p>Taking three seconds to double-check our sorting at the bin isn't just following a rule; it actively respects the time and energy of the incredible people who keep our Bearcat community running smoothly every day.</p>
        `
    },
    {
        id: "energy-drink-danger",
        title: "How an Energy Drink Can Drown a Whole Recycling Batch",
        category: "Myth-Busting",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "We've all seen it: someone finishes most of an energy drink and drops the container right in. It seems fine, but unrinsed liquids create catastrophic problems...",
        featured: false,
        image: "images/menu-bgs/chap5.png",
        video: null,
        content: `
            <p>We've all seen it: someone finishes most of an energy drink or soda, walks up to a recycling bin, and drops the container right in. It seems fine since the container is recyclable, but unrinsed liquids create major issues.</p>
            <p>If a partially filled can or plastic bottle goes into a metal or plastic recycling bin, it creates a sticky, messy residue across every other item in the bin and inside the processing balers. Worse yet, if dropped into a paper bin, the liquid pools at the bottom, soaks into dry notebook paper, and permanently breaks down raw paper fibers. Soggy, sugary paper cannot be pulped down effectively.</p>
            <p>Pour out leftover liquids in a sink, grass patch, or liquid disposal station before dropping your container in the recycling bin to keep the rest of the batch clean!</p>
        `
    },
    {
        id: "pizza-paradox",
        title: "The Pizza Paradox: Which Half of the Box Actually Belongs in the Recycling?",
        category: "Myth-Busting",
        date: "July 2026",
        author: "Office of Sustainability",
        teaser: "Nothing fuels a study session like fresh pizza. But when it's time to tidy up, students face a riddle: Can a pizza box actually be recycled?",
        featured: false,
        image: "images/menu-bgs/chap4.png",
        video: null,
        content: `
            <p>Nothing fuels a late-night group study session like fresh pizza delivered to the dorm. But when it's time to tidy up, students face a riddle: Can a pizza box actually be recycled?</p>
            <p>The answer comes down to a fifty-fifty split! Clean cardboard is valuable to recycling centers, but cooking oil and grease create a major challenge during processing. Grease cannot be washed out of cardboard fibers, floating to the top during paper pulping and causing defects in the new material.</p>
            <p>Use the pizza box trick: tear the box right along the hinge! The top lid is almost always clean and dry, making it perfect for the paper recycling bin. The grease-stained bottom half belongs in the landfill bin.</p>
        `
    }
];

// ==========================================================================
// 2. MASTER SORTING DIRECTORY DATA
// ==========================================================================
const DIRECTORY_DATA = [
    {
        id: "water-bottle",
        name: "Plastic Water / Drink Bottles",
        status: "RECYCLE",
        material: "Plastic",
        bin: "Red-Lidded Recycling Bin",
        binColor: "red",
        guidance: "Ensure the bottle is completely empty first! Screw the cap on tightly so it isn't lost on the sorting line."
    },
    {
        id: "detergent-jug",
        name: "Heavy Laundry Detergent Jugs",
        status: "RECYCLE",
        material: "Plastic",
        bin: "Red-Lidded Recycling Bin",
        binColor: "red",
        guidance: "Recycle when empty and rinsed. Rinsing gets you another load of laundry and prevents sticky messes."
    },
    {
        id: "single-use-cups",
        name: "Single-Use Drink Cups (Paper, Plastic, Styrofoam)",
        status: "LANDFILL",
        material: "Wax/Plastic Liner or Styrofoam",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "Northwest does not accept plastic or Styrofoam cups. Paper cups contain a plastic liner paper recyclers cannot separate."
    },
    {
        id: "soda-can",
        name: "Aluminum Soda / Energy Drink Cans",
        status: "RECYCLE",
        material: "Aluminum / Metal Cans",
        bin: "Yellow-Lidded Recycling Bin",
        binColor: "yellow",
        guidance: "Must be completely empty! Partially filled cans create a sticky mess on all other cans in the bin and baler."
    },
    {
        id: "notebook-paper",
        name: "Clean Notebook Paper / Study Guides",
        status: "RECYCLE",
        material: "Paper",
        bin: "Blue-Lidded Recycling Bin",
        binColor: "blue",
        guidance: "Recyclable paper! Note: wet/greasy paper and used tissues must go in the landfill trash bin."
    },
    {
        id: "books-magazines",
        name: "Books, Magazines, & Newspapers",
        status: "RECYCLE",
        material: "Paper",
        bin: "Blue-Lidded Recycling Bin",
        binColor: "blue",
        guidance: "All books, magazines, and newspapers are recyclable (though paper fibers differ from high-value white office paper)."
    },
    {
        id: "pizza-box-top",
        name: "Clean Pizza Box Tops",
        status: "RECYCLE",
        material: "Cardboard / Paper",
        bin: "Blue-Lidded Recycling Bin",
        binColor: "blue",
        guidance: "Clean cardboard handles pulping perfectly; tear the clean top lid away along the box hinge."
    },
    {
        id: "pizza-box-bottom",
        name: "Greasy Pizza Box Bottoms",
        status: "LANDFILL",
        material: "Grease-Soaked Cardboard",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "Cooking oil and grease float to the top during paper pulping, causing major material defects."
    },
    {
        id: "shipping-box",
        name: "Amazon / Shipping Boxes",
        status: "RECYCLE",
        material: "Cardboard / Paper",
        bin: "Blue-Lidded Recycling Bin",
        binColor: "blue",
        guidance: "Must be flattened first! Great asset to upcycle as a deskside staging box to beat proximity friction."
    },
    {
        id: "shampoo-bottle",
        name: "Shampoo / Body Wash Bottles",
        status: "RECYCLE",
        material: "Plastic",
        bin: "Red-Lidded Recycling Bin",
        binColor: "red",
        guidance: "Give it a quick rinse in the sink before tossing to avoid sticky soap residue."
    },
    {
        id: "styrofoam-takeout",
        name: "Styrofoam Takeout Containers",
        status: "LANDFILL",
        material: "Expanded Polystyrene",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "Styrofoam is not accepted for recycling at Northwest; belongs strictly in the landfill trash."
    },
    {
        id: "plastic-utensils",
        name: "Plastic Straws & Utensils",
        status: "LANDFILL",
        material: "Rigid Low-Grade Plastic",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "Made of plastics not accepted for recycling at Northwest. They also fall through processing grates."
    },
    {
        id: "glass-bottles",
        name: "Glass Beverage Bottles",
        status: "RECYCLE",
        material: "Glass",
        bin: "Designated Campus Glass Collection Hub",
        binColor: "glass",
        guidance: "Recyclable at designated campus glass collection drop-off points."
    },
    {
        id: "snack-wrappers",
        name: "Potato Chip Bags / Snack Wrappers",
        status: "LANDFILL",
        material: "Foil-Plastic Film",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "Multi-layered crinkly packaging that cannot be separated by local processing lines."
    },
    {
        id: "milk-cartons",
        name: "Cardboard Juice / Milk Cartons",
        status: "LANDFILL",
        material: "Wax/Plastic-Coated Paper",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "The inner waterproof plastic/wax lining cannot be separated during standard paper pulping."
    },
    {
        id: "soup-cans",
        name: "Soup / Food Cans (Steel/Tin)",
        status: "RECYCLE",
        material: "Metal / Cans",
        bin: "Yellow-Lidded Recycling Bin",
        binColor: "yellow",
        guidance: "Quick rinse requested so processing teams can handle them cleanly."
    },
    {
        id: "coffee-sleeves",
        name: "Cardboard Coffee Cup Sleeves",
        status: "RECYCLE",
        material: "Paper",
        bin: "Blue-Lidded Recycling Bin",
        binColor: "blue",
        guidance: "100% unlined, dry kraft paper; safe for paper recycling even though the cup itself isn't!"
    },
    {
        id: "cup-lids",
        name: "Disposable Drink Cup Lids",
        status: "LANDFILL",
        material: "Rigid Plastic",
        bin: "Gray/Black Landfill Trash Bin",
        binColor: "gray",
        guidance: "Made of a plastic type not accepted for recycling at Northwest."
    }
];


// ==========================================================================
// 3. RUNTIME UI ENGINE & EVENT LISTENERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    const navTabs = document.querySelectorAll('.nav-tab');
    const pages = document.querySelectorAll('.guide-page');
    let previousPageId = 'page-home';

    function switchPage(targetPageId) {
        if (targetPageId !== 'page-article-reader') {
            previousPageId = targetPageId;
        }

        navTabs.forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-target') === targetPageId);
        });

        pages.forEach(page => {
            page.classList.toggle('active', page.id === targetPageId);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchPage(tab.getAttribute('data-target'));
        });
    });

    // CTA Button Links
    const shortcutCta = document.getElementById('shortcut-cta');
    if (shortcutCta) {
        shortcutCta.addEventListener('click', () => switchPage('page-directory'));
    }

    const viewAllArticlesBtn = document.getElementById('view-all-articles-btn');
    if (viewAllArticlesBtn) {
        viewAllArticlesBtn.addEventListener('click', () => switchPage('page-articles'));
    }

    // --- HOME PAGE RENDER ---
    function renderHomePage() {
        const featuredContainer = document.getElementById('featured-article-container');
        const homeGrid = document.getElementById('home-article-grid');

        const featured = ARTICLES_DATA.find(a => a.featured) || ARTICLES_DATA[0];
        const nonFeatured = ARTICLES_DATA.filter(a => a.id !== featured.id).slice(0, 3);

        if (featuredContainer && featured) {
            featuredContainer.innerHTML = `
                <div class="featured-card" data-article-id="${featured.id}">
                    <div class="featured-img-frame" style="background-image: url('${featured.image}');"></div>
                    <div class="featured-content">
                        <span class="article-category-tag">${featured.category}</span>
                        <h3>${featured.title}</h3>
                        <p>${featured.teaser}</p>
                        <div class="article-meta">${featured.date} • By ${featured.author}</div>
                    </div>
                </div>
            `;
        }

        if (homeGrid) {
            homeGrid.innerHTML = nonFeatured.map(article => `
                <div class="article-card" data-article-id="${article.id}">
                    <div class="article-thumb" style="background-image: url('${article.image}');">
                        ${article.video ? '<span class="play-badge">▶ VIDEO</span>' : ''}
                    </div>
                    <div class="article-card-body">
                        <div>
                            <span class="article-category-tag">${article.category}</span>
                            <h4>${article.title}</h4>
                            <p>${article.teaser}</p>
                        </div>
                        <div class="article-meta">${article.date}</div>
                    </div>
                </div>
            `).join('');
        }

        attachArticleClickHandlers();
    }

    // --- ARTICLES FEED RENDER & FILTERS ---
    let currentCategoryFilter = 'All';

    function renderArticlesFeed() {
        const feedGrid = document.getElementById('articles-feed-grid');
        if (!feedGrid) return;

        const filtered = currentCategoryFilter === 'All' 
            ? ARTICLES_DATA 
            : ARTICLES_DATA.filter(a => a.category === currentCategoryFilter);

        feedGrid.innerHTML = filtered.map(article => `
            <div class="article-card" data-article-id="${article.id}">
                <div class="article-thumb" style="background-image: url('${article.image}');">
                    ${article.video ? '<span class="play-badge">▶ VIDEO</span>' : ''}
                </div>
                <div class="article-card-body">
                    <div>
                        <span class="article-category-tag">${article.category}</span>
                        <h4>${article.title}</h4>
                        <p>${article.teaser}</p>
                    </div>
                    <div class="article-meta">${article.date} • ${article.author}</div>
                </div>
            </div>
        `).join('');

        attachArticleClickHandlers();
    }

    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategoryFilter = tab.getAttribute('data-category');
            renderArticlesFeed();
        });
    });

    // --- FULL PAGE ARTICLE READER ENGINE ---
    const articleBody = document.getElementById('full-article-body');
    const categoryTag = document.getElementById('reader-category-tag');
    const articleBackBtn = document.getElementById('article-back-btn');

    function openFullArticle(articleId) {
        const article = ARTICLES_DATA.find(a => a.id === articleId);
        if (!article || !articleBody) return;

        if (categoryTag) categoryTag.innerText = article.category;

        articleBody.innerHTML = `
            <div class="reader-header">
                <span class="article-category-tag">${article.category}</span>
                <h1 style="font-size: 2.4rem; margin: 10px 0 15px 0; line-height: 1.25;">${article.title}</h1>
                <div class="article-meta" style="margin-bottom: 25px;">Published ${article.date} • Written by ${article.author}</div>
            </div>
            
            <img src="${article.image}" alt="${article.title}" class="article-hero-img">

            ${article.video ? `
                <div class="reader-video-wrapper">
                    <video src="${article.video}" controls autoplay loop muted playsinline></video>
                </div>
            ` : ''}

            <div class="reader-body">
                ${article.content}
            </div>
        `;

        switchPage('page-article-reader');
    }

    function attachArticleClickHandlers() {
        document.querySelectorAll('[data-article-id]').forEach(card => {
            card.removeEventListener('click', handleArticleClick);
            card.addEventListener('click', handleArticleClick);
        });
    }

    function handleArticleClick(e) {
        const id = e.currentTarget.getAttribute('data-article-id');
        openFullArticle(id);
    }

    if (articleBackBtn) {
        articleBackBtn.addEventListener('click', () => {
            switchPage(previousPageId || 'page-articles');
        });
    }

    // --- DIRECTORY RENDER, SEARCH & BIN FILTERS ---
    let directorySearchQuery = '';
    let selectedBinColor = 'all';

    function renderDirectory() {
        const grid = document.getElementById('directory-grid');
        if (!grid) return;

        let filtered = DIRECTORY_DATA.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(directorySearchQuery.toLowerCase()) ||
                                  item.material.toLowerCase().includes(directorySearchQuery.toLowerCase());
            const matchesBin = selectedBinColor === 'all' || item.binColor === selectedBinColor;
            return matchesSearch && matchesBin;
        });

        grid.innerHTML = filtered.map(item => `
            <div class="item-card" data-item-id="${item.id}">
                <div>
                    <div class="item-header">
                        <h3 class="item-title">${item.name}</h3>
                        <span class="status-badge ${item.status}">${item.status}</span>
                    </div>
                    <div class="item-bin-target">Target: ${item.bin}</div>
                </div>
                <p class="item-guidance-snippet">${item.guidance}</p>
            </div>
        `).join('');

        attachItemClickHandlers();
    }

    const searchInput = document.getElementById('directory-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            directorySearchQuery = e.target.value;
            renderDirectory();
        });
    }

    const binChips = document.querySelectorAll('.bin-chip');
    binChips.forEach(chip => {
        chip.addEventListener('click', () => {
            binChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            selectedBinColor = chip.getAttribute('data-bin');
            renderDirectory();
        });
    });

    // --- ITEM DETAIL MODAL (FOR DIRECTORY ITEMS) ---
    const itemModal = document.getElementById('item-modal');
    const itemModalBody = document.getElementById('item-modal-body');
    const itemModalClose = document.getElementById('item-modal-close');

    function openItemModal(itemId) {
        const item = DIRECTORY_DATA.find(i => i.id === itemId);
        if (!item || !itemModal || !itemModalBody) return;

        itemModalBody.innerHTML = `
            <div class="item-modal-header">
                <h2>${item.name}</h2>
                <span class="status-badge ${item.status}">${item.status}</span>
            </div>
            <div class="bin-callout-box">
                <strong>Correct Disposal Target:</strong> ${item.bin}<br>
                <strong>Material Classification:</strong> ${item.material}
            </div>
            <div class="reader-body">
                <h3>Sorting Guidance & Context</h3>
                <p>${item.guidance}</p>
            </div>
        `;

        itemModal.classList.add('active');
    }

    function attachItemClickHandlers() {
        document.querySelectorAll('[data-item-id]').forEach(card => {
            card.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-item-id');
                openItemModal(id);
            });
        });
    }

    if (itemModalClose) {
        itemModalClose.addEventListener('click', () => itemModal.classList.remove('active'));
    }

    // --- FAQ ACCORDION ---
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });

    // Global Modal Backdrop Click Close
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', () => {
            if (itemModal) itemModal.classList.remove('active');
        });
    });

    // INITIAL RENDER RUNS
    renderHomePage();
    renderArticlesFeed();
    renderDirectory();
});