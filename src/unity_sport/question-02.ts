export function twoSum(nums: number[], target: number): Array<Array<number>> {
    const map = new Map<number, number>()
    let result: Array<Array<number>> = []

    nums.forEach((item: number, index: number) => {
        const remaining = target - item
        if (map.has(remaining)) {
            const found = [map.get(remaining) as number, index]
            result.push(found)
        } else {
            map.set(item, index)
        }
    })

    return result // O(n), O(n)
};

function twoSumV2(nums: number[], target: number): Array<Array<number>> {
    let left = 0;
    let right = nums.length - 1;

    // Kỹ thuật này có phải là kỹ thuật 2 con trỏ ?
    // Các kỹ thuật hay gặp trong lập trình
    // Chunking chia để trị, sliding window, con trỏ, tham lam, quy hoạch động, quay lui (backtracking), bruteforce
    let result: Array<Array<number>> = []

    while (left < right) {
        let sum = nums[left] + nums[right]

        if (left == right) break

        if (sum === target) {
            result.push([left, right])
            left++
            right--
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }

    return result
};

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 3], 6), sliding window (left, right)
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([3, 2, 4, 3], 6)) // (3, 3), (2,4) => O(n^2) 100000000
console.log(twoSumV2([2, 3, 4], 6))
console.log(twoSumV2([2, 3, 3, 4], 6)) // (3, 3), (2,4) => O(n^2) 100000000

