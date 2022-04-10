import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-largest-rectangle-in-a-histogram',
  templateUrl: './largest-rectangle-in-a-histogram.component.html',
  styleUrls: ['./largest-rectangle-in-a-histogram.component.css']
})
export class LargestRectangleInAHistogramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  exp1=`  Input: heights = [2,1,5,6,2,3]
  Output: 10
  Explanation: The above is a histogram where width of each bar is 1.
               The largest rectangle is shown in the red area, which has
               an area = 10 units.`;

  exp2=`  Input: heights = [2,4]
  Output: 4`;

  snippet=
  `#include <bits/stdc++.h>

  using namespace std;
  
  class Solution {
  public:
      int largestRectangleArea(vector<int>& heights) {
          stack<int> st;
          int n=heights.size();
          vector<int> ps(n,-1);
          vector<int> ns(n,n);
          for(int i=0;i<n;i++)
          {
              while(!st.empty()&&heights[st.top()]>=heights[i])
              {
                  st.pop();
              }
              if(st.empty())
              {
                  ps[i]=-1;
              }
              else
              {
                  ps[i]=st.top();
              }
              st.push(i);
          }
          while(!st.empty())
          {
              st.pop();
          }
          for(int i=n-1;i>=0;i--)
          {
              while(!st.empty()&&heights[st.top()]>=heights[i])
              {
                  st.pop();
              }
              if(st.empty())
              {
                  ns[i]=n;
              }
              else
              {
                  ns[i]=st.top();
              }
              st.push(i);
          }
          int m=0;
          int temp;
          for(int i=0;i<n;i++)
          {
              temp=(ns[i]-ps[i]-1)*heights[i];
              m=max(m,temp);
          }
          return m;
      }
  };
  
  int main()
  {
      Solution obj;
      vector<int> s={1};
      int x=obj.largestRectangleArea(s);
      cout<<x;
      return 0;
  }`
}
