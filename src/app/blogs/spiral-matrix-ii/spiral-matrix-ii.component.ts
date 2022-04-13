import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spiral-matrix-ii',
  templateUrl: './spiral-matrix-ii.component.html',
  styleUrls: ['./spiral-matrix-ii.component.css']
})
export class SpiralMatrixIIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  exp1=
  `
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
  `;
  exp2=
  `
Input: n = 1
Output: [[1]]
  `;
  exp3=
  `
Input: n = 5
Output: [[1 2 3 4 5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
  `;
  snippet=
  `
  #include<bits/stdc++.h>

  using namespace std;
  class Solution {
    public:
        vector<vector<int>> generateMatrix(int n) {
            int x=n*n;
            vector<vector<int>> vec(n,vector<int> (n));
            int p=n,q=1,j=0;
            int t=0;
            while(q<=x)
            {
                
                for(int i=t;i<p;i++)
                {
                    vec[j][i]=q;
                    q++;
                }
                for(int i=t+1;i<p;i++)
                {
                    vec[i][n-j-1]=q;
                    q++;
                }
                for(int i=p-2;i>=t;i--)
                {
                    vec[n-j-1][i]=q;
                    q++;
                }
                for(int i=p-2;i>t;i--)
                {
                    vec[i][j]=q;
                    q++;
                }
                p--;
                t++;
                j++;
            }
            return vec;
        }
    };
  
    int main()
    {
        Solution obj;
        vector<vector<int>> vq;
        vq=obj.generateMatrix(5);
        for(int i=0;i<5;i++)
        {
            for(int j=0;j<5;j++)
            {
                cout<<vq[i][j]<<" ";
            }
            cout<<endl;
        }
        return 0;
    }
  `;
}
