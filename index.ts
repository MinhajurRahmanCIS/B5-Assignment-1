    
    function formatString(input: string, toUpper?: boolean): string {
        if (input && (toUpper === true)) {
            return input.toUpperCase();
        } 
        else if (input && (toUpper === false)) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    };
    
    const formatStringOutput1 = formatString("Hello");
    console.log(formatStringOutput1);
    const formatStringOutput2 = formatString("Hello", true);
    console.log(formatStringOutput2);
    const formatStringOutput3 = formatString("Hello", false);
    console.log(formatStringOutput3);

    
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        return items.filter(item => item.rating >= 4);
    };

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
     const bookRatings = filterByRating(books);
     console.log(bookRatings);

    
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const result = [];
        for (const array of arrays) {
          for (const item of array) {
            result.push(item);
          }
        }
        return result;
    };

    const concatenateArray1 = concatenateArrays<string>(["a", "b"], ["c"]);     
    console.log(concatenateArray1);
    const concatenateArray2 = concatenateArrays<number>([1, 2], [3, 4], [5]);   
    console.log(concatenateArray2);

    class Vehicle {
        private make: string;
        year: number;
        constructor(make: string, year: number){
            this.make = make;
            this.year = year;
        };
        getInfo(){
            return console.log(`Make: ${this.make}, Year: ${this.year}`)
        }
    }

    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string){
            super(make, year);
            this.model = model;
        };
        getModel(){
            return console.log(`Model: ${this.model}`)
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();   
    myCar.getModel(); 

    function processValue(value: string | number): number{
        if(typeof value === 'string'){
            return value.length;
        }
        else{
            return value * 2;
        }
    }

    const stringValue = processValue("hello");
    console.log('stringValue', stringValue);
    const numberValue = processValue(10);     
    console.log('numberValue', numberValue);

    interface Product {
        name: string;
        price: number;
    };
      
    function getMostExpensiveProduct(products: Product[]): Product | null{
        if(products.length === 0) return null;
        let maxProduct = products[0];

        for (const product of products) {
          if (product.price > maxProduct.price) {
            maxProduct = product;
          }
        }
        return maxProduct;
    };

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
      
    const expensiveProduct = getMostExpensiveProduct(products);  
    console.log(expensiveProduct);


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
      
    function getDayType(day: Day): string{
        if(day === Day.Sunday || day === Day.Saturday){
            return "Weekend";
        }
        else{
            return "Weekday";
        }
    }

    const weekday = getDayType(Day.Monday);
    console.log(weekday);
    const weekend = getDayType(Day.Sunday);
    console.log(weekend);

    async function squareAsync(n: number): Promise<number>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject('Negative number not allowed');
                } else {
                    resolve(n * n);
                }
            }, 1000);
        })
    };

    squareAsync(4).then(console.log); 
    squareAsync(-3).catch(console.error);  

