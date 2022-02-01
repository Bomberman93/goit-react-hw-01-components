import user from "../src/user.json";
import data from "../src/data.json";
import friends from "../src/friends.json";
import transactions from "../src/transactions.json";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import TransactionHistory from "./components/TransactionHistory";

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
