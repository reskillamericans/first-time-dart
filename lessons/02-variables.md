# Variables and Expressions

<iframe width="560" height="315" src="https://www.youtube.com/embed/yjaHKGhKpqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

All programs use data to perform some operation, and then transform that data into a useful format.  In order to tell the computer how to process data, programming languages
use variables to hold and reference data, so they can describe how to make calculations on that data.

Dart variables have to be *declared* before they are used.  To declare a variable, you can simply use the `var` keyword.

```dart
// Declaring the variable x.
var x;

// Assigning x the value of 1.
x = 1;
```

The `=` above is called the *assignment operator*.  It takes whatever value is on the right hand side of the `=`, and puts
it into the variable on the left side.  After this assignment, you could use the variable `x` in any expression and it would be interpreted as the number `1`.

Expressions are like equations that compute a value from the
values and operations.  For example, numbers can be added,
subtracted, multiplied, or divided using the operators `+`, `-`,
`*`, or `/` respectively.

Note that operators in expressions have their own *precedence*.
That means that multiplication and division are done first, and then
any addition or subtraction (from left to right).  You can change the order of operations
by adding parentheses around the parts of the expression you want
calculated first.*

Run this program to see what happens (*you can hide the warning you may be seeing about typing variables* - we'll describe why that is happening later.)

```run-dartpad
void main () {
  // Declare variable x.
  var x;

  // Assign an initial value for x.
  x = 2;

  print('The value of x is initially ${x}.\n');

  // Compute a new value for x.
  x = x * 7 + 4;

  print('The new value of x is ${x}.');
}
```

**Try This:** Change the value of the initial assignment of x to a
different number and run the program again.

You'll note that the calls to the `print` function are using
a special feature of Dart called *string interpolation*.  It
just means that you can embed the value of a variable in the
middle of a string, and Dart will expand it inline.  You must
use the single (`'`) quotes to delimit a string that uses
string interpolation.

Below you'll find a code fragment that defines two variables.  One for the temperature as measured in degrees Celsius, and the other for computing the equivalent value in Fahrenheit.

You can also declare a variable and assign a value to it in one statement.

```dart
var x = 1;
```

**Try This:** See if you can change the expression assigning a value to `degreesF`
in the following code fragment so that it correctly computes the correct temperature in Fahrenheit.
*Hint: You'll need to use the `*` and `+` operators in your expression.  You can click **Hint** below for an additional hint.*

```run-dartpad
{$ begin main.dart $}
// This is the input in degrees C.
// You can change this number if you want to.
var degreesC = 20;

// Change this line to calculate the output in degrees F.
var degreesF = 0;
{$ end main.dart $}
{$ begin solution.dart $}
var degreesC = 20;
var degreesF = degreesC * 9/5 + 32;
{$ end solution.dart $}
{$ begin test.dart $}
void main() {
    print('${degreesC}° Celsius is equal to ${degreesF}° Fahrenheit!\n');

    if ((degreesF - (degreesC * 9/5 + 32)).abs() < .01) {
        print("That looks right!");
    } else {
        print("That doesn't look right.  Try again.");
    }
}
{$ end test.dart $}
{$ begin hint.txt $}
To convert from C to F, multiply C by 9/5 and then add 32.
{$ end hint.txt $}
```

**Congratulations** if you got that!

## Next - [Conditionals and If Statements](03-conditionals.md)

*Report errors or suggestions for this lesson on our [Issue Tracker](https://github.com/reskillamericans/first-time-dart/issues/new?title=variables).*

<script type="text/javascript" src="../scripts/helper.js" defer></script>
