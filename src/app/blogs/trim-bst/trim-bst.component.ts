import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trim-bst',
  templateUrl: './trim-bst.component.html',
  styleUrls: ['./trim-bst.component.css']
})
export class TrimBstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  exp1=
  `
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]
  `;

  exp2=
  `
Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]
  `;

  snippet=
  `
  class Solution {
    public:
        int l,h;
        void trim(TreeNode* root)
        {
            if(root)
            {
                if(root->left)
                {
                    trim(root->left);
                }
                if(root->right)
                {
                    trim(root->right);
                }
                if(root->left)
                {
                    if(root->left->val<l)
                    {
                        root->left=root->left->right;
                    }
                    else if(root->left->val>h)
                    {
                        root->left=root->left->left;
                    }
                    
                }
                if(root->right)
                {
                    if(root->right->val>h)
                    {
                        root->right=root->right->left;
                    }
                    else if(root->right->val<l)
                    {
                        root->right=root->right->right;
                    }
                }
                
            }
            return;
        }
        TreeNode* trimBST(TreeNode* root, int low, int high) {
            l=low;
            h=high;
            trim(root);
            if(root->val>high)
            {
                root=root->left;
            }
            if(root&&root->val<low)
            {
                root=root->right;
            }
            return root;
        }
    };
  `;
}
