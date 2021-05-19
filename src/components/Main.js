import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';
import { Form, Button } from 'react-bootstrap/';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      Data:Data,
      filterData:Data,
    
    }
}




updataNumHorns = (e) => {

  let filterArr=Data.filter(val=>{

    if(val.horns==e.target.value){

    return val;

    }



  if(e.target.value=='0'){ return val ;}






  }
)

this.setState({
  filterData: filterArr,
})

}
  render() {
    return (
          <>
                   <Form >
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Filter By Number Of Horns </Form.Label>
                        <Form.Control as="select" custom name='numHorns' onChange={this.updataNumHorns}>
                            <option value='0'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>Wow</option>
                        </Form.Control>
                        </Form.Group>

               
                </Form>
          {this.state.filterData.map((item, index) => {
            return (
              <HornedBeast
                title={item.title}
                imageUrl={item.image_url}
                descreption={item.description}
                horns={item.horns}
                getMyArr={this.props.getMyArr}
                key={index}
             
              />

            )
          })
          }



      </>
     
    )
  }
}
export default Main;



