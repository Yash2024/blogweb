import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CycleInALinkedlistComponent } from './blogs/cycle-in-a-linkedlist/cycle-in-a-linkedlist.component';
import { StringsintroComponent } from './blogs/stringsintro/stringsintro.component';
import { LargestRectangleInAHistogramComponent } from './blogs/largest-rectangle-in-a-histogram/largest-rectangle-in-a-histogram.component';
import { LongestCommonSubsequenceComponent } from './blogs/longest-common-subsequence/longest-common-subsequence.component';
import { RotateMatrixComponent } from './blogs/rotate-matrix/rotate-matrix.component';
import { SpiralMatrixIIComponent } from './blogs/spiral-matrix-ii/spiral-matrix-ii.component';
import { LRUCatchComponent } from './blogs/lru-catch/lru-catch.component';
import { SearchInABstComponent } from './blogs/search-in-a-bst/search-in-a-bst.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    ContactusComponent,
    CycleInALinkedlistComponent,
    StringsintroComponent,
    LargestRectangleInAHistogramComponent,
    LongestCommonSubsequenceComponent,
    RotateMatrixComponent,
    SpiralMatrixIIComponent,
    LRUCatchComponent,
    SearchInABstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
