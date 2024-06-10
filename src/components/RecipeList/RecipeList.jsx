import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeList.module.css";

const RecipeList = () => {
  const recipeCardsData = [
    {
      title: "Bakewell tart",
      description:
        "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee3522a4ec6b54901c473e81c21790c0f9a53171ef92ce1a5e1bdee28135c035?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Bakewell tart",
      author: "Ivetta",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b7241be463aeb77adb4a1141c21948600b6d87e71e06cf8480817c3961266f44?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Chinon Apple Tarts",
      description:
        "To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon stick, allspice, split vanilla pod and seeds in a medium saucepan.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba201294b0fc4ae8a95e87ea1b44ab949e53b2f1f9b4459570f7887e3c36d1?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Chinon Apple Tarts",
      author: "Nadia",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c912ee8c7d4e9e91fcc39b496aa3a1e3e9da2107331e2be4f7b47bee09a6da1f?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Sticky Toffee Pudding",
      description:
        "Preheat the oven to 180C/160C Fan/Gas 4. Butter a wide shallow 1.7-litre/3-pint ovenproof dish. Put the butter, sugar, eggs, flour, baking powder, bicarbonate of soda and treacle into a mixing bowl.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/658836dc25a0956412b3e1535df198ad983234bd8eb8ddc47dd3e3876a3f2bc6?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Sticky Toffee Pudding",
      author: "Mykhailo",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1b62ebe16981e0839a212ecec7bb03902eb9352bfa2d0af0fe515daceb5cb183?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Carrot Cake",
      description: "For the carrot cake, preheat the oven to 160C/325F/Gas 3.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3e4e30bd25b1720fecd273cb8c6792a296df146dd8e43f15e70495523ce43298?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Carrot Cake",
      author: "Vlad",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4abd77c87e38c86746bf737b8ac94ff623cc2804d981a62d7657f61ef4f3c1?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Eccles Cakes",
      description:
        "To make the pastry, dice the butter and put it in the freezer to go really hard.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/549788bbc4bd849aa95c81049f5c3a63e222072618fd0b5a0f80c7074ff0f5c8?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Eccles Cakes",
      author: "Victoria",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/89e6c3faa3f4e8fdc048548df7dac6ccd5ee9879d0c1b57e4b56e11a1e804301?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Apam balik",
      description:
        "Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/79cf77a85bc00b409632b88391f68624b21e151fec8b5e9bcd1829c2e8f594b9?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Apam balik",
      author: "Andrew",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/911854a5efbc581706fcf75cd830dcac9a95cddc99cec7fb72aba481c220d490?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Apple Frangipan Tart",
      description:
        "Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d248c552e7d3ff90353d361ffbd893777e3ee5521b3477f7037b59b86ce639e6?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Apple Frangipan Tart",
      author: "Olena",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/69748edfb542ce07450397ff0ff201455206b2b4810b22402aa196997b12eb32?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Treacle Tart",
      description:
        "Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6581dc9f55aa2db918947c898e782d740567c8082a6b3f61108a762aa5f7d6?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Treacle Tart",
      author: "Victor",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/93b6882fa02e22d32a2847c8e379baba934e799b406f71317096942a59f8d559?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Peanut Butter Cheesecake",
      description:
        "Oil and line a 20cm round loose-bottomed cake tin with cling film, making it as smooth as possible.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5fe01530c9cf19357082afed2b216b97a6e065c1ed5f2b2ba0265f0c7da9e8fa?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Peanut Butter Cheesecake",
      author: "Oleg",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae5da577dd713fb65678ebce37a108ee50d96a883a63f01123610309f56fb482?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Rocky Road Fudge",
      description:
        "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff5482ace490ab457200a8b45c661b4b162c56104048aa64e6d838f660f5662b?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Rocky Road Fudge",
      author: "Ilona",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a7577a7caaa326b9b189a1414b8d2fa4e843182ef02ebd6ba0f68a28fe5d5d19?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Cashew Ghoriba Biscuits",
      description:
        "Preheat the oven at 180 C / Gas 4. Line a baking tray with greaseproof paper.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3a742d983bdaf864c0330df9aa161ba505455bff84d2e4d042756285e28e5192?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Cashew Ghoriba Biscuits",
      author: "Dmytro",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbfa1441fff8b901c0c18900af2293e139ba04bfe21dce4d81799bf8e346945e?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
    {
      title: "Krispy Kreme Donut",
      description: "Dissolve yeast in warm water in 2 1/2-quart bowl.",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6da697a13225717bcb19ae756274d08f07a3a61c9dfac183eb7837e20e34256?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
      alt: "Krispy Kreme Donut",
      author: "Julia",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/40f0d273a89c26083f4f6658869fc02f478f2ba5d6855d49290bde89415941c5?apiKey=77c5825fa18e4b98b9e68a85e10ff135&",
    },
  ];
  return (
    <div className={styles.container}>
      {recipeCardsData.map((card, index) => (
        <RecipeCard
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
          alt={card.alt}
          author={card.author}
          avatarSrc={card.avatarSrc}
        />
      ))}
    </div>
  );
};

export default RecipeList;
