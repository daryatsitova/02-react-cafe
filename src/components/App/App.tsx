import { useState } from 'react'
import css from './App.module.css'
import type { VoteType, Votes } from '../../types/votes'

import CafeInfo from '../CafeInfo/CafeInfo'

export default function App() {
  const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });


   const updateVotes = (key: keyof Votes) => {
    setVote({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

   const handleVote = (type: VoteType): void => {
    updateVotes(type);
  };

  const resetVotes = (): void => {
    setVote({
      ...votes,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
     
    </>
  )
}

