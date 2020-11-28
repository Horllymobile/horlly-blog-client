import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {
  @Input() poststorender: Observable<Post[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
