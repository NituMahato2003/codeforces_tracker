//  This function is designed to fetch the unique solved problems of a given user on 
//  Codeforces using their handle (username).

export async function fetchSolvedProblems(handle) {
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
    const data = await res.json();
    if (data.status !== "OK") throw new Error("User not found");
  
    const solvedSet = new Set();
    const problems = [];
  
    // data.result is an array of all submissions made by the user.
    data.result.forEach((submission) => {

      //  Each submission object contains information like the verdict (accepted, wrong answer, etc.),
      //  problem details, submission time, etc.

      if (submission.verdict === "OK") {       
        const problem = submission.problem; 
        const key = `${problem.contestId}-${problem.index}`;
        if (!solvedSet.has(key)) {
          solvedSet.add(key);
          problems.push(problem);
        }
      }
    });
  
    return problems;
  }
  