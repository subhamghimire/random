import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Article } from 'src/app/interfaces/article.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent implements OnInit {
  @Input() article!: Article;
  public randomNumber = 0;
  public randomNumber$!: Observable<number> | null;

  private subscription!: Subscription;

  constructor(public dataService: DataService) {}
  ngOnInit(): void {
    // Setting the `randomNumber` like this won't trigger change detection
    // this.subscription = this.dataService
    //   .getRandomNumbers()
    //   .subscribe((value) => {
    //     this.randomNumber = value;
    //   });
    this.randomNumber$ = this.dataService.getRandomNumbers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
