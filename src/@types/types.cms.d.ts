type ListPageType = {
  datas: any;
  columns: any;
  customSearch?: any;
  title: string;
}

type ItemBreadCrumbType = {
  label: string;
  path: string;
};

type BreadCrumbsType = {
  items?: ItemBreadCrumbType[]
}