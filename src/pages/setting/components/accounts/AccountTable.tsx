import React from "react";
import axios from "axios";

interface Props {
  data: any;
  user: any;
  onAccountDelete: (account_id: number) => any;
  onAccountEdit: (account_id: number) => any;
  handleOnEditClick: (account_id: number) => any;
}

const AccountTable = (props: Props) => {
  const getRows = props.data.map((account: any) => {
    return (
      <tr key={account.id}>
        <td className="flex justify-between">
          <a href={`${account.url}`} title={`${account.url}`} target="_blank">
            {account.url}
          </a>
          <div>
            <button
              className="button is-primary is-light mr-1 "
              onClick={() => props.handleOnEditClick(account.id)}
            >
              Edit
            </button>
            <button
              className="button is-danger is-light"
              onClick={() => props.onAccountDelete(account.id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <table className="table is-hoverable" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>
            <abbr>URL</abbr>
          </th>
        </tr>
      </thead>
      <tbody>{getRows}</tbody>
    </table>
  );
};

export default AccountTable;
