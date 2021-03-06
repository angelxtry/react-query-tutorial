import { Tree } from '@/component/TreeMenu/types';

export const menuData: Tree = [
  {
    id: '1',
    label: '고양이',
    children: [
      {
        id: '2',
        label: '페르시안',
        children: [
          {
            id: '8',
            label: '냐용이',
          },
          {
            id: '9',
            label: '냥이',
          },
        ],
      },
      {
        id: '3',
        label: '메인쿤',
      },
      {
        id: '4',
        label: '벵골',
      },
    ],
  },
  {
    id: '5',
    label: '강아지',
    children: [
      {
        id: '6',
        label: '셰퍼드',
      },
      {
        id: '7',
        label: '리트리버',
      },
    ],
  },
  {
    id: '10',
    label: '다음은?',
  },
];
