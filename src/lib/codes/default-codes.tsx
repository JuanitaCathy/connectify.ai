import { Code } from './types';

export const defaultCodes: Code[] = [
    {
        id: "1",
        title: "Python: To Reverse String",
        content: `def reverse_string(s):
    return s[::-1]
print(reverse_string("Hello"))`,
    },
    {
        id: "2",
        title: "JavaScript: To Reverse String",
        content: `function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));`,
    },
    {
        id: "3",
        title: "Java",
        content: `public class Reverse {
    public static void main(String[] args) {
        String original = "Hello";
        String reversed = new StringBuilder(original).reverse().toString();
        System.out.println(reversed);
    }
}`,
    },
    {
        id: "4",
        title: "Using C#",
        content: `using System;
class Program {
    static void Main() {
        string str = "Hello";
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        Console.WriteLine(new string(charArray));
    }
}`,
    },
    {
        id: "5",
        title: "Ruby Eyyy",
        content: `def reverse_string(s)
    s.reverse
end
puts reverse_string("Hello")`,
},
{
    id: "6",
    title: "C++",
    content: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
string str = "Hello";
reverse(str.begin(), str.end());
cout << str << endl;
return 0;
}`,
},
{
    id: "7",
    title: "PHP",
    content: `<?php
function reverseString($string) {
return strrev($string);
}
echo reverseString("Hello");`,
},
{
    id: "8",
    title: "Go",
    content: `package main

import (
"fmt"
)

func reverseString(s string) string {
runes := []rune(s)
for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
    runes[i], runes[j] = runes[j], runes[i]
}
return string(runes)
}

func main() {
fmt.Println(reverseString("Hello"))
}`,
},
{
    id: "9",
    title: "Swift",
    content: `func reverseString(_ s: String) -> String {
return String(s.reversed())
}
print(reverseString("Hello"))`,
},
{
    id: "10",
    title: "Kotlin",
    content: `fun reverseString(s: String): String {
return s.reversed().toString()
}
fun main() {
println(reverseString("Hello"))
}`,
},
];

   
