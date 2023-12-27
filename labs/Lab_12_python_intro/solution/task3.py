def histogram(text):
    char_count = {}
    for char in text:
        if char != ' ' and char != '\n':
            char_count[char] = char_count.get(char, 0) + 1

    sorted_chars = sorted(char_count.keys())

    max_count = max(char_count.values())

    for char in sorted_chars:
        count = char_count[char]
        histogram_line = '#' * count
        histogram_line += ' ' * (max_count - count)
        print(histogram_line + ' ' + char)

encrypted_text = input("Введите зашифрованный текст: ")
histogram(encrypted_text)