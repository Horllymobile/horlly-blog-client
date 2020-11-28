import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SideWidgetComponent } from './components/side-widget/side-widget.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { ReadMoreComponent } from './pages/read-more/read-more.component';
<<<<<<< HEAD
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { PostsComponent } from './pages/posts/posts.component';
=======
>>>>>>> ea9f59f0c97e1b372bef76eee17072107f95e1c3

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: ReadMoreComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideWidgetComponent,
    BlogEntryComponent,
    ReadMoreComponent,
    BlogPostsComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
