import { ErrorComponent, LoadingSpinner } from "../../../shared";
import { ListItems } from "../../ListItems/";

export const TabContent = ({ type, loading, error, refetch, data }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorComponent onRetry={refetch} />;
  return <ListItems type={type} items={data} />;
};
