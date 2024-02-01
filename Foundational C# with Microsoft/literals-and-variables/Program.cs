// Literals

Console.WriteLine('b');
Console.WriteLine(123);
Console.WriteLine(0.25F);
Console.WriteLine(2.625);
Console.WriteLine(12.39816m);
Console.WriteLine(true);
Console.WriteLine(false);

// not same
Console.WriteLine("123");
Console.WriteLine(123);

// not same
Console.WriteLine("true");
Console.WriteLine(true);



// Variable Types

// string for words, phrases, or any alphanumeric data for presentation, not calculation
// char for a single alphanumeric character
// int for a whole number
// decimal for a number with a fractional component
// bool for a true/false value

// Variables
string firstName = "Bob";
Console.WriteLine(firstName);
firstName = "Liem";
Console.WriteLine(firstName);
firstName = "Isabella";
Console.WriteLine(firstName);
firstName = "Yasmin";
Console.WriteLine(firstName);

// implicitly typed local variables
var message = "Hello world!";
Console.WriteLine(message);

// Practice
string name = "Bob";
int num = 3;
float fNum = 34.4f;

Console.Write("Hello, " + name + "! ");
Console.Write("You have " + num + "  messages in your inbox. ");
Console.Write("The temperature is " + fNum + " celsius.");
