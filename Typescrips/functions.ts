interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  x: number;
  y: undefined;
  default: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined,
    };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }
  return { x: a, y: b };
}
