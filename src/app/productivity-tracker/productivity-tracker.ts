import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-productivity-tracker',
  styleUrl: './productivity-tracker.scss',
  templateUrl: './productivity-tracker.html',
})
export class ProductivityTracker {
  protected readonly DAILY_GOAL = 5;

  completedTasks = signal<number>(Number(localStorage.getItem('tasks')) || 0);
  progressPercentage = computed(() =>
    Math.round((this.completedTasks() / this.DAILY_GOAL) * 100)
  );

  isGoalReached = computed(() => this.completedTasks() >= this.DAILY_GOAL);

  message = computed(() => {
    if (this.progressPercentage() === 0) {
      return "Prêt à démarrer la journée ?";
    } else if (this.progressPercentage() < 100 ) {
      return "Continuez comme ça, vous y êtes presque !";
    } else if (this.progressPercentage() >= 100) {
      return "Félicitations, objectif atteint !";
    } else {
      return "Erreur";
    }
  });

  constructor() {
    effect(() => {
      const tasks = this.completedTasks();
      localStorage.setItem('tasks', String(tasks));

      if (tasks >= this.DAILY_GOAL) {
        window.alert("Bravo, vous avez fini votre journée !");
      }
    });
  }

  completerTache() {
    this.completedTasks.update(ct => ct + 1);
  }

  reinitialiser() {
    this.completedTasks.set(0);
  }

}
