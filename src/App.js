import Timeline from './lib';

function App() {

  const actions = [
    {
      code: "console.log('Hello World in js')",
      time: 0,
      actionType: "T",
      lang: "javascript"
    },
    {
      code: "print('Hello World is Python')",
      time: 10,
      actionType: "T",
      lang: "python"
    },
    {
      code: `package main
import "fmt"
func main() {
    fmt.Println("Hello World in Golang")
}`,
      time: 11,
      actionType: "T",
      lang: "golang"
    },
    {
      code: `puts "Hello World in Ruby"`,
      time: 15,
      actionType: "PASTE",
      lang: "ruby"
    },
    {
      code: `fun main () {
    println("Hello World in Kotlin")
}`,
      time: 30,
      actionType: "TEST",
      lang: "kotlin"
    },
    {
      code: `#include <stdio.h>
int main()
{
    println("Hello World in C");
    return 0;
}`,
      time: 45,
      actionType: "PASTE",
      lang: "c_cpp"
    },
    {
      code: `#include <iostream>
using namespace std;

int main()
{
    std::cout << "Hello World in C++";
    return 0;
}`,
      time: 50,
      actionType: "Test",
      lang: "c_cpp"
    },
    {
      code: `import java.util.*;
import java.lang.*;

public class solution {
    public static void main (String[] args) {
        System.out.println("Hello World in Java");
    }
}`,
      time: 70,
      actionType: "T",
      lang: "java"
    },
    {
      code: `print("Hello World in Swift")`,
      time: 100,
      actionType: "T",
      lang: "swift"
    },
  ]


  return (
    <div className="App h-screen flex flex-col items-center justify-center">
      <Timeline timelineArray={actions} duration={100} language={"python"} />
    </div>
  );
}

export default App;
