# Blog
## 1.  How does TypeScript help in improving code quality and project maintainability?
    TypeScript is an OOP language. OOP is a structured way to makes code easier to maintain at any level. It gives reusable and readable code, which helps in understanding the logic easily. TypeScript also allows you to define types with expected or desired input and output values. In large projects, using TypeScript makes it easier to maintain code, catch errors during development, and simplify testing and code reuse.
## 2.  Provide an example of using union and intersection types in TypeScript.
    We express a Union Type using the '|' symbol and an Intersection Type using the '&' symbol.
### Union Example:
    type FullStackDeveloper = 'Entry-Level' | 'Mid-Level';
    type MERNStackDeveloper = 'Beginner-Level' | 'Senior-Level';
    type Developer = FullStackDeveloper | MERNStackDeveloper;
    const newDeveloper: Developer = 'Mid-Level';    (Valid)
    const invalidDeveloper: Developer = 'Expert';   (Error)

### intersection Example:
    type FullStackDeveloper = {
    skills: string[];
    designation: 'FullStackDev';
    };

    type MERNStackDeveloper = {
        skills: string[];
        designation: 'MernStackDev';
    };

    type DevOps = FullStackDeveloper & MERNStackDeveloper;

    const devOpsEngineer: DevOps = {
        skills: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
        designation: 'MernStackDev'  (Valid)
    };





     