function solution(numbers, target) {
    var answer = 0
    let lastIndex = numbers.length-1
    let repeat = Math.pow(2,numbers.length)
    let count = 0
    
    // 깊이우선 탐색
    let stack = [{index : 0, sum : 0}]
    while(stack.length!=0){
        let tmp = stack.pop()
        let tmpIndex = tmp.index
        let tmpSum = tmp.sum

        if(count == repeat) break
        
        else if(tmpIndex == lastIndex ) {
            if(tmpSum == target) answer++
            count++
            continue
        }
        else{
            if(tmpIndex == 0 && tmpSum == 0){
                stack.push({index:0, sum:numbers[0]})
                stack.push({index:0, sum:-numbers[0]}) 
            }
            else{
                stack.push({index:tmpIndex+1, sum:tmpSum+numbers[tmpIndex+1]})
                stack.push({index:tmpIndex+1, sum:tmpSum-numbers[tmpIndex+1]})   
            }
        }     
    }
    return answer;
}