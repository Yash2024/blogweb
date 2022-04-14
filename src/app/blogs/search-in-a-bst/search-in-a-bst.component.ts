import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-in-a-bst',
  templateUrl: './search-in-a-bst.component.html',
  styleUrls: ['./search-in-a-bst.component.css']
})
export class SearchInABstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exp1=
  `
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
  `;
  exp2=
  `
Input: root = [4,2,7,1,3], val = 5
Output: []
  `;
  snippet=
  `
  class Solution {
    public:
        TreeNode* ans;
        void inorder(TreeNode* root, int val)
        {
            if(ans==NULL&&root!=NULL)
            {
                inorder(root->left,val);
                    if(root->val==val)
                    {
                        ans=root;
                    }
                inorder(root->right,val);
            }
            return;
        }
        TreeNode* searchBST(TreeNode* root, int val) {
            inorder(root,val);
            return ans;
        }
    };
  `;
}
