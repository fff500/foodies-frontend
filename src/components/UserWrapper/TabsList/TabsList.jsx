import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./TabsList.module.css";
import { ListItems } from "../ListItems/";
import {
  useGetMyOwnRecipesQuery,
  useGetMyFavoritesQuery,
  useGetFollowingQuery,
  useGetFollowersQuery,
} from "../../../redux";
import { ErrorComponent, LoadingSpinner } from "../../shared";

export const TabsList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const {
    data: myRecipes = [],
    isLoading: isLoadingMyRecipes,
    isError: isErrorMyRecipes,
    refetch: refetchMyRecipes,
  } = useGetMyOwnRecipesQuery(undefined, { skip: activeTab !== 0 });

  const {
    data: myFavorites = [],
    isLoading: isLoadingMyFavorites,
    isError: isErrorMyFavorites,
    refetch: refetchMyFavorites,
  } = useGetMyFavoritesQuery(undefined, { skip: activeTab !== 1 });

  const {
    data: followers = {},
    isLoading: isLoadingFollowers,
    isError: isErrorFollowers,
    refetch: refetchFollowers,
  } = useGetFollowersQuery(undefined, { skip: activeTab !== 2 });

  const {
    data: following = {},
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing,
    refetch: refetchFollowing,
  } = useGetFollowingQuery(undefined, { skip: activeTab !== 3 });

  return (
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <TabList className={styles.tabList}>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          MY RECIPES
        </Tab>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          MY FAVORITES
        </Tab>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          FOLLOWERS
        </Tab>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          FOLLOWING
        </Tab>
      </TabList>

      <TabPanel>
        {isLoadingMyRecipes && <LoadingSpinner />}
        {!isLoadingMyRecipes && isErrorMyRecipes && (
          <ErrorComponent onRetry={refetchMyRecipes} />
        )}
        {!isLoadingMyRecipes && !isErrorMyRecipes && (
          <ListItems type={"recipes"} items={myRecipes} />
        )}
      </TabPanel>

      <TabPanel>
        {isLoadingMyFavorites && <LoadingSpinner />}
        {!isLoadingMyFavorites && isErrorMyFavorites && (
          <ErrorComponent onRetry={refetchMyFavorites} />
        )}
        {!isLoadingMyFavorites && !isErrorMyFavorites && (
          <ListItems type={"recipes"} items={myFavorites} />
        )}
      </TabPanel>

      <TabPanel>
        {isLoadingFollowers && <LoadingSpinner />}
        {!isLoadingFollowers && isErrorFollowers && (
          <ErrorComponent onRetry={refetchFollowers} />
        )}
        {!isLoadingFollowers && !isErrorFollowers && (
          <ListItems type={"followers"} items={followers.followersData} />
        )}
      </TabPanel>

      <TabPanel>
        {isLoadingFollowing && <LoadingSpinner />}
        {!isLoadingFollowing && isErrorFollowing && (
          <ErrorComponent onRetry={refetchFollowing} />
        )}
        {!isLoadingFollowing && !isErrorFollowing && (
          <ListItems type={"following"} items={following.followingData} />
        )}
      </TabPanel>
    </Tabs>
  );
};
