# Conditionals and the If Statement

Programs would be pretty boring if they could only perform
the identical calculation every time regardless of what
their input data looked like.

For that reason, programming languages provide a way of
*conditioning* some steps in the program based on
properties of their input data.

To do that, you can use a Conditional Expression that will evaluate to
a `Boolean` value; i.e., either `true` or `false`.  Most conditional
expressions use one of these *comparison operators*:

| Operator | Meaning |
| --- | --- |
| a < b | `true` if a is "less than" b |
| a <= b | `true` if a is "less than or equal" to b |
| a > b | `true` if a is "greater than" b |
| a >= b | `true` if a is "greater than or equal" to b |
| a == b | `true` if a is "equal to" b |
| a != b | `true` if a is "not equal" to b |
| a \|\| b | `true` if either a "OR" b is `true` |
| a && b | `true` if both a "AND" b is `true` |

*The `==` operator uses two equal signs to differentiate it from the
assignment (`=`) operator.*

For example, suppose we want to print one statement for
positive numbers, another statement for negative ones,
and a last one for zeros.

```run-dartpad
void main() {
  // TRY CHANGING THIS VALUE TO SEE DIFFERENT RESULTS
  var x = 0;

  if (x > 0) {
    print('$x is a positive number.');
  } else if (x < 0) {
    print('$x is a negative number.');
  } else {
    print('$x is ZERO!');
  }
}
```

The `if` statement allows your program to take two distinct paths, depending
on the result of a *test*.  The expression in parentheses after the `if` keyword
is a conditional expression.  If the value of the expression is `true`, then the
main `block` of the `if` statement will be executed.  Otherwise, the block
following the `else` keyword will be executed (if any).

Notice how a sequence of tests can be chained together by using `else if` between
conditional test and code block.

Another way of testing an expression against a number of possible values is
to use the switch statement.

```run-dartpad
void main () {
    // TRY CHANGING THIS VALUE TO SEE WHAT HAPPENS.
    var ch = 'a';

    switch (ch) {
        case '0':
        case '1':
            print('$ch is a digit');
            break;

        case 'a':
        case 'b':
            print('$ch is a letter.');
            break;

        case '+':
            print('$ch is a symbol.');
            break;

        default:
            print('$ch is unknown.');
            break;
    } 
}
```

There is also a shortcut expression that allows you to conditionally
choose a value in the middle of an expression instead of using the
bulkier if expression - it's called the *ternary-operator* and it
uses the characters `?` and `:`:

```run-dartpad
void main() {
    // TRY CHANGING THIS VALUE AND OBSERVE THE RESULTS
    var x = 10;
    var s;

    if (x < 0) {
        s = "x is negative";
    } else {
        s = "x is non-negative";
    }
    print(s);

    // More compact code using the ternary operator
    s = x < 0 ? "x is negative" : "x is non-negative";
    print(s);
}
```

## Next - [Loops](04-loops.md)

*Report errors or suggestions for this lesson on our [Issue Tracker](https://github.com/reskillamericans/first-time-dart/issues/new?title=conditionals).*

<script type="text/javascript" src="../scripts/helper.js" defer></script>
