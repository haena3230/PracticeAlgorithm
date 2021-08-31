// 너비우선 탐색 예제

// 프로그래머스 깊이/너비우선 단어변환문제
function solution(begin, target, words) {
    let visited = new Array(words.length).fill(false);
    let queue = []
    
    // 다음 단어 찾기
    function findNext(object) {
        let arr = [];
        let value = object.value;
        let nextLevel = object.level+1;
        for(let wordIndex in words) {
            let count = 0;
            let word = words[wordIndex]
            if(visited[wordIndex]==false) {
                for(let index in word) {
                    if(value[index]!=word[index]){
                        count++
                    }
                }
                if(count == 1) {
                    arr.push({value : word, level : nextLevel});
                    visited[wordIndex]=true;
                }   
            }
        }
        return arr
    }
    
    
    if(!words.includes(target)) return 0;
    else {
        queue.push({value:begin, level:0});
        // queue가 빌 때까지 반복
        while(queue.length) {
            let nextObject = findNext(queue[0])
            queue = [...queue,...nextObject]
            let root = queue.shift()
            if(root.value == target) return root.level;
        }
        return 0;
    }
}