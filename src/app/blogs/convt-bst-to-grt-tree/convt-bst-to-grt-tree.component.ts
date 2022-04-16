import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convt-bst-to-grt-tree',
  templateUrl: './convt-bst-to-grt-tree.component.html',
  styleUrls: ['./convt-bst-to-grt-tree.component.css']
})
export class ConvtBstToGrtTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exp1=
  `
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
  `;

  exp2=
  `
  Input: root = [0,null,1]
  Output: [1,null,1]
  `;

  snippet=
  `
  class Solution {
    public:
        int sum=0;
        void rightinorder(TreeNode* root)
        {
            if(root)
            {
                if(root->right)
                {
                    rightinorder(root->right);
                }
                sum+=root->val;
                root->val=sum;
                if(root->left)
                {
                    rightinorder(root->left);
                }
            }
            return;
        }
        TreeNode* convertBST(TreeNode* root) {
            rightinorder(root);
            return root;
        }
    };
  `;

}
