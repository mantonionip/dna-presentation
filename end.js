// Final Score
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = `Your Score: ${mostRecentScore} Points`;