import React from 'react';
import './App.css';
import { Rating, quality_1vs1, rate_1vs1 } from 'ts-trueskill';

import Leaderboard from "./components/leaderboard";
import OptionForm from "./components/option_form";
import Pair from "./components/pair";
import HideLeaderboard from "./components/buttons";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [],
      options_submitted: false,
      pair: [],
      leaderboardShown: false,
      options_textarea: '',
      options_vacation: ['Paris','Rome','Venice','London','Barcelona','Florence','Vienna','Madrid','Prague','Istanbul','Milan','Amsterdam','Budapest','Munich','Athens','Berlin','Lisbon','Santorini','Seville','Moscow','Nice','Naples','Dubrovnik','Ediburgh','Saint Petersburg','Pisa','Granada','Frankfurt','Copenhagen','Stockholm','Salzburg','Zurich','Porto','Helsinki','Lucerne','Reykjavik','Mykonos','Mont Saint-Michel','Amalfi','Oslo','Dublin','Capri','Cologne','Split','Krakow','Lake Como','Crete','Malaga','Bratislava','Brussels','Riga','Heidelberg','Bruges','Valencia','Porto','Biarritz','Innsbruck','Gothenburg','San Sebastián','Sienna','Antwerp','Mostar','Veliko Tarnovo','Tallinn','Bordeaux','Lille','Tbilisi','Hamburg','Sardinia','Genoa','San Marino','Lucca','Bologna','Padua','Malta','Bucharest','Belgrade','Ljubljana','Majorca','Chernobyl','Lviv','Rotterdam','Corsica','Tarifa','Puglia','Geneva','Interlaken','Sicily','Paros'],
      options_baby: ['Harry','Max','Marcus','Arnold','Isaac','Nethaniel','Julien','Arnaud','Colin']

    };  
      
/*     this.handleChange = this.handleChange.bind(this);
 */    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = event => {
    event.preventDefault();
    
    const options_1d = event.target.ta_options.value.split("\n");
    const options_tmp = {}; 
    for (var i = 0; i < options_1d.length; i++) {     
      options_tmp[options_1d[i]] = new Rating();
    }  

    const pair_tmp = this.getRandomPair(Object.keys(options_tmp));

    this.setState({options: options_tmp, options_submitted: true, pair: pair_tmp },() => {
    })
  }

  handleChange = event => {
    this.setState({options_textarea : event.target.value})
  }

  handleChoice = event => {

    
    let not_chosen = event.target.value === this.state.pair[0] ? this.state.pair[1] : this.state.pair[0];
    let chosen = event.target.value === this.state.pair[0] ? this.state.pair[0] : this.state.pair[1];
    let drawn = event.target.value === 'nochoice'; 

    var options_tmp = this.state.options;

    [options_tmp[chosen], options_tmp[not_chosen] ] = rate_1vs1(options_tmp[chosen], options_tmp[not_chosen],drawn);
    options_tmp = this.orderleaderboard(options_tmp);

    const pair_tmp = this.getRandomPair(Object.keys(options_tmp));
    this.setState({pair: pair_tmp, options: options_tmp  },() => {
      console.log(options_tmp);
    })
  }


  handleDelete = event => {
    
    var options_tmp = this.state.options;
    delete options_tmp[event.target.value];


    const pair_tmp = this.getRandomPair(Object.keys(options_tmp));
    this.setState({pair: pair_tmp, options: options_tmp  },() => {});
  }

  handlePrefill = event => {

    var prefill = ''
    if (event.target.value == "baby") {
      prefill = this.state.options_baby.join("\r\n")
    } else if (event.target.value == "vacation") {
      prefill = this.state.options_vacation.join("\r\n")
    }

    this.setState({ options_textarea: prefill },() => {
      //console.log(this.state.options)         
    })

  }

  handleButton = event => {

    console.log(event.target.value);
    if (event.target.value === 'reset'){
      
      this.setState({ options: '',options_textarea: '', options_submitted: false, leaderboardShown: false },() => {
      });
    } else {
      let leaderboardShown_tmp = this.state.leaderboardShown === true ? false : true;
      this.setState({ leaderboardShown: leaderboardShown_tmp },() => {});
    }

  }

  getRandomPair(arr) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, 2);
  }

  orderleaderboard(options_tmp) {
    

    var leaderboard_dict = {};
    
    for (var option in options_tmp) {
      leaderboard_dict[option] = options_tmp[option].mu
    }

    var items = Object.keys(leaderboard_dict).map(function(key) {
      return [key, leaderboard_dict[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first , second) {
      return second[1] - first[1];
    });
    
    var option_tmp_return = {};
    for (var option in items) {
      
      option_tmp_return[items[option][0]] = options_tmp[items[option][0]]
    }

    return option_tmp_return;
  }


  render() {

    if (this.state.options_submitted === true) {
      return (
        <div className="App">
            <Pair pair={this.state.pair} onClick={this.handleChoice}/>
            <HideLeaderboard leaderboardShown={this.state.leaderboardShown} onClick={this.handleButton}/>
            {this.state.leaderboardShown ? <Leaderboard options={this.state.options} onClick={this.handleDelete} /> : <div></div>}


        </div>
      )
    } else {
      return (
        <div className="App">
          <OptionForm options_textarea={this.state.options_textarea} onClick={this.handlePrefill} onChangeValue={this.handleChange} onSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }


}


/*

  resetOptions = async () => {
    
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/reset_options`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  }),
    })
    setPair({option:'empty'});

  }

  postChoice = async (chosen) => {

    var drawn = "False";
    if (chosen === "nochoice") {
      drawn = "True";
      chosen = pair.choice1
    } 

    var not_chosen = pair.choice1;
    if (pair.choice1 === chosen) {
      not_chosen = pair.choice2;
    } 

    const choice = {'chosen': chosen, 'not_chosen' : not_chosen,"drawn":drawn};

    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/set_choice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ choice }),
    })
    setLeaderboardShown(false)
    
  }

  getPair = async () => {
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/get_options`);
    const data = await response.json();
    console.log(data)

    setPair(data);
    
  }


)
 */
