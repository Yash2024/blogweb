import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-bst',
  templateUrl: './recover-bst.component.html',
  styleUrls: ['./recover-bst.component.css']
})
export class RecoverBstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exp1=
  `
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
  `;
  exp2=
  `
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
  `;
  snippet=
  `
  class Solution {
    public:
        int prev=INT_MIN;
        TreeNode* p;
        TreeNode* fm;
        TreeNode* lm;
        void inorder(TreeNode* root)
        {
            if(root)
            {
                if(root->left)
                {
                    inorder(root->left);
                }
                
                
                if(prev>root->val)
                {
                    if(fm==NULL)
                    {
                        fm=p;
                    }
                }
                if(prev>root->val)
                {
                    if(fm!=NULL)
                    {
                        lm=root;
                    }
                }
            
                prev=root->val;
                p=root;
                if(root->right)
                {
                    inorder(root->right);
                }
            }
            return;
        }
        void recoverTree(TreeNode* root) {
            inorder(root);
            if(lm==NULL)
            {
                lm=p;
            }
            int temp=fm->val;
            fm->val=lm->val;
            lm->val=temp;
        }
    };
  `;
}
