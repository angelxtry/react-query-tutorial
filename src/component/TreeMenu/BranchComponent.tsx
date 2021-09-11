import { useState } from 'react';
import { MdChevronRight, MdKeyboardArrowDown } from 'react-icons/md';

import { Branch } from '@/component/TreeMenu/types';

interface BranchComponentProps {
  branch: Branch;
}

export const BranchComponent = ({ branch }: BranchComponentProps) => {
  const [open, toggleOpen] = useState(false);
  const hasChildren = branch.children && branch.children.length > 0;
  return (
    <>
      <div
        onClick={() => toggleOpen(!open)}
        role='presentation'
        className='flex flex-row items-center p-2 pl-4'
      >
        {branch.label}
        {hasChildren && (open ? <MdKeyboardArrowDown /> : <MdChevronRight />)}
      </div>
      {hasChildren &&
        branch.children?.map((child: Branch) => {
          return (
            <div key={child.id} className='pl-6'>
              {open && <BranchComponent key={child.id} branch={child} />}
            </div>
          );
        })}
    </>
  );
};
