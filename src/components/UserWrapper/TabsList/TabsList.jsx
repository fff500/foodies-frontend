import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./TabsList.module.css";
import { RecipePreview } from "../RecipePreview/RecipePreview";

export const TabsList = () => {
  const mockRecipe = {
    _id: "1",
    title: "Chilli prawn lin sdfsdfsdfsdf dsfgd ",
    description:
      "Mix the dressing ingredients in a small bo sfdgsdgd dfgdfb dfg ",
    image:
      "https://img.freepik.com/free-photo/forkful-steaming-spaghetti-with-shiny-noodles-hint-tomato-sauce_157027-4214.jpg?t=st=1718118547~exp=1718122147~hmac=9a846e5138f76b96f224261e4f46a637db3c14f00d74d8581bfcea25d8c0657d&w=2000",
  };

  return (
    <Tabs>
      <TabList className={styles.tabList}>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          MY RECIPES
        </Tab>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          MY FAVORITES
        </Tab>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          FOLLOW
        </Tab>
      </TabList>

      <TabPanel>
        <RecipePreview recipe={mockRecipe} />
        {/* Include your recipe list here */}
      </TabPanel>
      <TabPanel>
        <h2>Content for My Favorites</h2>
        {/* Include your favorites list here */}
      </TabPanel>
      <TabPanel>
        <h2>Content for Follow</h2>
        {/* Include your follow list here */}
      </TabPanel>
    </Tabs>
  );
};
