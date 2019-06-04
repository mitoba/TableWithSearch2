import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends Component {
  state = {
    search:'',
    data:[
      {
        firstName:"John",
        lastName:"Nieves",
        address:"calle # 1",
        email:"juanito@gmail.com",
        phone:"(143) 127-1234",
      },
      {
        firstName:"Ramon",
        lastName:"fuego",
        address:"calle # 12",
        email:"fire@gmail.com",
        phone:"(123) 128-1234",
      },
      {
        firstName:"Rocky",
        lastName:"baby",
        address:"calle # 7",
        email:"rocky@aol.com",
        phone:"(223) 123-1734",
      },
      {
        firstName:"Carmina",
        lastName:"Buro",
        address:"Galeana # 1",
        email:"joco@gmail.com",
        phone:"(333) 123-1234",
      },
      {
        firstName:"Dofy",
        lastName:"Sofy",
        address:"calle # 21",
        email:"dofy@gmail.com",
        phone:"(125) 123-1234",
      },
      {
        firstName:"Spin",
        lastName:"span",
        address:"calle # 1",
        email:"spin@hotmail.com",
        phone:"(124) 123-1234",
      },
      {
        firstName:"Prink",
        lastName:"kkkkkk",
        address:"calle # 7",
        email:"spiiin@hotmail.com",
        phone:"(129) 123-1234",
      },
      {
        firstName:"Ruun",
        lastName:"fre",
        address:"calle # 555",
        email:"run@hotmail.com",
        phone:"(929) 458-1234",
      },
      {
        firstName:"Miriam",
        lastName:"Mara",
        address:"calle # 7755",
        email:"mirss@hotmail.com",
        phone:"(927) 123-1234",
      },
      {
        firstName:"Mikem",
        lastName:"Mor",
        address:"calle # 11755",
        email:"miken@hotmail.com",
        phone:"(999) 123-1234",
      }
    ]
  }

  updateSearch(event) {
    this.setState({search:event.target.value.substr(0,20)})
  }

  render() {
    let filteredUsers = this.state.data.filter((user)=>{
      const content = `${user.firstName} ${' '} ${user.lastName} ${' '} ${user.address} ${' '} ${user.email} ${' '} ${user.phone}`
      return content.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>Please search what you are looking for</h1>
          <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
          <Table
            data={filteredUsers}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "Address",
                prop: "address"
              },
              {
                name: "Email",
                prop: "email"
              },
              {
                name: "Phone",
                prop: "phone"
              }
            ]}
          />
           <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
