interface node {
  result(): number;
  toString(): string;
}

const Value = (value: number): node => ({
  result: () => {
    return value;
  },
  toString: () => {
    return value.toString();
  },
});

const Add = (left: node, right: node): node => ({
  result: () => {
    return left.result() + right.result();
  },
  toString: () => {
    return `(${left.toString()} + ${right.toString()})`;
  },
});

const Subtract = (left: node, right: node): node => ({
  result: () => {
    return left.result() - right.result();
  },
  toString: () => {
    return `(${left.toString()} - ${right.toString()})`;
  },
});

const Multiply = (left: node, right: node): node => ({
  result: () => {
    return left.result() * right.result();
  },
  toString: () => {
    return `(${left.toString()} * ${right.toString()})`;
  },
});

const Divide = (left: node, right: node): node => ({
  result: () => {
    return left.result() / right.result();
  },
  toString: () => {
    return `(${left.toString()} / ${right.toString()})`;
  },
});

const tree = Multiply(Value(10), Subtract(Value(5), Divide(Value(2), Value(2))));

console.log(tree.result());
console.log(tree.toString());
