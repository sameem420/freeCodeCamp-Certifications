int firstNumber = 12;
int secondNumber = 7;
Console.WriteLine(firstNumber + secondNumber);

// Converted to string
// string firstName = "Bob";
// int widgetsSold = 7;
// Console.WriteLine(firstName + " sold " + widgetsSold + " widgets.");

// number is treated as string
// string firstName = "Bob";
// int widgetsSold = 7;
// Console.WriteLine(firstName + " sold " + widgetsSold + 7 + " widgets.");

// Add parentheses to clarify your intention to the compiler
string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets.");

int sum = 7 + 5;
int difference = 7 - 5;
int product = 7 * 5;
int quotient = 7 / 5;
decimal decimalQuotient = 7.0m/5;

// two additional examples that work equally well
// decimal decimalQuotient = 7 / 5.0m;
// decimal decimalQuotient = 7.0m / 5.0m;

Console.WriteLine("Sum: " + sum);
Console.WriteLine("Difference: " + difference);
Console.WriteLine("Product: " + product);
Console.WriteLine("Quotient: " + quotient);
Console.WriteLine($"Decimal Quotient : {decimalQuotient}");

int first = 7;
int second = 5;

decimal quotient = (decimal)first / (decimal)second;
Console.WriteLine(quotient);

Console.WriteLine($"Modulus of 200 / 5 : {200 % 5}");
Console.WriteLine($"Modulus of 7 / 5 : {7 % 5}");


int value1 = 3 + 4 * 5;
int value2 = (3 + 4) * 5;
Console.WriteLine(value1);
Console.WriteLine(value2);


// compound assignment operators
// int value = 1;

// value = value + 1;
// Console.WriteLine("First Increment: " + value);

// value += 1;
// Console.WriteLine("Second Increment: " + value);

// value++;
// Console.WriteLine("Third Increment: " + value);

// value = value - 1;
// Console.WriteLine("First decrement: " + value);

// value -= 1;
// Console.WriteLine("Second decrement: " + value);

// value--;
// Console.WriteLine("Third decrement: " + value);

int value = 1;
value++;
Console.WriteLine("First: " + value);
Console.WriteLine($"Second: {value++}");
Console.WriteLine("Third: " + value);
Console.WriteLine("Fourth: " + (++value));


// challenge to convert Fahrenheit to Celsius
int fahrenheit = 94;

decimal celsius = (fahrenheit - 32) * (decimal)5 / (decimal)9;

Console.WriteLine($"The temperature is {celsius} Celsius.");
