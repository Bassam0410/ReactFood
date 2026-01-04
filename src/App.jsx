import React, { useState } from "react";
import Card from "./components/Card";
import data from "./util/data";
import List from "./components/shopList/List";
import Header from "./components/Header";
import Checkout from "./components/Checkout/Checkout";
import Submit from "./components/Checkout/Submit";
function App() {
  const [shopList, setShopList] = useState([]);
  const [listUpdate, setListUpdate] = useState({ listLength: 0, price: 0 });
  const [showList, setShowList] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [details, setDetails] = useState({
    fName: "",
    mail: "",
    street: "",
    posteCode: "",
    city: "",
  });
  const [submit, setSubmit] = useState(false);

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setDetails((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  function handleCheckoutVisibility() {
    setShowList(false);
    setShowCheckout(true);
  }
  function handleFinish() {
    setSubmit(true);
    setShowList(false);
    setShowCheckout(false);
  }

  function handleListVisibility() {
    setShowList((preValue) => {
      return true;
    });
  }
  function hideList() {
    setShowList(false);
    setShowCheckout(false);
    setSubmit(false);
    setShopList([]);
    setDetails({ fName: "", mail: "", street: "", posteCode: "", city: "" });
    setListUpdate({ listLength: 0, price: 0 });
  }
  function addItemToList(newItem) {
    const weHave = shopList.findIndex((item) => item.id === newItem.id);
    if (weHave !== -1) {
      setShopList((preValue) => {
        preValue[weHave].count += 1;
        return [...preValue];
      });
    } else {
      setShopList((preValue) => {
        return [...preValue, newItem];
      });
    }
    setListUpdate((preValue) => {
      return {
        ...preValue,
        listLength: preValue.listLength + newItem.count,
        price: preValue.price + Number(newItem.price),
      };
    });
  }
  function removeItem(newItem) {
    setShopList((preValue) => {
      preValue[newItem.index].count -= 1;
      return [...preValue];
    });
    setListUpdate((preValue) => {
      return {
        ...preValue,
        listLength: preValue.listLength - 1,
        price: preValue.price - Number(newItem.price),
      };
    });
  }
  function handleListUpdateAdd() {
    let totalCount = 0;
    setListUpdate((preValue) => {
      shopList.forEach((item) => {
        totalCount += Number(item.price);
      });
      return {
        ...preValue,
        listLength: preValue.listLength + 1,
        price: preValue.price + totalCount,
      };
    });
  }
  function handleListUpdateReduce() {
    setListUpdate((preValue) => {
      return {
        ...preValue,
        listLength: preValue.listLength - 1,
      };
    });
  }

  return (
    <>
      <Header
        listLength={listUpdate.listLength}
        handleListVisibility={handleListVisibility}
      />
      <Submit
        name={details.fName}
        address={details.street}
        price={listUpdate.price}
        hide={hideList}
        submit={submit}
      />
      <Checkout
        details={details}
        changeValue={handleInputChange}
        totalAmount={listUpdate.price}
        showCheck={showCheckout}
        hideCheck={hideList}
        finish={handleFinish}
      />

      <List
        itemList={shopList}
        addItem={addItemToList}
        removeItem={removeItem}
        total={listUpdate.price}
        listVisibility={showList}
        hideList={hideList}
        checkout={handleCheckoutVisibility}
      />
      <div id="meals">
        {data.map((meal, index) => {
          return (
            <Card
              key={meal.id}
              index={index}
              id={meal.id}
              name={meal.name}
              image={meal.image}
              price={meal.price}
              description={meal.description}
              addItem={addItemToList}
              list={showList}
              check={showCheckout}
              submit={submit}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
