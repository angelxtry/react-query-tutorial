import { useState } from 'react';

import { Branch } from '@/component/TreeMenu/types';

interface BranchComponentProps {
  branch: Branch;
}

export const BranchComponent = ({ branch }: BranchComponentProps) => {
  const [open, toggleOpen] = useState(false);
  const hasChildren = branch.children && branch.children.length;
  return (
    <>
      <div
        key={branch.id}
        onClick={() => toggleOpen(!open)}
        role='presentation'
      >
        {branch.label}
      </div>
      {open &&
        hasChildren &&
        branch.children?.map((child: Branch) => {
          return <BranchComponent key={child.id} branch={child} />;
        })}
    </>
  );
};
