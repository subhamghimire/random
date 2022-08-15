import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  public article: Article = {
    title: 'This one trick will speed up your apps',
    excerpt: 'Josh Morony',
    body: 'OnPush rocks',
  };
  ngOnInit(): void {}

  /* When using default strategy, make sure to remove change strategy line */
  updateArticleWithDefault() {
    this.article.title =
      'Using the Default change detection strategy / or not define any change strategy';
  }

  /*
  With the OnPush change detection strategy Angular will just compare references, it won't perform a deep check of the values of the object to see if there has been any changes. In this case, the reference remains the same even after we updated the title property because this.article still occupies the same space in memory.
  */
  // updateArticleWithOnPush() {
  //   this.article.title = 'Using the OnPush change detection strategy';
  // }

  /*Now if we want to reflect those changes, we can make use of those immutable data concepts */

  updateArticleWithOnPush() {
    this.article = {
      ...this.article,
      title: 'Using the OnPush change detection strategy',
    };
  }

  /*A new object will be created in memory and therefore it will have a new reference .
 When Angular compares the current input to the previous input it will see that the references do not match, and change detection will be triggered.
  */

  /* When OnPush strategy will have change detection triggered ? */
  /*
   * When the reference for the components inputs change
   * When the component itself or any of its children fire an event
   * An observable in the template using the | async pipe emits a value
   */
}
