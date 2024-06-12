import { useRef } from "react";
import styles from "./UserInfo.module.css";
import { ErrorComponent, LoadingSpinner } from "../../shared";
import { useGetCurrentUserQuery } from "../../../redux";
import { useUpdateAvatarMutation } from "../../../redux";

export const UserInfoLoggedIn = () => {
  const {
    data: userData = {},
    isFetching: userIsFetching,
    isLoading: userIsLoading,
    isError: userIsError,
    refetch: refetchUser,
  } = useGetCurrentUserQuery();

  const fileInputRef = useRef(null);
  const [updateAvatar, { isLoading }] = useUpdateAvatarMutation();

  const isLoadingMyUserData = userIsFetching || userIsLoading || isLoading;

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);

      try {
        const response = await updateAvatar(formData).unwrap();
        console.log("Avatar updated:", response.avatar);
      } catch (error) {
        console.error("Error updating avatar:", error);
      }
    }
  };

  return (
    <>
      {isLoadingMyUserData && <LoadingSpinner className={styles.loading} />}
      {!isLoadingMyUserData && userIsError && (
        <ErrorComponent onRetry={refetchUser} />
      )}
      {userData.name && (
        <div className={styles.userInfo}>
          <div className={styles.avatarContainer}>
            <img
              src={userData.avatar}
              alt="User avatar"
              className={styles.avatar}
            />
            <div className={styles.plusButton} onClick={handleButtonClick}>
              +
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className={styles.fileInput}
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <h2 className={styles.name}>{userData.name.toUpperCase()}</h2>
          <div className={styles.stats}>
            <div>
              <span className={styles.statLabel}>Email:</span>
              <span className={styles.statValue}>{userData.email}</span>
            </div>
            <div>
              <span className={styles.statLabel}>Added recipes:</span>
              <span className={styles.statValue}>
                {userData.createdRecipesCount || 0}
              </span>
            </div>
            <div>
              <span className={styles.statLabel}>Favorites:</span>
              <span className={styles.statValue}>
                {userData.favoritesCount || 0}
              </span>
            </div>
            <div>
              <span className={styles.statLabel}>Followers:</span>
              <span className={styles.statValue}>
                {userData.followersCount || 0}
              </span>
            </div>
            <div>
              <span className={styles.statLabel}>Following:</span>
              <span className={styles.statValue}>
                {userData.followingCount || 0}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
