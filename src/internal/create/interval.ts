import { sourceAsObservable } from  '../Observable';
import { FOType, Sink } from 'rxjs/internal/types';
import { Subscription } from 'rxjs/internal/Subscription';

export function interval(delay: number) {
  return sourceAsObservable((type: FOType.SUBSCRIBE, dest: Sink<number>, subs: Subscription) => {
    let i = 0;
    const id = setInterval(() => dest(FOType.NEXT, i++, subs), delay);
    subs.add(() => clearInterval(id));
  });
}