import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class RedditServiceProvider {

  constructor(private http: Http) {
    console.log('Hello RedditServiceProvider Provider');
  }

getReddits()
{
  return this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=7&sort=hot')
  .do((res: Response) => console.log(res))
  .map((res:Response) => res.json().data.children);
}





}
