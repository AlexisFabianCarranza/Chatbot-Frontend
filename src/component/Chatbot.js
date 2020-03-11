import React from 'react';
import { Typography, Button, Input, Card, CardContent, } from '@material-ui/core';
import { render } from '@testing-library/react';

export default class Chatbot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            arrayMessages: [{
                transmitter: 'Chatbot',
                text: 'Bienvenido'
            }]
        };
        
    }
    getMessages(){
        let arrayCards = [];
        this.state.arrayMessages.forEach(({transmitter, text}) => {
            arrayCards.push(
                <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            {transmitter + ': ' + text} 
                        </Typography>
                    </CardContent>
                </Card>
            )
        })
        return (
            arrayCards
        )
    }
    pushMessage(){
        this.setState({
            arrayMessages: [...this.state.  arrayMessages, {
                transmitter: 'User',
                text: this.state.text
            }],
        });
        fecth('http://miservidor.com/recurso')
            .then((response) => {
                return response.json()
            })
            .then((recurso) => {
                console.log(recurso)
        })
    }
    render(){
        return (
            <div>
                <Typography>
                    Chatbot
                </Typography>
                {this.getMessages()}
                <div>
                    
                    <div>
                        <Input 
                            placeholder="Escribe lo que deseas preguntar" 
                            value={this.state.text}
                            inputProps={{ 'aria-label': 'description' }}
                            onChange={text => this.setState({text: text.target.value})}
                        />
                        <Button variant="contained" color="primary" onClick={text => this.pushMessage()}>
                            Primary
                        </Button>
                    </div>
                </div>
            </div>  
        )
    }
    
}