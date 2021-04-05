# Hello, World! - My First Dart Program

<iframe width="560" height="315" src="https://www.youtube.com/embed/1viR1v4Iw4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The most common first program that programmers write when they begin
a new programming language is the traditional, "hello, world" program.

The goal is to get you programming with the simplest program that
does *something*, which you can build from as you learn more
language features.

In these tutorials, you will not have to install anything on your
computer, as we will be using an embedded text editor that can
help you edit and format your code, and run the examples.

```dart
void main() {
  print("hello, world");
}
```

Type the above lines of code exactly as they appear into the left side of the DartPad below and click Run.

```run-dartpad

```

You should see the words "hello, world" appear in the Console on the right side of the
DartPad.  **Congratulations!**  You've just written and executed your first Dart program!

*You may have noticed some messages popping up at the bottom of the DartPad while you were typing.  That's because DartPad periodically checks your code for errors.  When it finds one, it displays a message in the lower right corner.*

Go ahead and click the `Format` button above.  Did your code change?  Dart has a recommended way that the code should *look* in addition to being able to execute.  That's not so
much for the computer to understand your code, but for your
fellow-programmers to be able to more easily read your code.

Over time you'll learn the formatting Rules for Dart
programs, but it never hurts to let Dart go ahead and format
your code *The Dart Way*.

## What do the parts of Hello, World mean?

The first line `void main() {` defines the beginning of a *function* called `main`.  Functions are the building blocks of every program.  In Dart, to run your program, it looks
for the function called `main` and executes it.  This function is responsible for calling all the other functions of your program.

The `void` keyword tells Dart that this function will not return
any value (as some functions can).  Since Dart will ignore any returned value anyway, this doesn't matter.

The second line, `print("hello, world")` is an example of a function call.  Here, we are calling the built-in function `print`.  Functions take arguments - data they can use to tell them what to do.  In this case, we have passed in a single `String` argument, "hello, world".  A `String` is just a sequence of text characters.

And lastly, our function ends with a `}`.  The body of a function can be surrounded by the "curly-brace" characters `{` and `}` to tell Dart which program lines are part of your function.

## Next - [Variables and Expressions](02-variables.md)

*Report errors or suggestions for this lesson on our [Issue Tracker](https://github.com/reskillamericans/first-time-dart/issues/new?title=hello-world).*

<script type="text/javascript" src="../scripts/helper.js" defer></script>