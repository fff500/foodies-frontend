import React from "react";
import { useGetUserQuery } from "../../redux";
import { ErrorComponent, LoadingSpinner, Button } from "../shared";
import styles from "./UserWrapper.module.css";
import { UserInfo } from "./UserInfo";
import { TabsList } from "./TabsList/TabsList";

export const UserWrapper = () => {
  const {
    data: userData = {},
    isFetching: userIsFetching,
    isLoading: userIsLoading,
    isError: userIsError,
    refetch: refetchUser,
  } = useGetUserQuery("bezegajenja0306@gmail.com");

  const isLoading = userIsFetching || userIsLoading;

  return (
    <div className={styles.container}>
      {isLoading && <LoadingSpinner className={styles.loading} />}
      {!isLoading && userIsError && <ErrorComponent onRetry={refetchUser} />}
      {userData.name && (
        <>
          <UserInfo userData={userData} />
          <Button className={styles.logOut} type="button">
            LOG OUT
          </Button>
          <TabsList />
        </>
      )}
    </div>
  );
};
