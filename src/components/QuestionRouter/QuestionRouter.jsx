import { useState, useMemo } from 'react';
import STYLES from './QuestionStyles.module.scss';
import RarityQuestion from './Questions/RarityQuestion';
import CostQuestion from './Questions/CostQuestion';

const questionComponents = {
  rarity: RarityQuestion,
  inkCost: CostQuestion,
};

const QuestionRouter = ({ card, handleAnswerQuestion, questionType }) => {
  console.log(questionType);
  const QuestionComponent = useMemo(
    () => questionComponents[questionType],
    [questionType]
  );

  if (!QuestionComponent) return null;

  return (
    <div className={STYLES.QuestionContainer}>
      <QuestionComponent
        handleAnswerQuestion={handleAnswerQuestion}
        {...{ [questionType]: card[questionType] }}
      />
    </div>
  );
};

export default QuestionRouter;
