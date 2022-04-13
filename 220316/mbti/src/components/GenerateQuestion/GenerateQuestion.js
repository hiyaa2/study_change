const dummy = ['E','I','S','N','F','T','J','P'];


function generateQuestion(result) {
    const q = [];
    let temp = [];

    for (let i = 0; i <= dummy.length; i++) {
        if (temp.length === 2) {
            q.push(temp);
            temp = [];
        }
        temp.push(dummy[i]);
    }

    return q;
}

export default generateQuestion;