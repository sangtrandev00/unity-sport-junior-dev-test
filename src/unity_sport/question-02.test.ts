// src/data_structure/string/valid-palindrome.test.ts

import { describe, it, expect } from 'bun:test';
import { twoSum } from './question-02';

describe('twoSum', () => {
    it('should return the correct indices for a valid input', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expected = [[0, 1]]; // Indices of numbers 2 and 7
        const result = twoSum(nums, target);
        expect(result).toEqual(expected);
    });

    it('should return multiple pairs for the same target', () => {
        const nums = [3, 2, 4, 3];
        const target = 6;
        const expected = [[1, 2], [0, 3]]; // Indices of numbers 2 & 4 and 3 & 3
        const result = twoSum(nums, target);
        expect(result).toEqual(expect.arrayContaining(expected));
    });

    it('should return an empty array if no pairs are found', () => {
        const nums = [1, 2, 3];
        const target = 7;
        const expected: Array<Array<number>> = [];
        const result = twoSum(nums, target);
        expect(result).toEqual(expected);
    });

    it('should return an empty array if nums is empty', () => {
        const nums: any = [];
        const target = 7;
        const expected: Array<Array<number>> = [];
        const result = twoSum(nums, target);
        expect(result).toEqual(expected);
    });
});
