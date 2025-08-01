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
                this.closeHamburgerMenu(); // Close hamburger menu when nav item is clicked
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
        
        // Setup hamburger menu toggle
        this.setupHamburgerMenu();
        
        console.log('Navigation system ready');
    }

    // NEW: Hamburger menu setup method
    setupHamburgerMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                console.log('Hamburger menu clicked');
                navMenu.classList.toggle('open');
                
                // Close menu when clicking nav buttons
                if (navMenu.classList.contains('open')) {
                    navMenu.querySelectorAll('.nav-btn').forEach(btn => {
                        btn.addEventListener('click', () => {
                            navMenu.classList.remove('open');
                        });
                    });
                }
            });
            console.log('Hamburger menu setup complete');
        } else {
            console.warn('Hamburger menu elements not found:', { navToggle, navMenu });
        }
    }

    // NEW: Close hamburger menu method
    closeHamburgerMenu() {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
        }
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
            <div class="recipe-card" data-recipe-id="${recipe.id}" 
                 onclick="app.showRecipeDetail('${recipe.id}')" 
                 tabindex="0" 
                 onkeypress="if(event.key==='Enter'){app.showRecipeDetail('${recipe.id}')}">
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
                <div class="recipe-tips">
                    ${Array.isArray(recipe.tips) ? recipe.tips.map(tip => `• ${tip}`).join('<br>') : `• ${recipe.tips}`}
                </div>
                <div class="recipe-equipment">
                    <strong>Equipment:</strong> ${recipe.equipment.join(', ')}
                </div>
                <div class="recipe-cooking">
                    <strong>Cooking Time:</strong> ${cookTime}
                </div>
                ${recipe.storage ? `<div class="recipe-storage"><strong>Storage:</strong> ${recipe.storage}</div>` : ''}
                ${recipe.reheat ? `<div class="recipe-reheat"><strong>Reheating:</strong> ${recipe.reheat}</div>` : ''}
            </div>
        `;
    }

    showRecipeDetail(recipeId) {
        const recipe = this.appData.recipes.find(r => r.id === recipeId);
        if (!recipe) return;
        
        const modal = document.getElementById('recipe-modal');
        const content = document.getElementById('recipe-modal-content');
        
        if (!modal || !content) return;
        
        const temp = recipe.tempC ? `${recipe.tempC}°C` : 'Variable';
        const equipment = recipe.equipment ? recipe.equipment.join(', ') : 'Standard kitchen equipment';
        const cookTime = recipe.cookTimeMin ? `${recipe.cookTimeMin} minutes` : 'Variable';
        
        content.innerHTML = `
            <h2>${recipe.name}</h2>
            <div class="recipe-type-badge">${recipe.type}</div>
            
            <h3>📝 Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h3>👨‍🍳 Hinglish Cooking Steps</h3>
            <ol class="cooking-steps">
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <h3>💡 Chef Tips</h3>
            <div class="chef-tips">
                ${Array.isArray(recipe.tips) ? recipe.tips.map(tip => `• ${tip}`).join('<br>') : `• ${recipe.tips}`}
            </div>
            
            <h3>🔧 Equipment Required</h3>
            <p><strong>Equipment:</strong> ${equipment}</p>
            
            <h3>🕐 Cooking Details</h3>
            <p><strong>Temperature:</strong> ${temp}</p>
            <p><strong>Cooking Time:</strong> ${cookTime}</p>
            
            ${recipe.storage ? `<h3>📦 Storage</h3><p><strong>Storage:</strong> ${recipe.storage}</p>` : ''}
            
            ${recipe.reheat ? `<h3>🔥 Reheating</h3><p><strong>Reheating:</strong> ${recipe.reheat}</p>` : ''}
            
            <div class="recipe-cost">
                <h3>💰 Cost Information</h3>
                <p><strong>Cost per portion:</strong> ₹${recipe.costINR || 'Varies'}</p>
            </div>
        `;
        
        modal.classList.remove('hidden');
    }

    setupRecipeCategories() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = btn.getAttribute('data-category');
                this.showRecipeCategory(category);
            });
        });
    }

    showRecipeCategory(category) {
        console.log('Showing recipe category:', category);
        
        // Update button states
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Show/hide recipe sections
        const recipeSections = document.querySelectorAll('.recipe-section');
        recipeSections.forEach(section => {
            if (section.id === `${category}-recipes`) {
                section.classList.add('active');
                section.style.display = 'block';
            } else {
                section.classList.remove('active');
                section.style.display = 'none';
            }
        });
        
        this.currentRecipeCategory = category;
    }

    setupRecipeSearch() {
        const searchInput = document.getElementById('recipe-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                this.filterRecipes(query);
            });
        }
    }

    filterRecipes(query) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        recipeCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    setupRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        if (modal) {
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.classList.add('hidden');
                });
            }
            
            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    }

    setupEquipmentAccordion() {
        console.log('Setting up equipment accordion...');
        
        const equipmentAccordion = document.getElementById('equipment-accordion');
        if (!equipmentAccordion) return;
        
        const equipmentHTML = this.appData.equipment.map(equipment => {
            const dailyTasks = equipment.dailyCleaning.map(task => `<li>${task}</li>`).join('');
            const weeklyTasks = equipment.weeklyMaintenance.map(task => `<li>${task}</li>`).join('');
            const monthlyTasks = equipment.monthlyMaintenance.map(task => `<li>${task}</li>`).join('');
            const operatingSteps = equipment.operatingSteps.map(step => `<li>${step}</li>`).join('');
            const safetyNotes = equipment.safetyNotes.map(note => `<li>${note}</li>`).join('');
            
            return `
                <div class="equipment-item">
                    <div class="equipment-header" onclick="app.toggleEquipment('${equipment.id}')">
                        <h3>${equipment.name}</h3>
                        <div class="equipment-specs">
                            <span>Capacity: ${equipment.capacity}</span>
                            ${equipment.maxTempC ? `<span>Max Temp: ${equipment.maxTempC}°C</span>` : ''}
                            <span>Power: ${equipment.power}</span>
                        </div>
                        <span class="accordion-arrow">▼</span>
                    </div>
                    <div class="equipment-content" id="${equipment.id}-content">
                        <div class="equipment-tabs">
                            <button class="eq-tab active" onclick="app.showEquipmentTab('${equipment.id}', 'operating')">Operating Steps</button>
                            <button class="eq-tab" onclick="app.showEquipmentTab('${equipment.id}', 'daily')">Daily Cleaning</button>
                            <button class="eq-tab" onclick="app.showEquipmentTab('${equipment.id}', 'weekly')">Weekly Maintenance</button>
                            <button class="eq-tab" onclick="app.showEquipmentTab('${equipment.id}', 'monthly')">Monthly Maintenance</button>
                            <button class="eq-tab" onclick="app.showEquipmentTab('${equipment.id}', 'safety')">Safety Notes</button>
                        </div>
                        
                        <div id="${equipment.id}-operating" class="equipment-tab-content active">
                            <h4>Operating Steps</h4>
                            <ol class="equipment-steps">${operatingSteps}</ol>
                        </div>
                        
                        <div id="${equipment.id}-daily" class="equipment-tab-content">
                            <h4>Daily Cleaning Tasks</h4>
                            <ul class="equipment-tasks">${dailyTasks}</ul>
                        </div>
                        
                        <div id="${equipment.id}-weekly" class="equipment-tab-content">
                            <h4>Weekly Maintenance Tasks</h4>
                            <ul class="equipment-tasks">${weeklyTasks}</ul>
                        </div>
                        
                        <div id="${equipment.id}-monthly" class="equipment-tab-content">
                            <h4>Monthly Maintenance Tasks</h4>
                            <ul class="equipment-tasks">${monthlyTasks}</ul>
                        </div>
                        
                        <div id="${equipment.id}-safety" class="equipment-tab-content">
                            <h4>Safety Notes</h4>
                            <ul class="equipment-safety">${safetyNotes}</ul>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        equipmentAccordion.innerHTML = equipmentHTML;
        console.log('Equipment accordion populated');
    }

    toggleEquipment(equipmentId) {
        const content = document.getElementById(`${equipmentId}-content`);
        const header = content.previousElementSibling;
        const arrow = header.querySelector('.accordion-arrow');
        
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            arrow.textContent = '▶';
        } else {
            // Close all other equipment items
            document.querySelectorAll('.equipment-content.active').forEach(item => {
                item.classList.remove('active');
                item.previousElementSibling.querySelector('.accordion-arrow').textContent = '▶';
            });
            
            content.classList.add('active');
            arrow.textContent = '▼';
        }
    }

    showEquipmentTab(equipmentId, tabType) {
        // Update tab buttons
        const tabButtons = document.querySelectorAll(`#${equipmentId}-content .eq-tab`);
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase().includes(tabType)) {
                btn.classList.add('active');
            }
        });
        
        // Update tab content
        const tabContents = document.querySelectorAll(`#${equipmentId}-content .equipment-tab-content`);
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        const activeTab = document.getElementById(`${equipmentId}-${tabType}`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    setupSafetySystem() {
        console.log('Setting up safety system...');
        
        // Setup safety tab switching
        const safetyTabs = document.querySelectorAll('.safety-tab');
        safetyTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const safetyType = tab.getAttribute('data-safety');
                this.showSafetyTab(safetyType);
            });
        });
        
        // Populate safety content based on data
        this.populateSafetyContent();
        
        console.log('Safety system ready');
    }

    populateSafetyContent() {
        // This method would populate safety content based on this.appData.safety
        // For now, the content is already in HTML, but this could be dynamic
    }

    showSafetyTab(safetyType) {
        console.log('Showing safety tab:', safetyType);
        
        // Update tab buttons
        const safetyTabs = document.querySelectorAll('.safety-tab');
        safetyTabs.forEach(tab => {
            if (tab.getAttribute('data-safety') === safetyType) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Show/hide content
        const safetyContents = document.querySelectorAll('.safety-content');
        safetyContents.forEach(content => {
            if (content.id === `${safetyType}-safety`) {
                content.classList.add('active');
                content.style.display = 'block';
            } else {
                content.classList.remove('active');
                content.style.display = 'none';
            }
        });
        
        this.currentSafetyTab = safetyType;
    }

    setupBulkPrep() {
        console.log('Setting up bulk preparation system...');
        
        // Setup bulk recipe scaling
        const bulkRecipeSelect = document.getElementById('bulk-recipe-select');
        const targetServesSelect = document.getElementById('target-serves');
        const originalServesInput = document.getElementById('original-serves');
        
        if (bulkRecipeSelect && targetServesSelect) {
            // Update multiplier when inputs change
            const updateMultiplier = () => {
                const targetServes = parseInt(targetServesSelect.value) || 25;
                const originalServes = parseInt(originalServesInput.value) || 1;
                const multiplier = targetServes / originalServes;
                document.getElementById('multiplier-value').textContent = `${multiplier}x`;
            };
            
            targetServesSelect.addEventListener('change', updateMultiplier);
            originalServesInput.addEventListener('input', updateMultiplier);
            
            // Handle recipe selection and scaling
            bulkRecipeSelect.addEventListener('change', (e) => {
                const recipeId = e.target.value;
                if (recipeId) {
                    this.calculateBulkRecipe(recipeId);
                }
            });
        }
        
        // Setup CSV download
        const downloadBtn = document.getElementById('download-csv');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.downloadPrepSheetCSV();
            });
        }
        
        console.log('Bulk preparation system ready');
    }

    calculateBulkRecipe(recipeId) {
        const recipe = this.appData.recipes.find(r => r.id === recipeId);
        if (!recipe) return;
        
        const targetServes = parseInt(document.getElementById('target-serves').value) || 25;
        const originalServes = parseInt(document.getElementById('original-serves').value) || 1;
        const multiplier = targetServes / originalServes;
        
        const scaledResults = document.getElementById('scaled-recipe');
        const scaledIngredients = document.getElementById('scaled-ingredients');
        
        const ingredientsList = recipe.ingredients.map(ingredient => {
            // Extract number and scale it
            const match = ingredient.match(/(\d+(?:\.\d+)?)\s*([a-zA-Z]+)\s+(.*)/);
            if (match) {
                const [, amount, unit, item] = match;
                const scaledAmount = (parseFloat(amount) * multiplier).toFixed(1);
                return `<li>${scaledAmount} ${unit} ${item}</li>`;
            } else {
                return `<li>${ingredient} (multiply by ${multiplier})</li>`;
            }
        }).join('');
        
        scaledIngredients.innerHTML = `
            <ul class="scaled-ingredients-list">
                ${ingredientsList}
            </ul>
            <div class="bulk-info">
                <p><strong>Original Recipe:</strong> ${originalServes} portion(s)</p>
                <p><strong>Scaled Recipe:</strong> ${targetServes} portions</p>
                <p><strong>Multiplier:</strong> ${multiplier}x</p>
                <p><strong>Estimated Cost:</strong> ₹${(recipe.costINR * multiplier).toFixed(2)}</p>
                <p><strong>Estimated Time:</strong> ${Math.ceil(recipe.cookTimeMin * Math.log(multiplier + 1))} minutes</p>
            </div>
        `;
        
        scaledResults.style.display = 'block';
    }

    downloadPrepSheetCSV() {
        const csvContent = [
            ['Item Name', 'Prep Date', 'Use By Date', 'Storage Temp', 'Staff Initials'],
            ['Pizza Sauce', '', '', '4°C', ''],
            ['Grated Cheese', '', '', '4°C', ''],
            ['Chopped Vegetables', '', '', '4°C', ''],
            ['Burger Patties', '', '', '-18°C', ''],
            ['Sandwich Fillings', '', '', '4°C', '']
        ];
        
        const csvString = csvContent.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bulk_prep_sheet.csv';
        a.click();
        
        URL.revokeObjectURL(url);
    }

    setupMaintenance() {
        console.log('Setting up maintenance system...');
        
        // Setup maintenance period switching
        const maintenanceBtns = document.querySelectorAll('.maintenance-btn');
        maintenanceBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const period = btn.getAttribute('data-period');
                this.showMaintenancePeriod(period);
            });
        });
        
        // Populate maintenance tasks
        this.populateMaintenanceTasks();
        
        // Setup print functionality
        this.setupMaintenancePrint();
        
        console.log('Maintenance system ready');
    }

    populateMaintenanceTasks() {
        const periods = ['daily', 'weekly', 'monthly'];
        
        periods.forEach(period => {
            const grid = document.getElementById(`${period}-maintenance-grid`);
            if (grid && this.appData.maintenance[period]) {
                const tasksHTML = this.appData.maintenance[period].map((task, index) => {
                    const taskId = `${period}_task_${index}`;
                    const isChecked = this.checkboxStates.get(taskId) ? 'checked' : '';
                    
                    return `
                        <div class="maintenance-task">
                            <label class="task-label">
                                <input type="checkbox" 
                                       id="${taskId}" 
                                       ${isChecked}
                                       onchange="app.updateTaskStatus('${taskId}', this.checked)">
                                <span class="checkmark"></span>
                                <span class="task-text">${task}</span>
                            </label>
                            <div class="task-status ${isChecked ? 'completed' : 'pending'}">
                                ${isChecked ? '✅ Completed' : '⏳ Pending'}
                            </div>
                        </div>
                    `;
                }).join('');
                
                grid.innerHTML = tasksHTML;
            }
        });
    }

    updateTaskStatus(taskId, isChecked) {
        this.checkboxStates.set(taskId, isChecked);
        
        // Update visual status
        const checkbox = document.getElementById(taskId);
        const taskDiv = checkbox.closest('.maintenance-task');
        const statusDiv = taskDiv.querySelector('.task-status');
        
        if (isChecked) {
            statusDiv.className = 'task-status completed';
            statusDiv.textContent = '✅ Completed';
        } else {
            statusDiv.className = 'task-status pending';
            statusDiv.textContent = '⏳ Pending';
        }
    }

    showMaintenancePeriod(period) {
        console.log('Showing maintenance period:', period);
        
        // Update button states
        const maintenanceBtns = document.querySelectorAll('.maintenance-btn');
        maintenanceBtns.forEach(btn => {
            if (btn.getAttribute('data-period') === period) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Show/hide content
        const maintenanceContents = document.querySelectorAll('.maintenance-content');
        maintenanceContents.forEach(content => {
            if (content.id === `${period}-maintenance`) {
                content.classList.add('active');
                content.style.display = 'block';
            } else {
                content.classList.remove('active');
                content.style.display = 'none';
            }
        });
        
        this.currentMaintenancePeriod = period;
    }

    setupMaintenancePrint() {
        const printButtons = ['daily', 'weekly', 'monthly'].map(period => 
            document.getElementById(`print-${period}-checklist`)
        );
        
        printButtons.forEach((btn, index) => {
            if (btn) {
                const period = ['daily', 'weekly', 'monthly'][index];
                btn.addEventListener('click', () => {
                    this.printMaintenanceChecklist(period);
                });
            }
        });
    }

    printMaintenanceChecklist(period) {
        const tasks = this.appData.maintenance[period];
        const printWindow = window.open('', '', 'width=800,height=600');
        
        const printContent = `
            <html>
            <head>
                <title>Paradise Bakes & Cafe - ${period.charAt(0).toUpperCase() + period.slice(1)} Maintenance Checklist</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #d84315; }
                    .task { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
                    .checkbox { width: 20px; height: 20px; margin-right: 10px; }
                    @media print { .no-print { display: none; } }
                </style>
            </head>
            <body>
                <h1>🌴 Paradise Bakes & Cafe</h1>
                <h2>${period.charAt(0).toUpperCase() + period.slice(1)} Maintenance Checklist</h2>
                <p>Date: ________________ Staff: ________________</p>
                ${tasks.map(task => `
                    <div class="task">
                        <input type="checkbox" class="checkbox"> ${task}
                    </div>
                `).join('')}
                <br>
                <p>Completed by: ________________ Date: ________________</p>
                <button class="no-print" onclick="window.print()">Print</button>
            </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
    }

    setupEmergency() {
        console.log('Setting up emergency procedures...');
        
        // Populate emergency procedures
        this.populateEmergencyProcedures();
        
        // Setup emergency contact clicking
        this.setupEmergencyContacts();
        
        console.log('Emergency procedures ready');
    }

    populateEmergencyProcedures() {
        const emergencyTypes = ['fire', 'electrical', 'medical', 'equipment'];
        
        emergencyTypes.forEach(type => {
            const stepsContainer = document.getElementById(`${type}-steps`);
            if (stepsContainer && this.appData.emergency[type]) {
                const stepsHTML = this.appData.emergency[type].map((step, index) => `
                    <div class="procedure-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-text">${step}</div>
                    </div>
                `).join('');
                
                stepsContainer.innerHTML = stepsHTML;
            }
        });
    }

    setupEmergencyContacts() {
        const emergencyContacts = document.querySelectorAll('.emergency-contact');
        emergencyContacts.forEach(contact => {
            contact.addEventListener('click', () => {
                const number = contact.getAttribute('data-number');
                if (number) {
                    // In a real app, this would make a call
                    alert(`Emergency Call: ${number}`);
                    console.log(`Emergency call initiated: ${number}`);
                }
            });
        });
    }

    setupUtilityPanel() {
        console.log('Setting up utility panel...');
        
        // Setup utility button toggles
        const utilityBtns = {
            'utility-timer-btn': 'timer-overlay',
            'utility-search-btn': 'search-overlay',
            'utility-converter-btn': 'converter-overlay',
            'utility-cost-btn': 'cost-overlay'
        };
        
        Object.entries(utilityBtns).forEach(([btnId, overlayId]) => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', () => {
                    this.toggleOverlay(overlayId);
                });
            }
        });
        
        // Setup overlay close buttons
        document.querySelectorAll('.close-widget').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                const targetOverlay = e.target.getAttribute('data-target');
                if (targetOverlay) {
                    this.closeOverlay(targetOverlay);
                }
            });
        });
        
        // Setup utility functions
        this.setupTimerSystem();
        this.setupSearchSystem();
        this.setupConverterSystem();
        this.setupCostCalculator();
        
        console.log('Utility panel ready');
    }

    toggleOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }

    closeOverlay(overlayId) {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    setupTimerSystem() {
        const addTimerBtn = document.getElementById('quick-create-timer');
        if (addTimerBtn) {
            addTimerBtn.addEventListener('click', () => {
                this.addQuickTimer();
            });
        }
    }

    addQuickTimer() {
        const nameInput = document.getElementById('quick-timer-name');
        const minutesInput = document.getElementById('quick-timer-minutes');
        const secondsInput = document.getElementById('quick-timer-seconds');
        
        const name = nameInput.value || 'Kitchen Timer';
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        
        if (minutes === 0 && seconds === 0) return;
        
        const totalSeconds = minutes * 60 + seconds;
        const timerId = `timer_${this.timerIdCounter++}`;
        
        const timer = {
            id: timerId,
            name: name,
            totalSeconds: totalSeconds,
            remainingSeconds: totalSeconds,
            interval: null,
            isRunning: false
        };
        
        this.activeTimers.set(timerId, timer);
        this.renderActiveTimers();
        
        // Clear inputs
        nameInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
    }

    renderActiveTimers() {
        const container = document.getElementById('active-timers-widget');
        if (!container) return;
        
        if (this.activeTimers.size === 0) {
            container.innerHTML = '<div class="no-timers">No active timers</div>';
            return;
        }
        
        const timersHTML = Array.from(this.activeTimers.values()).map(timer => {
            const minutes = Math.floor(timer.remainingSeconds / 60);
            const seconds = timer.remainingSeconds % 60;
            const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            return `
                <div class="active-timer" data-timer-id="${timer.id}">
                    <div class="timer-name">${timer.name}</div>
                    <div class="timer-display">${timeDisplay}</div>
                    <div class="timer-controls">
                        <button onclick="app.toggleTimer('${timer.id}')" class="timer-toggle">
                            ${timer.isRunning ? '⏸️' : '▶️'}
                        </button>
                        <button onclick="app.resetTimer('${timer.id}')" class="timer-reset">🔄</button>
                        <button onclick="app.removeTimer('${timer.id}')" class="timer-remove">❌</button>
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = timersHTML;
    }

    toggleTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer) return;
        
        if (timer.isRunning) {
            clearInterval(timer.interval);
            timer.isRunning = false;
        } else {
            timer.interval = setInterval(() => {
                timer.remainingSeconds--;
                
                if (timer.remainingSeconds <= 0) {
                    this.timerComplete(timerId);
                }
                
                this.renderActiveTimers();
            }, 1000);
            timer.isRunning = true;
        }
        
        this.renderActiveTimers();
    }

    resetTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer) return;
        
        if (timer.interval) {
            clearInterval(timer.interval);
        }
        
        timer.remainingSeconds = timer.totalSeconds;
        timer.isRunning = false;
        this.renderActiveTimers();
    }

    removeTimer(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (timer && timer.interval) {
            clearInterval(timer.interval);
        }
        
        this.activeTimers.delete(timerId);
        this.renderActiveTimers();
    }

    timerComplete(timerId) {
        const timer = this.activeTimers.get(timerId);
        if (!timer) return;
        
        clearInterval(timer.interval);
        timer.isRunning = false;
        timer.remainingSeconds = 0;
        
        // Show notification
        this.showTimerNotification(timer.name);
        
        // Auto-remove completed timer after 5 seconds
        setTimeout(() => {
            this.removeTimer(timerId);
        }, 5000);
    }

    showTimerNotification(timerName) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'timer-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h4>⏰ Timer Complete!</h4>
                <p>${timerName}</p>
                <button onclick="this.parentElement.parentElement.remove()">OK</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 10000);
        
        // Play notification sound (if available)
        this.playNotificationSound();
    }

    playNotificationSound() {
        // Create audio context for notification sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('Audio notification not available');
        }
    }

    setupSearchSystem() {
        const searchInput = document.getElementById('global-search-input');
        const searchCategory = document.getElementById('search-category');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.performGlobalSearch();
            });
        }
        
        if (searchCategory) {
            searchCategory.addEventListener('change', () => {
                this.performGlobalSearch();
            });
        }
    }

    performGlobalSearch() {
        const query = document.getElementById('global-search-input').value.toLowerCase();
        const category = document.getElementById('search-category').value;
        const resultsContainer = document.getElementById('search-results');
        
        if (!query.trim()) {
            resultsContainer.innerHTML = '<div class="no-results">Type to search across all content...</div>';
            return;
        }
        
        let results = [];
        
        // Search recipes
        if (!category || category === 'recipes') {
            this.appData.recipes.forEach(recipe => {
                const searchText = [
                    recipe.name,
                    recipe.type,
                    ...recipe.ingredients,
                    ...recipe.steps,
                    recipe.tips
                ].join(' ').toLowerCase();
                
                if (searchText.includes(query)) {
                    results.push({
                        type: 'recipe',
                        title: recipe.name,
                        description: `${recipe.type} - ${recipe.ingredients.slice(0, 2).join(', ')}...`,
                        action: () => {
                            this.showSection('recipes');
                            this.showRecipeDetail(recipe.id);
                            this.closeOverlay('search-overlay');
                        }
                    });
                }
            });
        }
        
        // Search equipment
        if (!category || category === 'equipment') {
            this.appData.equipment.forEach(equipment => {
                const searchText = [
                    equipment.name,
                    equipment.capacity,
                    ...equipment.dailyCleaning,
                    ...equipment.operatingSteps
                ].join(' ').toLowerCase();
                
                if (searchText.includes(query)) {
                    results.push({
                        type: 'equipment',
                        title: equipment.name,
                        description: `Capacity: ${equipment.capacity}`,
                        action: () => {
                            this.showSection('equipment');
                            this.closeOverlay('search-overlay');
                        }
                    });
                }
            });
        }
        
        // Render results
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            const resultsHTML = results.map(result => `
                <div class="search-result" onclick="searchResultAction_${results.indexOf(result)}()">
                    <div class="result-type">${result.type}</div>
                    <div class="result-title">${result.title}</div>
                    <div class="result-description">${result.description}</div>
                </div>
            `).join('');
            
            resultsContainer.innerHTML = resultsHTML;
            
            // Create action functions
            results.forEach((result, index) => {
                window[`searchResultAction_${index}`] = result.action;
            });
        }
    }

    setupConverterSystem() {
        // Setup converter tabs
        const converterTabs = document.querySelectorAll('.converter-tab');
        converterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const converterType = tab.getAttribute('data-converter');
                this.showConverterTab(converterType);
            });
        });
        
        // Setup conversion inputs
        this.setupWeightConverter();
        this.setupTemperatureConverter();
        this.setupVolumeConverter();
    }

    showConverterTab(converterType) {
        // Update tab buttons
        document.querySelectorAll('.converter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-converter') === converterType);
        });
        
        // Show/hide content
        document.querySelectorAll('.converter-content').forEach(content => {
            content.classList.toggle('active', content.id === `${converterType}-converter`);
        });
    }

    setupWeightConverter() {
        const weightInput = document.getElementById('weight-input');
        const weightFrom = document.getElementById('weight-from');
        const weightResult = document.getElementById('weight-result');
        
        const convertWeight = () => {
            const value = parseFloat(weightInput.value);
            const fromUnit = weightFrom.value;
            
            if (isNaN(value)) {
                weightResult.textContent = 'Enter values above';
                return;
            }
            
            const conversions = {
                g: { g: 1, kg: 0.001, cup: 0.00423, tbsp: 0.0676, tsp: 0.203 },
                kg: { g: 1000, kg: 1, cup: 4.23, tbsp: 67.6, tsp: 203 },
                cup: { g: 236, kg: 0.236, cup: 1, tbsp: 16, tsp: 48 },
                tbsp: { g: 14.8, kg: 0.0148, cup: 0.0625, tbsp: 1, tsp: 3 },
                tsp: { g: 4.93, kg: 0.00493, cup: 0.0208, tbsp: 0.333, tsp: 1 }
            };
            
            const results = Object.entries(conversions[fromUnit] || {}).map(([unit, factor]) => {
                const convertedValue = (value * factor).toFixed(3);
                return `${convertedValue} ${unit}`;
            }).join(' | ');
            
            weightResult.textContent = results || 'Conversion not available';
        };
        
        if (weightInput && weightFrom) {
            weightInput.addEventListener('input', convertWeight);
            weightFrom.addEventListener('change', convertWeight);
        }
    }

    setupTemperatureConverter() {
        const tempInput = document.getElementById('temp-input');
        const tempFrom = document.getElementById('temp-from');
        const tempResult = document.getElementById('temp-result');
        
        const convertTemperature = () => {
            const value = parseFloat(tempInput.value);
            const fromUnit = tempFrom.value;
            
            if (isNaN(value)) {
                tempResult.textContent = 'Enter temperature above';
                return;
            }
            
            let celsius, fahrenheit;
            
            if (fromUnit === 'c') {
                celsius = value;
                fahrenheit = (value * 9/5) + 32;
            } else {
                fahrenheit = value;
                celsius = (value - 32) * 5/9;
            }
            
            tempResult.innerHTML = `
                ${celsius.toFixed(1)}°C | ${fahrenheit.toFixed(1)}°F
            `;
        };
        
        if (tempInput && tempFrom) {
            tempInput.addEventListener('input', convertTemperature);
            tempFrom.addEventListener('change', convertTemperature);
        }
    }

    setupVolumeConverter() {
        const volumeInput = document.getElementById('volume-input');
        const volumeFrom = document.getElementById('volume-from');
        const volumeResult = document.getElementById('volume-result');
        
        const convertVolume = () => {
            const value = parseFloat(volumeInput.value);
            const fromUnit = volumeFrom.value;
            
            if (isNaN(value)) {
                volumeResult.textContent = 'Enter volume above';
                return;
            }
            
            const conversions = {
                ml: { ml: 1, l: 0.001, cup: 0.00423, oz: 0.0338, tbsp: 0.0676, tsp: 0.203 },
                l: { ml: 1000, l: 1, cup: 4.23, oz: 33.8, tbsp: 67.6, tsp: 203 },
                cup: { ml: 236, l: 0.236, cup: 1, oz: 8, tbsp: 16, tsp: 48 },
                oz: { ml: 29.6, l: 0.0296, cup: 0.125, oz: 1, tbsp: 2, tsp: 6 },
                tbsp: { ml: 14.8, l: 0.0148, cup: 0.0625, oz: 0.5, tbsp: 1, tsp: 3 },
                tsp: { ml: 4.93, l: 0.00493, cup: 0.0208, oz: 0.167, tbsp: 0.333, tsp: 1 }
            };
            
            const results = Object.entries(conversions[fromUnit] || {}).map(([unit, factor]) => {
                const convertedValue = (value * factor).toFixed(3);
                return `${convertedValue} ${unit}`;
            }).join(' | ');
            
            volumeResult.textContent = results || 'Conversion not available';
        };
        
        if (volumeInput && volumeFrom) {
            volumeInput.addEventListener('input', convertVolume);
            volumeFrom.addEventListener('change', convertVolume);
        }
    }

    setupCostCalculator() {
        const costRecipeSelect = document.getElementById('cost-recipe-select');
        const costQuantity = document.getElementById('cost-quantity');
        const costBreakdown = document.getElementById('cost-breakdown');
        
        const calculateCost = () => {
            const recipeId = costRecipeSelect.value;
            const quantity = parseInt(costQuantity.value) || 1;
            
            if (!recipeId) {
                costBreakdown.innerHTML = '<div class="no-selection">Select a recipe to see cost breakdown</div>';
                return;
            }
            
            const recipe = this.appData.recipes.find(r => r.id === recipeId);
            if (!recipe) return;
            
            const totalCost = recipe.costINR * quantity;
            const profitMargin = 0.4; // 40% profit margin
            const sellingPrice = totalCost / (1 - profitMargin);
            
            costBreakdown.innerHTML = `
                <div class="cost-calculation">
                    <h4>${recipe.name}</h4>
                    <div class="cost-line">
                        <span>Base Cost per Unit:</span>
                        <span>₹${recipe.costINR}</span>
                    </div>
                    <div class="cost-line">
                        <span>Quantity:</span>
                        <span>${quantity}</span>
                    </div>
                    <div class="cost-line total">
                        <span>Total Cost:</span>
                        <span>₹${totalCost.toFixed(2)}</span>
                    </div>
                    <div class="cost-line">
                        <span>Suggested Selling Price (40% margin):</span>
                        <span>₹${sellingPrice.toFixed(2)}</span>
                    </div>
                    <div class="cost-line profit">
                        <span>Profit per Unit:</span>
                        <span>₹${(sellingPrice - recipe.costINR).toFixed(2)}</span>
                    </div>
                </div>
            `;
        };
        
        if (costRecipeSelect) {
            costRecipeSelect.addEventListener('change', calculateCost);
        }
        
        if (costQuantity) {
            costQuantity.addEventListener('input', calculateCost);
        }
    }

    updateRecipeSelects() {
        // Update bulk recipe select
        const bulkSelect = document.getElementById('bulk-recipe-select');
        if (bulkSelect) {
            bulkSelect.innerHTML = '<option value="">Choose a recipe...</option>';
            this.appData.recipes.forEach(recipe => {
                const option = document.createElement('option');
                option.value = recipe.id;
                option.textContent = recipe.name;
                bulkSelect.appendChild(option);
            });
        }
        
        // Update cost calculator select
        const costSelect = document.getElementById('cost-recipe-select');
        if (costSelect) {
            costSelect.innerHTML = '<option value="">Choose a recipe...</option>';
            this.appData.recipes.forEach(recipe => {
                const option = document.createElement('option');
                option.value = recipe.id;
                option.textContent = recipe.name;
                costSelect.appendChild(option);
            });
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    setupEmergencyBanner() {
        const emergencyToggle = document.getElementById('emergency-toggle');
        const emergencyBanner = document.getElementById('emergency-banner');
        const hideEmergencyBtn = document.getElementById('hide-emergency-banner');
        
        if (emergencyToggle) {
            emergencyToggle.addEventListener('click', () => {
                this.toggleEmergencyBanner();
            });
        }
        
        if (hideEmergencyBtn) {
            hideEmergencyBtn.addEventListener('click', () => {
                this.hideEmergencyBanner();
            });
        }
    }

    toggleEmergencyBanner() {
        const emergencyBanner = document.getElementById('emergency-banner');
        if (emergencyBanner) {
            this.emergencyBannerVisible = !this.emergencyBannerVisible;
            emergencyBanner.classList.toggle('hidden', !this.emergencyBannerVisible);
        }
    }

    hideEmergencyBanner() {
        const emergencyBanner = document.getElementById('emergency-banner');
        if (emergencyBanner) {
            this.emergencyBannerVisible = false;
            emergencyBanner.classList.add('hidden');
        }
    }

    setupScrollToTop() {
        const scrollBtn = document.getElementById('scroll-to-top');
        if (scrollBtn) {
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollBtn.classList.remove('hidden');
                } else {
                    scrollBtn.classList.add('hidden');
                }
            });
        }
    }

    setupPWA() {
        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                });
        }
        
        // Handle install prompt
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Show install button (you can add this to your UI)
            console.log('PWA install prompt available');
        });
    }
}

// Initialize the app instance
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌴 Paradise Bakes & Cafe Training Manual - Loading...');
    window.app = new ParadiseCafeApp();

    // Keyboard shortcuts for power users
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 't':
                    e.preventDefault();
                    app?.toggleOverlay && app.toggleOverlay('timer-overlay');
                    break;
                case 'f':
                    e.preventDefault();
                    app?.toggleOverlay && app.toggleOverlay('search-overlay');
                    break;
                case 'u':
                    e.preventDefault();
                    app?.toggleOverlay && app.toggleOverlay('converter-overlay');
                    break;
                case 'c':
                    e.preventDefault();
                    app?.toggleOverlay && app.toggleOverlay('cost-overlay');
                    break;
            }
        }
        
        if (e.key === 'Escape') {
            document.querySelectorAll('.timer-overlay, .search-overlay, .converter-overlay, .cost-overlay, .modal').forEach(overlay => {
                overlay.classList.add('hidden');
            });
        }
    });
});
