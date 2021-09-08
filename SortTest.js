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

 // 가장 큰 수
 function solution(numbers) {
    
    let answer = numbers.map((num) => num + '') // 문자열로 변환
    answer.sort((a, b) => (b + a) - (a + b)); // 비교 정렬, 정확한 정렬 위해 연결해서 비교
    // 문자열 합치기
    answer = answer.join('')

    return answer[0] == '0' ? '0' : answer;
}

// h- index
function solution(citations) {
    var answer = 0;
    let i, tmp;
    let len = citations.length;
    
    // 내림차순 정렬
    citations.sort((a, b) => b - a);
    
    // 인용된 수와 논문 편수 확인
    for ( i = 0; i < len ; i++ ) {
        if(citations[i] < i + 1)
            return i;
        else if(citations[i] == i + 1)
            return i + 1;
    } 
    return len;
}