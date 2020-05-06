import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import AccountTable from "./AccountTable";
// import { Modal, Content } from "react-bulma-components";
import Modal from "../../../../components/modal/Modal";

interface Props {
  user?: any;
}

interface IData {
  url: string;
  id: number;
  user_id: number;
}

const Accounts = (props: Props) => {
  const [data, setData] = useState<IData[]>([]);

  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("default");
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState<null | number>(
    null
  );

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/api/v1/accounts/1`);
      if (result.data.length > 0) {
        setData(result.data);
        setLoading(false);
      }
    } catch (err) {
      console.log("error creating Account:", err);
      setLoading(false);
      setError(err);
    }
  };

  const onAccountDelete = async (account_id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/accounts/${account_id}`);
      const newData = data.filter((account) => {
        return account.id !== account_id;
      });
      setData(newData);
    } catch (err) {
      console.log("error deleting Account:", err);
    }
  };

  const onAccountEdit = async () => {
    try {
      const payload = { url: inputValue, user_id: props.user.id };
      const result = await axios.put(
        `http://localhost:3000/api/v1/accounts/${selectedAccountId}`,
        payload
      );
      const newData = data.filter((account) => {
        return account.id !== selectedAccountId;
      });
      setData([...newData, result.data]);
      setInputValue("");
      setSelectedAccountId(null);
      setMode("default");
      setShowModal(false);
    } catch (err) {
      console.log("error editing Account:", err);
    }
  };

  const handleOnEditClick = (account_id: number) => {
    setSelectedAccountId(account_id);
    setMode("edit");
    setShowModal(true);
    const accountData = data.filter((account) => account.id === account_id);
    setInputValue(accountData[0].url);
  };

  const onAccountCreate = async () => {
    try {
      const payload = { url: inputValue, user_id: props.user.id };
      const result = await axios.post(
        `http://localhost:3000/api/v1/accounts`,
        payload
      );
      setInputValue("");
      setData((prevData) => [...prevData, result.data]);
      setShowModal(false);
    } catch (err) {
      console.log("error creating Account:", err);
    }
  };

  const handleOnSubmit = async () => {
    if (mode === "default") {
      onAccountCreate();
    } else {
      onAccountEdit();
    }
  };
  // console.log("user in account:", props.user);
  return (
    <div>
      <h1 className="text-align-center is-size-1">Accounts</h1>
      <div className="flex justify-end">
        <button
          className="button is-primary"
          onClick={() => setShowModal(!showModal)}
        >
          Add new account
        </button>
      </div>
      <Modal
        title="Add new account"
        closeOnBlur={true}
        show={showModal}
        onClose={() => setShowModal(false)}
        submitText="Submit"
        closeText="Close"
        onSubmit={handleOnSubmit}
      >
        <input
          className="input"
          type="text"
          placeholder="Url"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Modal>
      {/* TODO: Place loading into AccountTable */}
      {loading && <div>Loading</div>}
      {data && (
        <AccountTable
          data={data}
          user={props.user}
          onAccountDelete={onAccountDelete}
          onAccountEdit={onAccountEdit}
          handleOnEditClick={handleOnEditClick}
        />
      )}
      {error !== null && <div>Something when wrong</div>}
    </div>
  );
};

export default Accounts;
