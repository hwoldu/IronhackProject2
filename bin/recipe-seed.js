require('dotenv').config();

const mongoose = require("mongoose");
const recipes = require("../models/recipeSchema.js");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const recipeSchema = [
  {
    "title": "Roast new potatoes & radishes",
    "level": "easy",
    "ingredients": [
      "600g new potatoes, halved, larger ones quartered",
      "500g radishes, halved, larger ones quartered",
      "4 tbsp olive oil",
      "2 tsp black mustard seeds",
      "1 tsp chilli flakes, plus extra to serve (optional)",
      "30g pumpkin seeds",
      "150g Greek yogurt",
      "2 spring onions, thinly sliced (green parts and all)"
    ],
    "dishType": "main dish",
    "description": "Heat oven to 200C/180C fan/gas 6. Put the potatoes in a saucepan of water, bring to the boil and cook for 8 mins. Drain and leave to steam dry.  Put the potatoes in one roasting tin and the radishes into another. Divide the oil between them, along with the mustard seeds and chilli flakes. Season and give everything a good mix. Put in the oven and roast for 25 mins, then take out the radishes and roast the potatoes for an extra 10 mins until crisp. Meanwhile, toast the pumpkin seeds in a dry frying pan.  Spread the yogurt onto a sharing platter. Pile on the potatoes and radishes, then scatter over the spring onions, pumpkin seeds and a few more chilli flakes, if you like.",
    "image": "",
    "duration": 60,
    "season": "summer"
  },
  {
    "title": "Peach Melba sundae",
    "level": "easy",
    "ingredients": [
      "150ml double cream",
      "½ tsp vanilla extract",
      "40g icing sugar",
      "½ glass champagne or prosecco, to serve (optional)",
      "3 scoops vanilla ice cream (the best quality you can afford)",
      "2 peaches, cut into wedges",
      "75g raspberries",
      "1 tbsp almond flakes, toasted, to serve",
      [
        "For the sauce",
        "75g raspberries",
        "1 tbsp caster sugar",
        "1 lemon, juiced"
      ]
    ],
    "dishType": "dessert",
    "description": "Put a sundae glass or bowl in the freezer to chill. To make the sauce, put the raspberries, sugar and lime juice in a blender, and blitz to a purée, loosening with a splash of water if necessary. Set aside. Meanwhile, whip the cream with the vanilla and icing sugar until it holds its shape, then transfer to a piping bag fitted with a star-shaped nozzle, if you like. Pour the champagne or prosecco (if using) into the chilled glass, then neatly layer balls of ice cream, peach wedges, raspberries, raspberry sauce and cream, finishing with a big swirl of cream on the top. Scatter with the toasted almonds and serve straight away with two spoons.",
    "image": "",
    "duration": 60,
    "season": "summer"
  },
  {
    "title": "Double Tomato Bruschetta",
    "level": "easy",
    "ingredients": [
      "6 tomatoes, chopped",
      "1/2 cup sun-dried tomatoes, packed in oil",
      "3 cloves minced garlic",
      "1/4 cup olive oil",
      "2 tablespoons balsamic vinegar",
      "1/4 cup fresh basil, stems removed",
      "1/4 teaspoon salt",
      "1/4 teaspoon ground black pepper",
      "1 French baguette",
      "2 cups shredded mozzarella cheese"
    ],
    "dishType": "starter",
    "description": "Preheat the oven on broiler setting. In a large bowl, combine the roma tomatoes, sun-dried tomatoes, garlic, olive oil, vinegar, basil, salt, and pepper. Allow the mixture to sit for 10 minutes. Cut the baguette into 3/4-inch slices. On a baking sheet, arrange the baguette slices in a single layer. Broil for 1 to 2 minutes, until slightly brown. Divide the tomato mixture evenly over the baguette slices. Top the slices with mozzarella cheese. Broil for 5 minutes, or until the cheese is melted.",
    "image": "",
    "duration": 35,
    "season": "summer"
  },
  {
    "title": "Fresh Tomato Salsa",
    "level": "easy",
    "ingredients": [
      "3 tomatoes, chopped",
      "1/2 cup finely diced onion",
      "5 chiles, finely chopped",
      "1/2 cup chopped fresh cilantro",
      "1 teaspoon salt",
      "2 teaspoons lemon juice"
    ],
    "dishType": "starter",
    "description": "In a medium bowl, stir together tomatoes, onion, chili peppers, cilantro, salt, and lime juice. Chill for one hour in the refrigerator before serving.",
    "image": "",
    "duration": 70,
    "season": "summer"
  },
  {
    "title": "Roasted vegetables",
    "level": "easy",
    "ingredients": [
      "3 tbsp olive oil",
      "1 aubergine, cut into chunks",
      "2 mixed coloured peppers, such as orange and red, cut into chunks",
      "1 red onion, cut into wedges",
      "2 courgettes, cut into chunks",
      "4 garlic cloves, smashed",
      "3 sprigs of thyme",
      "200g cherry tomatoes",
      "handful of basil leaves",
      "zest of 1 lemon",
      "50g feta, crumbled"
    ],
    "dishType": "main dish",
    "description": "Heat the oven to 200C/180C Fan/gas 6. Mix the oil with the aubergine, peppers, red onion, courgette, garlic and thyme in a bowl with sea salt and black pepper. Tip into a large roasting tin then roast for 30 mins. Add the tomatoes to the pan and return to the oven for 10 mins.   Squeeze the garlic from their skins, remove the thyme then scatter over the basil, lemon zest and crumbled feta.",
    "image": "",
    "duration": 50,
    "season": "summer"
  },
  {
    "title": "Summer berry cake with rose geranium cream",
    "level": "medium",
    "ingredients": [
      "325g butter, at room temperature, plus extra for the tins",
      "425g caster sugar",
      "2 tsp almond extract",
      "½ lemon, finely zested",
      "250g plain yogurt",
      "4 large eggs, at room temperature",
      "375g self-raising flour",
      "225g ground almonds",
      [
        "For the filling and to decorate",
        "200g mascarpone",
        "300ml double cream",
        "1 tbsp lemon juice",
        "icing sugar, to taste, plus extra for dusting",
        "1-2 tsp rose geranium water or rose water, to taste (see tip, below)",
        "800g summer berries (raspberries, blackberries, redcurrants, blackcurrants and strawberries)",
        "4 tbsp caster sugar",
        "rose geranium flowers or other edible flowers"
      ]
    ],
    "dishType": "dessert",
    "description": "Heat the oven to 200C/180C Fan/gas 6. Mix the oil with the aubergine, peppers, red onion, courgette, garlic and thyme in a bowl with sea salt and black pepper. Tip into a large roasting tin then roast for 30 mins. Add the tomatoes to the pan and return to the oven for 10 mins.   Squeeze the garlic from their skins, remove the thyme then scatter over the basil, lemon zest and crumbled feta.",
    "image": "",
    "duration": 75,
    "season": "summer"
  },
  {
    "title": "Sweet potato & butternut squash soup with garlic toast",
    "level": "easy",
    "ingredients": [
      "500g sweet potatoes, peeled and diced",
      "1 butternut squash, peeled, deseeded and diced",
      "1 tbsp clear honey",
      "1 tbsp olive oil, plus a drizzle",
      "2 onions, roughly chopped",
      "3 garlic cloves, crushed",
      "1l vegetable or chicken stock",
      "1 tsp cinnamon",
      "1 tsp grated nutmeg",
      "100ml double cream",
      [
        "For the toast",
        "1 tbsp olive oil",
        "3 garlic cloves, crushed",
        "100g butter, at room temperature",
        "1 tbsp chopped thyme",
        "2 ciabatta loaves, cut into slices"
      ]
    ],
    "dishType": "starter",
    "description": "Heat oven to 220C/200C fan/gas 7. Put the sweet potato and butternut squash on a baking tray and add the honey and a drizzle of olive oil. Roast for 40-45 mins until soft and starting to caramelise at the edges, stirring occasionally.  Meanwhile, fry the onions in 1 tbsp olive oil until soft, then add the garlic, chicken stock, cinnamon and nutmeg. Bring to the boil, and simmer for 5 mins.  Remove the sweet potatoes and butternut squash from the oven and add to the pan with the stock. Blend everything until smooth using a stick blender. Stir in most of the cream and bring back to a gentle simmer, and season with salt and pepper to taste.  To make the lemon & garlic toasts, gently warm the olive oil and garlic in a pan over a low heat for a few mins; the garlic should be softened but not browned. Remove from the heat and mix in the butter and lemon zest until smooth. Leave to cool, then stir in the chives and thyme.  Toast the ciabatta slices, and top each with a spoonful of garlic butter. Serve with the soup, drizzled with the remaining cream, and some black pepper.",
    "image": "/images/winter/recipes/butternut-squash-soup.jpg",
    "duration": 90,
    "season": "winter"
  },
  {
    "title": "Beef & vegetable casserole",
    "level": "easy",
    "ingredients": [
      "2 celery sticks, thickly sliced",
      "1 onion, chopped",
      "2 really big carrots, halved lengthways then very chunkily sliced",
      "5 bay leaves",
      "2 thyme sprigs, 1 whole and 1 leaves picked",
      "1 tbsp vegetable oil",
      "1 tbsp butter",
      "2 tbsp plain flour",
      "2 tbsp tomato purée",
      "2 tbsp Worcestershire sauce",
      "2 beef stock cubes, crumbled",
      "850g stewing beef (featherblade or brisket works nicely), cut into nice large chunks"
    ],
    "dishType": "main dish",
    "description": "Heat oven to 160C/140C fan/gas 3 and put the kettle on.  Put 2 thickly sliced celery sticks, 1 chopped onion, 2 chunkily sliced carrots, 5 bay leaves and 1 whole thyme sprig in a flameproof casserole dish with 1 tbsp vegetable oil and 1 tbsp butter.  Soften for 10 mins, then stir in 2 tbsp plain flour until it doesn’t look dusty anymore, followed by 2 tbsp tomato purée, 2 tbsp Worcestershire sauce and 2 crumbled beef stock cubes.  Gradually stir in 600ml hot water, then tip in 850g stewing beef and bring to a gentle simmer.  Cover and put in the oven for 2hrs 30 mins, then uncover and cook for 30mins – 1hr more until the meat is really tender and the sauce is thickened.  Garnish with the picked leaves of the remaining thyme sprig.",
    "image": "/images/winter/recipes/beef-casserole.jpg",
    "duration": 240,
    "season": "winter"
  },
  {
    "title": "Leek & potato soup",
    "level": "easy",
    "ingredients": [
      "50g butter",
      "450g potatoes, peeled and cut into 1cm pieces",
      "1 small onion, cut the same size as the potatoes",
      "450g white parts of leeks, sliced (save the green tops for another soup or stock)",
      "850ml-1.2litres/1½-2pts light chicken or vegetable stock",
      "142ml carton whipping cream",
      "125ml full-fat milk",
      "the white part of 1 leek",
      "a small knob of butter"
    ],
    "dishType": "starter",
    "description": "Melt 50g butter in a heavy saucepan. When it foams, add 450g potatoes, cut into 1cm cubes, 1 small onion, cut the same as the potatoes, and 450g white parts of leeks, sliced and toss them in the butter until they are well coated.  Season well with salt and freshly ground pepper and toss again. Put a disc of greaseproof paper (called a cartouche by chefs) on top of the vegetables to keep in the steam), then cover the pan with its lid.  Cook over a gentle heat for 10 mins, or until the vegetables are soft but not coloured.  Uncover the pan and discard the paper. Pour in 850ml of the light chicken or vegetable stock, bring to the boil and simmer until the vegetables are just cooked – about 5 minutes. Do not overcook or the soup will lose its fresh flavour.  Purée in a blender until silky smooth, in batches if necessary, then taste and adjust the seasoning. Return the soup to a clean pan and stir in three quarters of a 142ml carton of whipping cream and 125ml full-fat milk.  To finish the soup, finely shred the white part of 1 leek and gently cook it in a small knob of hot butter for a few mins until it is softened but not coloured.  Reheat the soup to a gentle simmer (add some extra stock at this point if the soup is too thick for your liking), then pour into warmed bowls.  Drizzle the remaining cream over each serving, top with a little pile of buttered leeks and a scattering of chives and black pepper and serve at once.",
    "image": "/images/winter/recipes/leek-potatoe-soup.jpg",
    "duration": 45,
    "season": "winter"
  },
  {
    "title": "Parsnip pilaf",
    "level": "difficult",
    "ingredients": [
      "300g basmati rice",
      "1 vegetable stock cube",
      "140g red lentil",
      "1kg parsnip, 200g grated, remainder cut into long chunky wedges",
      "4 tbsp olive oil",
      "zest 2 oranges (use the juice in the sauce)",
      "2 tsp cumin seed",
      "2 tbsp honey",
      "3 onions, sliced",
      "1 tsp each turmeric, ground coriander and caraway",
      "100g raisin",
      "25g butter",
      "yogurt, to serve (optional)",
      [
        "For the herb sauce",
        "25g pistachio",
        "juice 2 oranges",
        "small bunch coriander",
        "small bunch each dill, parsley and mint, stalks discarded"
      ]
    ],
    "dishType": "main dish",
    "description": "Soak the rice in water for 1 hr, then rinse in a sieve until the water runs clear. Heat oven to 200C/180C fan/gas 6. Bring a large saucepan of water to the boil with the stock cube in it. Add the rice and lentils, and simmer for 5 mins until just beginning to soften on the outside. Drain well.  Toss the chunky parsnips with 2 tbsp of the oil, the orange zest, 1 tsp of the cumin seeds and plenty of seasoning in a roasting tin. Roast for 30 mins until golden, then drizzle with honey and roast for 5-10 mins more.  Meanwhile, heat 1 tbsp of the oil in a wide flameproof casserole or deep pan. Fry the onions until softened and browned. Stir in the remaining cumin with the rest of the spices and cook for 1 min, then add the grated parsnips and raisins, and cook for 1 min more. Turn the heat right down and stir in the rice mixture with plenty of seasoning.  Melt the butter and remaining 1 tbsp oil in the big saucepan you cooked the rice in. Tip in the rice mixture and roughly flatten the surface. Poke 3 steam holes in the rice with the handle of a wooden spoon. Cover the pan with a tea towel, then put on the lid. Cook for 20-25 mins more, making sure the heat stays quite low.  To make the herb sauce, whizz all the ingredients to a salsa-like mix. Spread the rice on a serving platter, breaking up any crispy chunks from the bottom. Top with the roasted parsnips and herb sauce, and serve with some yogurt, if you like.",
    "image": "./images/winter/recipes/parsnip-pilaf.jpg",
    "duration": 95,
    "season": "winter"
  },
  {
    "title": "Apple, pear & walnut crumble",
    "level": "easy",
    "ingredients": [
      "500g apple, peeled, cored and cut into large chunks",
      "sprig rosemary (optional)",
      "2 tbsp light muscovado sugar",
      "500g pear, peeled, cored and cut into large chunks",
      "custard or cream, to serve",
      [
        "For the crumble topping",
        "100g pack walnut",
        "175g granary or wholemeal flour (or plain white)",
        "85g butter, diced",
        "85g caster or light muscovado sugar"
      ]
    ],
    "dishType": "dessert",
    "description": "Heat oven to 190C/fan 170C/gas 5. Put the chopped apples, lemon zest, rosemary, if using, and sugar in a saucepan. Add the lemon juice and cook for 3-4 mins. Tip in the pears and cook 2-3 mins more, until the fruits are just beginning to soften. Spoon the fruits and juices into a 1.7 litre pudding dish and flatten slightly.  For the crumble, finely chop half the walnuts in a food processor until reduced to the consistency of ground almonds. Add the flour, butter and sugar and continue to blitz to a coarse or fine crumble mix, whichever you prefer.  Roughly break the remaining walnuts with your fingers and stir into the crumble. Scatter the crumble mix on top of the fruits and bake for 20-25 mins until golden brown. Serve warm with cream or custard.",
    "image": "./images/winter/recipes/crumble.jpg",
    "duration": 60,
    "season": "winter"
  },
  {
    "title": "Vegan pumpkin pie",
    "level": "difficult",
    "ingredients": [
      "2 pumpkins or squashes (about 2kg), peeled, deseeded and cut into chunks (to give 1.2kg prepared weight)",
      "flavourless vegetable oil or sunflower oil, for tossing",
      "plain flour, for dusting",
      "350g sweet shortcrust pastry (we used Jus-Rol, which is vegan)",
      "100ml maple syrup",
      "200g light brown soft sugar",
      "1 tsp salt",
      "1 tsp fresh nutmeg, grated",
      "3 tsp cinnamon",
      "4 tbsp cornflour",
      "600ml oat, almond or soya milk",
      "1 tbsp icing sugar, for dusting"
    ],
    "dishType": "dessert",
    "description": "Heat oven to 180C/160C fan/gas 4. Toss the pumpkin (or squash) in a little oil on a baking tray. Roast until soft enough to squash with the back of a fork – this can take between 40 mins and 1 hr, depending on the type of pumpkin or squash you use. Set aside to cool.  Meanwhile, on a lightly floured work surface, roll out the pastry to the thickness of a £1 coin. Drape it over your rolling pin and lift into a 23cm fluted tart tin. Push the pastry into the corners of the tin using a scrap of excess pastry (you’re less likely to pierce the pastry this way than using a finger). Trim the excess pastry, leaving about 1cm hanging over the edge of the tin; it will shrink as it cooks. Chill for 20 mins.  Increase the oven to 200C/180C fan/gas 6. Line the tart case with a sheet of baking parchment (scrunch it up first to make it more pliable), then fill with baking beans or dry rice. Bake for 15 mins until the sides look golden, then remove the parchment and filling. Bake for another 5-10 mins until the base looks biscuity and dry. Trim the edges with a small, serrated knife.  Tip the roasted pumpkin (or squash), maple syrup, sugar, salt, spices, cornflour and milk into a food processor or blender and blitz until smooth. Pour through a sieve into a small pan and cook for 5 mins, stirring continuously, until thickened.  Fill the tart case with the pumpkin filling, then return to the oven and lower the heat to 180C/160C fan/gas 4. Bake for 30 mins until the filling is set when you wobble the tart tin. Cool for 20-25 mins. Dust with icing sugar and serve warm, or chill and serve within two days.",
    "image": "./images/winter/recipes/pumpkin-pie.jpg",
    "duration": 75,
    "season": "winter"
  },
  {
    "title": "One-pan salmon with roast asparagus",
    "level": "easy",
    "ingredients": [
      "400g new potato, halved if large",
      "2 tbsp olive oil",
      "8 asparagus spears, trimmed and halved",
      "1 tbsp balsamic vinegar",
      "2 salmon fillets, about 140g/5oz each",
      "handful basil leaves"
    ],
    "dishType": "main dish",
    "description": "Heat oven to 220C/fan 200C/gas 7. Tip the potatoes and 1 tbsp of olive oil into an ovenproof dish, then roast the potatoes for 20 mins until starting to brown. Toss the asparagus in with the potatoes, then return to the oven for 15 mins.  Throw in the vinegar and nestle the salmon amongst the vegetables. Drizzle with the remaining oil and return to the oven for a final 10-15 mins until the salmon is cooked. Scatter over the basil leaves and serve everything scooped straight from the dish.",
    "image": "",
    "duration": 20,
    "season": "spring"
  },
  {
    "title": "Butternut squash & sage risotto",
    "level": "easy",
    "ingredients": [
      "1kg butternut squash, peeled and cut into bite-size chunks",
      "3 tbsp olive oil",
      "bunch sage, leaves picked, half roughly chopped, half left whole",
      "1½ l vegetable stock",
      "50g butter",
      "1 onion, finely chopped",
      "300g risotto rice (we used arborio)",
      "1 small glass white wine",
      "50g parmesan or vegetarian alternative, finely grated"
    ],
    "dishType": "main dish",
    "description": "Before you make the risotto, heat oven to 220C/fan 200C/gas 7. Toss the squash in 1 tbsp oil together with the chopped sage. Scatter into a shallow roasting tin and roast for 30 mins until it is brown and soft.  While the squash is roasting, prepare the risotto. Bring the stock to the boil and keep on a low simmer. In a separate pan, melt half the butter over a medium heat. Stir in the onions and sweat gently for 8-10 mins until soft but not coloured, stirring occasionally. Stir the rice into the onions until completely coated in the butter, then stir continuously until the rice is shiny and the edges of the grain start to look transparent.  Pour in the wine and simmer until totally evaporated. Add the stock, a ladleful at a time and stirring the rice over a low heat for 25-30 mins, until the rice is cooked al dente (with a slightly firm, starchy bite in the middle). The risotto should be creamy and slightly soupy. When you draw a wooden spoon through it, there should be a wake that holds for a few moments but not longer.  At the same time, gently fry the whole sage leaves in a little olive oil until crisp, then set aside on kitchen paper. When the squash is cooked, mash half of it to a rough purée and leave half whole. When the risotto is just done, stir though the purée, then add the cheese and butter and leave to rest for a few mins. Serve the risotto scattered with the whole chunks of squash and the crisp sage leaves.",
    "image": "/images/autumn/recipes/butternutsquash.jpg",
    "duration": 50,
    "season": "autumn"
  },
  {
    "title": "Thai pumpkin soup",
    "level": "easy",
    "ingredients": [
      "1½ kg pumpkin or squash, peeled and roughly chopped",
      "4 tsp sunflower oil",
      "1 onion, sliced",
      "1 tbsp grated ginger",
      "1 lemongrass, bashed a little",
      "3-4 tbsp thai red curry paste",
      "400ml can coconut milk",
      "850ml vegetable stock",
      "Lime juice and sugar, for seasoning",
      "1 red chilli, sliced, to serve (optional)"
    ],
    "dishType": "starter",
    "description": "Heat oven to 200c/180c fan/gas 6. Toss the pumpkin or squash in a roasting tin with half the oil and seasoning, then roast for 30 mins until golden and tender. Meanwhile, put the remaining oil in a pan with the onion, ginger and lemongrass. Gently cook for 8-10 mins until softened. Stir in the curry paste for 1 min, followed by the roasted pumpkin, all but 3 tbsp of the coconut milk and the stock. Bring to a simmer, cook for 5 mins, then fish out the lemongrass. Cool for a few mins, then whizz until smooth with a hand blender, or in a large blender in batches. Return to the pan to heat through, seasoning with salt, pepper, lime juice and sugar, if it needs it. Serve drizzled with the remaining coconut milk and scattered with chilli, if you like.",
    "image": "/images/autumn/recipes/thaipumpkinsoup.jpg",
    "duration": 65,
    "season": "autumn"
  },

  {
    "title": "Squash & barley salad with balsamic vinaigrette",
    "level": "easy",
    "ingredients": [
      "1 butternut squash, peeled and cut into long pieces",
      "1 tbsp olive oil",
      "250g pearl barley",
      "300g tenderstem broccoli, cut into medium-size pieces",
      "1 small red onion, diced",
      "2 tbsp pumpkin seeds",
      "1 tbsp small capers, rinsed",
      "15 black olives, pitted",
      "20g pack basil, chopped",
      [
        "For the dressing",
        "5 tbsp balsamic vinegar",
        "6 tbsp extra-virgin olive oil",
        "1 tbsp dijon mustard",
        "1 garlic clove, finely chopped"
      ]
    ],
    "dishType": "main dish",
    "description": "Heat oven to 200C/fan 180C/gas 6. Place the squash on a baking tray and toss with olive oil. Roast for 20 mins. Meanwhile, boil the barley for about 25 mins in salted water until tender, but al dente. While this is happening, whisk the dressing ingredients in a small bowl, then season with salt and pepper. Drain the barley, then tip it into a bowl and pour over the dressing. Mix well and let it cool. Boil the broccoli in salted water until just tender, then drain and rinse in cold water. Drain and pat dry. Add the broccoli and remaining ingredients to the barley and mix well. This will keep for 3 days in the fridge and is delicious warm or cold.",
    "image": "/images/autumn/recipes/squashbarley.jpg",
    "duration": 30,
    "season": "autumn"
  },

  {
    "title": "Autumn chestnut salad",
    "level": "easy",
    "ingredients": [
      "3 slices crusty bread, cut into small cubes",
      "3-4 tbsp olive oil",
      "70g pack lamb's lettuce",
      "175g cooked chestnut, broken into bite-sized pieces",
      "200g cooked beetroot(not in vinegar), peeled and diced",
      "4-6 slices serrano ham, halved",
      "1 eating apple"
      ],
    "dishType": "starter",
    "description": "Heat oven to 200c/fan 180c/gas 6. Toss the bread with the olive oil in a small roasting tin. Season with salt and pepper, spread out over a single layer, then bake for 12-15 mins until the bread is browned and crisp. Tip onto a plate lined with kitchen paper, then leave to cool. For the dressing, mix the onion with the vinegar in a small bowl, then leave for 10 mins. Combine the mustard and oil, season with salt and pepper, then whisk until slightly thickened. Stir into the onions, then set aside. Tip the lettuce into a large bowl. Add the chestnuts to the bowl with the beetroot. Heat a non-stick pan, add the ham, then fry quickly on each side until crisp. Just before serving, thinly slice the apple, then add to the bowl with the croutons. Add the dressing, then toss everything together until glistening. Pile onto 4 or 6 plates and set 2 pieces of ham on top of each.",
    "image": "/images/autumn/recipes/autumnchestnutsalad.jpg",
    "duration": 40,
    "season": "autumn"
  },






]



recipes.create(recipeSchema)
  .then(recipeResults => {
    console.log(`inserted ${recipeResults.length} wohoo recipes!🌮 `);
  })
  .catch(err => {
    console.log("created failure", err);
  });
