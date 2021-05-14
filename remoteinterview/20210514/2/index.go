package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strconv"
	"strings"
)

func main() {
	bytes, err := ioutil.ReadAll(os.Stdin)
	if err != nil {
		return
	}
	slices := strings.Split(string(bytes), "\n")
	size, _ := strconv.Atoi(strings.TrimSpace(slices[0]))
	for i := 1; i < size+1; i++ {
		words := reverse(strings.Split(slices[i], " "))

		fmt.Printf("%v\n", words)
	}
}

func reverse(words []string) string {
	result := ""
	for i := len(words) - 1; i >= 0; i-- {
		if result != "" {
			result += " "
		}
		result += words[i]
	}
	return result
}
