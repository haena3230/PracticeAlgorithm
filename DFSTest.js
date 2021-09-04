// 깊이우선 탐색 네트워크 문제 --> 깊이 우선 탐색을 재귀함수를 통해 구현 
function solution(n, computers) {
    var answer = 0
    let visited = new Array(n).fill(false)
    
    function dfs(index){
        visited[index]=true
        for(let i = 0 ; i < n ; i++){
            if(i != index && visited[i] == false && computers[index][i] == 1){
                dfs(i)
            }
        }
    }
    
    for(let i = 0 ; i < n ; i++){
        if(visited[i]==false){
            answer++
            dfs(i)
        }
    }

    return answer
}

// 깊이우선 탐색 타겟넘버 문제 --> 깊이 우선 탐색을 stack과 queue를 통해 구현
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

// 깊이우선 - 여행경로
// ************테스트 1번 해결 못함 

function solution(tickets) {
    var answer = [];
    let visited = new Array(tickets.length).fill(false);
    let tmp;
    // 도착공항 기준 정렬 
    tickets.sort(function(a,b) {
        if(a[1] < b[1]) return -1;
        if(a[1] > b[1]) return 1;
        return 0;
    })
    
    // dfs 
    function dfs( index ) {
        tmp = tickets[index]
        answer.push(tmp[0])
        visited[index] = true;
        
        for(let i in tickets) {
            if( visited[i] == false && tmp[1] == tickets[i][0]) {
                dfs(i);
            }
        }
    }
   
  
    for(let index in tickets) {
          // 인천에서 출발
        if(tickets[index][0] == "ICN") {
            dfs(index);
            if(answer.length == visited.length) {
                answer.push(tmp[1]);
                break;
            } else { // 끝까지 도달못하면 초기화
                answer = [];
                visited.fill(false);
            }
        }
    }
    
     
    return answer;
}