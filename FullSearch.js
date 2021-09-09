// 완전탐색 모의고사 문제
function solution(answers) {
    let length = answers.length
    let result  = [{index : 1, count : 0}, {index: 2, count:0}, {index: 3, count:0}]
    let one = [1,2,3,4,5]
    let two = [2,1,2,3,2,4,2,5]
    let three = [3,3,1,1,2,2,4,4,5,5]
    
    for(let i = 0 ; i < length ; i++) {
        if(answers[i] == one[i % 5])
            result[0].count++
        if(answers[i] == two[i % 8])
            result[1].count++
        if(answers[i] == three[i % 10])
            result[2].count++
    }
    
    result.sort(function(a, b) {
        return b.count - a.count
    })
    let max = result[0].count
    let answer = [result[0].index]
    
    let i = 1
    while(result[i]){
        if(result[i].count == max){
            answer.push(result[i].index)
        }
        else break
        i++
    }
    
    return answer;
}

// 카펫 문제
function solution(brown, yellow) {
    // 갈색 + 노란색 = 가로 * 세로 (가로가 세로보다 같거나 길다)
    
    let sum = brown + yellow;
    let i;
    
    for ( i = 3; i < sum ; i++ ) {
        if(sum % i == 0) {
            let tmp = sum / i;
            if ( (tmp-2) * (i-2) == yellow ) return [tmp, i]   
        }
    }
}