+++
author = "Radek"
title = "Code blocks variants"
date = "2019-03-10"
description = "Sample article showcasing most popular programming languages."
+++

Since v4.2.0, Terminal Theme uses Chroma as syntax highlighter. As Hugo documentation refers: "it is built in Go and is really, really fast".

Below you can see many basic presentations of the code blocks you can use depending on your needs. Except the `{{ < code > }}` shortcode example, all other blocks are generated based on the configuration you can learn about from the [official Hugo docs](https://gohugo.io/content-management/syntax-highlighting/).

---

## Examples:

### Raw block with no specified language (and no syntax highlighting)

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### With specified language

#### Line highlighting

```html {hl_lines=[5]}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### Line highlighting / table line numbers

```html {linenos=table,hl_lines=[5]}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### Line highlighting / inline line numbers

```html {linenos=inline,hl_lines=[5]}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### Hugo's internal `{{ < highlight > }}` shortcode

{{< highlight html >}}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
{{< /highlight >}}

#### Custom built-in `{{ < code > }}` shortcode

{{< code title="Hey, this is a code block title" language="html" open="true" opts="linenos=table" >}}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>

{{< /code >}}

## Programming languages:

### A

```abap
WRITE 'Hello, World!'.
```

```actionscript
package {
    public class HelloWorld {
        public static function main():void {
            trace("Hello, World!");
        }
    }
}
```

```ada
with Ada.Text_IO; use Ada.Text_IO;
procedure Hello is
begin
    Put_Line("Hello, World!");
end Hello;
```

### B

```bash
echo "Hello, World!"
```

```brainfuck
+[----->+++<]>.++++++++++++..+++.>++++++[->+++++++<]>+.------------.---.+++++.
```

### C

```c
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```csharp
using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
```

```c++
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### D

```d
import std.stdio;
void main() {
    writeln("Hello, World!");
}
```

### E

```elixir
IO.puts "Hello, World!"
```

```erlang
-module(hello).
-export([world/0]).
world() -> io:format("Hello, World!~n").
```

### F

```fsharp
printfn "Hello, World!"
```

### G

```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```

### H

```haskell
main = putStrLn "Hello, World!"
```

### J

```js
var x, y, z; // Declare 3 variables
x = 5; // Assign the value 5 to x
y = 6; // Assign the value 6 to y
z = x + y; // Assign the sum of x and y to z

document.getElementById("demo").innerHTML = "The value of z is " + z + ".";
```

```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### K

```kotlin
fun main() {
    println("Hello, World!")
}
```

### L

```lua
print("Hello, World!")
```

### M

```matlab
disp('Hello, World!')
```

### N

```nim
echo "Hello, World!"
```

### O

```objectivec
#import <Foundation/Foundation.h>
int main() {
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}
```

### P

```perl
print("Hello, World!\n");
```

```php
<?php echo "Hello, World!"; ?>
```

```python
print("Hello, World!")
```

### R

```r
cat("Hello, World!\n")
```

```ruby
puts "Hello, World!"
```

```rust
fn main() {
    println!("Hello, World!");
}
```

### S

```scala
object HelloWorld extends App {
  println("Hello, World!")
}
```

### T

```typescript
console.log("Hello, World!");
```

### V

```vlang
fn main() {
    println('Hello, World!')
}
```

### Z

```zig
const std = @import("std");
pub fn main() !void {
    std.debug.print("Hello, World!\n", .{});
}
```
