package main

import "sort"

func solution(distance int, rocks []int, n int) int {
	sort.Ints(rocks[:])
	answer := 0
	start := 1
	end := distance
	for start <= end {
		mid := (start + end) / 2
		cnt := 0
		j := -1

		for i := 0; i < len(rocks); i++ {
			length := 0

			if j == -1 {
				length = rocks[i]
			} else if i == len(rocks) {
				length = distance - rocks[i]
			} else {
				length = rocks[i] - rocks[j]
			}

			if length < mid {
				cnt++
			} else {
				j = i
			}
		}

		if cnt > n {
			end = mid - 1
		} else {
			start = mid + 1
			if answer < mid {
				answer = mid
			}
		}
	}
	return answer
}

func main() {
	result := solution(25, []int{2, 14, 11, 21, 17}, 2)
	println(result)
}
