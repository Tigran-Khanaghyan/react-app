class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);

function returnNumber(): number {
  return 26;
}
returnNumber();

function printName(obj: { first: string; last?: string }) {
  return obj.first + obj.last;
}

printName({ first: "Tigran" });

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    x.join(" and ");
  }
  return x;
}
welcomePeople("Tigran");

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

function last<T>(arr: T[]): T {
  return arr[0];
}

last([1, 2, 3]);
last(["a", "b", "c"]);

interface Styles {
  [key: string]: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const css: Styles = {
  color: "red",
  border: "1px solid green",
};
