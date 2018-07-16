import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { RankingComponent } from './ranking/ranking.component';
import { ScoreComponent } from './score/score.component';
import { RouterModule } from '@angular/router';
import { CountDownComponent } from './shared/countDown.component'
import { HighscoresComponent } from './shared/highScores.component';

@NgModule({
  imports:      [ BrowserModule,  
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent }, 
      { path: 'game', component: GameComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'score', component: ScoreComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ])],
  declarations: [ AppComponent, 
    WelcomeComponent,
    GameComponent,
    RankingComponent,
    ScoreComponent,
    CountDownComponent,
    HighscoresComponent
   ],
 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
