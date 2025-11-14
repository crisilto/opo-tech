# FUNCTIONS IN PYTHON
# -------------------
# Functions are reusable blocks of code designed to perform a specific task.
# They help organize the program, reduce repetition, and improve readability.
#
# Basic structure:
# def function_name(parameters):
#     # code to execute
#     return value  # optional
#
# NOTES:
# - "parameters" are the names used inside the function.
# - "arguments" are the actual values you pass when calling the function.
# - If no "return" statement is used, the function returns "None" by default.
# - A function must be called (executed) to run its code.

# --------------------------------------------------------------------------
# USER-DEFINED FUNCTIONS
# --------------------------------------------------------------------------

# 1️⃣ Simple function (no parameters, no return)
def greet():
  print("hello")


greet()  # prints "hello"

# 2️⃣ Function with a return value


def greet():
  return "hello"  # returns the string instead of printing it


print(greet())  # calling and printing the returned value

# 3️⃣ Function with one parameter


def greet(name):
  print("hello", name)


greet("cris")

# 4️⃣ Function with multiple parameters


def greet(greeting, name):
  print(greeting, name, "!")


greet("hi", "cris")

# 5️⃣ Function with a default parameter value


def greet(name, greeting="hello"):
  print(greeting, name)


greet("cris")  # uses default "hello"
greet("fay", "hi")  # overrides default

# 6️⃣ Function with parameters and a return value


def greet(greeting, name):
  return f"{greeting} {name}!"


result = greet("hello", "cris")
print(result)

# 7️⃣ Function returning multiple values


def greet_and_farewell(name):
  greeting = f"hello {name}!"
  farewell = f"goodbye {name}!"
  return greeting, farewell  # returns a tuple (greeting, farewell)


my_greet, my_farewell = greet_and_farewell("Fay")
print(my_greet)
print(my_farewell)

# --------------------------------------------------------------------------
# VARIABLE NUMBER OF ARGUMENTS
# --------------------------------------------------------------------------

# 8️⃣ *args → allows passing multiple non-keyword arguments (tuple)


def multiple_greetings(*names):
  for name in names:
    print(f"hello {name}!")


multiple_greetings("cris", "lilith", "fay")

# 9️⃣ **kwargs → allows passing multiple keyword arguments (dictionary)


def multiple_key_arg_greetings(**info):
  for key, value in info.items():
    print(f"{key}: {value}")


multiple_key_arg_greetings(
    name="fay",
    age=26,
    country="germany"
)

# --------------------------------------------------------------------------
# NESTED FUNCTIONS
# --------------------------------------------------------------------------
# A function can contain another function inside.
# The inner function only exists inside the outer one.


def outer_function():
  print("outer function: start")

  def inner_function():
    print("inner function: 'hello, Python!'")

  inner_function()
  print("outer function: end")


outer_function()

# --------------------------------------------------------------------------
# BUILT-IN FUNCTIONS
# --------------------------------------------------------------------------
# Python includes many pre-defined (built-in) functions that you can use anytime.
# Some common ones: len(), type(), print(), input(), str(), int(), float(), range()...

print(len("Cris"))       # length of a string
print(("Cris").upper())  # converts to uppercase
print(("Cris").lower())  # converts to lowercase
print(type("cris"))      # returns the type of the value (str)
print(type(27))          # int
print(type(True))        # bool

# --------------------------------------------------------------------------
# LOCAL AND GLOBAL VARIABLES
# --------------------------------------------------------------------------
# A variable defined inside a function = LOCAL (exists only in that function)
# A variable defined outside any function = GLOBAL (accessible anywhere)
# If both exist with the same name, the local variable takes priority (shadowing).

x = 13  # global variable


def my_x():
  x = 5  # local variable
  return x


print(f"value of x as local variable: {my_x()}")
print(f"value of x as global variable: {x}")

# You can use the 'global' keyword to modify a global variable from inside a function.
count = 0


def increase_count():
  global count
  count += 1


increase_count()
print(f"value of global count: {count}")

# --------------------------------------------------------------------------
# ANONYMOUS FUNCTIONS (LAMBDA)
# --------------------------------------------------------------------------
# "lambda" creates a small, one-line anonymous function.
# Syntax: lambda parameters: expression
# It's commonly used for simple operations or with functions like map(), filter(), etc.


def add(x, y): return x + y


print(add(3, 5))  # 8

# Example with built-in map()
numbers = [1, 2, 3, 4]
squared = list(map(lambda n: n ** 2, numbers))
print(squared)

# --------------------------------------------------------------------------
# EXTRA DIFFICULTY (FizzBuzz Variant)
# --------------------------------------------------------------------------
# Create a function that receives two text strings and returns a number.
# - The function prints all numbers from 1 to 100.
# - If a number is a multiple of 3, print the first string.
# - If a number is a multiple of 5, print the second string.
# - If it's multiple of both, print both concatenated.
# - Finally, return how many times a number (not text) was printed.
def fizzbuzz_variant(text1, text2):
  number_count = 0
  for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
      print(text1 + text2)
    elif i % 3 == 0:
      print(text1)
    elif i % 5 == 0:
      print(text2)
    else:
      print(i)
      number_count+=1
  return number_count
result = fizzbuzz_variant("fay", "cris")
print(f"Numbers printed instead of text: {result}")