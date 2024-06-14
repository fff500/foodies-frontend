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
}) => {
  return (
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <TabList className={styles.tabList}>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          RECIPES
        </Tab>
        <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
          FOLLOWERS
        </Tab>
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

      <TabPanel>
        <TabContent
          type="followers"
          loading={loading}
          error={error}
          refetch={refetch}
          data={data}
        />
      </TabPanel>
    </Tabs>
  );
};
