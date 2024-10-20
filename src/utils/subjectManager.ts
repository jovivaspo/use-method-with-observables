import { Observable, Subject } from 'rxjs';

export class SubjectManager<T> {
  private subject$ = new Subject<T>();

  /**
   * Returns an observable that mirrors the subject stream. This is the only
   * way to subscribe to the subject and receive the stream of values.
   * @returns {Observable<T>}
   */
  getSubject$(): Observable<T> {
    return this.subject$.asObservable();
  }

  /**
   * Pushes a value to the subject stream, which will be received by any subscribers
   * to the observable returned by getSubject$().
   * @param {T} value the value to push to the stream
   */
  setSubject$(value: T) {
    this.subject$.next(value);
  }

  /**
   * Unsubscribes from the current subject stream and creates a new, empty one.
   * This is useful if you want to cancel any existing subscriptions and start
   * fresh with a new stream. Note that calling this method does not affect
   * any subscribers to the stream - they will continue to receive values
   * until they unsubscribe themselves.
   */
  unsubscribe(): void {
    if (!this.subject$.closed) {
      this.subject$.unsubscribe();
    }
    this.subject$ = new Subject<T>();
  }
}
