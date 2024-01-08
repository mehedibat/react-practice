import React from 'react';
import '../App.css';

// Define the type for your disbursement entry
type DisbursementEntry = {
  id: number;
  type: string;
  month: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Hold' | 'Reject';
};

// Dummy data
const disbursements: DisbursementEntry[] = [
  { id: 1, type: 'Single', month: 'January 2022', amount: 20500, status: 'Pending' },
  { id: 2, type: 'Single', month: 'January 2022', amount: 15000, status: 'Approved' },
  { id: 3, type: 'Single', month: 'January 2022', amount: 10000, status: 'Approved' },
  { id: 4, type: 'Single', month: 'January 2022', amount: 12500, status: 'Approved' },
  { id: 5, type: 'Single', month: 'January 2022', amount: 35500, status: 'Hold' },
  { id: 6, type: 'Single', month: 'January 2022', amount: 100000, status: 'Hold' },
  { id: 7, type: 'Single', month: 'January 2022', amount: 20500, status: 'Reject' },
  { id: 8, type: 'Single', month: 'January 2022', amount: 20500, status: 'Approved' },
  { id: 9, type: 'Single', month: 'January 2022', amount: 20500, status: 'Approved' },
];

// Define the type for the props of DisbursementRow component
type DisbursementRowProps = {
  entry: DisbursementEntry;
};

// Define a single row in the table
const DisbursementRow: React.FC<DisbursementRowProps> = ({ entry }) => {
  return (
    <tr>
      <td>{entry.id}</td>
      <td>{entry.type}</td>
      <td>{entry.month}</td>
      <td>{entry.amount.toLocaleString()}</td>
      <td className={`status ${entry.status.toLowerCase()}`}>{entry.status}</td>
      <td><button>View</button></td>
    </tr>
  );
};

// The main App component that renders the table
const User: React.FC = () => {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>Disbursement Type</th>
            <th>Disbursement Month</th>
            <th>Transfer Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {disbursements.map(entry => (
            <DisbursementRow key={entry.id} entry={entry} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
