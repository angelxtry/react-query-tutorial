import { BranchComponent } from '@/component/TreeMenu/BranchComponent';
import { Branch, Tree } from '@/component/TreeMenu/types';

interface TreeComponentProps {
  menuData: Tree;
}

export const TreeComponent = ({ menuData }: TreeComponentProps) => {
  return (
    <>
      {menuData.map((branch: Branch) => {
        return <BranchComponent key={branch.id} branch={branch} />;
      })}
    </>
  );
};
