// 디스크 컨트롤러 문제 -- 해결
function solution(jobs) {
    let len = jobs.length
    // 요청 순서대로 정렬
    jobs.sort( function(a, b) {
        if(a[0] > b[0]) return 1
        if(a[0] < b[0]) return -1
        
        if(a[1] > b[1]) return 1
        if(a[1] < b[1]) return -1
    })
    let timeIndex = 0
    let totalTime = 0
    
    while(true){
        if(jobs.length == 0) break
        
        // 대기가 가장 적으면서 시간 소요가 가장 작은 인덱스 도출
        else{   
            let tmpIndex = 0
            
            for(let job in jobs){
                if(jobs[job][0]<timeIndex){
                    if(jobs[job][1]<jobs[tmpIndex][1]){
                        tmpIndex = job   
                    }
                }
            }
            // 대기가 없을때 먼저 들어온 요청부터 실행
            if(tmpIndex == 0 && timeIndex<=jobs[tmpIndex][0]){
                timeIndex = jobs[0][0]+jobs[0][1]
                totalTime += jobs[0][1]
            }
            // 대기가 있을 때 
            else{
                timeIndex += jobs[tmpIndex][1]
                totalTime += (timeIndex - jobs[tmpIndex][0])   
            }
            jobs.splice(tmpIndex,1)
        }
    }
    return Math.floor(totalTime/len)
}

// 디스크 컨트롤러 문제 -- 실패 ==> 배열을 첫번 째 요소만 보고 정렬 해서 예외 요소를 처리하지 못함 
// function solution(jobs) {
//     let len = jobs.length
//     // 요청 순서대로 정렬
//     jobs.sort( function(a, b) {
//         return a[0]-b[0]
//     })
//     // 첫번째 작업 실행
//     let timeIndex = jobs[0][1]
//     let totalTime = jobs[0][1]
//     jobs.shift()
    
//     while(true){
//         if(jobs.length == 0) break
        
//         // 대기가 가장 적으면서 시간 소요가 가장 작은 인덱스 도출
//         else{   
//             let tmpIndex = 0;
//             for(let job in jobs){
//                 if(jobs[job][0]<=timeIndex){
//                     if(jobs[job][1]<=jobs[tmpIndex][1])
//                         tmpIndex = job
//                 }
//             }
//             // 대기가 꼭 필요한 경우
//             if(jobs[tmpIndex][0]>timeIndex){
//                 timeIndex = jobs[tmpIndex][0]+jobs[tmpIndex][1]
//                 totalTime += jobs[tmpIndex][1]
//             }   
//             // 대기 없이 가능한 경우   
//             else{
//                 timeIndex += jobs[tmpIndex][1]
//                 totalTime += (timeIndex - jobs[tmpIndex][0])
//             }
//             jobs.splice(tmpIndex,1)
//         }
//     }
//     return Math.floor(totalTime/len)
// }

// 프로그래머스 우선순위 큐 (heap) 문제이지만 다른 방식으로 해결
// 이중우선순위 큐 문제
function solution(operations) {
    let tmpArr = [];
    let index;
    operations.forEach((oper) => {
        if(oper[0] == 'I') { // 삽입
            let num = Number(oper.split(' ')[1]);
            tmpArr.push(num);
        } else if ( oper == 'D 1' && tmpArr.length != 0) { // 최댓값 삭제 
            index = tmpArr.indexOf(Math.max.apply(null, tmpArr));
            tmpArr.splice(index,1);
        } else if ( oper == 'D -1' && tmpArr.length != 0) { // 최솟값 삭제
            index = tmpArr.indexOf(Math.min.apply(null,tmpArr));
            tmpArr.splice(index, 1);
        }
    })
    // 빈 배열
    if( tmpArr.length == 0 ) return [0,0];
    else {
        // 최댓값과 최솟값 push
        let Max = Math.max.apply(null, tmpArr);
        let Min = Math.min.apply(null, tmpArr);
        return [Max,Min];
    }
}