import React, { useState } from "react";
import shortid from "shortid";
import Bet from "./Bet";
import styles from "../BetList.module.css";

const BetList = () => {
  const [bets, setBets] = useState([
    // {
    //   id: shortid.generate(),
    //   description: "Bet on the Super Bowl",
    //   neededValue: "Over 50",
    //   wageredAmount: 100,
    //   potentialWinnings: 200,
    // },
    // {
    //   id: shortid.generate(),
    //   description: "Bet on the NBA Finals",
    //   neededValue: "Under 200",
    //   wageredAmount: 50,
    //   potentialWinnings: 100,
    // },
  ]);

  const [newBet, setNewBet] = useState({
    description: "",
    neededValue: "",
    wageredAmount: "",
    potentialWinnings: "",
  });

  const handleNewBetChange = (event) => {
    const { name, value } = event.target;
    setNewBet((prevNewBet) => ({ ...prevNewBet, [name]: value }));
  };

  const handleAddBet = () => {
    const newId = shortid.generate();
    const betToAdd = { ...newBet, id: newId };
    setBets((prevBets) => [...prevBets, betToAdd]);
    setNewBet({
      description: "",
      neededValue: "",
      wageredAmount: "",
      potentialWinnings: "",
    });
  };

  const handleEditBet = (id, newValues) => {
    setBets((prevBets) =>
      prevBets.map((bet) => {
        if (bet.id === id) {
          return { ...bet, ...newValues };
        } else {
          return bet;
        }
      })
    );
  };

  const handleDeleteBet = (id) => {
    setBets((prevBets) => prevBets.filter((bet) => bet.id !== id));
  };

  return (
    <div className={styles.betList}>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newBet.description}
          onChange={handleNewBetChange}
        />
      </div>
      <div>
        <label>Wagered Amount:</label>
        <input
          type="text"
          name="wageredAmount"
          value={newBet.wageredAmount}
          onChange={handleNewBetChange}
        />
      </div>
      <div>
        <label>Potential Winnings:</label>
        <input
          type="text"
          name="potentialWinnings"
          value={newBet.potentialWinnings}
          onChange={handleNewBetChange}
        />
      </div>
      <button className={styles.addButton} onClick={handleAddBet}>
        Add Bet
      </button>
      {bets.map((bet) => (
        <Bet
          key={bet.id}
          bet={bet}
          onEdit={handleEditBet}
          onDelete={handleDeleteBet}
        />
      ))}
    </div>
  );
};

export default BetList;
