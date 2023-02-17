import React, { useState } from "react";
import styles from "../Bet.module.css";

const Bet = ({ bet, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [betValues, setBetValues] = useState(bet);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBetValues((prevBetValues) => ({ ...prevBetValues, [name]: value }));
  };

  const handleSave = () => {
    onEdit(bet.id, betValues);
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      {isEditing ? (
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <label className={styles.label}>Description:</label>
            <input
              type="text"
              name="description"
              value={betValues.description}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Needed Value:</label>
            <input
              type="text"
              name="neededValue"
              value={betValues.neededValue}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Wagered Amount:</label>
            <input
              type="text"
              name="wageredAmount"
              value={betValues.wageredAmount}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>Potential Winnings:</label>
            <input
              type="text"
              name="potentialWinnings"
              value={betValues.potentialWinnings}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <button onClick={handleSave} className={styles.button}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles.rowContainer}>
          <div className={styles.row}>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Description:</label>
            <span>{bet.description}</span>
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Needed Value:</label>
            <span>{bet.neededValue}</span>
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Wagered Amount:</label>
            <span>{bet.wageredAmount}</span>
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Potential Winnings:</label>
            <span>{bet.potentialWinnings}</span>
          </div>
          <button onClick={() => setIsEditing(true)} className={styles.button}>
            Edit
          </button>
          <button onClick={() => onDelete(bet.id)} className={styles.button}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Bet;
