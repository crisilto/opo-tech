# --------------------------------------------------------------------------
# PYTHON COLLECTIONS
# --------------------------------------------------------------------------
# Python includes several built-in data structures that allow storing and
# organizing groups of values. Each structure has its own characteristics:
#
# 1. LIST → Ordered, mutable, allows duplicates.
# 2. TUPLE → Ordered, immutable, allows duplicates.
# 3. SET → Unordered, unique elements only (no duplicates).
# 4. DICTIONARY → Key-value pairs, keys are unique.
#
# In this file you will find:
# - Examples of each structure
# - Insertion, deletion, update, sorting
# - Access operations
# - A practical EXTRA exercise (Contact Agenda)
# --------------------------------------------------------------------------


# --------------------------------------------------------------------------
# LISTS
# --------------------------------------------------------------------------
my_list = ["cris", "lilith", "fay"]
print(my_list)

# insertion
my_list.append("crisketo")

# deletion
my_list.remove("cris")  
my_list.pop()            # removes last element

print(my_list)

# access
print(my_list[0])

# update
my_list[1] = "fayhuahua"
print(my_list)

# sorting
my_list.sort()
print(my_list)


# --------------------------------------------------------------------------
# TUPLES (immutable lists)
# --------------------------------------------------------------------------
my_tuple: tuple = ("cristina", "silvestre", "@crisilto", "27")

# access
print(my_tuple[1])
print(my_tuple[3])

# sorting → tuples are immutable, so we recreate a new tuple
my_tuple = tuple(sorted(my_tuple))
print(my_tuple)

print(type(my_tuple))


# --------------------------------------------------------------------------
# SETS (unordered and unique)
# --------------------------------------------------------------------------
my_set: set = {"cristina", "silvestre", "@crisilto", "27"}
print(my_set)

# insertion
my_set.add("crisilto@gmail.com")
my_set.add("crisilto@gmail.com")  # duplicate ignored

print(my_set)

# deletion
my_set.remove("cristina")
print(my_set)

# sorting → sets are unordered; convert to list -> sort -> convert back to set
my_set = set(sorted(my_set))
print(my_set)

print(type(my_set))


# --------------------------------------------------------------------------
# DICTIONARIES (key-value pairs)
# --------------------------------------------------------------------------
my_dict: dict = {
    "name": "cris",
    "surname": "silvestre",
    "alias": "@crisilto",
    "age": "27"
}

# insertion
my_dict["email"] = "crisilto@gmail.com"
print(my_dict)

# deletion
del my_dict["surname"]
print(my_dict)

# access
print(my_dict["name"])

# update
my_dict["age"] = "28"
print(my_dict)

# sorting → sorts by key
my_dict = dict(sorted(my_dict.items()))
print(my_dict)

print(type(my_dict))


# --------------------------------------------------------------------------
# EXTRA DIFFICULTY: CONTACT AGENDA
# --------------------------------------------------------------------------
# Requirements:
# - Store contacts with: name → phone
# - Operations: search, insert, update, delete
# - Phone must be numeric and up to 11 digits
# - Program loops until user chooses to exit
# - Validate invalid options
# --------------------------------------------------------------------------

def my_agenda():

  agenda = {}

  def insert_contact():
    phone = input("Enter the phone number: ")

    if phone.isdigit() and 1 <= len(phone) <= 11:
      agenda[name] = phone
      print(f"Contact '{name}' added/updated successfully.")
    else:
      print("Invalid phone number. It must be numeric and up to 11 digits.")

  while True:
    print("")
    print("1. Search contact")
    print("2. Insert contact")
    print("3. Update contact")
    print("4. Delete contact")
    print("5. Exit")

    option = input("\nChoose an option: ")

    match option:
      case "1":
        name = input("Enter the contact name to search: ")
        if name in agenda:
          print(f"{name}'s phone number is {agenda[name]}")
        else:
          print(f"Contact '{name}' does not exist.")
      case "2":
        name = input("Enter the new contact name: ")
        insert_contact()
      case "3":
        name = input("Enter the contact name to update: ")
        if name in agenda:
          insert_contact()
        else:
          print(f"Contact '{name}' does not exist.")
      case "4":
        name = input("Enter the contact name to delete: ")
        if name in agenda:
          del agenda[name]
          print(f"Contact '{name}' deleted.")
        else:
          print(f"Contact '{name}' does not exist.")
      case "5":
        print("Exiting agenda.")
        break
      case _:
        print("Invalid option. Please choose from 1 to 5.")


# Run agenda
my_agenda()
