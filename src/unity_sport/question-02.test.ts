// src/data_structure/string/valid-palindrome.test.ts

import { describe, it, expect } from 'bun:test';
import { isPalindrome } from './question-01';

describe('isPalindrome', () => {
    it('should return true for a typical palindrome "A man, a plan, a canal: Panama"', () => {
        const result = isPalindrome("A man, a plan, a canal: Panama");
        expect(result).toBe(true);
    });

    it('should return true for a simple palindrome "racecar"', () => {
        const result = isPalindrome("racecar");
        expect(result).toBe(true);
    });

    it('should return true for a palindrome with spaces "No lemon, no melon"', () => {
        const result = isPalindrome("No lemon, no melon");
        expect(result).toBe(true);
    });

    it('should return false for a non-palindrome "hello"', () => {
        const result = isPalindrome("hello");
        expect(result).toBe(false);
    });

    it('should return true for an empty string', () => {
        const result = isPalindrome("");
        expect(result).toBe(true);
    });

    it('should return true for a single character "a"', () => {
        const result = isPalindrome("a");
        expect(result).toBe(true);
    });

    it('should return true for a single character "A" (case insensitive)', () => {
        const result = isPalindrome("A");
        expect(result).toBe(true);
    });

    it('should return true for a numeric palindrome "12321"', () => {
        const result = isPalindrome("12321");
        expect(result).toBe(true);
    });

    it('should return false for a numeric non-palindrome "12345"', () => {
        const result = isPalindrome("12345");
        expect(result).toBe(false);
    });
});
