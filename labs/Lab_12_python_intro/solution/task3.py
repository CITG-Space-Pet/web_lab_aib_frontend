text = input()

character_count = {}

for char in text:
    if char != ' ' and char != '\n':
        if char in character_count:
            character_count[char] += 1
        else:
            character_count[char] = 1

sorted_characters = sorted(character_count.keys())

for char in sorted_characters:
    print('#' * character_count[char] + ' ' + char)