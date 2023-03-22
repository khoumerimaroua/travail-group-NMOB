
// verification quizz
const correctAnswers = ['a', 'b', 'c', 'b', 'b'];

document.getElementById('quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const userAnswers = Array.from(formData.values());

  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }

  const resultText = `Vous avez répondu correctement à ${score} questions sur ${correctAnswers.length}.`;
  const resultElement = document.createElement('p');
  resultElement.textContent = resultText;
  form.appendChild(resultElement);

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Recommencer';
  restartButton.addEventListener('click', () => {
    form.reset();
    resultElement.remove();
    restartButton.remove();
  });
  form.appendChild(restartButton);
});
