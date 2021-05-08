// K번째 수 문제
function solution(array, commands) {    
    var answer = [];
    for( let index in commands){
        let tmp = array.slice(commands[index][0]-1,commands[index][1])
        tmp.sort(function(a, b) {
            return a - b
        })
        tmp = tmp[commands[index][2]-1]
        answer.push(tmp)
    }
    return answer
}