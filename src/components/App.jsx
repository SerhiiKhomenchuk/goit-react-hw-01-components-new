
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json';
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      <Profile  {...user} />
      <Statistics title='Upload stats' stats={data} />
      <FriendList arrFriends={friends} />
      <TransactionHistory items={transactions} />
      
    </div>
  );
};

