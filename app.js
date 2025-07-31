// Paradise Bakes & Cafe Training App - Fixed Navigation & Functionality

class ParadiseCafeApp {
    constructor() {
        this.currentSection = 'home';
        this.currentRecipeCategory = 'pizza';
        this.currentMaintenancePeriod = 'daily';
        this.currentSafetyTab = 'personal';
        this.activeTimers = new Map();
        this.timerIdCounter = 0;
        this.isInitialized = false;
        this.currentTheme = 'light';
        this.emergencyBannerVisible = false;
        
        // In-memory checkbox states (no localStorage per strict instructions)
        this.checkboxStates = new Map();
        
        // Complete application data with all 9 equipment items
        this.appData = {
            recipes: [
                {
                    "id": "pizza_margherita",
                    "name": "Margherita Pizza",
                    "category": "Pizza",
                    "type": "Classic",
                    "sizes": ["7\"", "10\""],
                    "ingredients": ["1 pizza base", "50g tomato sauce", "100g mozzarella", "Fresh basil 5 leaves", "1 tsp olive oil", "Salt pinch", "Oregano pinch"],
                    "steps": ["Oven ko 250°C par preheat karo (10 minutes)", "Pizza base par tomato sauce evenly spread karo", "Mozzarella cheese uniformly dal ke basil leaves arrange karo", "Drizzle olive oil aur oregano sprinkle karo", "250°C par 8–10 minutes bake karo jab tak cheese melt aur edges golden ho", "Slice karke garma garam serve karo"],
                    "tips": ["Fresh basil se flavour enhance hota hai", "Pre-bake base 2 min for extra crisp"],
                    "equipment": ["Commercial Electric Pizza Oven"],
                    "cookTimeMin": 10,
                    "tempC": 250,
                    "costINR": 70,
                    "storage": "Leftover slices 4°C par 12 ghante tak",
                    "reheat": "200°C par 3 min"
                },
                {
                    "id": "pizza_peppy_paneer",
                    "name": "Peppy Paneer Pizza",
                    "category": "Pizza",
                    "type": "Spicy",
                    "sizes": ["7\"", "10\""],
                    "ingredients": ["Pizza base", "60g schezwan sauce", "120g paneer cubes (marinated)", "Mixed capsicum juliennes", "Onion rings", "Mozzarella 100g"],
                    "steps": ["Base par schezwan sauce lagao", "Mozzarella sprinkle karo", "Paneer cubes aur veggies spread karo", "250°C par 9–11 min bake karo"],
                    "tips": ["Paneer ko 30 min pehle marinate karo"],
                    "equipment": ["Commercial Electric Pizza Oven"],
                    "cookTimeMin": 11,
                    "tempC": 250,
                    "costINR": 85
                },
                {
                    "id": "pizza_farmhouse",
                    "name": "Farmhouse Pizza",
                    "category": "Pizza",
                    "type": "Veggie Loaded",
                    "sizes": ["7\"", "10\""],
                    "ingredients": ["Pizza base", "Herbed tomato sauce", "Mushrooms", "Onions", "Capsicum", "Corn", "Mozzarella cheese"],
                    "steps": ["Base par sauce spread karo", "Saari veggies evenly arrange karo", "Cheese generously sprinkle karo", "250°C par 8-9 min bake karo"],
                    "tips": ["Veggies ko pre-cook mat karo, pizza me pakenge", "Extra cheese for better pull"],
                    "equipment": ["Commercial Electric Pizza Oven"],
                    "cookTimeMin": 9,
                    "tempC": 250,
                    "costINR": 95
                },
                {
                    "id": "burger_aloo_tikki",
                    "name": "Classic Aloo Tikki Burger",
                    "category": "Burger",
                    "type": "Street Style",
                    "ingredients": ["Burger bun", "120g aloo tikki", "20g mayo", "Lettuce", "Tomato slice", "Cheese slice"],
                    "steps": ["Tikki ko 180°C fryer me 3-4 min fry karo", "Bun ko light toast karo", "Mayo spread karo, lettuce, tikki, cheese, tomato assemble karo"],
                    "tips": ["Tikki ko fry karte waqt oil 180°C par maintain karo"],
                    "equipment": ["Commercial Electric Deep Fryer", "Commercial Electric Sandwich Maker"],
                    "cookTimeMin": 6,
                    "tempC": 180,
                    "costINR": 45
                },
                {
                    "id": "burger_paneer_tikka",
                    "name": "Paneer Tikka Burger",
                    "category": "Burger",
                    "type": "Grilled",
                    "ingredients": ["Bun", "Grilled paneer tikka 100g", "Mint mayo", "Onion rings", "Tomato", "Lettuce"],
                    "steps": ["Paneer tikka ko grill karo", "Bun toast karo", "Mint mayo spread karo", "Assemble all ingredients", "Serve hot with fries"],
                    "tips": ["Paneer ko 4 hours marinate karo for best flavour"],
                    "equipment": ["Commercial Electric Grill", "Commercial Electric Sandwich Maker"],
                    "cookTimeMin": 8,
                    "tempC": 200,
                    "costINR": 65
                },
                {
                    "id": "burger_veg_deluxe",
                    "name": "Veg Deluxe Burger",
                    "category": "Burger",
                    "type": "Premium",
                    "ingredients": ["Premium bun", "Veg patty", "Cheese slice", "Lettuce", "Tomato", "Cucumber", "Special sauce"],
                    "steps": ["Patty fry karke cheese melt karo", "Bun toast karo", "Sauce spread karo", "Layer wise assemble karo"],
                    "tips": ["Premium bun ka texture maintain karo", "Sauce ko homemade banao"],
                    "equipment": ["Commercial Electric Deep Fryer"],
                    "cookTimeMin": 7,
                    "tempC": 180,
                    "costINR": 75
                },
                {
                    "id": "sandwich_bombay_grill",
                    "name": "Bombay Grill Sandwich",
                    "category": "Sandwich",
                    "type": "Grilled",
                    "ingredients": ["Bread slices 3", "Chutney 2 tbsp", "Boiled potato slices", "Beetroot slices", "Tomato", "Cucumber", "Onion", "Cheese grated 40g", "Chaat masala"],
                    "steps": ["Bread par chutney spread karo", "Potato, beetroot, veggies layer karo", "Cheese sprinkle karo, chaat masala dust karo", "Sandwich maker me 4-5 min grill karo"],
                    "tips": ["Veggies ko evenly slice karo uniform grilling ke liye"],
                    "equipment": ["Commercial Electric Sandwich Maker"],
                    "cookTimeMin": 5,
                    "tempC": 200,
                    "costINR": 35
                },
                {
                    "id": "sandwich_cheese_corn",
                    "name": "Cheese Corn Sandwich",
                    "category": "Sandwich",
                    "type": "Cheesy",
                    "ingredients": ["Bread", "Sweet corn", "Cheese grated", "Mayo", "Butter", "Black pepper"],
                    "steps": ["Corn aur cheese mix karo mayo ke saath", "Bread par filling spread karo", "Butter lagake grill karo", "Golden brown tak cook karo"],
                    "tips": ["Corn boiled aur drained hona chahiye", "Extra cheese for stretchy pull"],
                    "equipment": ["Commercial Electric Sandwich Maker"],
                    "cookTimeMin": 4,
                    "tempC": 180,
                    "costINR": 40
                },
                {
                    "id": "sandwich_veg_club",
                    "name": "Veg Club Sandwich",
                    "category": "Sandwich",
                    "type": "Multi-layer",
                    "ingredients": ["Bread 3 slices", "Lettuce", "Tomato", "Cucumber", "Cheese", "Mayo", "Mustard sauce"],
                    "steps": ["3 layer sandwich banao", "Each layer me different veggies use karo", "Toothpick se secure karo", "Triangular cut karo"],
                    "tips": ["Bread ko lightly toast karo before assembly", "Presentation ke liye colorful veggies use karo"],
                    "equipment": ["Commercial Electric Sandwich Maker"],
                    "cookTimeMin": 6,
                    "tempC": 160,
                    "costINR": 50
                }
            ],
            equipment: [
                {
                    "id": "equip_pizza_oven",
                    "name": "Commercial Electric Pizza Oven",
                    "capacity": "4 pizzas",
                    "maxTempC": 300,
                    "power": "15 kW",
                    "dailyCleaning": ["Oven cool hone ke baad racks nikaal ke wipe karo", "Interior ko damp cloth se saaf karo", "Crumb tray empty karo"],
                    "weeklyMaintenance": ["Thermostat calibration check karo", "Door seals inspect karo", "Heating elements clean karo"],
                    "monthlyMaintenance": ["Professional deep cleaning", "Electrical connections check", "Temperature probe calibration"],
                    "operatingSteps": ["Power on aur preheat karo desired temp tak", "Pizza stone par base place karo", "Timer set karo recipe ke according", "Temperature monitor karo cooking ke dauran"],
                    "safetyNotes": ["Heat-proof gloves mandatory", "Door achanak open na karo", "High voltage - trained staff only", "Emergency stop button location yaad rakho"]
                },
                {
                    "id": "equip_deep_fryer",
                    "name": "Commercial Electric Deep Fryer",
                    "capacity": "20L oil",
                    "maxTempC": 200,
                    "power": "12 kW",
                    "dailyCleaning": ["Oil filter karo daily", "Basket clean karo", "Exterior wipe down"],
                    "weeklyMaintenance": ["Oil change karo", "Heating element inspect", "Drain valve check"],
                    "monthlyMaintenance": ["Complete oil system flush", "Thermostat calibration", "Safety systems test"],
                    "operatingSteps": ["Oil level check karo", "Desired temperature set karo", "Basket me food load karo carefully", "Timer set karo"],
                    "safetyNotes": ["Oil splashing se bachke", "Basket slowly lower karo", "Fire extinguisher nearby rakho", "Wet hands se operate na karo"]
                },
                {
                    "id": "equip_sandwich_maker",
                    "name": "Commercial Electric Sandwich Maker",
                    "capacity": "4 sandwiches",
                    "power": "3 kW",
                    "dailyCleaning": ["Plates cool hone par wipe karo", "Non-stick coating protect karo", "Drip tray clean karo"],
                    "weeklyMaintenance": ["Hinge lubrication", "Cord inspection", "Non-stick coating check"],
                    "monthlyMaintenance": ["Deep clean with approved cleaners", "Electrical safety check", "Replace worn parts"],
                    "operatingSteps": ["Preheat green light aane tak", "Butter/oil apply karo plates par", "Sandwich place karo evenly", "Lid close karke press karo gently"],
                    "safetyNotes": ["Hot surfaces se bachke", "Steam escape hone de", "Metal utensils use na karo non-stick par"]
                },
                {
                    "id": "equip_electric_grill",
                    "name": "Commercial Electric Grill",
                    "capacity": "8 patties",
                    "maxTempC": 250,
                    "power": "8 kW",
                    "dailyCleaning": ["Grill plates scrape aur clean karo", "Grease tray empty karo", "Exterior surfaces wipe"],
                    "weeklyMaintenance": ["Heating elements inspect", "Temperature controls check", "Grease management system clean"],
                    "monthlyMaintenance": ["Deep descaling", "Electrical connections audit", "Calibrate temperature sensors"],
                    "operatingSteps": ["Preheat to desired temperature", "Oil/butter lightly brush karo", "Food items place evenly", "Flip halfway through cooking"],
                    "safetyNotes": ["Grill surfaces extremely hot", "Use proper tongs only", "Avoid water on hot grill", "Ventilation adequate rakho"]
                },
                {
                    "id": "equip_dough_mixer",
                    "name": "Commercial Dough Mixer",
                    "capacity": "20kg dough",
                    "power": "5 kW",
                    "dailyCleaning": ["Bowl aur attachments thoroughly wash", "Motor housing wipe down", "Dough residue completely remove"],
                    "weeklyMaintenance": ["Lubricate moving parts", "Check belt tension", "Inspect dough hook"],
                    "monthlyMaintenance": ["Motor service check", "Electrical safety audit", "Replace worn attachments"],
                    "operatingSteps": ["Flour aur ingredients bowl me add", "Speed setting appropriate choose", "Mixing time according to recipe", "Stop aur check dough consistency"],
                    "safetyNotes": ["Never put hands in moving bowl", "Emergency stop accessible", "Secure attachments properly", "Overloading se avoid karo"]
                },
                {
                    "id": "equip_refrigerator",
                    "name": "Commercial Walk-in Refrigerator",
                    "capacity": "500L storage",
                    "tempRange": "2-8°C",
                    "power": "6 kW",
                    "dailyCleaning": ["Temperature log maintain", "Spills immediately clean", "Door seals check"],
                    "weeklyMaintenance": ["Coils clean karo", "Drain lines check", "Interior deep clean"],
                    "monthlyMaintenance": ["Compressor service", "Refrigerant levels check", "Temperature calibration"],
                    "operatingSteps": ["Door properly close ensure", "Temperature range maintain", "Air circulation maintain", "FIFO principle follow"],
                    "safetyNotes": ["Door lock mechanism check", "Emergency release inside", "Temperature alarms working", "Proper ventilation ensure"]
                },
                {
                    "id": "equip_exhaust_system",
                    "name": "Kitchen Exhaust System",
                    "capacity": "2000 CFM",
                    "power": "4 kW",
                    "dailyCleaning": ["Grease filters clean", "Exterior surfaces wipe", "Check airflow"],
                    "weeklyMaintenance": ["Ductwork inspection", "Fan blades clean", "Motor lubrication"],
                    "monthlyMaintenance": ["Professional duct cleaning", "Fire suppression system check", "Motor service"],
                    "operatingSteps": ["System start before cooking", "Adjust speed as needed", "Run after cooking complete", "Regular filter change"],
                    "safetyNotes": ["Fire suppression system ready", "Emergency shut-off accessible", "Electrical connections secure", "Regular fire safety inspection"]
                },
                {
                    "id": "equip_coffee_machine",
                    "name": "Commercial Coffee Machine",
                    "capacity": "50 cups/hour",
                    "power": "2.5 kW",
                    "dailyCleaning": ["Water reservoir refill", "Coffee grounds empty", "Steam wand clean"],
                    "weeklyMaintenance": ["Descaling process", "Water filter replace", "Brewing chamber clean"],
                    "monthlyMaintenance": ["Internal component service", "Pressure settings check", "Electrical audit"],
                    "operatingSteps": ["Water level check", "Coffee beans load", "Cup size select", "Brewing cycle start"],
                    "safetyNotes": ["Hot water/steam caution", "Pressure release proper", "Electrical safety check", "Regular maintenance critical"]
                },
                {
                    "id": "equip_dishwasher",
                    "name": "Commercial Dishwasher",
                    "capacity": "60 racks/hour",
                    "power": "10 kW",
                    "dailyCleaning": ["Wash arms clean", "Filter remove aur rinse", "Interior surfaces clean"],
                    "weeklyMaintenance": ["Chemical levels check", "Spray nozzles clean", "Door seals inspect"],
                    "monthlyMaintenance": ["Pump system service", "Heating element check", "Control panel audit"],
                    "operatingSteps": ["Pre-rinse dishes", "Load racks properly", "Select appropriate cycle", "Check final rinse temperature"],
                    "safetyNotes": ["Chemical handling proper", "Hot water/steam risk", "Electrical safety priority", "Proper ventilation needed"]
                }
            ],
            safety: {
                "personal": ["40-60 second hand washing with soap", "Clean uniform & apron daily", "Hair net mandatory at all times", "No jewelry except plain wedding ring", "Trim nails weekly", "No strong perfumes/colognes"],
                "kitchen": ["Daily floor mopping with sanitizer", "Colour-coded chopping boards - follow system", "Sanitize surfaces every 2 hours", "Clean as you go policy", "Separate raw and cooked food prep areas"],
                "food": ["Hot food >63°C always", "Cold food <5°C storage", "Label all containers with date/time", "FIFO - First In First Out rotation", "Check expiry dates every shift"],
                "haccp": ["Identify CCP for frying at 180°C", "Record oil temp hourly", "Document all temperature logs", "Monitor critical control points", "Corrective action protocols"]
            },
            maintenance: {
                "daily": ["Wipe all stainless steel surfaces", "Check fridge/freezer temps and log", "Filter fryer oil and check quality", "Clean coffee machine", "Sanitize food contact surfaces", "Empty trash and replace liners"],
                "weekly": ["Deep clean pizza oven interior", "Lubricate sandwich maker hinges", "Descale coffee machine", "Clean exhaust filters", "Deep mop floors with disinfectant", "Check first aid kit supplies"],
                "monthly": ["Calibrate all thermometers", "Service dough mixer motor", "Professional pest control inspection", "Deep clean refrigeration coils", "Test emergency equipment", "Update training records"]
            },
            emergency: {
                "fire": ["Turn off main gas/electric supply immediately", "Use Class K fire extinguisher for kitchen fires", "Evacuate via nearest exit (back door preferred)", "Call 101 fire department", "Do not use water on oil fires", "Account for all staff at meeting point"],
                "electrical": ["Switch off main circuit breaker", "Do not touch live wires or equipment", "Call qualified electrician immediately", "Isolate affected area", "Use wooden/plastic tools only", "Report to management"],
                "medical": ["Apply first aid if trained", "Call 108 for ambulance", "Do not move injured person unless necessary", "Record incident details", "Keep first aid kit stocked", "Know location of nearest hospital"],
                "equipment": ["Immediately unplug faulty unit", "Tag equipment 'OUT OF SERVICE'", "Remove from food prep area", "Call authorized service technician", "Document fault details", "Use backup equipment if available"]
            }
        };
        
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApp();
            });
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        console.log('🌴 Setting up Paradise Cafe Professional Training App...');
        
        setTimeout(() => {
            this.setupNavigation();
            this.setupRecipeSystem();
            this.setupEquipmentAccordion();
            this.setupSafetySystem();
            this.setupBulkPrep();
            this.setupMaintenance();
            this.setupEmergency();
            this.setupUtilityPanel();
            this.setupThemeToggle();
            this.setupEmergencyBanner();
            this.setupScrollToTop();
            this.setupPWA();
            this.initializeDefaultStates();
            this.isInitialized = true;
            
            console.log('✅ Paradise Bakes & Cafe Training App fully initialized');
        }, 300);
    }

    initializeDefaultStates() {
        this.showSection('home');
        this.showRecipeCategory('pizza');
        this.showMaintenancePeriod('daily');
        this.showSafetyTab('personal');
        this.updateRecipeSelects();
    }

    setupNavigation() {
        console.log('Setting up navigation system...');
        
        // Fixed navigation event handlers
        document.addEventListener('click', (e) => {
            // Main navigation buttons
            if (e.target.matches('.nav-btn[data-section]') || e.target.closest('.nav-btn[data-section]')) {
                e.preventDefault();
                e.stopPropagation();
                const btn = e.target.matches('.nav-btn[data-section]') ? e.target : e.target.closest('.nav-btn[data-section]');
                const targetSection = btn.getAttribute('data-section');
                console.log('Navigation clicked:', targetSection);
                this.showSection(targetSection);
                return;
            }
            
            // Quick access buttons
            if (e.target.matches('.quick-btn[data-target]') || e.target.closest('.quick-btn[data-target]')) {
                e.preventDefault();
                e.stopPropagation();
                const btn = e.target.matches('.quick-btn[data-target]') ? e.target : e.target.closest('.quick-btn[data-target]');
                const target = btn.getAttribute('data-target');
                console.log('Quick access clicked:', target);
                this.showSection(target);
                return;
            }
        });
        
        console.log('Navigation system ready');
    }

    showSection(sectionId) {
        console.log('Showing section:', sectionId);
        
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            console.log('Section displayed:', sectionId);
        } else {
            console.error('Section not found:', sectionId);
        }
        
        // Update navigation active state
        const navButtons = document.querySelectorAll('.nav-btn[data-section]');
        navButtons.forEach(btn => {
            if (btn.getAttribute('data-section') === sectionId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        this.currentSection = sectionId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setupRecipeSystem() {
        this.populateRecipes();
        this.setupRecipeCategories();
        this.setupRecipeSearch();
        this.setupRecipeModal();
    }

    populateRecipes() {
        const pizzaGrid = document.getElementById('pizza-recipes-grid');
        const burgerGrid = document.getElementById('burger-recipes-grid');
        const sandwichGrid = document.getElementById('sandwich-recipes-grid');
        
        if (pizzaGrid) {
            pizzaGrid.innerHTML = this.appData.recipes
                .filter(recipe => recipe.category === 'Pizza')
                .map(recipe => this.createRecipeCard(recipe))
                .join('');
        }
        
        if (burgerGrid) {
            burgerGrid.innerHTML = this.appData.recipes
                .filter(recipe => recipe.category === 'Burger')
                .map(recipe => this.createRecipeCard(recipe))
                .join('');
        }
        
        if (sandwichGrid) {
            sandwichGrid.innerHTML = this.appData.recipes
                .filter(recipe => recipe.category === 'Sandwich')
                .map(recipe => this.createRecipeCard(recipe))
                .join('');
        }
    }

    createRecipeCard(recipe) {
        const sizeDisplay = recipe.sizes ? recipe.sizes.join(' | ') : '';
        const cookTime = recipe.cookTimeMin ? `${recipe.cookTimeMin} min` : 'Variable';
        const cost = recipe.costINR ? `₹${recipe.costINR}` : 'Cost varies';
        
        return `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <h4>${recipe.name}</h4>
                <div class="recipe-meta">
                    <span class="recipe-type">${recipe.type}</span>
                    ${sizeDisplay ? `<span class="recipe-sizes">${sizeDisplay}</span>` : ''}
                </div>
                <div class="recipe-preview">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.slice(0, 3).join(', ')}...</p>
                    <p><strong>Cook Time:</strong> ${cookTime} | <strong>Cost:</strong> ${cost}</p>
                    <p><em>Click for full recipe with Hinglish steps</em></p>
                </div>
            </div>
        `;
    }

    setupRecipeCategories() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.category-btn[data-category]') || e.target.closest('.category-btn[data-category]')) {
                e.preventDefault();
                const btn = e.target.matches('.category-btn[data-category]') ? e.target : e.target.closest('.category-btn[data-category]');
                const targetCategory = btn.getAttribute('data-category');
                this.showRecipeCategory(targetCategory);
            }
        });
    }

    showRecipeCategory(categoryId) {
        const categoryButtons = document.querySelectorAll('.category-btn[data-category]');
        const recipeSections = document.querySelectorAll('.recipe-section');
        
        categoryButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === categoryId);
        });
        
        recipeSections.forEach(section => {
            if (section.id === `${categoryId}-recipes`) {
                section.style.display = 'block';
                section.classList.add('active');
            } else {
                section.style.display = 'none';
                section.classList.remove('active');
            }
        });
        
        this.currentRecipeCategory = categoryId;
    }

    setupRecipeSearch() {
        const searchInput = document.getElementById('recipe-search-input');
        const filterSelect = document.getElementById('recipe-filter');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterRecipes());
        }
        
        if (filterSelect) {
            filterSelect.addEventListener('change', () => this.filterRecipes());
        }
    }

    filterRecipes() {
        const searchTerm = document.getElementById('recipe-search-input')?.value.toLowerCase() || '';
        const filterType = document.getElementById('recipe-filter')?.value || '';
        const activeGrid = document.querySelector('.recipe-section.active .recipes-grid');
        
        if (!activeGrid) return;
        
        const recipeCards = activeGrid.querySelectorAll('.recipe-card');
        
        recipeCards.forEach(card => {
            const recipeName = card.querySelector('h4').textContent.toLowerCase();
            const recipeType = card.querySelector('.recipe-type').textContent;
            
            const matchesSearch = recipeName.includes(searchTerm);
            const matchesFilter = !filterType || recipeType === filterType;
            
            card.style.display = matchesSearch && matchesFilter ? 'block' : 'none';
        });
    }

    setupRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        const closeBtn = modal?.querySelector('.close');
        
        document.addEventListener('click', (e) => {
            if (e.target.matches('.recipe-card') || e.target.closest('.recipe-card')) {
                e.preventDefault();
                const card = e.target.matches('.recipe-card') ? e.target : e.target.closest('.recipe-card');
                const recipeId = card.getAttribute('data-recipe-id');
                this.showRecipeModal(recipeId);
            }
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('hidden');
            });
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    }

    showRecipeModal(recipeId) {
        const recipe = this.appData.recipes.find(r => r.id === recipeId);
        const modal = document.getElementById('recipe-modal');
        const modalContent = document.getElementById('recipe-modal-content');
        
        if (!recipe || !modal || !modalContent) return;
        
        const sizeDisplay = recipe.sizes ? recipe.sizes.join(' | ') : '';
        const equipment = recipe.equipment ? recipe.equipment.join(', ') : 'Standard kitchen equipment';
        const cookTime = recipe.cookTimeMin ? `${recipe.cookTimeMin} minutes` : 'Variable';
        const temp = recipe.tempC ? `${recipe.tempC}°C` : 'As needed';
        const cost = recipe.costINR ? `₹${recipe.costINR}` : 'Cost varies';
        
        modalContent.innerHTML = `
            <div class="recipe-modal-header">
                <h3>${recipe.name}</h3>
                <div class="recipe-modal-meta">
                    <span class="recipe-type">${recipe.type}</span>
                    ${sizeDisplay ? `<span class="recipe-sizes">${sizeDisplay}</span>` : ''}
                    <span class="recipe-cost">${cost}</span>
                </div>
            </div>
            
            <div class="recipe-modal-section">
                <h4>🛒 Ingredients</h4>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            
            <div class="recipe-modal-section">
                <h4>👨‍🍳 Method (Hinglish Steps)</h4>
                <ol>
                    ${recipe.steps.map((step, index) => `<li><strong>Step ${index + 1}:</strong> ${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="recipe-modal-section">
                <h4>💡 Chef Tips</h4>
                <div class="chef-tips">
                    ${Array.isArray(recipe.tips) ? recipe.tips.map(tip => `<p>• ${tip}</p>`).join('') : `<p>• ${recipe.tips}</p>`}
                </div>
            </div>
            
            <div class="recipe-modal-section">
                <h4>📋 Equipment & Details</h4>
                <p><strong>Equipment:</strong> ${equipment}</p>
                <p><strong>Cooking Time:</strong> ${cookTime}</p>
                <p><strong>Temperature:</strong> ${temp}</p>
                ${recipe.storage ? `<p><strong>Storage:</strong> ${recipe.storage}</p>` : ''}
                ${recipe.reheat ? `<p><strong>Reheating:</strong> ${recipe.reheat}</p>` : ''}
            </div>
        `;
        
        modal.classList.remove('hidden');
    }

    setupEquipmentAccordion() {
        const accordion = document.getElementById('equipment-accordion');
        if (!accordion) return;
        
        accordion.innerHTML = this.appData.equipment.map((item, index) => `
            <div class="equipment-item">
                <div class="equipment-header" data-equipment="${index}">
                    <div>
                        <h3>${item.name}</h3>
                        <div class="equipment-specs">
                            ${item.capacity ? `<span class="spec">Capacity: ${item.capacity}</span>` : ''}
                            ${item.maxTempC ? `<span class="spec">Max Temp: ${item.maxTempC}°C</span>` : ''}
                            ${item.power ? `<span class="spec">Power: ${item.power}</span>` : ''}
                            ${item.tempRange ? `<span class="spec">Temp Range: ${item.tempRange}</span>` : ''}
                        </div>
                    </div>
                    <span class="accordion-arrow">▼</span>
                </div>
                <div class="equipment-content" id="content-${index}">
                    <div class="equipment-detail">
                        <h4>📋 Operating Instructions</h4>
                        <ol>
                            ${item.operatingSteps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="equipment-detail">
                        <h4>🧹 Daily Maintenance</h4>
                        <ul>
                            ${item.dailyCleaning.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="equipment-detail">
                        <h4>🔧 Weekly Maintenance</h4>
                        <ul>
                            ${item.weeklyMaintenance.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="equipment-detail">
                        <h4>🔧 Monthly Maintenance</h4>
                        <ul>
                            ${item.monthlyMaintenance.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="equipment-detail">
                        <h4>⚠️ Safety Warnings</h4>
                        <ul>
                            ${item.safetyNotes.map(warning => `<li>${warning}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Fixed accordion click handler
        accordion.addEventListener('click', (e) => {
            if (e.target.matches('.equipment-header') || e.target.closest('.equipment-header')) {
                e.preventDefault();
                const header = e.target.matches('.equipment-header') ? e.target : e.target.closest('.equipment-header');
                const equipmentId = header.getAttribute('data-equipment');
                const content = document.getElementById(`content-${equipmentId}`);
                const arrow = header.querySelector('.accordion-arrow');
                
                if (content && arrow) {
                    const isActive = content.classList.contains('active');
                    content.classList.toggle('active');
                    arrow.textContent = isActive ? '▼' : '▲';
                    console.log('Equipment accordion toggled:', equipmentId, !isActive);
                }
            }
        });
    }

    setupSafetySystem() {
        this.setupSafetyTabs();
        this.setupCheckboxHandlers();
    }

    setupSafetyTabs() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.safety-tab[data-safety]') || e.target.closest('.safety-tab[data-safety]')) {
                e.preventDefault();
                const btn = e.target.matches('.safety-tab[data-safety]') ? e.target : e.target.closest('.safety-tab[data-safety]');
                const targetTab = btn.getAttribute('data-safety');
                this.showSafetyTab(targetTab);
            }
        });
    }

    showSafetyTab(tabId) {
        const safetyTabs = document.querySelectorAll('.safety-tab[data-safety]');
        const safetyContents = document.querySelectorAll('.safety-content');
        
        safetyTabs.forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-safety') === tabId);
        });
        
        safetyContents.forEach(content => {
            if (content.id === `${tabId}-safety`) {
                content.style.display = 'block';
                content.classList.add('active');
            } else {
                content.style.display = 'none';
                content.classList.remove('active');
            }
        });
        
        this.currentSafetyTab = tabId;
    }

    setupCheckboxHandlers() {
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const category = e.target.dataset.category || 'general';
                const index = e.target.dataset.index || e.target.closest('label').textContent;
                const isChecked = e.target.checked;
                
                const key = `${category}-${index}`;
                this.checkboxStates.set(key, isChecked);
                
                this.updateCheckboxStyle(e.target, isChecked);
            }
        });
    }

    updateCheckboxStyle(checkbox, checked) {
        const label = checkbox.closest('label');
        if (label) {
            if (checked) {
                label.style.textDecoration = 'line-through';
                label.style.opacity = '0.7';
                label.style.background = 'rgba(var(--color-success-rgb), 0.1)';
            } else {
                label.style.textDecoration = 'none';
                label.style.opacity = '1';
                label.style.background = 'transparent';
            }
        }
    }

    setupBulkPrep() {
        this.setupBulkCalculator();
        this.setupDownloadCSV();
    }

    setupBulkCalculator() {
        const originalServes = document.getElementById('original-serves');
        const targetServes = document.getElementById('target-serves');
        const multiplierValue = document.getElementById('multiplier-value');
        const bulkRecipeSelect = document.getElementById('bulk-recipe-select');

        if (originalServes && targetServes && multiplierValue) {
            const updateMultiplier = () => {
                const original = parseInt(originalServes.value) || 1;
                const target = parseInt(targetServes.value) || 1;
                const multiplier = target / original;
                multiplierValue.textContent = `${multiplier}x`;
                this.updateScaledRecipe();
            };

            originalServes.addEventListener('input', updateMultiplier);
            targetServes.addEventListener('change', updateMultiplier);
            
            if (bulkRecipeSelect) {
                bulkRecipeSelect.addEventListener('change', () => this.updateScaledRecipe());
            }
            
            updateMultiplier();
        }
    }

    updateRecipeSelects() {
        const bulkSelect = document.getElementById('bulk-recipe-select');
        const costSelect = document.getElementById('cost-recipe-select');
        
        const options = this.appData.recipes.map(recipe => 
            `<option value="${recipe.id}">${recipe.name}</option>`
        ).join('');
        
        if (bulkSelect) {
            bulkSelect.innerHTML = '<option value="">Choose a recipe...</option>' + options;
        }
        
        if (costSelect) {
            costSelect.innerHTML = '<option value="">Choose a recipe...</option>' + options;
        }
    }

    updateScaledRecipe() {
        const bulkRecipeSelect = document.getElementById('bulk-recipe-select');
        const originalServes = document.getElementById('original-serves');
        const targetServes = document.getElementById('target-serves');
        const scaledIngredients = document.getElementById('scaled-ingredients');
        
        if (!bulkRecipeSelect || !scaledIngredients) return;
        
        const recipeId = bulkRecipeSelect.value;
        if (!recipeId) {
            scaledIngredients.innerHTML = 'Select a recipe to see scaled ingredients';
            return;
        }
        
        const recipe = this.appData.recipes.find(r => r.id === recipeId);
        if (!recipe) return;
        
        const original = parseInt(originalServes.value) || 1;
        const target = parseInt(targetServes.value) || 1;
        const multiplier = target / original;
        
        const scaledList = recipe.ingredients.map(ingredient => {
            const scaled = ingredient.replace(/(\d+)/g, (match) => {
                const num = parseInt(match);
                return Math.round(num * multiplier);
            });
            return `<div class="ingredient-item"><span>${scaled}</span></div>`;
        }).join('');
        
        scaledIngredients.innerHTML = scaledList || 'No ingredients to scale';
    }

    setupDownloadCSV() {
        const downloadBtn = document.getElementById('download-csv');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => this.downloadPrepSheet());
        }
    }

    downloadPrepSheet() {
        const csvContent = [
            ['Item', 'Quantity', 'Prep Date', 'Use By Date', 'Storage Location', 'Staff Initials'],
            ['Pizza Sauce', '5L batch', '', '', 'Walk-in Cooler', ''],
            ['Burger Patties', '50 pieces', '', '', 'Freezer', ''],
            ['Sandwich Fillings', '3kg mixed', '', '', 'Prep Cooler', ''],
            ['Cheese Grated', '2kg mozzarella', '', '', 'Dairy Cooler', ''],
            ['Vegetables Prepped', '5kg mixed', '', '', 'Produce Cooler', ''],
            ['Tikki Mixture', '3kg batch', '', '', 'Prep Cooler', ''],
            ['Marinades', '2L mixed', '', '', 'Sauce Station', ''],
            ['Bread Stock', '100 pieces', '', '', 'Dry Storage', '']
        ];
        
        const csv = csvContent.map(row => row.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `paradise-cafe-prep-sheet-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    setupMaintenance() {
        this.setupMaintenanceTabs();
        this.populateMaintenanceTasks();
        this.setupPrintButtons();
    }

    setupMaintenanceTabs() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.maintenance-btn[data-period]') || e.target.closest('.maintenance-btn[data-period]')) {
                e.preventDefault();
                const btn = e.target.matches('.maintenance-btn[data-period]') ? e.target : e.target.closest('.maintenance-btn[data-period]');
                const targetPeriod = btn.getAttribute('data-period');
                this.showMaintenancePeriod(targetPeriod);
            }
        });
    }

    showMaintenancePeriod(periodId) {
        const maintenanceButtons = document.querySelectorAll('.maintenance-btn[data-period]');
        const maintenanceContents = document.querySelectorAll('.maintenance-content');
        
        maintenanceButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-period') === periodId);
        });
        
        maintenanceContents.forEach(content => {
            if (content.id === `${periodId}-maintenance`) {
                content.style.display = 'block';
                content.classList.add('active');
            } else {
                content.style.display = 'none';
                content.classList.remove('active');
            }
        });
        
        this.currentMaintenancePeriod = periodId;
    }

    populateMaintenanceTasks() {
        const dailyGrid = document.getElementById('daily-maintenance-grid');
        const weeklyGrid = document.getElementById('weekly-maintenance-grid');
        const monthlyGrid = document.getElementById('monthly-maintenance-grid');
        
        if (dailyGrid) {
            dailyGrid.innerHTML = this.createMaintenanceCards(this.appData.maintenance.daily, 'Daily');
        }
        if (weeklyGrid) {
            weeklyGrid.innerHTML = this.createMaintenanceCards(this.appData.maintenance.weekly, 'Weekly');
        }
        if (monthlyGrid) {
            monthlyGrid.innerHTML = this.createMaintenanceCards(this.appData.maintenance.monthly, 'Monthly');
        }
    }

    createMaintenanceCards(tasks, frequency) {
        return `
            <div class="maintenance-card">
                <h4>${frequency} Tasks</h4>
                <div class="maintenance-checklist">
                    ${tasks.map((task, index) => `
                        <label>
                            <input type="checkbox" data-category="maintenance-${frequency.toLowerCase()}" data-index="${index}">
                            ${task}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    setupPrintButtons() {
        const printButtons = document.querySelectorAll('[id^="print-"][id$="-checklist"]');
        printButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                window.print();
            });
        });
    }

    setupEmergency() {
        this.populateEmergencyProcedures();
        this.setupEmergencyContacts();
    }

    populateEmergencyProcedures() {
        const fireSteps = document.getElementById('fire-steps');
        const electricalSteps = document.getElementById('electrical-steps');
        const injurySteps = document.getElementById('injury-steps');
        const equipmentSteps = document.getElementById('equipment-steps');
        
        if (fireSteps) {
            fireSteps.innerHTML = this.appData.emergency.fire.map((step, index) => `
                <div class="procedure-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-text">${step}</div>
                </div>
            `).join('');
        }
        
        if (electricalSteps) {
            electricalSteps.innerHTML = this.appData.emergency.electrical.map((step, index) => `
                <div class="procedure-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-text">${step}</div>
                </div>
            `).join('');
        }
        
        if (injurySteps) {
            injurySteps.innerHTML = this.appData.emergency.medical.map((step, index) => `
                <div class="procedure-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-text">${step}</div>
                </div>
            `).join('');
        }
        
        if (equipmentSteps) {
            equipmentSteps.innerHTML = this.appData.emergency.equipment.map((step, index) => `
                <div class="procedure-step">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-text">${step}</div>
                </div>
            `).join('');
        }
    }

    setupEmergencyContacts() {
        document.querySelectorAll('.emergency-contact').forEach(contact => {
            contact.addEventListener('click', () => {
                const number = contact.dataset.number || contact.querySelector('.contact-number').textContent;
                if (confirm(`Call ${number}? This will open your phone app.`)) {
                    window.location.href = `tel:${number}`;
                }
            });
        });
    }

    setupUtilityPanel() {
        console.log('Setting up utility panel...');
        this.setupTimerWidget();
        this.setupSearchWidget();
        this.setupConverterWidget();
        this.setupCostCalculator();
        this.setupUtilityButtons();
    }

    setupUtilityButtons() {
        console.log('Setting up utility button handlers...');
        
        // Fixed utility button event handlers
        document.addEventListener('click', (e) => {
            // Timer button
            if (e.target.matches('#utility-timer-btn') || e.target.closest('#utility-timer-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Timer button clicked');
                this.toggleOverlay('timer-overlay');
                return;
            }
            
            // Search button
            if (e.target.matches('#utility-search-btn') || e.target.closest('#utility-search-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Search button clicked');
                this.toggleOverlay('search-overlay');
                return;
            }
            
            // Converter button
            if (e.target.matches('#utility-converter-btn') || e.target.closest('#utility-converter-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Converter button clicked');
                this.toggleOverlay('converter-overlay');
                return;
            }
            
            // Cost calculator button
            if (e.target.matches('#utility-cost-btn') || e.target.closest('#utility-cost-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Cost button clicked');
                this.toggleOverlay('cost-overlay');
                return;
            }
            
            // Close widget buttons
            if (e.target.matches('.close-widget') || e.target.closest('.close-widget')) {
                e.preventDefault();
                e.stopPropagation();
                const btn = e.target.matches('.close-widget') ? e.target : e.target.closest('.close-widget');
                const target = btn.getAttribute('data-target');
                console.log('Close button clicked for:', target);
                this.hideOverlay(target);
                return;
            }
        });
        
        // Close on overlay click
        document.querySelectorAll('.timer-overlay, .search-overlay, .converter-overlay, .cost-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.hideOverlay(overlay.id);
                }
            });
        });
        
        console.log('Utility buttons configured');
    }

    toggleOverlay(overlayId) {
        console.log('Toggling overlay:', overlayId);
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            const isHidden = overlay.classList.contains('hidden');
            
            // Hide all overlays first
            document.querySelectorAll('.timer-overlay, .search-overlay, .converter-overlay, .cost-overlay').forEach(o => {
                o.classList.add('hidden');
            });
            
            // Show the target overlay if it was hidden
            if (isHidden) {
                overlay.classList.remove('hidden');
                console.log('Overlay shown:', overlayId);
                
                // Focus search input if it's the search overlay
                if (overlayId === 'search-overlay') {
                    setTimeout(() => {
                        const searchInput = document.getElementById('global-search-input');
                        if (searchInput) searchInput.focus();
                    }, 100);
                }
            } else {
                console.log('Overlay was already visible, now hidden:', overlayId);
            }
        } else {
            console.error('Overlay not found:', overlayId);
        }
    }

    hideOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.classList.add('hidden');
            console.log('Overlay hidden:', overlayId);
        }
    }

    setupTimerWidget() {
        const createBtn = document.getElementById('quick-create-timer');
        
        if (createBtn) {
            createBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.createQuickTimer();
            });
        }
        
        this.updateTimerWidget();
    }

    createQuickTimer() {
        const nameInput = document.getElementById('quick-timer-name');
        const minutesInput = document.getElementById('quick-timer-minutes');
        const secondsInput = document.getElementById('quick-timer-seconds');
        
        const name = nameInput?.value.trim() || 'Quick Timer';
        const minutes = parseInt(minutesInput?.value) || 0;
        const seconds = parseInt(secondsInput?.value) || 0;
        
        if (minutes === 0 && seconds === 0) {
            alert('Please enter a valid time duration');
            return;
        }
        
        const totalSeconds = (minutes * 60) + seconds;
        const timerId = ++this.timerIdCounter;
        
        const timer = {
            id: timerId,
            name: name,
            totalSeconds: totalSeconds,
            remainingSeconds: totalSeconds,
            isRunning: false,
            isFinished: false,
            interval: null
        };
        
        this.activeTimers.set(timerId, timer);
        this.updateTimerWidget();
        
        if (nameInput) nameInput.value = '';
        if (minutesInput) minutesInput.value = '';
        if (secondsInput) secondsInput.value = '';
        
        this.startTimer(timerId);
    }

    updateTimerWidget() {
        const widget = document.getElementById('active-timers-widget');
        if (!widget) return;
        
        if (this.activeTimers.size === 0) {
            widget.innerHTML = '<div class="no-timers">No active timers</div>';
            return;
        }
        
        widget.innerHTML = Array.from(this.activeTimers.values())
            .map(timer => this.createTimerWidgetItem(timer))
            .join('');
    }

    createTimerWidgetItem(timer) {
        const minutes = Math.floor(timer.remainingSeconds / 60);
        const seconds = timer.remainingSeconds % 60;
        const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        let statusClass = '';
        if (timer.isFinished) statusClass = 'finished';
        else if (timer.isRunning) statusClass = 'running';
        
        return `
            <div class="timer-item-widget ${statusClass}">
                <div class="timer-widget-header">
                    <span class="timer-widget-name">${timer.name}</span>
                    <button class="btn btn--sm" onclick="app.deleteTimer(${timer.id})">×</button>
                </div>
                <div class="timer-widget-display">${timer.isFinished ? 'TIME UP!' : timeDisplay}</div>
                <div class="timer-widget-controls">
                    ${timer.isFinished ? 
                        `<button class="btn btn--sm" onclick="app.resetTimer(${timer.id})">Reset</button>` :
                        `<button class="btn btn--primary btn--sm" onclick="app.${timer.isRunning ? 'pauseTimer' : 'startTimer'}(${timer.id})">
                            ${timer.isRunning ? 'Pause' : 'Start'}
                        </button>
                        <button class="btn btn--sm" onclick="app.resetTimer(${timer.id})">Reset</button>`
                    }
                </div>
            </div>
        `;
    }

    startTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer || timer.isRunning || timer.isFinished) return;
        
        timer.isRunning = true;
        timer.interval = setInterval(() => {
            timer.remainingSeconds--;
            
            if (timer.remainingSeconds <= 0) {
                timer.remainingSeconds = 0;
                timer.isRunning = false;
                timer.isFinished = true;
                clearInterval(timer.interval);
                this.showTimerNotification(timer.name);
            }
            
            this.updateTimerWidget();
        }, 1000);
        
        this.updateTimerWidget();
    }

    pauseTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer || !timer.isRunning) return;
        
        timer.isRunning = false;
        clearInterval(timer.interval);
        this.updateTimerWidget();
    }

    resetTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer) return;
        
        timer.isRunning = false;
        timer.isFinished = false;
        timer.remainingSeconds = timer.totalSeconds;
        if (timer.interval) {
            clearInterval(timer.interval);
        }
        this.updateTimerWidget();
    }

    deleteTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer) return;
        
        if (timer.interval) {
            clearInterval(timer.interval);
        }
        this.activeTimers.delete(timerId);
        this.updateTimerWidget();
    }

    showTimerNotification(timerName) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-error);
            color: white;
            padding: 20px 30px;
            border-radius: 12px;
            z-index: 2000;
            box-shadow: var(--shadow-lg);
            font-weight: bold;
            font-size: 18px;
            animation: pulse 0.5s infinite alternate;
            max-width: 300px;
        `;
        notification.innerHTML = `⏰ Timer Complete!<br><strong>${timerName}</strong><br><small>समय पूरा हो गया!</small>`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 5000);
    }

    setupSearchWidget() {
        const searchInput = document.getElementById('global-search-input');
        const categorySelect = document.getElementById('search-category');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => this.performGlobalSearch());
        }
        
        if (categorySelect) {
            categorySelect.addEventListener('change', () => this.performGlobalSearch());
        }
    }

    performGlobalSearch() {
        const searchTerm = document.getElementById('global-search-input')?.value.toLowerCase() || '';
        const category = document.getElementById('search-category')?.value || '';
        const resultsContainer = document.getElementById('search-results');
        
        if (!searchTerm.trim()) {
            resultsContainer.innerHTML = '<div class="no-results">Type to search across all content...</div>';
            return;
        }
        
        const results = [];
        
        if (!category || category === 'recipes') {
            this.appData.recipes.forEach(recipe => {
                if (recipe.name.toLowerCase().includes(searchTerm) || 
                    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) ||
                    recipe.steps.some(step => step.toLowerCase().includes(searchTerm))) {
                    results.push({
                        title: recipe.name,
                        category: 'Recipe',
                        snippet: `${recipe.type} • ${recipe.ingredients.slice(0, 3).join(', ')}...`,
                        action: () => {
                            this.hideOverlay('search-overlay');
                            this.showSection('recipes');
                            this.showRecipeCategory(recipe.category.toLowerCase());
                            setTimeout(() => this.showRecipeModal(recipe.id), 500);
                        }
                    });
                }
            });
        }
        
        if (!category || category === 'equipment') {
            this.appData.equipment.forEach(equipment => {
                if (equipment.name.toLowerCase().includes(searchTerm) ||
                    equipment.operatingSteps.some(step => step.toLowerCase().includes(searchTerm))) {
                    results.push({
                        title: equipment.name,
                        category: 'Equipment',
                        snippet: equipment.operatingSteps.slice(0, 2).join(', '),
                        action: () => {
                            this.hideOverlay('search-overlay');
                            this.showSection('equipment');
                        }
                    });
                }
            });
        }
        
        if (!category || category === 'emergency') {
            Object.entries(this.appData.emergency).forEach(([type, steps]) => {
                if (type.toLowerCase().includes(searchTerm) || 
                    steps.some(step => step.toLowerCase().includes(searchTerm))) {
                    results.push({
                        title: `${type.charAt(0).toUpperCase() + type.slice(1)} Emergency`,
                        category: 'Emergency',
                        snippet: steps[0],
                        action: () => {
                            this.hideOverlay('search-overlay');
                            this.showSection('emergency');
                        }
                    });
                }
            });
        }
        
        this.displaySearchResults(results);
    }

    displaySearchResults(results) {
        const resultsContainer = document.getElementById('search-results');
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
            return;
        }
        
        resultsContainer.innerHTML = results.map((result, index) => `
            <div class="search-result-item" data-action="${index}">
                <div class="search-result-category">${result.category}</div>
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-snippet">${result.snippet}</div>
            </div>
        `).join('');
        
        resultsContainer.querySelectorAll('.search-result-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                results[index].action();
            });
        });
    }

    setupConverterWidget() {
        const tabs = document.querySelectorAll('.converter-tab');
        const inputs = document.querySelectorAll('#weight-input, #temp-input, #volume-input');
        const selects = document.querySelectorAll('#weight-from, #temp-from, #volume-from');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const converterType = tab.dataset.converter;
                this.showConverterTab(converterType);
            });
        });
        
        inputs.forEach(input => {
            input.addEventListener('input', () => this.performConversion());
        });
        
        selects.forEach(select => {
            select.addEventListener('change', () => this.performConversion());
        });
    }

    showConverterTab(tabId) {
        const tabs = document.querySelectorAll('.converter-tab');
        const contents = document.querySelectorAll('.converter-content');
        
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.converter === tabId);
        });
        
        contents.forEach(content => {
            content.classList.toggle('active', content.id === `${tabId}-converter`);
        });
    }

    performConversion() {
        const activeTab = document.querySelector('.converter-tab.active')?.dataset.converter;
        
        if (activeTab === 'weight') {
            this.convertWeight();
        } else if (activeTab === 'temp') {
            this.convertTemperature();
        } else if (activeTab === 'volume') {
            this.convertVolume();
        }
    }

    convertWeight() {
        const input = document.getElementById('weight-input');
        const from = document.getElementById('weight-from');
        const result = document.getElementById('weight-result');
        
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            result.textContent = 'Enter a valid number';
            return;
        }
        
        const conversions = {
            g: { cup: 0.00423, kg: 0.001, tbsp: 0.067628, tsp: 0.202884 },
            kg: { g: 1000, cup: 4.23, tbsp: 67.628, tsp: 202.884 },
            cup: { g: 236.588, kg: 0.236588, tbsp: 16, tsp: 48 },
            tbsp: { g: 14.787, kg: 0.014787, cup: 0.0625, tsp: 3 },
            tsp: { g: 4.929, kg: 0.004929, cup: 0.0208, tbsp: 0.333 }
        };
        
        const fromUnit = from.value;
        const results = [];
        
        Object.entries(conversions[fromUnit] || {}).forEach(([unit, multiplier]) => {
            const converted = (value * multiplier).toFixed(2);
            results.push(`${converted} ${unit}`);
        });
        
        result.innerHTML = results.join('<br>');
    }

    convertTemperature() {
        const input = document.getElementById('temp-input');
        const from = document.getElementById('temp-from');
        const result = document.getElementById('temp-result');
        
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            result.textContent = 'Enter a valid temperature';
            return;
        }
        
        if (from.value === 'c') {
            const fahrenheit = (value * 9/5) + 32;
            result.innerHTML = `${fahrenheit.toFixed(1)}°F`;
        } else {
            const celsius = (value - 32) * 5/9;
            result.innerHTML = `${celsius.toFixed(1)}°C`;
        }
    }

    convertVolume() {
        const input = document.getElementById('volume-input');
        const from = document.getElementById('volume-from');
        const result = document.getElementById('volume-result');
        
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            result.textContent = 'Enter a valid volume';
            return;
        }
        
        const conversions = {
            ml: { l: 0.001, cup: 0.004227, oz: 0.033814, tbsp: 0.067628, tsp: 0.202884 },
            l: { ml: 1000, cup: 4.227, oz: 33.814, tbsp: 67.628, tsp: 202.884 },
            cup: { ml: 236.588, l: 0.236588, oz: 8, tbsp: 16, tsp: 48 },
            oz: { ml: 29.574, l: 0.029574, cup: 0.125, tbsp: 2, tsp: 6 },
            tbsp: { ml: 14.787, l: 0.014787, cup: 0.0625, oz: 0.5, tsp: 3 },
            tsp: { ml: 4.929, l: 0.004929, cup: 0.0208, oz: 0.167, tbsp: 0.333 }
        };
        
        const fromUnit = from.value;
        const results = [];
        
        Object.entries(conversions[fromUnit] || {}).forEach(([unit, multiplier]) => {
            const converted = (value * multiplier).toFixed(2);
            results.push(`${converted} ${unit}`);
        });
        
        result.innerHTML = results.join('<br>');
    }

    setupCostCalculator() {
        const recipeSelect = document.getElementById('cost-recipe-select');
        const quantityInput = document.getElementById('cost-quantity');
        
        if (recipeSelect) {
            recipeSelect.addEventListener('change', () => this.calculateCost());
        }
        
        if (quantityInput) {
            quantityInput.addEventListener('input', () => this.calculateCost());
        }
    }

    calculateCost() {
        const recipeSelect = document.getElementById('cost-recipe-select');
        const quantityInput = document.getElementById('cost-quantity');
        const breakdown = document.getElementById('cost-breakdown');
        
        if (!recipeSelect || !quantityInput || !breakdown) return;
        
        const recipeId = recipeSelect.value;
        const quantity = parseInt(quantityInput.value) || 1;
        
        if (!recipeId) {
            breakdown.innerHTML = '<div class="no-selection">Select a recipe to see cost breakdown</div>';
            return;
        }
        
        const recipe = this.appData.recipes.find(r => r.id === recipeId);
        if (!recipe || !recipe.costINR) {
            breakdown.innerHTML = '<div class="no-selection">Cost data not available for this recipe</div>';
            return;
        }
        
        const unitCost = recipe.costINR;
        const totalCost = unitCost * quantity;
        const materialCost = Math.round(totalCost * 0.65);
        const laborCost = Math.round(totalCost * 0.25);
        const overheadCost = Math.round(totalCost * 0.10);
        
        breakdown.innerHTML = `
            <div class="cost-item">
                <span>Material Cost:</span>
                <span>₹${materialCost}</span>
            </div>
            <div class="cost-item">
                <span>Labor Cost:</span>
                <span>₹${laborCost}</span>
            </div>
            <div class="cost-item">
                <span>Overhead Cost:</span>
                <span>₹${overheadCost}</span>
            </div>
            <div class="cost-item">
                <span>Total Cost (${quantity} qty):</span>
                <span>₹${totalCost}</span>
            </div>
        `;
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;
        
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            this.currentTheme = newTheme;
            
            themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
        });
    }

    setupEmergencyBanner() {
        const emergencyToggle = document.getElementById('emergency-toggle');
        const emergencyBanner = document.getElementById('emergency-banner');
        const hideBannerBtn = document.getElementById('hide-emergency-banner');
        
        if (emergencyToggle) {
            emergencyToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleEmergencyBanner();
            });
        }
        
        if (hideBannerBtn) {
            hideBannerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideEmergencyBanner();
            });
        }
    }

    toggleEmergencyBanner() {
        const banner = document.getElementById('emergency-banner');
        if (banner) {
            this.emergencyBannerVisible = !this.emergencyBannerVisible;
            banner.classList.toggle('hidden', !this.emergencyBannerVisible);
            
            const mainNav = document.querySelector('.main-nav');
            if (mainNav) {
                mainNav.style.top = this.emergencyBannerVisible ? '60px' : '0';
            }
        }
    }

    hideEmergencyBanner() {
        const banner = document.getElementById('emergency-banner');
        if (banner) {
            this.emergencyBannerVisible = false;
            banner.classList.add('hidden');
            
            const mainNav = document.querySelector('.main-nav');
            if (mainNav) {
                mainNav.style.top = '0';
            }
        }
    }

    setupScrollToTop() {
        const scrollBtn = document.getElementById('scroll-to-top');
        if (!scrollBtn) return;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.remove('hidden');
            } else {
                scrollBtn.classList.add('hidden');
            }
        });
        
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    setupPWA() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('🔧 Service Worker registered successfully');
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        }
    }
}

// Initialize the app and expose functions globally
let app;

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌴 Paradise Bakes & Cafe Training Manual - Fixed Navigation Version');
    app = new ParadiseCafeApp();
    
    // Expose app instance globally for timer controls and other functions
    window.app = app;
    
    console.log('✅ All systems operational:');
    console.log('   🧭 Fixed main navigation - all sections now work');
    console.log('   ⏲️ Fixed utility panel - all overlays now open properly');
    console.log('   🔧 Complete equipment guide with all 9 machines');
    console.log('   📖 Recipe system with modal functionality');
    console.log('   🛡️ Safety tabs now functional');
    console.log('   📊 Bulk preparation calculator operational');
    console.log('   📋 Maintenance schedules with checklists');
    console.log('   🚨 Emergency procedures ready');
    console.log('🍕🍔🥪 Professional kitchen training system fully functional!');
});

// Keyboard shortcuts for power users
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 't':
                e.preventDefault();
                app?.toggleOverlay('timer-overlay');
                break;
            case 'f':
                e.preventDefault();
                app?.toggleOverlay('search-overlay');
                break;
            case 'u':
                e.preventDefault();
                app?.toggleOverlay('converter-overlay');
                break;
            case 'c':
                e.preventDefault();
                app?.toggleOverlay('cost-overlay');
                break;
        }
    }
    
    if (e.key === 'Escape') {
        document.querySelectorAll('.timer-overlay, .search-overlay, .converter-overlay, .cost-overlay, .modal').forEach(overlay => {
            overlay.classList.add('hidden');
        });
    }
});