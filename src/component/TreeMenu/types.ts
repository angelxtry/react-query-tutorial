export interface Branch {
  id: string;
  label: string;
  children?: Tree;
}

export type Tree = Branch[];
