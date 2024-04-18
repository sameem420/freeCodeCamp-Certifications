// challenge activity using conditional operators
// In this challenge, you'll implement a conditional operator to simulate a "coin flip". 
// The resulting decision logic will display either heads or tails.

Random coin = new Random();
int flip = coin.Next(0, 2);
Console.WriteLine((flip == 0) ? "heads" : "tails");


// another solution

// Random coin = new Random();
// Console.WriteLine((coin.Next(0, 2) == 0) ? "heads" : "tails");