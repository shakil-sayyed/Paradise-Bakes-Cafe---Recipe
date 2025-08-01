    // In-memory checkbox states (no localStorage per strict instructions)
    this.checkboxStates = new Map();
    
    // Complete application data with 36+ recipes and all 9 equipment items
    this.appData = {
        recipes: [
            // PIZZA RECIPES (12 varieties)
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
                "ingredients": ["Pizza base", "Herbed tomato sauce", "Mushrooms sliced", "Onions diced", "Capsicum strips", "Sweet corn", "Mozzarella cheese 120g"],
                "steps": ["Base par sauce spread karo", "Saari veggies evenly arrange karo", "Cheese generously sprinkle karo", "250°C par 8-9 min bake karo"],
                "tips": ["Veggies ko pre-cook mat karo, pizza me pakenge", "Extra cheese for better pull"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 9,
                "tempC": 250,
                "costINR": 95
            },
            {
                "id": "pizza_mexican_wave",
                "name": "Mexican Wave Pizza",
                "category": "Pizza",
                "type": "Spicy",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "Mexican sauce 60g", "Onions", "Capsicum", "Tomatoes", "Jalapenos", "Black olives", "Mozzarella cheese"],
                "steps": ["Mexican sauce base par spread karo", "Onions, capsicum, tomatoes layer karo", "Jalapenos aur olives add karo", "Cheese top par sprinkle karo", "250°C par 10-12 min bake karo"],
                "tips": ["Jalapenos ko seeds remove karke use karo for less heat", "Extra cheese Mexican flavour balance karta hai"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 12,
                "tempC": 250,
                "costINR": 90
            },
            {
                "id": "pizza_veggie_supreme",
                "name": "Veggie Supreme Pizza",
                "category": "Pizza",
                "type": "Premium",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "Pizza sauce", "Bell peppers mix", "Mushrooms", "Onions", "Tomatoes", "Black olives", "Baby corn", "Mozzarella 140g"],
                "steps": ["Base par pizza sauce evenly lagao", "All vegetables uniformly distribute karo", "Cheese generously add karo", "250°C par 11-13 min bake karo golden tak"],
                "tips": ["Vegetables ko same size me cut karo for uniform cooking", "Extra virgin olive oil drizzle for premium taste"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 13,
                "tempC": 250,
                "costINR": 110
            },
            {
                "id": "pizza_paneer_tikka",
                "name": "Paneer Tikka Pizza",
                "category": "Pizza",
                "type": "Classic",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "Tandoori sauce", "Paneer tikka pieces 150g", "Onions", "Capsicum", "Mozzarella cheese", "Mint chutney drizzle"],
                "steps": ["Tandoori sauce base par apply karo", "Paneer tikka pieces evenly place karo", "Onions aur capsicum add karo", "Mozzarella cheese sprinkle karo", "250°C par 10-11 min bake karo", "Mint chutney drizzle karke serve karo"],
                "tips": ["Paneer tikka pehle se ready rakhna for quick assembly", "Mint chutney fresh taste add karta hai"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 11,
                "tempC": 250,
                "costINR": 95
            },
            {
                "id": "pizza_corn_cheese",
                "name": "Sweet Corn & Cheese Pizza",
                "category": "Pizza",
                "type": "Classic",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "White sauce", "Sweet corn 100g", "Mozzarella cheese 120g", "Oregano", "Chili flakes", "Butter 1 tsp"],
                "steps": ["White sauce base par spread karo", "Sweet corn evenly distribute karo", "Mozzarella cheese generously add karo", "Oregano aur chili flakes sprinkle karo", "250°C par 9-10 min bake karo", "Butter brush karke serve karo"],
                "tips": ["Boiled corn use karo for better texture", "White sauce homemade best hota hai"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 10,
                "tempC": 250,
                "costINR": 75
            },
            {
                "id": "pizza_mushroom_delight",
                "name": "Mushroom Delight Pizza",
                "category": "Pizza",
                "type": "Gourmet",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "Garlic butter sauce", "Mixed mushrooms 120g", "Onions", "Garlic minced", "Mozzarella cheese", "Fresh herbs"],
                "steps": ["Garlic butter sauce base par apply karo", "Mixed mushrooms sauté karke add karo", "Onions aur garlic sprinkle karo", "Mozzarella cheese layer karo", "250°C par 11-12 min bake karo", "Fresh herbs garnish karo"],
                "tips": ["Mushrooms ko pre-sauté karo to remove excess water", "Fresh thyme ya rosemary use karo"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 12,
                "tempC": 250,
                "costINR": 85
            },
            {
                "id": "pizza_spinach_ricotta",
                "name": "Spinach Ricotta Pizza",
                "category": "Pizza",
                "type": "Gourmet",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "White sauce", "Fresh spinach 80g", "Ricotta cheese 60g", "Mozzarella 100g", "Garlic", "Nutmeg pinch"],
                "steps": ["White sauce base par spread karo", "Spinach leaves evenly distribute karo", "Ricotta cheese dollops me add karo", "Mozzarella sprinkle karo", "Garlic aur nutmeg add karo", "250°C par 10-11 min bake karo"],
                "tips": ["Spinach ko fresh use karo, wilted nahi", "Ricotta cheese creamy texture deta hai"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 11,
                "tempC": 250,
                "costINR": 100
            },
            {
                "id": "pizza_bbq_veggie",
                "name": "BBQ Veggie Pizza",
                "category": "Pizza",
                "type": "Fusion",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "BBQ sauce", "Grilled vegetables mix", "Red onions", "Bell peppers", "Mozzarella cheese", "Smoked paprika"],
                "steps": ["BBQ sauce base par brush karo", "Grilled vegetables arrange karo", "Red onions aur bell peppers add karo", "Mozzarella cheese sprinkle karo", "Smoked paprika dust karo", "250°C par 11-12 min bake karo"],
                "tips": ["Vegetables ko light char karo for smoky flavor", "BBQ sauce thick consistency me use karo"],
                "equipment": ["Commercial Electric Pizza Oven", "Commercial Electric Grill"],
                "cookTimeMin": 12,
                "tempC": 250,
                "costINR": 90
            },
            {
                "id": "pizza_quattro_formaggio",
                "name": "Quattro Formaggio Pizza",
                "category": "Pizza",
                "type": "Premium",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "White sauce", "Mozzarella 50g", "Cheddar 40g", "Parmesan 30g", "Processed cheese 40g", "Black pepper", "Oregano"],
                "steps": ["White sauce thin layer apply karo", "Char cheese ko quarters me divide karo", "Each quarter me different cheese sprinkle karo", "Black pepper aur oregano add karo", "250°C par 9-10 min bake karo cheese melt hone tak"],
                "tips": ["Cheese balance maintain karo for perfect flavor", "Low temperature pe bake karo cheese burn na ho"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 10,
                "tempC": 230,
                "costINR": 120
            },
            {
                "id": "pizza_pesto_veggie",
                "name": "Pesto Veggie Pizza",
                "category": "Pizza",
                "type": "Gourmet",
                "sizes": ["7\"", "10\""],
                "ingredients": ["Pizza base", "Basil pesto sauce", "Cherry tomatoes", "Zucchini slices", "Red onions", "Mozzarella cheese", "Pine nuts", "Fresh basil"],
                "steps": ["Pesto sauce base par spread karo", "Cherry tomatoes halves karo aur arrange karo", "Zucchini aur red onions add karo", "Mozzarella sprinkle karo", "250°C par 11-12 min bake karo", "Pine nuts aur fresh basil garnish karo"],
                "tips": ["Pesto sauce fresh basil se banao", "Pine nuts roasted use karo for crunch"],
                "equipment": ["Commercial Electric Pizza Oven"],
                "cookTimeMin": 12,
                "tempC": 250,
                "costINR": 110
            },

            // BURGER RECIPES (12 varieties)
            {
                "id": "burger_aloo_tikki",
                "name": "Classic Aloo Tikki Burger",
                "category": "Burger",
                "type": "Street Style",
                "ingredients": ["Burger bun", "120g aloo tikki", "20g mayo", "Lettuce", "Tomato slice", "Cheese slice", "Onion rings"],
                "steps": ["Tikki ko 180°C fryer me 3-4 min fry karo", "Bun ko light toast karo", "Mayo spread karo bottom bun par", "Lettuce, tikki, cheese, tomato, onion rings layer karo", "Top bun place karke serve karo"],
                "tips": ["Tikki ko fry karte waqt oil 180°C par maintain karo", "Bun ko inside toast karo for crispiness"],
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
                "ingredients": ["Bun", "Grilled paneer tikka 100g", "Mint mayo", "Onion rings", "Tomato", "Lettuce", "Cucumber"],
                "steps": ["Paneer tikka ko grill karo", "Bun toast karo", "Mint mayo spread karo", "Assemble all ingredients layer by layer", "Serve hot with fries"],
                "tips": ["Paneer ko 4 hours marinate karo for best flavour", "Mint mayo fresh banao"],
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
                "ingredients": ["Premium bun", "Veg patty", "Cheese slice", "Lettuce", "Tomato", "Cucumber", "Special sauce", "Pickles"],
                "steps": ["Patty fry karke cheese melt karo", "Bun toast karo", "Special sauce spread karo", "Layer wise assemble karo", "Pickles add karke serve karo"],
                "tips": ["Premium bun ka texture maintain karo", "Special sauce ko homemade banao"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 7,
                "tempC": 180,
                "costINR": 75
            },
            {
                "id": "burger_maharaja_veg",
                "name": "Maharaja Veg Burger",
                "category": "Burger",
                "type": "Premium",
                "ingredients": ["Sesame bun", "Crispy veg patty 150g", "Cheese slice 2pc", "Lettuce", "Tomato", "Onion", "Thousand island sauce", "Pickled jalapenos"],
                "steps": ["Large patty ko golden fry karo", "Sesame bun toast karo", "Thousand island sauce generously apply karo", "Double cheese layer karo", "All veggies aur jalapenos assemble karo", "Secure with picks aur serve karo"],
                "tips": ["Extra large patty premium feel deta hai", "Sauce distribution uniform rakho"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 9,
                "tempC": 180,
                "costINR": 95
            },
            {
                "id": "burger_mcspicy_veg",
                "name": "McSpicy Veg Burger",
                "category": "Burger",
                "type": "Spicy",
                "ingredients": ["Bun", "Spicy veg patty", "Spicy mayo", "Lettuce", "Tomato", "Red chili flakes", "Hot sauce"],
                "steps": ["Spicy patty ko crispy fry karo", "Bun toast karo", "Spicy mayo apply karo", "Lettuce aur tomato layer karo", "Chili flakes sprinkle karo", "Hot sauce drops add karo"],
                "tips": ["Spice level customer preference ke according adjust karo", "Mayo me sriracha mix karo for extra heat"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 6,
                "tempC": 180,
                "costINR": 70
            },
            {
                "id": "burger_crispy_veg",
                "name": "Crispy Veg Burger",
                "category": "Burger",
                "type": "Classic",
                "ingredients": ["Burger bun", "Crispy veg patty", "Mayo", "Lettuce", "Tomato", "Cheese", "Onion", "Ketchup"],
                "steps": ["Patty ko extra crispy fry karo", "Bun inside toast karo", "Mayo aur ketchup spread karo", "Crispy patty place karo", "Fresh veggies layer karo", "Cheese top par melt karo"],
                "tips": ["Double frying se extra crispiness milti hai", "Patty hot serve karo for best taste"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 7,
                "tempC": 180,
                "costINR": 55
            },
            {
                "id": "burger_cheese_burst",
                "name": "Cheese Burst Burger",
                "category": "Burger",
                "type": "Cheesy",
                "ingredients": ["Bun", "Veg patty", "Cheese sauce", "Mozzarella", "Cheddar slice", "Lettuce", "Tomato", "Cheese powder"],
                "steps": ["Patty fry karo", "Bun toast karo", "Cheese sauce generously apply karo", "Patty par mozzarella melt karo", "Cheddar slice add karo", "Veggies layer karo", "Cheese powder dust karo"],
                "tips": ["Multiple cheese varieties use karo for burst effect", "Cheese sauce warm serve karo"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 8,
                "tempC": 180,
                "costINR": 80
            },
            {
                "id": "burger_mushroom_swiss",
                "name": "Mushroom Swiss Burger",
                "category": "Burger",
                "type": "Gourmet",
                "ingredients": ["Artisan bun", "Mushroom patty", "Swiss cheese", "Sautéed mushrooms", "Caramelized onions", "Garlic aioli", "Arugula"],
                "steps": ["Mushroom patty grill karo", "Swiss cheese melt karo patty par", "Mushrooms aur onions sauté karo", "Bun toast karo", "Garlic aioli spread karo", "All ingredients assemble karo", "Arugula garnish karo"],
                "tips": ["Mushrooms different varieties mix karo", "Onions slow caramelize karo for sweetness"],
                "equipment": ["Commercial Electric Grill"],
                "cookTimeMin": 12,
                "tempC": 200,
                "costINR": 90
            },
            {
                "id": "burger_tandoori_paneer",
                "name": "Tandoori Paneer Burger",
                "category": "Burger",
                "type": "Indian Fusion",
                "ingredients": ["Naan bun", "Tandoori paneer 120g", "Mint chutney", "Yogurt sauce", "Red onions", "Cucumber", "Tomato", "Chat masala"],
                "steps": ["Paneer ko tandoori masala me marinate karo", "Naan bun grill karo", "Paneer grill karo till charred", "Mint chutney aur yogurt sauce apply karo", "Fresh veggies add karo", "Chat masala sprinkle karke serve karo"],
                "tips": ["Paneer ko 2 hours marinate karo minimum", "Naan bun Indian touch deta hai"],
                "equipment": ["Commercial Electric Grill"],
                "cookTimeMin": 10,
                "tempC": 220,
                "costINR": 85
            },
            {
                "id": "burger_rajma_patty",
                "name": "Rajma Patty Burger",
                "category": "Burger",
                "type": "Healthy",
                "ingredients": ["Whole wheat bun", "Rajma patty", "Avocado slices", "Sprouts", "Tomato", "Lettuce", "Hung curd sauce", "Flax seeds"],
                "steps": ["Rajma patty shallow fry karo", "Wheat bun toast karo", "Hung curd sauce apply karo", "Avocado slices layer karo", "Sprouts aur veggies add karo", "Flax seeds sprinkle karo"],
                "tips": ["Rajma patty binding ke liye breadcrumbs use karo", "Avocado fresh use karo"],
                "equipment": ["Commercial Electric Grill"],
                "cookTimeMin": 8,
                "tempC": 180,
                "costINR": 75
            },
            {
                "id": "burger_quinoa_veggie",
                "name": "Quinoa Veggie Burger",
                "category": "Burger",
                "type": "Healthy",
                "ingredients": ["Multigrain bun", "Quinoa patty", "Hummus", "Roasted vegetables", "Spinach", "Sprouts", "Balsamic glaze"],
                "steps": ["Quinoa patty grill karo", "Vegetables roast karo", "Multigrain bun toast karo", "Hummus spread karo", "Patty aur roasted veggies layer karo", "Spinach aur sprouts add karo", "Balsamic glaze drizzle karo"],
                "tips": ["Quinoa patty me vegetables mix karo for texture", "Hummus protein add karta hai"],
                "equipment": ["Commercial Electric Grill"],
                "cookTimeMin": 15,
                "tempC": 180,
                "costINR": 95
            },
            {
                "id": "burger_falafel",
                "name": "Falafel Burger",
                "category": "Burger",
                "type": "Mediterranean",
                "ingredients": ["Pita bun", "Falafel patties 3pc", "Tahini sauce", "Cucumber", "Tomato", "Red onion", "Lettuce", "Pickled turnips"],
                "steps": ["Falafel patties deep fry karo till golden", "Pita bun warm karo", "Tahini sauce apply karo", "Falafel arrange karo", "Fresh veggies layer karo", "Pickled turnips add karke serve karo"],
                "tips": ["Falafel fresh banao for best taste", "Tahini sauce consistency check karo"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 10,
                "tempC": 180,
                "costINR": 80
            },

            // SANDWICH RECIPES (12 varieties)
            {
                "id": "sandwich_bombay_grill",
                "name": "Bombay Grill Sandwich",
                "category": "Sandwich",
                "type": "Grilled",
                "ingredients": ["Bread slices 3", "Green chutney 2 tbsp", "Boiled potato slices", "Beetroot slices", "Tomato", "Cucumber", "Onion", "Cheese grated 40g", "Chaat masala"],
                "steps": ["Bread par chutney spread karo", "Potato, beetroot, veggies layer karo", "Cheese sprinkle karo, chaat masala dust karo", "Sandwich maker me 4-5 min grill karo", "Triangular cut karke serve karo"],
                "tips": ["Veggies ko evenly slice karo uniform grilling ke liye", "Chutney fresh banao daily"],
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
                "ingredients": ["Bread", "Sweet corn 80g", "Cheese grated 60g", "Mayo", "Butter", "Black pepper", "Herbs"],
                "steps": ["Corn aur cheese mix karo mayo ke saath", "Black pepper aur herbs add karo", "Bread par filling spread karo", "Butter lagake grill karo", "Golden brown tak cook karo"],
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
                "ingredients": ["Bread 3 slices", "Lettuce", "Tomato", "Cucumber", "Cheese", "Mayo", "Mustard sauce", "Potato patty"],
                "steps": ["3 layer sandwich banao", "Each layer me different veggies use karo", "Patty middle layer me add karo", "Toothpick se secure karo", "Triangular cut karo"],
                "tips": ["Bread ko lightly toast karo before assembly", "Presentation ke liye colorful veggies use karo"],
                "equipment": ["Commercial Electric Sandwich Maker"],
                "cookTimeMin": 6,
                "tempC": 160,
                "costINR": 50
            },
            {
                "id": "sandwich_paneer_tikka",
                "name": "Paneer Tikka Sandwich",
                "category": "Sandwich",
                "type": "Grilled",
                "ingredients": ["Bread", "Paneer tikka 100g", "Onions", "Capsicum", "Tomato", "Mint chutney", "Cheese", "Butter"],
                "steps": ["Paneer tikka pieces ready karo", "Bread par mint chutney apply karo", "Tikka aur veggies fill karo", "Cheese sprinkle karo", "Butter se grill karo crispy tak"],
                "tips": ["Tikka pieces bite size me cut karo", "Mint chutney fresh taste deta hai"],
                "equipment": ["Commercial Electric Sandwich Maker", "Commercial Electric Grill"],
                "cookTimeMin": 8,
                "tempC": 200,
                "costINR": 60
            },
            {
                "id": "sandwich_aloo_mast",
                "name": "Aloo Masti Sandwich",
                "category": "Sandwich",
                "type": "Street Style",
                "ingredients": ["Bread", "Spiced potato filling", "Green chutney", "Tamarind chutney", "Onions", "Tomato", "Cheese", "Sev", "Coriander"],
                "steps": ["Spiced aloo filling tayar karo", "Bread par chutneys apply karo", "Aloo filling spread karo", "Onions, tomato add karo", "Cheese aur sev sprinkle karo", "Grill karke coriander garnish karo"],
                "tips": ["Aloo filling me chaat masala add karo", "Double chutney street taste deta hai"],
                "equipment": ["Commercial Electric Sandwich Maker"],
                "cookTimeMin": 6,
                "tempC": 200,
                "costINR": 35
            },
            {
                "id": "sandwich_mushroom_cheese",
                "name": "Mushroom Cheese Sandwich",
                "category": "Sandwich",
                "type": "Gourmet",
                "ingredients": ["Bread", "Mushrooms sliced 100g", "Cheese slices 2pc", "Garlic", "Herbs", "Butter", "Mayo", "Black pepper"],
                "steps": ["Mushrooms garlic ke saath sauté karo", "Bread par mayo apply karo", "Mushroom filling spread karo", "Cheese slices layer karo", "Herbs aur pepper add karo", "Butter se grill karo"],
                "tips": ["Mushrooms excess water nikaal ke use karo", "Fresh herbs better taste dete hai"],
                "equipment": ["Commercial Electric Sandwich Maker"],
                "cookTimeMin": 7,
                "tempC": 180,
                "costINR": 55
            },
            {
                "id": "sandwich_veggie_supreme",
                "name": "Veggie Supreme Sandwich",
                "category": "Sandwich",
                "type": "Healthy",
                "ingredients": ["Brown bread", "Lettuce", "Tomato", "Cucumber", "Capsicum", "Sprouts", "Avocado", "Hummus", "Cheese", "Olive oil"],
                "steps": ["Brown bread light toast karo", "Hummus spread karo", "Avocado slices layer karo", "All fresh veggies arrange karo", "Sprouts add karo", "Cheese aur olive oil drizzle karo"],
                "tips": ["Avocado ripe use karo", "Sprouts fresh aur crunchy hone chahiye"],
                "equipment": ["Commercial Electric Sandwich Maker"],
                "cookTimeMin": 5,
                "tempC": 160,
                "costINR": 65
            },
            {
                "id": "sandwich_italian_veggie",
                "name": "Italian Veggie Sandwich",
                "category": "Sandwich",
                "type": "Continental",
                "ingredients": ["Focaccia bread", "Grilled zucchini", "Bell peppers", "Eggplant", "Mozzarella", "Basil pesto", "Sun-dried tomatoes", "Balsamic glaze"],
                "steps": ["Vegetables grill karo", "Focaccia slice karo", "Pesto spread karo", "Grilled veggies layer karo", "Mozzarella add karo", "Sun-dried tomatoes place karo", "Balsamic glaze drizzle karo"],
                "tips": ["Vegetables char marks ke saath grill karo", "Pesto fresh basil se banao"],
                "equipment": ["Commercial Electric Grill"],
                "cookTimeMin": 12,
                "tempC": 200,
                "costINR": 75
            },
            {
                "id": "sandwich_caprese",
                "name": "Caprese Sandwich",
                "category": "Sandwich",
                "type": "Continental",
                "ingredients": ["Ciabatta bread", "Fresh mozzarella", "Tomatoes", "Fresh basil", "Balsamic reduction", "Olive oil", "Salt", "Black pepper"],
                "steps": ["Ciabatta slice karke toast karo", "Mozzarella thick slices karo", "Tomatoes fresh slice karo", "Basil leaves arrange karo", "Olive oil aur balsamic drizzle karo", "Salt pepper season karo"],
                "tips": ["Mozzarella fresh use karo", "Tomatoes room temperature par serve karo"],
                "equipment": ["Commercial Electric Sandwich Maker"],
                "cookTimeMin": 5,
                "tempC": 160,
                "costINR": 80
            },
            {
                "id": "sandwich_falafel_wrap",
                "name": "Falafel Wrap Sandwich",
                "category": "Sandwich",
                "type": "Mediterranean",
                "ingredients": ["Pita bread", "Falafel balls 5pc", "Hummus", "Tahini sauce", "Cucumber", "Tomato", "Red onion", "Lettuce", "Pickles"],
                "steps": ["Falafel balls fry karo", "Pita bread warm karo", "Hummus spread karo", "Falafel arrange karo", "Fresh veggies add karo", "Tahini sauce drizzle karo", "Wrap style me roll karo"],
                "tips": ["Falafel crispy outside, soft inside hona chahiye", "Pita bread fresh use karo"],
                "equipment": ["Commercial Electric Deep Fryer"],
                "cookTimeMin": 8,
                "tempC": 180,
                "costINR": 70
            },
            {
                "id": "sandwich_mexican_quesadilla",
                "name": "Mexican Quesadilla Sandwich",
                "category": "Sandwich",
                "type": "Mexican",
                "ingredients": ["Tortilla", "Mixed vegetables", "Cheese blend", "Beans", "Salsa", "Guacamole", "Sour cream", "Jalapenos"],
                "steps": ["Vegetables sauté karo", "Tortilla par cheese spread karo", "Veggie filling add karo", "Beans aur jalapenos sprinkle karo", "Fold karke grill karo", "Salsa, guacamole ke saath serve karo"],
                "tips": ["Cheese blend Mexican flavor deta hai", "Folding carefully karo filling spill na ho"],
                "equipment": ["Commercial Electric Grill"],
                "cookTimeMin": 10,
                "tempC": 200,
                "costINR": 75
            },
            {
                "id": "sandwich_open_bruschetta",
                "name": "Open Bruschetta Sandwich",
                "category": "Sandwich",
                "type": "Continental",
                "ingredients": ["Baguette slices", "Tomatoes diced", "Garlic", "Fresh basil", "Mozzarella balls", "Balsamic vinegar", "Olive oil", "Salt"],
                "steps": ["Baguette slices toast karo", "Garlic rub karo bread par", "Tomato basil mixture prepare karo", "Mixture bread par top karo", "Mozzarella balls add karo", "Balsamic aur olive oil drizzle karo"],
                "tips": ["Tomatoes fresh aur firm use karo", "Garlic light rub karo, strong na ho"],
                "equipment": ["Commercial Electric Sandwich Maker"],
                "cookTimeMin": 6,
                "tempC": 180,
                "costINR": 65
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
        this.setupHamburgerMenu(); // Setup hamburger menu
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
        console.log('✅ Paradise Bakes & Cafe Training App fully initialized with 36+ recipes');
    }, 300);
}

initializeDefaultStates() {
    this.showSection('home');
    this.showRecipeCategory('pizza');
    this.showMaintenancePeriod('daily');
    this.showSafetyTab('personal');
    this.updateRecipeSelects();
}

// Setup hamburger menu functionality
setupHamburgerMenu() {
    console.log('Setting up hamburger menu...');
    
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (hamburgerToggle && mainNav) {
        hamburgerToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked');
            mainNav.classList.toggle('mobile-open');
            
            // Update hamburger icon
            if (mainNav.classList.contains('mobile-open')) {
                hamburgerToggle.innerHTML = '✕';
                hamburgerToggle.setAttribute('aria-label', 'Close navigation');
            } else {
                hamburgerToggle.innerHTML = '☰';
                hamburgerToggle.setAttribute('aria-label', 'Toggle navigation');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('mobile-open') &&
                !mainNav.contains(e.target) &&
                !hamburgerToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('mobile-open')) {
                this.closeMobileMenu();
            }
        });
    }
    
    console.log('Hamburger menu setup complete');
}

closeMobileMenu() {
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mainNav && hamburgerToggle) {
        mainNav.classList.remove('mobile-open');
        hamburgerToggle.innerHTML = '☰';
        hamburgerToggle.setAttribute('aria-label', 'Toggle navigation');
    }
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
            this.closeMobileMenu(); // Close mobile menu when navigating
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
        if (e.target.matches('.category-btn[data-category]')) {
            const category = e.target.getAttribute('data-category');
            this.showRecipeCategory(category);
        }
    });
}

showRecipeCategory(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    // Show corresponding section
    document.querySelectorAll('.recipe-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${category}-recipes`).classList.add('active');
    
    this.currentRecipeCategory = category;
}

setupRecipeSearch() {
    const searchInput = document.getElementById('recipe-search-input');
    const typeFilter = document.getElementById('recipe-type-filter');

    if (searchInput) {
        searchInput.addEventListener('input', () => this.filterRecipes());
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', () => this.filterRecipes());
    }
}

filterRecipes() {
    const searchTerm = document.getElementById('recipe-search-input').value.toLowerCase();
    const typeFilter = document.getElementById('recipe-type-filter').value;
    
    const allCards = document.querySelectorAll('.recipe-card');
    
    allCards.forEach(card => {
        const recipeName = card.querySelector('h4').textContent.toLowerCase();
        const recipeType = card.querySelector('.recipe-type').textContent;
        
        const matchesSearch = recipeName.includes(searchTerm);
        const matchesType = !typeFilter || recipeType === typeFilter;
        
        if (matchesSearch && matchesType) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

setupRecipeModal() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.recipe-card')) {
            const card = e.target.closest('.recipe-card');
            const recipeId = card.getAttribute('data-recipe-id');
            this.openRecipeModal(recipeId);
        }
    });

    // Close modal handlers
    document.addEventListener('click', (e) => {
        if (e.target.matches('.close[data-modal]') || e.target.matches('.modal')) {
            const modalId = e.target.getAttribute('data-modal') || 'recipe-modal';
            this.closeModal(modalId);
        }
    });
}

openRecipeModal(recipeId) {
    const recipe = this.appData.recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('recipe-modal-content');
    
    const equipment = recipe.equipment ? recipe.equipment.join(', ') : 'Standard kitchen equipment';
    const cookTime = recipe.cookTimeMin ? `${recipe.cookTimeMin} minutes` : 'Variable';
    const temp = recipe.tempC ? `${recipe.tempC}°C` : 'As needed';
    
    modalContent.innerHTML = `
        <div class="recipe-modal-header">
            <h3>${recipe.name}</h3>
            <div class="recipe-modal-meta">
                <span class="recipe-type">${recipe.type}</span>
                ${recipe.sizes ? `<span class="recipe-sizes">${recipe.sizes.join(' | ')}</span>` : ''}
            </div>
        </div>
        
        <div class="recipe-modal-section">
            <h4>Ingredients</h4>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        
        <div class="recipe-modal-section">
            <h4>Cooking Steps (Hinglish)</h4>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        
        ${recipe.tips && recipe.tips.length > 0 ? `
            <div class="recipe-modal-section">
                <h4>Chef's Tips</h4>
                <div class="chef-tips">
                    ${recipe.tips.map(tip => `• ${tip}`).join('<br>')}
                </div>
            </div>
        ` : ''}
        
        <div class="recipe-modal-section">
            <h4>Equipment & Details</h4>
            <p><strong>Equipment:</strong> ${equipment}</p>
            <p><strong>Cooking Time:</strong> ${cookTime}</p>
            <p><strong>Temperature:</strong> ${temp}</p>
            ${recipe.costINR ? `<p><strong>Estimated Cost:</strong> ₹${recipe.costINR}</p>` : ''}
        </div>
        
        ${recipe.storage ? `
            <div class="recipe-modal-section">
                <h4>Storage & Reheating</h4>
                <p><strong>Storage:</strong> ${recipe.storage}</p>
                ${recipe.reheat ? `<p><strong>Reheating:</strong> ${recipe.reheat}</p>` : ''}
            </div>
        ` : ''}
    `;

    modal.classList.remove('hidden');
}

closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

setupEquipmentAccordion() {
    const equipmentAccordion = document.getElementById('equipment-accordion');
    if (!equipmentAccordion) return;

    equipmentAccordion.innerHTML = this.appData.equipment.map(equipment => {
        const capacity = equipment.capacity || 'Standard capacity';
        const maxTemp = equipment.maxTempC ? `Max: ${equipment.maxTempC}°C` : '';
        const tempRange = equipment.tempRange || '';
        const power = equipment.power || 'Standard power';
        
        return `
            <div class="equipment-item">
                <div class="equipment-header" data-equipment="${equipment.id}">
                    <div>
                        <h3>${equipment.name}</h3>
                        <div class="equipment-specs">
                            <span class="spec">${capacity}</span>
                            ${maxTemp ? `<span class="spec">${maxTemp}</span>` : ''}
                            ${tempRange ? `<span class="spec">${tempRange}</span>` : ''}
                            <span class="spec">${power}</span>
                        </div>
                    </div>
                    <span class="accordion-arrow">▼</span>
                </div>
                <div class="equipment-content" id="${equipment.id}-content">
                    <div class="equipment-detail">
                        <h4>Daily Cleaning</h4>
                        <ul>
                            ${equipment.dailyCleaning.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="equipment-detail">
                        <h4>Weekly Maintenance</h4>
                        <ul>
                            ${equipment.weeklyMaintenance.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="equipment-detail">
                        <h4>Monthly Maintenance</h4>
                        <ul>
                            ${equipment.monthlyMaintenance.map(task => `<li>${task}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="equipment-detail">
                        <h4>Operating Steps</h4>
                        <ol>
                            ${equipment.operatingSteps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                    
                    <div class="equipment-detail">
                        <h4>Safety Notes</h4>
                        <ul>
                            ${equipment.safetyNotes.map(note => `<li>${note}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Setup accordion functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.equipment-header')) {
            const header = e.target.closest('.equipment-header');
            const equipmentId = header.getAttribute('data-equipment');
            const content = document.getElementById(`${equipmentId}-content`);
            const arrow = header.querySelector('.accordion-arrow');
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                arrow.style.transform = 'rotate(0deg)';
            } else {
                // Close all other accordions
                document.querySelectorAll('.equipment-content.active').forEach(openContent => {
                    openContent.classList.remove('active');
                });
                document.querySelectorAll('.accordion-arrow').forEach(arr => {
                    arr.style.transform = 'rotate(0deg)';
                });
                
                // Open this accordion
                content.classList.add('active');
                arrow.style.transform = 'rotate(180deg)';
            }
        }
    });
}

setupSafetySystem() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.safety-tab[data-tab]')) {
            const tab = e.target.getAttribute('data-tab');
            this.showSafetyTab(tab);
        }
    });
    
    this.setupCheckboxPersistence('safety');
}

showSafetyTab(tab) {
    // Update active tab
    document.querySelectorAll('.safety-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    // Show corresponding content
    document.querySelectorAll('.safety-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}-safety`).classList.add('active');
    
    this.currentSafetyTab = tab;
}

setupBulkPrep() {
    this.updateRecipeSelects();
    
    const recipeSelect = document.getElementById('recipe-select');
    const targetQuantity = document.getElementById('target-quantity');
    
    if (recipeSelect) {
        recipeSelect.addEventListener('change', () => this.updateScaledRecipe());
    }
    
    if (targetQuantity) {
        targetQuantity.addEventListener('input', () => this.updateScaledRecipe());
    }
}

updateRecipeSelects() {
    const recipeSelect = document.getElementById('recipe-select');
    const costRecipeSelect = document.getElementById('cost-recipe');
    
    const options = this.appData.recipes.map(recipe => 
        `<option value="${recipe.id}">${recipe.name}</option>`
    ).join('');
    
    if (recipeSelect) {
        recipeSelect.innerHTML = '<option value="">Choose a recipe...</option>' + options;
    }
    
    if (costRecipeSelect) {
        costRecipeSelect.innerHTML = '<option value="">Choose a recipe...</option>' + options;
    }
}

updateScaledRecipe() {
    const recipeId = document.getElementById('recipe-select').value;
    const quantity = parseInt(document.getElementById('target-quantity').value) || 1;
    
    const multiplierDisplay = document.getElementById('multiplier');
    const scaledIngredientsDiv = document.querySelector('#scaled-ingredients .scaled-ingredients');
    
    if (multiplierDisplay) {
        multiplierDisplay.textContent = `${quantity}x`;
    }
    
    if (!recipeId || !scaledIngredientsDiv) return;
    
    const recipe = this.appData.recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    scaledIngredientsDiv.innerHTML = recipe.ingredients.map(ingredient => {
        // Simple scaling logic - multiply any numbers found in ingredients
        const scaledIngredient = ingredient.replace(/(\d+\.?\d*)/g, (match) => {
            const num = parseFloat(match);
            return (num * quantity).toString();
        });
        
        return `
            <div class="ingredient-item">
                <span>${scaledIngredient}</span>
            </div>
        `;
    }).join('');
}

setupMaintenance() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.maintenance-btn[data-period]')) {
            const period = e.target.getAttribute('data-period');
            this.showMaintenancePeriod(period);
        }
    });
    
    this.setupCheckboxPersistence('maintenance');
}

showMaintenancePeriod(period) {
    // Update active button
    document.querySelectorAll('.maintenance-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-period="${period}"]`).classList.add('active');

    // Show corresponding content
    document.querySelectorAll('.maintenance-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${period}-maintenance`).classList.add('active');
    
    this.currentMaintenancePeriod = period;
}

setupEmergency() {
    // Emergency procedures are static content, no special setup needed
    console.log('Emergency procedures loaded');
}

setupUtilityPanel() {
    // Timer button
    document.getElementById('timer-btn')?.addEventListener('click', () => {
        this.toggleOverlay('timer-overlay');
    });

    // Search button
    document.getElementById('search-btn')?.addEventListener('click', () => {
        this.toggleOverlay('search-overlay');
    });

    // Converter button
    document.getElementById('converter-btn')?.addEventListener('click', () => {
        this.toggleOverlay('converter-overlay');
    });

    // Cost calculator button
    document.getElementById('cost-btn')?.addEventListener('click', () => {
        this.toggleOverlay('cost-overlay');
    });

    // Close widget buttons
    document.addEventListener('click', (e) => {
        if (e.target.matches('.close-widget[data-overlay]')) {
            const overlayId = e.target.getAttribute('data-overlay');
            this.hideOverlay(overlayId);
        }
    });

    this.setupTimerWidget();
    this.setupSearchWidget();
    this.setupConverterWidget();
    this.setupCostCalculator();
}

toggleOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        if (overlay.classList.contains('hidden')) {
            this.showOverlay(overlayId);
        } else {
            this.hideOverlay(overlayId);
        }
    }
}

showOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

hideOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

setupTimerWidget() {
    const startBtn = document.getElementById('start-timer');
    const nameInput = document.getElementById('timer-name');
    const minutesInput = document.getElementById('timer-minutes');
    const secondsInput = document.getElementById('timer-seconds');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const name = nameInput.value || 'Timer';
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            const totalSeconds = (minutes * 60) + seconds;

            if (totalSeconds > 0) {
                this.startTimer(name, totalSeconds);
                nameInput.value = '';
                minutesInput.value = '';
                secondsInput.value = '';
            }
        });
    }
}

startTimer(name, totalSeconds) {
    const timerId = ++this.timerIdCounter;
    const timer = {
        id: timerId,
        name: name,
        totalSeconds: totalSeconds,
        remainingSeconds: totalSeconds,
        startTime: Date.now(),
        interval: null
    };

    this.activeTimers.set(timerId, timer);
    this.updateTimerDisplay();

    timer.interval = setInterval(() => {
        timer.remainingSeconds--;
        
        if (timer.remainingSeconds <= 0) {
            this.finishTimer(timerId);
        } else {
            this.updateTimerDisplay();
        }
    }, 1000);
}

finishTimer(timerId) {
    const timer = this.activeTimers.get(timerId);
    if (timer) {
        clearInterval(timer.interval);
        timer.remainingSeconds = 0;
        this.updateTimerDisplay();
        
        // Optional: Play sound or show notification
        console.log(`Timer "${timer.name}" finished!`);
    }
}

updateTimerDisplay() {
    const activeTimersDiv = document.getElementById('active-timers');
    if (!activeTimersDiv) return;

    if (this.activeTimers.size === 0) {
        activeTimersDiv.innerHTML = '<p>No active timers</p>';
        return;
    }

    activeTimersDiv.innerHTML = Array.from(this.activeTimers.values()).map(timer => {
        const minutes = Math.floor(timer.remainingSeconds / 60);
        const seconds = timer.remainingSeconds % 60;
        const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const isFinished = timer.remainingSeconds <= 0;
        
        return `
            <div class="timer-item-widget ${isFinished ? 'finished' : 'running'}">
                <div class="timer-widget-header">
                    <span class="timer-widget-name">${timer.name}</span>
                    <button onclick="app.removeTimer(${timer.id})" class="btn btn--sm">Remove</button>
                </div>
                <div class="timer-widget-display">${timeDisplay}</div>
                ${isFinished ? '<div style="color: var(--color-error); font-weight: bold;">⏰ TIME\'S UP!</div>' : ''}
            </div>
        `;
    }).join('');
}

removeTimer(timerId) {
    const timer = this.activeTimers.get(timerId);
    if (timer) {
        clearInterval(timer.interval);
        this.activeTimers.delete(timerId);
        this.updateTimerDisplay();
    }
}

setupSearchWidget() {
    const searchInput = document.getElementById('global-search');
    const categoryFilter = document.getElementById('search-category');
    const resultsDiv = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', () => this.performGlobalSearch());
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => this.performGlobalSearch());
    }
}

performGlobalSearch() {
    const query = document.getElementById('global-search').value.toLowerCase();
    const category = document.getElementById('search-category').value;
    const resultsDiv = document.getElementById('search-results');

    if (!query.trim()) {
        resultsDiv.innerHTML = '<p class="no-results">Start typing to search...</p>';
        return;
    }

    let results = [];

    // Search recipes
    if (!category || category === 'recipes') {
        this.appData.recipes.forEach(recipe => {
            if (recipe.name.toLowerCase().includes(query) || 
                recipe.ingredients.some(ing => ing.toLowerCase().includes(query))) {
                results.push({
                    type: 'Recipe',
                    title: recipe.name,
                    snippet: `${recipe.type} - ${recipe.ingredients.slice(0, 2).join(', ')}...`
                });
            }
        });
    }

    // Search equipment
    if (!category || category === 'equipment') {
        this.appData.equipment.forEach(equipment => {
            if (equipment.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'Equipment',
                    title: equipment.name,
                    snippet: `${equipment.capacity} - ${equipment.power}`
                });
            }
        });
    }

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No results found</p>';
    } else {
        resultsDiv.innerHTML = results.map(result => `
            <div class="search-result-item">
                <div class="search-result-category">${result.type}</div>
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-snippet">${result.snippet}</div>
            </div>
        `).join('');
    }
}

setupConverterWidget() {
    // Converter tabs
    document.addEventListener('click', (e) => {
        if (e.target.matches('.converter-tab[data-converter]')) {
            const converter = e.target.getAttribute('data-converter');
            this.showConverter(converter);
        }
    });

    // Weight converter
    ['weight-input', 'weight-from', 'weight-to'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => this.convertWeight());
            element.addEventListener('change', () => this.convertWeight());
        }
    });

    // Volume converter
    ['volume-input', 'volume-from', 'volume-to'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => this.convertVolume());
            element.addEventListener('change', () => this.convertVolume());
        }
    });

    // Temperature converter
    ['temp-input', 'temp-from', 'temp-to'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => this.convertTemperature());
            element.addEventListener('change', () => this.convertTemperature());
        }
    });
}

showConverter(converter) {
    // Update active tab
    document.querySelectorAll('.converter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-converter="${converter}"]`).classList.add('active');

    // Show corresponding content
    document.querySelectorAll('.converter-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${converter}-converter`).classList.add('active');
}

convertWeight() {
    const input = parseFloat(document.getElementById('weight-input').value);
    const from = document.getElementById('weight-from').value;
    const to = document.getElementById('weight-to').value;
    const resultDiv = document.getElementById('weight-result');

    if (!input || input <= 0) {
        resultDiv.textContent = 'Enter a valid weight';
        return;
    }

    // Convert to grams first
    let grams;
    switch (from) {
        case 'g': grams = input; break;
        case 'kg': grams = input * 1000; break;
        case 'oz': grams = input * 28.3495; break;
        case 'lb': grams = input * 453.592; break;
        default: grams = input;
    }

    // Convert from grams to target unit
    let result;
    switch (to) {
        case 'g': result = grams; break;
        case 'kg': result = grams / 1000; break;
        case 'oz': result = grams / 28.3495; break;
        case 'lb': result = grams / 453.592; break;
        default: result = grams;
    }

    resultDiv.textContent = `${result.toFixed(2)} ${to}`;
}

convertVolume() {
    const input = parseFloat(document.getElementById('volume-input').value);
    const from = document.getElementById('volume-from').value;
    const to = document.getElementById('volume-to').value;
    const resultDiv = document.getElementById('volume-result');

    if (!input || input <= 0) {
        resultDiv.textContent = 'Enter a valid volume';
        return;
    }

    // Convert to ml first
    let ml;
    switch (from) {
        case 'ml': ml = input; break;
        case 'l': ml = input * 1000; break;
        case 'cup': ml = input * 240; break;
        case 'tbsp': ml = input * 15; break;
        case 'tsp': ml = input * 5; break;
        default: ml = input;
    }

    // Convert from ml to target unit
    let result;
    switch (to) {
        case 'ml': result = ml; break;
        case 'l': result = ml / 1000; break;
        case 'cup': result = ml / 240; break;
        case 'tbsp': result = ml / 15; break;
        case 'tsp': result = ml / 5; break;
        default: result = ml;
    }

    resultDiv.textContent = `${result.toFixed(2)} ${to}`;
}

convertTemperature() {
    const input = parseFloat(document.getElementById('temp-input').value);
    const from = document.getElementById('temp-from').value;
    const to = document.getElementById('temp-to').value;
    const resultDiv = document.getElementById('temp-result');

    if (isNaN(input)) {
        resultDiv.textContent = 'Enter a valid temperature';
        return;
    }

    // Convert to Celsius first
    let celsius;
    switch (from) {
        case 'c': celsius = input; break;
        case 'f': celsius = (input - 32) * 5/9; break;
        case 'k': celsius = input - 273.15; break;
        default: celsius = input;
    }

    // Convert from Celsius to target unit
    let result;
    switch (to) {
        case 'c': result = celsius; break;
        case 'f': result = (celsius * 9/5) + 32; break;
        case 'k': result = celsius + 273.15; break;
        default: result = celsius;
    }

    resultDiv.textContent = `${result.toFixed(2)}°${to.toUpperCase()}`;
}

setupCostCalculator() {
    const recipeSelect = document.getElementById('cost-recipe');
    const quantityInput = document.getElementById('cost-quantity');

    if (recipeSelect) {
        recipeSelect.addEventListener('change', () => this.calculateCost());
    }

    if (quantityInput) {
        quantityInput.addEventListener('input', () => this.calculateCost());
    }
}

calculateCost() {
    const recipeId = document.getElementById('cost-recipe').value;
    const quantity = parseInt(document.getElementById('cost-quantity').value) || 1;
    const breakdownDiv = document.getElementById('cost-breakdown');

    if (!recipeId) {
        breakdownDiv.innerHTML = '<p class="no-selection">Select a recipe to see cost breakdown</p>';
        return;
    }

    const recipe = this.appData.recipes.find(r => r.id === recipeId);
    if (!recipe || !recipe.costINR) {
        breakdownDiv.innerHTML = '<p class="no-selection">Cost information not available</p>';
        return;
    }

    const unitCost = recipe.costINR;
    const totalCost = unitCost * quantity;

    breakdownDiv.innerHTML = `
        <div class="cost-item">
            <span>Unit Cost:</span>
            <span>₹${unitCost}</span>
        </div>
        <div class="cost-item">
            <span>Quantity:</span>
            <span>${quantity}</span>
        </div>
        <div class="cost-item">
            <span>Total Cost:</span>
            <span>₹${totalCost}</span>
        </div>
    `;
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
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (this.currentTheme === 'light') {
        html.setAttribute('data-color-scheme', 'dark');
        this.currentTheme = 'dark';
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        html.setAttribute('data-color-scheme', 'light');
        this.currentTheme = 'light';
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

setupEmergencyBanner() {
    const emergencyToggle = document.getElementById('emergency-toggle');
    const emergencyBanner = document.getElementById('emergency-sticky-banner');
    const emergencyClose = document.querySelector('.emergency-close');

    if (emergencyToggle) {
        emergencyToggle.addEventListener('click', () => {
            this.toggleEmergencyBanner();
        });
    }

    if (emergencyClose) {
        emergencyClose.addEventListener('click', () => {
            this.hideEmergencyBanner();
        });
    }
}

toggleEmergencyBanner() {
    const banner = document.getElementById('emergency-sticky-banner');
    if (banner) {
        if (this.emergencyBannerVisible) {
            this.hideEmergencyBanner();
        } else {
            this.showEmergencyBanner();
        }
    }
}

showEmergencyBanner() {
    const banner = document.getElementById('emergency-sticky-banner');
    if (banner) {
        banner.classList.remove('hidden');
        this.emergencyBannerVisible = true;
    }
}

hideEmergencyBanner() {
    const banner = document.getElementById('emergency-sticky-banner');
    if (banner) {
        banner.classList.add('hidden');
        this.emergencyBannerVisible = false;
    }
}

setupScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    
    if (scrollButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.classList.remove('hidden');
            } else {
                scrollButton.classList.add('hidden');
            }
        });

        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

setupPWA() {
    // Basic PWA setup
    console.log('PWA features initialized');
}

setupCheckboxPersistence(category) {
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.getAttribute(`data-${category}`)) {
            const key = e.target.getAttribute(`data-${category}`);
            this.checkboxStates.set(key, e.target.checked);
        }
    });

    // Restore checkbox states
    setTimeout(() => {
        document.querySelectorAll(`input[type="checkbox"][data-${category}]`).forEach(checkbox => {
            const key = checkbox.getAttribute(`data-${category}`);
            if (this.checkboxStates.has(key)) {
                checkbox.checked = this.checkboxStates.get(key);
            }
        });
    }, 100);
}
