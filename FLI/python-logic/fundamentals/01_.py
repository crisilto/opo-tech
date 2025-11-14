"""
### OPERATORS IN PYTHON ###
──────────────────────────────────────────────
Python allows performing arithmetic operations, logical comparisons, and assignments
with a very simple and intuitive syntax.

Operators are grouped into different categories:

──────────────────────────────────────────────
🔹 1. ARITHMETIC OPERATORS
──────────────────────────────────────────────
Used to perform basic mathematical operations.

  +   Addition
  -   Subtraction
  *   Multiplication
  /   Division (returns float)
  //  Integer division (returns truncated int)
  **  Exponentiation
  %   Modulus (remainder of the division)

──────────────────────────────────────────────
🔹 2. COMPARISON OPERATORS
──────────────────────────────────────────────
Return boolean values (`True` or `False`) depending on whether the condition is met.

  ==  Equal to
  !=  Not equal to
  >   Greater than
  >=  Greater or equal to
  <   Less than
  <=  Less or equal to

──────────────────────────────────────────────
🔹 3. LOGICAL OPERATORS
──────────────────────────────────────────────
Used to combine boolean conditions.

  and → True only if **both** conditions are True
  or  → True if **at least one** condition is True
  not → Inverts the logical value

──────────────────────────────────────────────
🔹 4. ASSIGNMENT OPERATORS
──────────────────────────────────────────────
Allow assigning and modifying a variable value in a shorter way.

  =    Assign a value
  +=   Add and assign
  -=   Subtract and assign
  *=   Multiply and assign
  /=   Divide and assign
  //=  Integer divide and assign
  **=  Power and assign
  %=   Modulus and assign

──────────────────────────────────────────────
💡 NOTE:
Python **does not use** symbols like `||` or `&&` as other languages do.
Instead, it uses `or` and `and`.
──────────────────────────────────────────────

🔹 5. IDENTITY OPERATORS
──────────────────────────────────────────────
They compare if two variables **refer to the same object in memory**, 
not if their content is equal.

  is        → True if both variables are the same object
  is not    → True if they are different objects

──────────────────────────────────────────────
🔹 6. MEMBERSHIP OPERATORS
──────────────────────────────────────────────
Used to check if a value is **part of a sequence** like a string, list, or tuple.

  in        → True if the element exists in the sequence
  not in    → True if it doesn’t exist in the sequence

──────────────────────────────────────────────
🔹 7. BITWISE OPERATORS
──────────────────────────────────────────────
They operate at the **bit level** of integers.
Each bit of the number is compared or modified according to the operator.

  &   AND        → 1 if both bits are 1  
  |   OR         → 1 if at least one bit is 1  
  ^   XOR        → 1 if bits are different  
  ~   NOT        → Inverts all bits  
  <<  Left shift → Moves bits to the left (adds zeros on the right)  
  >>  Right shift→ Moves bits to the right (removes bits on the right)
──────────────────────────────────────────────
"""

### ARITHMETICS ###
print("\n### ARITHMETICS ###")
# addition
result = 3 + 5
print(result)   # 8

# substraction
result = 5 - 3
print(result)   # 2

# multiplication
result = 3 * 5
print(result)   # 15

# division (float)
result = 5 / 3
print(result)   # 1.666...

# integer division
result = 5 // 3
print(result)   # 1

# exponentiation
result = 3 ** 2
print(result)   # 9

# modulus (remainder)
result = 14 % 3
print(result)   # 2


### COMPARISONS ###
print("\n### COMPARISONS ###")

# equal to
print("equal to")
print(f"10 == 3? {10 == 3}")
print(f"10 == 10? {10 == 10}")
print(f"10 == '10'? {10 == '10'}")

# not equal to
print("\nnot equal to")
print(f"10 != 3? {10 != 3}")
print(f"10 != 10? {10 != 10}")
print(f"10 != '10'? {10 != '10'}")

# greater than
print("\ngreater than")
print(f"10 > 3? {10 > 3}")
print(f"10 > 10? {10 > 10}")
print(f"10 > 13? {10 > 13}")

# greater than or equal to
print("\ngreater than or equal to")
print(f"10 >= 3? {10 >= 3}")
print(f"10 >= 10? {10 >= 10}")
print(f"10 >= 13? {10 >= 13}")

# less than
print("\nless than")
print(f"10 < 3? {10 < 3}")
print(f"10 < 10? {10 < 10}")
print(f"10 < 13? {10 < 13}")

# less than or equal to
print("\nless than or equal to")
print(f"10 <= 3? {10 <= 3}")
print(f"10 <= 10? {10 <= 10}")
print(f"10 <= 13? {10 <= 13}")


### LOGICAL ###
print("\n### LOGICAL ###")

# OR
print("OR operator")
print(f"10 <= 3 or 1 > 0? {10 <= 3 or 1 > 0} -> False or True = True")
print(f"10 > 3 or 1 > 0? {10 > 3 or 1 > 0} -> True or True = True")
print(f"10 <= 3 or 1 < 0? {10 <= 3 or 1 < 0} -> False or False = False")

# AND
print("\nAND operator")
print(f"10 <= 3 and 1 > 0? {10 <= 3 and 1 > 0} -> False and True = False")
print(f"10 > 3 and 1 > 0? {10 > 3 and 1 > 0} -> True and True = True")
print(f"10 <= 3 and 1 < 0? {10 <= 3 and 1 < 0} -> False and False = False")

# NOT
print("\nNOT operator")
print(f"not 10 + 3 == 14? {not 10 + 3 == 14}")
print(f"not 11 + 3 == 14? {not 11 + 3 == 14}")


### ASSIGNATION ###
print("\n### ASSIGNATION ###")
my_number = 11
print(my_number)

# addition and assignation
my_number += 1
print(my_number)

# substraction and assignation
my_number -= 1
print(my_number)

# multiplication and assignation
my_number *= 2
print(my_number)

# division and assignation
my_number /= 2
print(my_number)

# integer division and assignation
my_number //= 1
print(my_number)

# exponentiation and assignation
my_number **= 1
print(my_number)

# modulus and assignation
my_number %= 2
print(my_number)


### IDENTITY OPERATORS ###
print("\n### IDENTITY OPERATORS ###")
my_new_number = my_number
print(f"my_number is my_new_number = {my_number is my_new_number}")
print(f"my_number is not my_new_number = {my_number is not my_new_number}")


### MEMBERSHIP OPERATORS ###
print("\n### MEMBERSHIP OPERATORS ###")
print(f"'u' in 'crisketo' = {'u' in 'crisketo'}")
print(f"'k' in 'crisketo' = {'k' in 'crisketo'}")
print(f"'u' not in 'crisketo' = {'u' not in 'crisketo'}")
print(f"'k' not in 'crisketo' = {'k' not in 'crisketo'}")


### BITWISE OPERATORS ###
print("\n### BITWISE OPERATORS ###")
a = 10  # 1010
b = 3   # 0011
print(f"AND: 10 & 3 = {10 & 3}")        # 0010
print(f"OR: 10 | 3 = {10 | 3}")         # 1011
print(f"XOR: 10 ^ 3 = {10 ^ 3}")        # 1001
print(f"NOT: ~10 = {~10}")
print(f"Right shift: 10 >> 2 = {10 >> 2}")   # 0010
print(f"Left shift: 10 << 2 = {10 << 2}")    # 101000


"""
### CONTROL STRUCTURES IN PYTHON ###
──────────────────────────────────────────────
Control structures allow us to define **how and when** certain parts of our code are executed.
They are fundamental for decision making, repetition, and error handling.

──────────────────────────────────────────────
🔹 1. CONDITIONAL STATEMENTS (IF / ELIF / ELSE)
──────────────────────────────────────────────
Used to execute different blocks of code depending on whether a condition is **True** or **False**.

  if condition:
      # code executed if condition is True

  elif other_condition:
      # code executed if previous conditions were False but this one is True

  else:
      # code executed if none of the conditions were True

💡 Python uses **indentation** (4 spaces) to define code blocks.
No braces `{}` are used as in other languages.

──────────────────────────────────────────────
🔹 2. LOOPS
──────────────────────────────────────────────
Used to **repeat** a block of code multiple times.

  🔸 FOR LOOP:
  Iterates over a sequence (such as a list, tuple, range, or string).

      for variable in sequence:
          # code executed each iteration

  Example:
      for i in range(5):
          print(i)    # prints numbers 0 to 4

  🔸 WHILE LOOP:
  Repeats a block of code **while a condition remains True**.

      while condition:
          # code executed until condition becomes False

──────────────────────────────────────────────
🔹 3. EXCEPTION HANDLING (TRY / EXCEPT / FINALLY)
──────────────────────────────────────────────
Used to handle errors gracefully and prevent the program from crashing.

  try:
      # code that may cause an error
  except:
      # code executed if an error occurs
  finally:
      # code that runs no matter what (optional)

──────────────────────────────────────────────
💡 TIP:
When possible, catch **specific exceptions** like `ZeroDivisionError` or `ValueError` 
to make your error handling more precise.
──────────────────────────────────────────────
"""

### IF ###
print("\n### IF ###")
if True:
    print("hello")
if False:
    print("bye")
if not False:
    print("bye")

age = 18
if age >= 18:
    print("adult")
if age < 18:
    print("not adult")


### ELIF ###
print("\n### ELIF ###")
if age >= 65:
    print("senior")
elif age >= 18:
    print("adult")
else:
    print("young")


### FOR ###
print("\n### FOR ###")
for i in range(11):
    print(i)


### WHILE ###
print("\n### WHILE ###")
i = 0
while i <= 10:
    print(i)
    i += 1


### EXCEPTIONS ###
print("\n### EXCEPTIONS ###")
try:
    print(10 / 0)
except:
    print("you cannot divide by zero")
finally:
    print("end")


# Print all even numbers between 10 and 55 (inclusive)
# except for the number 16 and those that are multiples of 3
for i in range(10, 56):
    is_even = i % 2 == 0
    not_16 = i != 16
    not_multiple_of_3 = i % 3 != 0

    if is_even and not_16 and not_multiple_of_3:
        print(i)
