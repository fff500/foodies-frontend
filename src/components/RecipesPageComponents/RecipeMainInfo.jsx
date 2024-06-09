import classNames from "classnames";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation";
import { PopularRecipes } from "./PopularRecipes";
import styles from "./Recipes.module.css";

export const RecipeMainInfo = ({ data }) => {
  console.log(data);

  const ingredients = [
    {
      _id: "640c2dd963a319ea671e37aa",
      name: "Squid",
      desc: "A type of cephalopod with a soft, cylindrical body and long tentacles, often used in seafood dishes such as calamari or grilled squid.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png",
    },
    {
      _id: "640c2dd963a319ea671e37f5",
      name: "Cabbage",
      desc: "A leafy green or purple vegetable that is often used in salads, coleslaw, and stir-fry dishes, and is also commonly fermented into sauerkraut.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f5.png",
    },
    {
      _id: "640c2dd963a319ea671e3665",
      name: "Baking Powder",
      desc: "Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods. It works by releasing carbon dioxide gas into a batter or dough through an acid-base reaction, causing bubbles in the wet mixture to expand and thus leavening the mixture. The first single-acting baking powder was developed by Birmingham based food manufacturer Alfred Bird in England in 1843. The first double-acting baking powder was developed by Eben Norton Horsford in America in the 1860s.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3665.png",
    },
    {
      _id: "640c2dd963a319ea671e3804",
      name: "Smoked Haddock",
      desc: "Haddock that has been smoked over wood chips, giving it a distinctive smoky flavor",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3804.png",
    },
    {
      _id: "640c2dd963a319ea671e382c",
      name: "Pears",
      desc: "A sweet and juicy fruit with a soft, grainy texture and thin skin.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e382c.png",
    },
    {
      _id: "640c2dd963a319ea671e3770",
      name: "Spring Onions",
      desc: "Also known as scallions or green onions, these are young onions that have a mild flavor and are commonly used as a garnish or ingredient in salads, soups, stir-fries, and other dishes.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3770.png",
    },
    {
      _id: "640c2dd963a319ea671e36e9",
      name: "Ginger Cordial",
      desc: "A sweet and spicy syrup made from ginger often used as a mixer in cocktails or diluted with water to make a non-alcoholic drink.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36e9.png",
    },
    {
      _id: "640c2dd963a319ea671e3861",
      name: "Almond Extract",
      desc: "The almond (Prunus dulcis, syn. Prunus amygdalus) is a species of tree native to Mediterranean climate regions of the Middle East, but widely cultivated elsewhere. The almond is also the name of the edible and widely cultivated seed of this tree. Within the genus Prunus, it is classified with the peach in the subgenus Amygdalus, distinguished from the other subgenera by corrugations on the shell (endocarp) surrounding the seed.\r\n\r\nThe fruit of the almond is a drupe, consisting of an outer hull and a hard shell with the seed, which is not a true nut, inside. Shelling almonds refers to removing the shell to reveal the seed. Almonds are sold shelled or unshelled. Blanched almonds are shelled almonds that have been treated with hot water to soften the seedcoat, which is then removed to reveal the white embryo.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",
    },
    {
      _id: "640c2dd963a319ea671e37e8",
      name: "Tinned Tomatos",
      desc: "Tinned tomatoes are tomatoes that have been canned or preserved in a liquid. They are commonly used in sauces, soups, stews, and other culinary applications.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37e8.png",
    },
    {
      _id: "640c2dd963a319ea671e37c2",
      name: "Minced Beef",
      desc: "Ground beef, commonly used for making burgers, meatballs, and meat sauces.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c2.png",
    },
    {
      _id: "640c2dd963a319ea671e36f9",
      name: "Gruyère",
      desc: "Gruyère is a type of Swiss cheese that is known for its nutty, slightly sweet flavor and smooth, creamy texture. It is often used in cooking and pairs well with foods like potatoes, mushrooms, and bread.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36f9.png",
    },
    {
      _id: "640c2dd963a319ea671e388a",
      name: "Powdered Sugar",
      desc: "Powdered sugar, also called confectioners' sugar or icing sugar, is a finely ground sugar produced by milling granulated sugar into a powdered state. It usually contains a small amount of anti-caking agent to prevent clumping and improve flow",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e388a.png",
    },
    {
      _id: "640c2dd963a319ea671e37bc",
      name: "Stilton Cheese",
      desc: "Blue cheese made from cow's milk, characterized by its strong flavor and creamy texture.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bc.png",
    },
    {
      _id: "640c2dd963a319ea671e365e",
      name: "Pork",
      desc: "Pork is the culinary name for the flesh of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC.\r\n\r\nPork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPig is the most popular meat in the Eastern and non-Muslim parts of Southeastern Asia (Indochina, Philippines, Singapore, East Timor) and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish, Muslim and Rastafarian dietary law, for religious reasons, with several suggested possible causes.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365e.png",
    },
    {
      _id: "640c2dd963a319ea671e375c",
      name: "Sake",
      desc: "Japanese alcoholic beverage made from fermented rice and water, with a mild flavor and a relatively low alcohol content.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e375c.png",
    },
    {
      _id: "640c2dd963a319ea671e3688",
      name: "Cayenne Pepper",
      desc: "A type of chili pepper that is often used to add heat and spice to dishes, with a bright red color and a pungent, fiery flavor that can range from mild to very hot.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3688.png",
    },
    {
      _id: "640c2dd963a319ea671e3704",
      name: "Jalapeno",
      desc: "A type of chili pepper, typically green when unripe, that is commonly used in Mexican and Tex-Mex cuisine. It is moderately spicy and often used in salsas, sauces, and as a topping for nachos.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3704.png",
    },
    {
      _id: "640c2dd963a319ea671e37c4",
      name: "Barbeque Sauce",
      desc: "A sweet and tangy sauce typically used for grilling or marinating meats, made with ingredients like tomato, vinegar, and spices.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37c4.png",
    },
    {
      _id: "640c2dd963a319ea671e3840",
      name: "Scotch Bonnet",
      desc: "Scotch bonnet, also known as bonney peppers, or Caribbean red peppers, is a variety of chili pepper named for its resemblance to a tam o' shanter hat. Also called ata rodo by Yoruba speakers of Nigeria, it is found mainly in the Caribbean islands; it is also found in Guyana (where it is called the ball-of-fire pepper), the Maldives Islands (where it is called githeyo mirus), Panama (where it is called aji chombo) and West Africa. Most Scotch bonnets have a heat rating of 100,000–350,000 Scoville units. For comparison, most jalapeño peppers have a heat rating of 2,500 to 8,000 on the Scoville scale. However, completely sweet varieties of Scotch bonnet are grown on some of the Caribbean islands, called cachucha peppers.\r\n\r\nThese peppers are used to flavour many different dishes and cuisines worldwide and are often used in hot sauces and condiments. The Scotch bonnet has a sweeter flavour and stouter shape, distinct from its habanero relative with which it is often confused, and gives jerk dishes (pork/chicken) and other Caribbean dishes their unique flavour. Scotch bonnets are mostly used in West African, Antiguan, Kittitian/Nevisian, Anguilan, Dominican, St. Lucian, St Vincentian, Grenadian, Trinidadian, Jamaican, Barbadian, Guyanese, Surinamese, Haitian and Cayman cuisines and pepper sauces, though they often show up in other Caribbean recipes. It is also used in Costa Rica and Panama for Caribbean-styled recipes such as rice and beans, Rondón, saus, beef patties, and Ceviche.\r\n\r\nFresh, ripe Scotch bonnets can change from green to yellow to scarlet red, however many other breeds of this pepper can ripen to orange, yellow, peach, or even a chocolate brown.",
      img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3840.png",
    },
  ];
  return (
    <div className={classNames(styles.recipeWrapper)}>
      <div className={classNames(styles.recipeContainers)}>
        <div className={classNames(styles.recipeContainer)}>
          <img
            src={data.thumb}
            alt={data.title}
            className={classNames(styles.imageContainer)}
          />
        </div>
        <div
          className={classNames(
            styles.recipeContainer,
            styles.recipeContainerWrapper,
          )}
        >
          <div className={classNames(styles.recipeMainInfoContainer)}>
            <h3 className={classNames(styles.recipeTitle)}>{data.title}</h3>
            <div className={classNames(styles.recipeLabelContainer)}>
              <span className={classNames(styles.recipeLabel)}>
                {data.category}
              </span>
              <span className={classNames(styles.recipeLabel)}>
                {data.time} min
              </span>
            </div>
            <p className={classNames(styles.recipeText)}>{data.description}</p>
            <button className={classNames(styles.userInfo, styles.resetButton)}>
              <div>
                <img src="" alt="user_img" />
              </div>
              <div className={classNames(styles.userInfoText)}>
                <span className={classNames(styles.userInfoLabelText)}>
                  Created by:
                </span>
                <span className={classNames(styles.userInfoTextName)}>
                  UserName
                </span>
              </div>
            </button>
          </div>

          <div className={classNames(styles.recipeMainInfoContainer)}>
            {/*<RecipeIngredients ingredients={data.ingredients} />*/}
            <RecipeIngredients ingredients={ingredients} />
          </div>

          <div className={classNames(styles.recipeMainInfoContainer)}>
            <RecipePreparation instructions={data.instructions} />
          </div>
        </div>
      </div>
      <PopularRecipes />
    </div>
  );
};
