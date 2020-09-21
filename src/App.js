import React from "react";

//componetns
import Modal from "./components/modal/modal.component";
import Table from "./components/table/table.component";

//styles
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      label: "Search",
      descriptions: ["ID", "Name"],
      action: "",
      items: [
        {
          id: 1,
          name: "produkt 1"
        },
        {
          id: 2,
          name: "produkt 2"
        }
      ]
    };
  }

  showModal = (e) => {
    this.setState({ show: true, action: e.target.name });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  changeLabel = (newLabel) => {
    this.setState({ label: newLabel });
    this.hideModal();
  };

  addColumn = (newColumn) => {
    this.setState({ descriptions: [...this.state.descriptions, newColumn] });
    this.hideModal();
  };

  render() {
    return (
      <div className="App">
        <div>
          <button name="addColumn" onClick={this.showModal}>
            Add column
          </button>
          <button name="changeLabel" onClick={this.showModal}>
            Edit label
          </button>
        </div>

        <label>{this.state.label}:</label>
        <input name="input" type="text" />

        <Table
          descriptions={this.state.descriptions}
          items={this.state.items}
        />

        {this.state.show ? (
          <Modal
            handleSave={
              this.state.action === "addColumn"
                ? this.addColumn
                : this.changeLabel
            }
            handleClose={this.hideModal}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
