(this.webpackJsonpPairwise=this.webpackJsonpPairwise||[]).push([[0],{50:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(23),r=a.n(i),l=(a(55),a(17)),s=a(8),c=a(9),u=a(12),h=a(11),p=a(28),m=a(13),d=(a(56),a(31)),b=a(106),v=a(96),g=a(100),f=a(99),E=a(95),k=a(97),y=a(98),S=a(64),O=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.options;return o.a.createElement(E.a,{component:S.a},o.a.createElement(v.a,{"aria-label":"simple table"},o.a.createElement(k.a,null,o.a.createElement(y.a,null,o.a.createElement(f.a,null,"\xa0"),o.a.createElement(f.a,{align:"right"},"Mu"),o.a.createElement(f.a,{align:"right"},"Sigma"),o.a.createElement(f.a,{align:"right"},"Prune"))),o.a.createElement(g.a,null,Object.keys(this.props.options).map((function(a){return o.a.createElement(y.a,{key:a},o.a.createElement(f.a,{component:"th",scope:"row"},a),o.a.createElement(f.a,{align:"right"},t[a].mu.toFixed(1)),o.a.createElement(f.a,{align:"right"},t[a].sigma.toFixed(1)),o.a.createElement(f.a,{align:"right"},o.a.createElement("button",{className:"delete",value:a,onClick:e.props.onClick},"x")," "))})))))}}]),t}(o.a.Component),j=a(107),C=a(65),_=a(108),w=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,""===this.props.ta_options_error?o.a.createElement(_.a,{severity:"info"},"Add one item per line. Must add at least four options before you can submit."):o.a.createElement(_.a,{severity:"warning"},this.props.ta_options_error,"   "),o.a.createElement("p",null,o.a.createElement("form",{onSubmit:this.props.onSubmit},o.a.createElement("textarea",{className:"ta_options",name:"ta_options",rows:"15",cols:"30",value:this.props.options_textarea,placeholder:"This app aims to simplify decisions by breaking them down into many comparisons between two choices. After you've made enough comparisons, you will get Trueskill rankings that will help you make the final decision.",onChange:this.props.onChangeValue}),this.props.option_count>3?o.a.createElement("div",null,o.a.createElement(C.a,{type:"submit",variant:"contained"},"Submit")):o.a.createElement("div",null))),o.a.createElement("p",null,o.a.createElement(j.a,{onChange:this.props.onSelect},o.a.createElement("option",{value:""},"Prefilled Options"),o.a.createElement("option",{value:"babyboy"},"Top 50 Boys' Names"),o.a.createElement("option",{value:"vacation"},"European Vacation"),o.a.createElement("option",{value:"netflix"},"Series on Netflix"))))}}]),t}(o.a.Component),T=a(102),M=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,!1===this.props.first_pair?o.a.createElement("div",null):o.a.createElement(_.a,{severity:"info"},"Choose between the options or pick the \xaf\\_(\u30c4)_/\xaf if you can't decide. The more selections you make the more accurate the rankings."),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(T.a,{size:"large",color:"primary","aria-label":"large outlined primary button group"},o.a.createElement(C.a,{value:this.props.pair[0],onClick:this.props.onClick},this.props.pair[0]),o.a.createElement(C.a,{onClick:this.props.onClick,value:"nochoice"},"\u203e\\_(\u30c4)_/\u203e"),o.a.createElement(C.a,{value:this.props.pair[1],onClick:this.props.onClick},this.props.pair[1])))))}}]),t}(o.a.Component),x=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={minWidth:150};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"left"},"\xa0"),o.a.createElement("div",{className:"middle"},o.a.createElement(C.a,{style:e,onClick:this.props.onClick,value:"leaderboardToggle"},this.props.leaderboardShown?"Hide":"Show"," Rankings"),o.a.createElement(C.a,{style:e,onClick:this.props.onClick,value:"reset"},"Reset")),o.a.createElement("div",{className:"right"},"\xa0")))}}]),t}(o.a.Component),B=a(103),A=a(104),N=a(105),P=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(B.a,{position:"static"},o.a.createElement(A.a,null,o.a.createElement(N.a,{variant:"title",color:"inherit"},"Pairwise Comparisons"))))}}]),t}(o.a.Component),L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a=t.target.ta_options.value.split("\n"),n=a.indexOf("");n>-1&&a.splice(n,1);for(var o={},i=0;i<a.length;i++)o[a[i]]=new d.a;var r=e.getRandomPair(Object.keys(o));e.setState({options:o,options_submitted:!0,pair:r},(function(){}))},e.handleChange=function(t){var a=e.validateOptions(t.target.value);e.setState({options_textarea:t.target.value,ta_options_error:a})},e.handleChoice=function(t){var a=t.target.value===e.state.pair[0]?e.state.pair[1]:e.state.pair[0],n=t.target.value===e.state.pair[0]?e.state.pair[0]:e.state.pair[1],o="nochoice"===t.target.value,i=e.state.options,r=Object(b.a)(i[n],i[a],o),s=Object(l.a)(r,2);i[n]=s[0],i[a]=s[1],i=e.orderleaderboard(i);var c=e.getRandomPair(Object.keys(i));e.setState({pair:c,options:i},(function(){console.log(i)}))},e.handleDelete=function(t){var a=e.state.options;delete a[t.target.value];var n=e.getRandomPair(Object.keys(a));e.setState({pair:n,options:a},(function(){}))},e.handleSelect=function(t){console.log(t.target.value);var a="";"babyboy"===t.target.value?a=e.state.options_baby.join("\r\n"):"vacation"===t.target.value?a=e.state.options_vacation.join("\r\n"):"netflix"===t.target.value&&(a=e.state.options_netflix.join("\r\n"));var n=e.validateOptions(a);e.setState({options_textarea:a,ta_options_error:n},(function(){}))},e.handleButton=function(t){if(console.log(t.currentTarget.value),"reset"===t.currentTarget.value)e.setState({options:"",options_textarea:"",options_submitted:!1,leaderboardShown:!1},(function(){}));else{var a=!0!==e.state.leaderboardShown;e.setState({leaderboardShown:a},(function(){}))}},e.findDuplicates=function(e){for(var t=e.slice().sort(),a=[],n=0;n<t.length-1;n++)t[n+1]==t[n]&&a.push(t[n]);return a},e.state={options:[],options_submitted:!1,pair:[],leaderboardShown:!0,options_textarea:"",options_baby:["Liam","Noah","William","James","Oliver","Benjamin","Elijah","Lucas","Mason","Logan","Alexander","Ethan","Jacob","Michael","Daniel","Henry","Jackson","Sebastian","Aiden","Matthew","Samuel","David","Joseph","Carter","Owen","Wyatt","John","Jack","Luke","Jayden","Dylan","Grayson","Levi","Issac","Gabriel","Julian","Mateo","Anthony","Jaxon","Lincoln","Joshua","Christopher","Andrew","Theodore","Caleb","Ryan","Asher","Nathan","Thomas","Leo","Harry","Max","Marcus","Arnold","Isaac","Nethaniel","Julien","Arnaud","Colin"],options_vacation:["Paris","Rome","Venice","London","Barcelona","Florence","Vienna","Madrid","Prague","Istanbul","Milan","Amsterdam","Budapest","Munich","Athens","Berlin","Lisbon","Santorini","Seville","Moscow","Nice","Naples","Dubrovnik","Ediburgh","Saint Petersburg","Pisa","Granada","Frankfurt","Copenhagen","Stockholm","Salzburg","Zurich","Helsinki","Lucerne","Reykjavik","Mykonos","Mont Saint-Michel","Amalfi","Oslo","Dublin","Capri","Cologne","Split","Krakow","Lake Como","Crete","Malaga","Bratislava","Brussels","Riga","Heidelberg","Bruges","Valencia","Porto","Biarritz","Innsbruck","Gothenburg","San Sebastia\u0301n","Sienna","Antwerp","Mostar","Veliko Tarnovo","Tallinn","Bordeaux","Lille","Tbilisi","Hamburg","Sardinia","Genoa","San Marino","Lucca","Bologna","Padua","Malta","Bucharest","Belgrade","Ljubljana","Majorca","Chernobyl","Lviv","Rotterdam","Corsica","Tarifa","Puglia","Geneva","Interlaken","Sicily","Paros"],options_netflix:["Messiah","Spinning Out","The Witcher","Happy!","Living With Yourself","The Crown","Queer Eye: We're in Japan!","Derry Girls","Black Mirror","Atypical","Line of Duty","Star Trek: The Next Generation","Weeds","Sense8","Unbelievable","The Dark Crystal: Age of Resistance","The Spy","The People v. O.J. Simpson","Mindhunter","The Thick of It","Dark","Orange is the New Black","Neon Genesis Evangelion","Carter","Stranger Things","When They See Us","What/If","Special","Tuca and Bertie","The Assassination of Gianni Versace","One-Punch Man","Dogs","Russian Doll","The OA","Sex Education","The Last Kingdom","Dead Set","Orphan Black","BoJack Horseman","The Good Place","The Alienist","Manhunt: Unabomber","Travellers","Better Call Saul","The End of the F***ing World","Aggretsuko","American Vandal","GLOW"],ta_options_error:"",option_count:0},e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getRandomPair",value:function(e){for(var t,a,n=e.slice(0),o=e.length;o--;)t=n[a=Math.floor((o+1)*Math.random())],n[a]=n[o],n[o]=t;return n.slice(0,2)}},{key:"orderleaderboard",value:function(e){var t={};for(var a in e)t[a]=e[a].mu;var n=Object.keys(t).map((function(e){return[e,t[e]]}));n.sort((function(e,t){return t[1]-e[1]}));var o={};for(var a in n)o[n[a][0]]=e[n[a][0]];return o}},{key:"validateOptions",value:function(e){var t=e.split("\n"),a=this.findDuplicates(t);console.log(a);var n="";return a.length>0?n="The following options are duplicated: ".concat(a.join(",")):t.length<4&&(n="Must add ".concat(5-t.length," more options.")),this.setState({option_count:t.length}),n}},{key:"render",value:function(){return!0===this.state.options_submitted?o.a.createElement("div",{className:"App"},o.a.createElement(P,null),o.a.createElement(M,{pair:this.state.pair,onClick:this.handleChoice}),o.a.createElement(x,{leaderboardShown:this.state.leaderboardShown,onClick:this.handleButton}),this.state.leaderboardShown?o.a.createElement(O,{options:this.state.options,onClick:this.handleDelete}):o.a.createElement("div",null)):o.a.createElement("div",{className:"App"},o.a.createElement(P,null),o.a.createElement(w,{option_count:this.state.option_count,ta_options_error:this.state.ta_options_error,options_textarea:this.state.options_textarea,onClick:this.handlePrefill,onChangeValue:this.handleChange,onSubmit:this.handleSubmit,onSelect:this.handleSelect}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.8ac40ab4.chunk.js.map