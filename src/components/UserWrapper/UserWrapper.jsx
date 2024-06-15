import { useEffect, useState } from "react";
import styles from "./UserWrapper.module.css";
import { UserInfo } from "./UserInfo";
import { TabsList } from "./TabsList";
import { ListPagination } from "./ListPagination/ListPagination";
import {
  useFollowUserMutation,
  useGetCurrentUserQuery,
  useGetFollowersQuery,
  useGetRecipesByOwnerIdQuery,
  useGetUserQuery,
  useUnfollowUserMutation,
} from "../../redux";

export const UserWrapper = ({ userId }) => {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  const { data: currentUser } = useGetCurrentUserQuery();
  const userQuery = useGetUserQuery(userId);

  const [isFollowing, setIsFollowing] = useState(
    currentUser ? currentUser.following.includes(userId) : false
  );

  useEffect(() => {
    console.log("currentUser", currentUser);
    setIsFollowing(
      currentUser ? currentUser.following.includes(userId) : false
    );
  }, [currentUser, userId]);

  const handleFollow = async () => {
    try {
      await followUser(userId).unwrap();
    } catch (error) {
      console.error("Error when following user", error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await unfollowUser(userId).unwrap();
    } catch (error) {
      console.error("Error when unfollowing user", error);
    }
  };

  const {
    data: userRecipes = {},
    isLoading: isLoadingUserRecipes,
    isError: isErrorUserRecipes,
    refetch: refetchUseRecipes,
  } = useGetRecipesByOwnerIdQuery(userId, page, { skip: activeTab !== 0 });

  const {
    data: followers = {},
    isLoading: isLoadingFollowers,
    isError: isErrorFollowers,
    refetch: refetchFollowers,
  } = useGetFollowersQuery(userId, { skip: activeTab !== 1 });

  const dataForTabs = () => {
    switch (activeTab) {
      case 0:
        return {
          data: userRecipes.recipes || [],
          loading: isLoadingUserRecipes,
          error: isErrorUserRecipes,
          refetch: refetchUseRecipes,
          totalCount: userRecipes.totalCount,
        };
      case 1:
        return {
          data: followers.followersData || [],
          loading: isLoadingFollowers,
          error: isErrorFollowers,
          refetch: refetchFollowers,
        };
      default:
        return {};
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfoWrapper}>
        <UserInfo
          ctaText={isFollowing ? "UNFOLLOW" : "FOLLOW"}
          handleCtaClick={isFollowing ? handleUnfollow : handleFollow}
          userId={userId}
          isCurrentUserPage={false}
          queryToFetchData={userQuery}
        />
      </div>

      <div>
        <TabsList
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          data={dataForTabs().data}
          loading={dataForTabs().loading}
          error={dataForTabs().error}
          refetch={dataForTabs().refetch}
          isCurrentUser={false}
        />
        {activeTab === 0 && dataForTabs().totalCount > 0 && (
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
