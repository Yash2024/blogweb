import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotate-matrix',
  templateUrl: './rotate-matrix.component.html',
  styleUrls: ['./rotate-matrix.component.css']
})
export class RotateMatrixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  exp1=`  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[7,4,1],[8,5,2],[9,6,3]]`;
  exp2=`  Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`;
  snippet=
  `
  #include <bits/stdc++.h>

  using namespace std;

  class Solution {
    public:
        void rotate(vector<vector<int>>& matrix)
        {
            int n=matrix.size();
            for(int i=0;i<n;i++)
            {
                for(int j=i;j<n;j++)
                {
                    swap(matrix[i][j],matrix[j][i]);
                }
            }
            
            for(int i=0;i<n;i++)
            {
                for(int j=0;j<n/2;j++)
                {
                    swap(matrix[i][j],matrix[i][n-1-j]);
                }
            }
            
        }
    };
    
    int main()
    {
        Solution obj;
        vector<vector<int>> vq{{1,2,3},{4,5,6},{7,8,9}};
        obj.rotate(vq);
        for(int i=0;i<3;i++)
        {
            for(int j=0;j<3;j++)
            {
                cout<<vq[i][j]<<" ";
            }
            cout<<endl;
        }
        return 0;
    }
  `;
}
