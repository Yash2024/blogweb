import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CycleInALinkedlistComponent } from './blogs/cycle-in-a-linkedlist/cycle-in-a-linkedlist.component';
import { LargestRectangleInAHistogramComponent } from './blogs/largest-rectangle-in-a-histogram/largest-rectangle-in-a-histogram.component';
import { LongestCommonSubsequenceComponent } from './blogs/longest-common-subsequence/longest-common-subsequence.component';
import { LRUCatchComponent } from './blogs/lru-catch/lru-catch.component';
import { RotateMatrixComponent } from './blogs/rotate-matrix/rotate-matrix.component';
import { SearchInABstComponent } from './blogs/search-in-a-bst/search-in-a-bst.component';
import { SpiralMatrixIIComponent } from './blogs/spiral-matrix-ii/spiral-matrix-ii.component';
import { StringsintroComponent } from './blogs/stringsintro/stringsintro.component';
import { TrimBstComponent } from './blogs/trim-bst/trim-bst.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"blogs", 
      children:[
        {path:"",component:BlogsComponent},
        {path:"cycleinalinkedlist", component:CycleInALinkedlistComponent},
        {path:"stringintro",component:StringsintroComponent},
        {path:"largestrectangleinahistogram",component:LargestRectangleInAHistogramComponent},
        {path:"longestcommonsubsequence",component:LongestCommonSubsequenceComponent},
        {path:"rotatematrix",component:RotateMatrixComponent},
        {path:"spiralmatrixII",component:SpiralMatrixIIComponent},
        {path:"lrucatch",component:LRUCatchComponent},
        {path:"searchinabst",component:SearchInABstComponent},
        {path:"trimbst",component:TrimBstComponent}
      ]},
  {path:"contactus", component:ContactusComponent},
  {path:"**",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
