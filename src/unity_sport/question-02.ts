export function twoSum(nums: number[], target: number): Array<Array<number>> {
    if (nums.length == 0) return []
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

    return result
};
// for i, for j, j = i + 1, result = [[0, 1]] => O(n^2), O(1)
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 2, 4, 3], 6)) // (3, 3), (2,4) => O(n^2) 100000000

