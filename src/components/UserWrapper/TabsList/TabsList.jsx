import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./TabsList.module.css";
import { TabContent } from "./TabContent/TabContent";

export const TabsList = ({
  setActiveTab,
  activeTab,
  data,
  loading,
  error,
  refetch,
  isCurrentUser,
}) => {
  return (
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <TabList className={styles.tabList}>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          MY RECIPES
        </Tab>
        {isCurrentUser && (
          <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
            MY FAVORITES
          </Tab>
        )}
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          FOLLOWERS
        </Tab>
        {isCurrentUser && (
          <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
            FOLLOWING
          </Tab>
        )}
      </TabList>

      <TabPanel>
        <TabContent
          type="recipes"
          loading={loading}
          error={error}
          refetch={refetch}
          data={data}
        />
      </TabPanel>

      {isCurrentUser && (
        <TabPanel>
          <TabContent
            type="recipes"
            loading={loading}
            error={error}
            refetch={refetch}
            data={data}
          />
        </TabPanel>
      )}

      <TabPanel>
        <TabContent
          type="followers"
          loading={loading}
          error={error}
          refetch={refetch}
          data={data}
        />
      </TabPanel>

      {isCurrentUser && (
        <TabPanel>
          <TabContent
            type="following"
            loading={loading}
            error={error}
            refetch={refetch}
            data={data}
          />
        </TabPanel>
      )}
    </Tabs>
  );
};
