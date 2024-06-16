import { useState } from "react";
import styles from "./UserWrapper.module.css";
import { UserInfo } from "./UserInfo";
import { ListPagination } from "./ListPagination/ListPagination";
import {
  useGetMyOwnRecipesQuery,
  useGetMyFavoritesQuery,
  useGetFollowingQuery,
  useGetFollowersCurrentUserQuery,
  openModal,
  useGetCurrentUserQuery,
} from "../../redux";
import { useDispatch } from "react-redux";
import { TabsList } from "./TabsList";

export const UserWrapperLoggedIn = () => {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const currentUserQuery = useGetCurrentUserQuery();

  const dispatch = useDispatch();

  const handleLogoutRegisterModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "logout",
      })
    );
  };

  const {
    data: myRecipes = {},
    isLoading: isLoadingMyRecipes,
    isError: isErrorMyRecipes,
    refetch: refetchMyRecipes,
  } = useGetMyOwnRecipesQuery(page, {
    skip: activeTab !== 0,
    refetchOnMountOrArgChange: true,
  });

  const {
    data: myFavorites = {},
    isLoading: isLoadingMyFavorites,
    isError: isErrorMyFavorites,
    refetch: refetchMyFavorites,
  } = useGetMyFavoritesQuery(page, { skip: activeTab !== 1 });

  const {
    data: followers = {},
    isLoading: isLoadingFollowers,
    isError: isErrorFollowers,
    refetch: refetchFollowers,
  } = useGetFollowersCurrentUserQuery(undefined, { skip: activeTab !== 2 });

  const {
    data: following = {},
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing,
    refetch: refetchFollowing,
  } = useGetFollowingQuery(undefined, { skip: activeTab !== 3 });

  const dataForTabs = () => {
    switch (activeTab) {
      case 0:
        return {
          data: myRecipes.recipes || [],
          loading: isLoadingMyRecipes,
          error: isErrorMyRecipes,
          refetch: refetchMyRecipes,
          totalCount: myRecipes.totalCount,
        };
      case 1:
        return {
          data: myFavorites.recipes || [],
          loading: isLoadingMyFavorites,
          error: isErrorMyFavorites,
          refetch: refetchMyFavorites,
          totalCount: myFavorites.totalCount,
        };
      case 2:
        return {
          data: followers.followersData || [],
          loading: isLoadingFollowers,
          error: isErrorFollowers,
          refetch: refetchFollowers,
        };
      case 3:
        return {
          data: following.followingData || [],
          loading: isLoadingFollowing,
          error: isErrorFollowing,
          refetch: refetchFollowing,
        };
      default:
        return {};
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfoWrapper}>
        <UserInfo
          ctaText={"LOG OUT"}
          handleCtaClick={handleLogoutRegisterModal}
          isCurrentUserPage={true}
          queryToFetchData={currentUserQuery}
        />
      </div>

      <div className={styles.tabsWrapper}>
        <TabsList
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          data={dataForTabs().data}
          loading={dataForTabs().loading}
          error={dataForTabs().error}
          refetch={dataForTabs().refetch}
          isCurrentUser={true}
        />
        {(activeTab === 0 || activeTab === 1) &&
          dataForTabs().totalCount > 0 && (
            <ListPagination
              setPage={setPage}
              totalCount={dataForTabs().totalCount}
              page={page}
            />
          )}
      </div>
    </div>
  );
};
