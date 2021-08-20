import React, { Component } from "react";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg";
import car from "./assets/car.svg";
import styled from "styled-components";

const Title = styled.div`
display:flex;
justify-content: center;

`;

const Mother = styled.div`
width: 100%;
heigth: 80vh;

display: flex;
justify-content: space-evenly;;
flex-direction: row;
`;

const ContainerOneInfoList = styled.section`
display:grid;
	grid-template-columns : 2fr 2fr 2fr;
`;

const BoxCardCars = styled.div`
display: flex;
flex-direction: column;
  border: solid #DCDCDC;
  margin-left: 1rem;
  margin-top: 1rem;
}
  
  .titleBoxInfo{
    display:flex;
    justify-content: space-between;
background-color: #DCDCDC;
  }
  
  .titleBoxInfo:hover {
  background: #00BFFF;
  color: white;
  border: solid #00BFFF;
}

  .bttAdd{
cursor:pointer;
background: none;
border: none;
  }
  `;

const Informacoes = styled.div`
width: 15vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
font-size: 15px;
}
`;

const ContainerTwoShoppingCars = styled.section`
width: 30vw;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
  border: solid #DCDCDC;
  background-image:  url(${car});
  background-repeat: no-repeat;
`;

const InfoCarrinho = styled.div`
width: 25vw;
background-color: 	#ADD8E6;
  border: solid ;
  margin-top: 1rem;
  border-radius: 25px 25px  25px 25px;

  h2{
    display:flex;
    justify-content: space-between;
  background-color: 	#00BFFF;
  }

  .paragraph{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .bttRemove{
    cursor:pointer;
  background: none;
border: none; 
  }
`;

const ContainerTotal = styled.section`
width: 25vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
 font-size: 30px;
`;

class App extends Component {
  state = {

    listCars: [

      {
        id: 1,
        marca: "Jetta",
        montadora: "Volkswagem",
        preco: 144000,
        tipo: "Sedan"
      },

      {
        id: 2,
        marca: "Polo",
        montadora: "Volkswagem",
        preco: 70000,
        tipo: "Hatch"
      },

      {
        id: 3,
        marca: "T-Cross",
        montadora: "Volkswagem",
        preco: 123000,
        tipo: "SUV"
      },

      {
        id: 4,
        marca: "Tiguan R-line",
        montadora: "Volkswagem",
        preco: 146000,
        tipo: "SUV"
      },

      {
        id: 5,
        marca: "Civic",
        montadora: "Honda",
        preco: 115000,
        tipo: "Sedan"
      },

      {
        id: 6,
        marca: "Corolla",
        montadora: "Toyota",
        preco: 110000,
        tipo: "Sedan"
      },

      {
        id: 7,
        marca: "Corolla Cross",
        montadora: "Toyota",
        preco: 184000,
        tipo: "SUV"
      },

      {
        id: 8,
        marca: "Compass",
        montadora: "Jeep",
        preco: 132000,
        tipo: "SUV"
      },

      {
        id: 9,
        marca: "Golf G TI",
        montadora: "Volkswagem",
        preco: 138000,
        tipo: "Hatch"
      }
    ],
    shoppingCars: [],
    total: ""
  };

  addCars = (item) => {
    this.setState({
      shoppingCars: this.state.shoppingCars.concat(item),
    }, () => this.setState({
      total: this.state.total.concat(this.state.shoppingCars)
    }))
    console.log(this.state.shoppingCars)
  }

  removeCars = (id) => {
    this.setState({
      shoppingCars: this.state.shoppingCars.filter(
        (carro) => carro.id !== id)
    })
  }

  render() {
    return (

      <div>
        <Title>
          <h1>Loja de Carros!</h1>
        </Title>

        <Mother>

          <ContainerOneInfoList>
            {this.state.listCars.map((item, index) => (
              <div key={index}>

                <BoxCardCars>
                  <h2 className="titleBoxInfo"> {item.marca}
                    <button className="bttAdd" onClick={() => this.addCars(item)}
                    >
                      <img src={add} alt="Add" />
                    </button>
                  </h2>

                  <Informacoes>
                    <p><b>Montadora:</b> {item.montadora} </p>
                    <p><b> Preço: </b> {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })}</p>
                    <p> <b>Tipo:</b> {item.tipo} </p>
                  </Informacoes>

                </BoxCardCars>

              </div>
            ))}
          </ContainerOneInfoList>

          <ContainerTwoShoppingCars>

            {this.state.shoppingCars.map((item) => <div>
              <InfoCarrinho>
                <h2> {item.marca}
                  <button className="bttRemove" onClick={() => this.removeCars(item.id)
                  } >
                    <img src={remove} alt="Remove" />
                  </button>
                </h2>
                <div className="paragraph">
                  <p> <b>Tipo:</b> {item.tipo} </p>
                  <p> <b>Preço:</b> {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })} </p>
                </div>
              </InfoCarrinho>

            </div>)}

            <ContainerTotal>
              <h3> <u><b>Total: </b> </u></h3>
              <p> <u>{this.state.shoppingCars.reduce((a, c) => a + c.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })} </u> </p>
            </ContainerTotal>

          </ContainerTwoShoppingCars>

        </Mother>
      </div>
    )
  }
};
export default App;
