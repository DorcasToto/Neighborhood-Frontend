import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { HoodService } from '../hood.service'
import { HttpClient } from '@angular/common/http';
import { ObjectUnsubscribedError } from 'rxjs';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {
  posts: Post;
  postss = [];
  http;
  newPost;

  public form: {
    photo: FileList | null;
  }

  constructor(private hoodservice: HoodService, http: HttpClient) { }

  ngOnInit(): void {
    this.newPost = {
      title: '',
      text: '',
      photo: null
    }

    this.hoodservice.getallPosts().subscribe((res: Response) => {
      Object.entries(res).forEach(result => {
        const [_, value] = result;
        let title = value['title']
        let text = value['text']
        let user = value['user']
        let photo = value['photo']
        let date = value['date']
        let postObject = new Post(title, text, user, photo, date)
        this.postss.push(postObject)
        console.log(title)
      });

    })
  }

  createPost() {
    let valid_photo = ( this.form.photo && this.form.photo.length)
      ? this.form.photo
      : null

    this.newPost['photo'] = valid_photo
    console.log(this.newPost['photo'])
    this.hoodservice.newPost(this.newPost).subscribe((res: Response) => {
      alert('Post' + this.newPost.title + 'created')
      console.log(res)

    }, error => {
      console.log('error')
    })

  }

}
