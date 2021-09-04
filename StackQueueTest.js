
// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// 제한 사항
// 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수입니다.
// 작업 속도는 100 이하의 자연수입니다.
// 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
function solution(progresses, speeds) {
    var answer = [];
    let tmp=Math.ceil((100-progresses[0])/speeds[0])
    let leftDays
    let count = 1
    let len = speeds.length
    let i 

    for (i=1;i<len;i++) {
        leftDays = Math.ceil((100-progresses[i])/speeds[i])

        if(tmp >= leftDays) {
            count++
        }
        else {
            answer.push(count)
            tmp = leftDays
            count=1
        }
    }
    answer.push(count)
    return answer;
}

// 프로그래머스 프린터 문제
function solution(priorities, location) {
    var answer = 0;
    // 대기 목록(queue), 출력 목록(stack) 생성
    let stayArr = [];
    let outArr = [];
    for (let index in priorities) {
        stayArr.push({index:index, priority:priorities[index]});
    }
    
    // 대기 목록 없을 때 까지 반복
    while(stayArr.length) {
        // 중요도 높은 원소 있으면 맨 뒤로, 없으면 출력 배열로 이동
        let tmp = stayArr.shift();
        let state = false;
        for(let value of stayArr) {
            if(tmp.priority < value.priority) {
                stayArr.push(tmp);
                state = true;
                break;
            }
        }
        if(!state) outArr.push(tmp);
    }
    
    // 몇번째인지 찾아서 return 
    for(let index in outArr) {
        if(outArr[index].index == location)
            return Number(index)+1;
    }
    return -1;
}
