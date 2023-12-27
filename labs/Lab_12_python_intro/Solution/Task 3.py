
def print_character_frequency(data):
    characters_count = {}
    max_count = 1

    for line in data:
        line = line.strip()
        for char in line:
            characters_count[char] = characters_count.get(char, 0) + 1
            max_count = max(max_count, characters_count[char])

    unique_chars = sorted(set(characters_count.keys()))

    for i in range(max_count, 0, -1):
        line = ''
        for char in unique_chars:
            if characters_count[char] >= i:
                line += '#'
            else:
                line += ' '
        print(line)

    for char in unique_chars:
        print(char, end='')


data = input()
lines = data.split('\n')
print_character_frequency(lines)