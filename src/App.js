import user from "../src/data/user.json";
import data from "../src/data/data.json";
import friends from "../src/data/friends.json";
import transactions from "../src/data/transactions.json";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friendlist/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import 'modern-normalize/modern-normalize.css';
import './index.css';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
