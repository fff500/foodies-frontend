export const getSelectOptions = collection =>
  collection?.map(item => ({
    value: item._id,
    label: item.name,
    ...(item.img ? { img: item.img } : {}),
  }));
