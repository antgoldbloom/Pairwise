import React from 'react';
import './App.css';
import { Rating, quality_1vs1, rate_1vs1 } from 'ts-trueskill';

import Leaderboard from "./components/leaderboard";
import OptionForm from "./components/option_form";
import Pair from "./components/pair";
import HideLeaderboard from "./components/buttons";
import Navbar from "./components/navbar";

import ReactGA from 'react-ga';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [],
      options_submitted: false,
      pair: [],
      leaderboardShown: true,
      options_textarea: '',
      options_boy: ['Liam','Noah','William','James','Oliver','Benjamin','Elijah','Lucas','Mason','Logan','Alexander','Ethan','Jacob','Michael','Daniel','Henry','Jackson','Sebastian','Aiden','Matthew','Samuel','David','Joseph','Carter','Owen','Wyatt','John','Jack','Luke','Jayden','Dylan','Grayson','Levi','Issac','Gabriel','Julian','Mateo','Anthony','Jaxon','Lincoln','Joshua','Christopher','Andrew','Theodore','Caleb','Ryan','Asher','Nathan','Thomas','Leo'],
      

      options_vacation: ['Paris','Rome','Venice','London','Barcelona','Florence','Vienna','Madrid','Prague','Istanbul','Milan','Amsterdam','Budapest','Munich','Athens','Berlin','Lisbon','Santorini','Seville','Moscow','Nice','Naples','Dubrovnik','Ediburgh','Saint Petersburg','Pisa','Granada','Frankfurt','Copenhagen','Stockholm','Salzburg','Zurich','Helsinki','Lucerne','Reykjavik','Mykonos','Mont Saint-Michel','Amalfi','Oslo','Dublin','Capri','Cologne','Split','Krakow','Lake Como','Crete','Malaga','Bratislava','Brussels','Riga','Heidelberg','Bruges','Valencia','Porto','Biarritz','Innsbruck','Gothenburg','San Sebastián','Sienna','Antwerp','Mostar','Veliko Tarnovo','Tallinn','Bordeaux','Lille','Tbilisi','Hamburg','Sardinia','Genoa','San Marino','Lucca','Bologna','Padua','Malta','Bucharest','Belgrade','Ljubljana','Majorca','Chernobyl','Lviv','Rotterdam','Corsica','Tarifa','Puglia','Geneva','Interlaken','Sicily','Paros'],
      options_netflix: ['Messiah','Spinning Out','The Witcher','Happy!','Living With Yourself','The Crown','Queer Eye: We\'re in Japan!','Derry Girls','Black Mirror','Atypical','Line of Duty','Star Trek: The Next Generation','Weeds','Sense8','Unbelievable','The Dark Crystal: Age of Resistance','The Spy','The People v. O.J. Simpson','Mindhunter','The Thick of It','Dark','Orange is the New Black','Neon Genesis Evangelion','Carter','Stranger Things','When They See Us','What/If','Special','Tuca and Bertie','The Assassination of Gianni Versace','One-Punch Man','Dogs','Russian Doll','The OA','Sex Education','The Last Kingdom','Dead Set','Orphan Black','BoJack Horseman','The Good Place','The Alienist','Manhunt: Unabomber','Travellers','Better Call Saul','The End of the F***ing World','Aggretsuko','American Vandal','GLOW'],

      option_prefill: 'none',

      ta_options_error: '',
      option_count:  0, 

      selection_count: 0,
      selection_target: 0,
    };  
      
    const trackingId = "UA-156912037-1"; // Replace with your Google Analytics tracking ID
    ReactGA.initialize(trackingId);

    
  }

  handleSubmit = event => {
    event.preventDefault();


    ReactGA.event({
      category: 'Option Form',
      action: 'Submit Option Form',
      label: event.target.ta_options.value
    });


    var options_1d = event.target.ta_options.value.split("\n");
    
    var index = options_1d.indexOf('');
    if (index > -1) {
      options_1d.splice(index, 1);
    }
    
    const options_tmp = {}; 
    for (var i = 0; i < options_1d.length; i++) {     
      options_tmp[options_1d[i]] = new Rating();
    }  

    const pair_tmp = this.getRandomPair(Object.keys(options_tmp));

    this.setState({options: options_tmp, options_submitted: true, pair: pair_tmp },() => {
    })
  }

  handleChange = event => {

    const ta_options_error_tmp = this.validateOptions(event.target.value);

    this.setState({options_textarea : event.target.value,ta_options_error: ta_options_error_tmp})
  }

  handleChoice = event => {

    
    let not_chosen = event.currentTarget.value === this.state.pair[0] ? this.state.pair[1] : this.state.pair[0];
    let chosen = event.currentTarget.value === this.state.pair[0] ? this.state.pair[0] : this.state.pair[1];
    let drawn = event.currentTarget.value === 'nochoice'; 

    var options_tmp = this.state.options;

    [options_tmp[chosen], options_tmp[not_chosen] ] = rate_1vs1(options_tmp[chosen], options_tmp[not_chosen],drawn=drawn);
    options_tmp = this.orderleaderboard(options_tmp);

    ReactGA.event({
      category: 'Pair page',
      action: 'Choice submitted',
      label: Object.keys(options_tmp).join('\n')
    });

    

    const pair_tmp = this.getRandomPair(Object.keys(options_tmp));
    this.setState({pair: pair_tmp, options: options_tmp, selection_count: this.state.selection_count +1  },() => {
      console.log(this.state.selection_count);
    })
  }


  handleDelete = event => {
    
    var options_tmp = this.state.options;
    delete options_tmp[event.target.value];

    var option_count_tmp = this.state.option_count - 1; 
    const selection_target_tmp = this.calcSelectionTarget(option_count_tmp);
    const pair_tmp = this.getRandomPair(Object.keys(options_tmp));

    this.setState({pair: pair_tmp, options: options_tmp, option_count: option_count_tmp, selection_target: selection_target_tmp  },() => {});
  }


  handleSelect = event => {

    var prefill = '';
    if (event.target.value === "babyboy") {
      prefill = this.state.options_boy.join("\r\n")
    } else if (event.target.value === "vacation") {
      prefill = this.state.options_vacation.join("\r\n")
    } else if (event.target.value === "netflix") {
      prefill = this.state.options_netflix.join("\r\n")
    }  

    const option_prefill_tmp = event.target.value;

    const ta_options_error_tmp = this.validateOptions(prefill);

    this.setState({option_prefill: option_prefill_tmp, options_textarea: prefill, ta_options_error: ta_options_error_tmp},() => {
      //console.log(this.state.options)         
    })
  
  }

  handleButton = event => {

    if (event.currentTarget.value === 'leaderboardToggle') {
      let leaderboardShown_tmp = this.state.leaderboardShown === true ? false : true;
      this.setState({ leaderboardShown: leaderboardShown_tmp },() => {});
      
     
    } else {
      this.setState({ options: '',options_textarea: '', options_submitted: false, leaderboardShown: false, selection_count: 0, ta_options_error: '', option_count:  0,selection_target: 0},() => {});

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

  validateOptions(eventValue) {

    const options_1d = eventValue.split("\n");
    
    const duplicate_options = this.findDuplicates(options_1d);
    var ta_options_error_tmp  = '';
    if (duplicate_options.length >  0) {
      ta_options_error_tmp = "The following options are duplicated: ".concat(duplicate_options.join(',')) 
    } else if (options_1d.length < 4) {
      ta_options_error_tmp = 'Must add '.concat(5-options_1d.length, ' more options.')  ;
    } else if (options_1d.length > 100) {
      ta_options_error_tmp = 'You\'ve added '.concat(options_1d.length, ' options. That\'ll take a long time to work through. Suggest pairing back to 50 items.')  ;
    }

    const selection_target_tmp = this.calcSelectionTarget(options_1d.length);

    this.setState({option_count : options_1d.length, selection_target : selection_target_tmp})

    
    return ta_options_error_tmp
  }

  calcSelectionTarget(option_count) {
    var selection_target_tmp = Math.round(2.700094505*Math.exp(0.05657521618*option_count))
    return selection_target_tmp
  }


  findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }


  render() {

    if (this.state.options_submitted === true) {
      return (

        <div className="App">
              <Navbar onClick={this.handleButton} />

              <Pair selection_target={this.state.selection_target} selection_count={this.state.selection_count} pair={this.state.pair} onClick={this.handleChoice}/>
              <HideLeaderboard leaderboardShown={this.state.leaderboardShown} onClick={this.handleButton}/>
              {this.state.leaderboardShown ? <Leaderboard options={this.state.options} onClick={this.handleDelete} /> : <div></div>}


        </div>
      )
    } else {
      return (
        <div className="App">
          <Navbar />

          <OptionForm option_value={this.state.option_prefill} option_count={this.state.option_count} ta_options_error={this.state.ta_options_error} options_textarea={this.state.options_textarea} onClick={this.handlePrefill} onChangeValue={this.handleChange} onSubmit={this.handleSubmit} onSelect={this.handleSelect}/>
        </div>
      )
    }
  }


}

