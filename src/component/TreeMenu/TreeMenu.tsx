import { menuData } from '@/component/TreeMenu/menuData';
import { TreeComponent } from '@/component/TreeMenu/TreeComponent';

export const TreeMenu = () => {
  return <TreeComponent menuData={menuData} />;
};
