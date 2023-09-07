import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './Profile/user.json';
import { Main } from './App.styled';
import data from './Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import transactions from './TransactionHistory/transaction.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </Main>
  );
};
