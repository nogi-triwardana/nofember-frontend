type ListPageType = {
  datas: any;
  columns: any;
  customSearch?: any;
  title: string;
  page: number;
  limit: number;
};

type ItemBreadCrumbType = {
  label: string;
  path: string;
};

type BreadCrumbsType = {
  items?: ItemBreadCrumbType[]
};

type PaginationType = {
  datas: any;
  page: number;
  limit: number;
};

type OptionSelectType<T> = {
  value: T;
  label: string;
};

interface SelectPropsType<
  T extends OptionSelectType<string | number>[]
> {
  options: T;
  value?: string | number;
}