import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { HoodService } from '../hood.service'
import { HttpClient } from '@angular/common/http';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {
  posts: Post;
  postss = [];
  http;

  constructor(private hoodservice: HoodService, http: HttpClient) { }

  ngOnInit(): void {
    this.hoodservice.getallPosts().subscribe((res:Response)=>{
      Object.entries(res).forEach(result => {
        const [_, value] = result;
        let title = value['title']
        let text = value['text']
        let user = value['user']
        let photo = value['photo']
        let date = value['date']
        let postObject = new Post(title,text,user,photo,date)
        this.postss.push(postObject)
        console.log (title)
      });
      
    })
  }

}
