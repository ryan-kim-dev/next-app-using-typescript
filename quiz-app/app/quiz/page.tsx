'use client';
import { useState } from 'react';
import { quiz } from '../data';

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // 디스트럭쳐링 할당
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  console.log(activeQuestion);

  return (
    <div className="container">
      <h1>퀴즈 페이지</h1>;
      <h2>
        문제: {activeQuestion + 1}
        <span>/{questions.length}</span>
      </h2>
    </div>
  );
};

export default page;
