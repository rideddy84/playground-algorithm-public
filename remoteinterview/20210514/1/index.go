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
	slice := strings.Split(string(bytes), " ")

	temp1, _ := strconv.Atoi(slice[0])
	temp2, _ := strconv.Atoi(slice[1])
	targetN, _ := strconv.Atoi(slice[2])
	posN := 2

	for posN < targetN {
		posN++
		posVal := temp1 + temp2
		temp1 = temp2
		temp2 = posVal
	}

	fmt.Printf("%v", temp2)
}
