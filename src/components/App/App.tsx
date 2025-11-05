import { useState } from 'react'
import css from './App.module.css'
import type { VoteType, Votes } from '../../types/votes'

import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

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

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0


  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0} />
        {totalVotes > 0 ? (<VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate} />) : (<Notification />)} 
      </div>
     
    </>
  )
}

