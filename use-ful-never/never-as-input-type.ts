// eslint-disable-next-line @typescript-eslint/no-unused-vars
function apparentlyUnnecessaryFunction(input: never) {
    console.log("This point could not be reached");
}

// ๐งจ Invalid usages:
apparentlyUnnecessaryFunction();
apparentlyUnnecessaryFunction(true);

// ๐ Valid usages:
declare let randomThing: never;
apparentlyUnnecessaryFunction(randomThing);

// ๐ก This will be useful while talking about narrowing and exhaustive checks
// For now, lets see how further we can go with this concept:

export type VideoStep = {
    duration: number;
    questions?: never;
    description?: never;
};

export type QuizzStep = {
    questions: number[];
    duration?: never;
    description?: never;
};

export type ToDoStep = {
    description: string;
    questions?: never;
    duration?: never;
};

declare function estimateDuration(step: VideoStep | QuizzStep): void;

// ๐งจ Invalid usage:
const invalidStep = {  questions: [] };
estimateDuration(invalidStep);

  // ๐ง  SOLID Open/Closed Principle?