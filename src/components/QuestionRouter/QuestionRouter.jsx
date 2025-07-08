import { useState, useMemo } from 'react';
import STYLES from './QuestionStyles.module.scss';
import RarityQuestion from './Questions/RarityQuestion';
import CostQuestion from './Questions/CostQuestion';
import InkableQuestion from './Questions/InkableQuestion';
import StatsQuestion from './Questions/StatsQuestion';
import LoreQuestion from './Questions/LoreQuestion';
import SubtypesQuestion from './Questions/SubtypesQuestion';

const questionComponents = {
  rarity: RarityQuestion,
  inkCost: CostQuestion,
  inkable: InkableQuestion,
  stats: StatsQuestion,
  lore: LoreQuestion,
  subtypes: SubtypesQuestion,
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
