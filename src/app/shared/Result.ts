export class Success<T> {
  readonly isSuccess = true;
  readonly isError = false;

  constructor(public readonly success: T) {}
}

export class Failure<E> {
  readonly isSuccess = false;
  readonly isError = true;

  constructor(public readonly error: E) {}
}
