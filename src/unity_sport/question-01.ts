export function isPalindrome(s: string): boolean {
    if (s.length == 0 || s.length == 1) return true
    const rawString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // Sử dụng regex
    const strLength = rawString.length;
    for (let i = 0; i < strLength / 2; i++) {
        if (rawString[i] != rawString[strLength - 1 - i]) {
            return false
        }
    }
    return true // Time complexity O(n/2), Space O(n)
};

// const s2 = s.split('').reverse().join('')
console.log(isPalindrome("radar")) // true
console.log(isPalindrome("level")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true amanaplanacanalpanama