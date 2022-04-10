import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longest-common-subsequence',
  templateUrl: './longest-common-subsequence.component.html',
  styleUrls: ['./longest-common-subsequence.component.css']
})
export class LongestCommonSubsequenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  exp1=
  `  Input: text1 = "abcde", text2 = "ace" 
  Output: 3  
  Explanation: The longest common subsequence is "ace" and its length is 3.`
  exp2=
  `  Input: text1 = "abc", text2 = "abc"
  Output: 3
  Explanation: The longest common subsequence is "abc" and its length is 3.`;
  exp3=
  `  Input: text1 = "abc", text2 = "def"
  Output: 0
  Explanation: There is no such common subsequence, so the result is 0.`;
  snippet=
  `  #include <bits/stdc++.h>

  using namespace std;
  
  class Solution {
  public:
      int longestCommonSubsequence(string text1, string text2) {
          int l1=text1.length();
          int l2=text2.length();
          vector<vector<int>> dp(l1+1,vector<int> (l2+1));
          for(int i=0;i<=l1;i++)
          {
              dp[i][0]=0;
          }
          for(int i=0;i<=l2;i++)
          {
              dp[0][i]=0;
          }
          for(int i=1;i<=l1;i++)
          {
              for(int j=1;j<=l2;j++)
              {
                  if(text1[i-1]==text2[j-1])
                  {
                      dp[i][j]=1+dp[i-1][j-1];
                  }
                  else
                  {
                      dp[i][j]=max(dp[i][j-1],dp[i-1][j]);
                  }
              }
          }
          return dp[l1][l2];
      }
  };
  
  int main()
  {
      Solution obj;
      string a="abdace";
      string b="babce";
      int x=obj.longestCommonSubsequence(a,b);
      cout<<x;
      return 0;
  }`;
}
