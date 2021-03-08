import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ChildUL from "./Child-ul";
import ChildForm from "./Child-form";

import "./Parent.css";




class Parent extends Component {
    state = {
    wishList: [
        {
        id: uuidv4(),
        wish: "Buy New Car",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        checkBox: false,
        },
        {
        id: uuidv4(),
        wish: "Buy New House",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        checkBox: false,
        },
        {
        id: uuidv4(),
        wish: "Find New Job",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        checkBox: false,
        },
    ],
    inputWish: "",

};

handleSubmitWish = (event) => {
    event.preventDefault();

    let newWishArray = [
    ...this.state.wishList,
    {
        id: uuidv4(),
        wish: this.state.inputWish,
        isDone: false,
        isEditToggle: false,
        checkBox: false,
    },
    ];

    this.setState({
    wishList: newWishArray,
    inputWish: "",
    });
};

handleOnChange = (event) => {
    this.setState({
    inputWish: event.target.value,
    });
};

handleDeleteByID = (id) => {
console.log(id)
let filteredWishListArray = this.state.wishList.filter((item) => {

    if (item.id !== id) {
        item.isButtonToggle = false;
        return item;
    }
    });

    this.setState({
    wishList: filteredWishListArray,
    });
};

handleIsDone = (id) => {

    let updatedWishListArray = this.state.wishList.map((item) => {
    if (item.id === id) {
        item.isDone = !item.isDone;
    }
    return item;
    });
    this.setState({
    wishList: updatedWishListArray,
    });
};

handleEditToggle = (id) => {
    let toggledWishList = this.state.wishList.map((item) => {
    if (item.id === id) {
        item.isEditToggle = !item.isEditToggle;
    }

    if (item.id !== id) {
        item.isButtonToggle = !item.isButtonToggle;
    }

    return item;
    });

    this.setState({
    wishList: toggledWishList,
    });
};

handleEditUpdateWish = (id, newWishItem) => {
    let updatedWishItem = this.state.wishList.map((item) => {
    if (item.id === id) {
        item.todo = newWishItem;
    }
    return item;
    });

    this.setState({
    wishList: updatedWishItem,
    });
};

handleCheckBox = (id) => {
    let checkBoxWishListArray = this.state.wishList.map((item) => {
        if (item.id === id) {
            item.checkBox = !item.checkBox;
        }
        return item;
        });
        this.setState({
        wishList: checkBoxWishListArray,
        });
} 

render() {
    return (
    <div className="parent-container">
        <ChildForm
        handleSubmitWish={this.handleSubmitWish}
        handleOnChange={this.handleOnChange}
        inputWish={this.state.inputWish}
        />
        <ChildUL
        wishList={this.state.wishList}
        handleDeleteByID={this.handleDeleteByID}
        handleIsDone={this.handleIsDone}
        handleEditToggle={this.handleEditToggle}
        handleEditUpdateWish={this.handleEditUpdateWish}
        handleCheckBox={this.handleCheckBox}
        />
    </div>
    );
}
}

export default Parent;