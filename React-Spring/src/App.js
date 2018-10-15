import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      type : 'recent',
      searchValue : ''
    }
    this.changeit = this.changeit.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.searchBegin = this.searchBegin.bind(this);
  }
  changeit(){
    this.setState((prevState)=>({
      type : (prevState.type=='recent'?'alltime':'recent')
    }))
  }
  inputChangeHandler(val){
    this.setState({
      searchValue : val
    })
  }
  searchBegin(){
    console.log(this.state.searchValue);
  }
  render() {
    return (
      <div className='wrapper'>
        <h2>Table with the top 100 people, sorted by theyr {
            this.state.type=='recent'?'last 30 days ':'all time '
        }score.</h2>
        <div className='wb'>
          <div className='btn-change' onClick={this.changeit}>Show {
              this.state.type=='recent'?'all time scores.':'recent scores.'
          }</div>
        </div>
        <Search formSubmited={this.searchBegin} inputValue={this.state.searchValue} changeValue={this.inputChangeHandler}/>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Recent Points</th>
              <th>All Time Points</th>
            </tr>
          </thead>
          {
            this.state.type==='recent'?<Recent filterName={this.state.searchValue}/>:<Alltime filterName={this.state.searchValue}/>
          }
          
        </table>
      </div>
    );
  }
}

class Recent extends Component{
  constructor(props){
    super(props)
    this.state = {
      content : [],
      loading : true
    }
  }
  componentWillMount(){
    if(this.state.content.length != 0){
      console.log('jump over fetching');
      return;
    }
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(promise=>promise.json())
    .then(data=>this.setState({content:data , loading:false}));
  }
  render(){
    let searchFor = this.props.filterName;
    let regExp = new RegExp('^' + searchFor , 'i');
    return(
      
      <tbody>
        {
          this.state.loading?<tr><td colSpan='4' className='loading'>Loading...</td></tr>:(
            this.state.content.map((el,idx)=>{
              if(searchFor != ''){
                if(regExp.test(el.username)){
                  return (<LiMaker key={el.username} rank={idx+1} img={el.img} name={el.username} link={'https://www.freecodecamp.org/'+el.username} recentPoints={el.recent} allPoints={el.alltime} />)
                }else{
                  return;
                }
              }else{
                return <LiMaker key={el.username} rank={idx+1} img={el.img} name={el.username} link={'https://www.freecodecamp.org/'+el.username} recentPoints={el.recent} allPoints={el.alltime} />
              }
            })
          )
        }
      </tbody>
    )
  }
}

class Alltime extends Component{
  constructor(props){
    super(props)
    this.state = {
      content : [],
      loading : true
    }
  }
  componentWillMount(){
    if(this.state.content.length != 0){
      console.log('jump over fetching');
      return;
    }
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(promise=>promise.json())
    .then(data=>this.setState({content:data, loading:false}));
  }
  render(){
    return(
      <tbody>
        {
          this.state.loading?<tr><td colSpan='4' className='loading'>Loading...</td></tr>:(
            this.state.content.map((el,idx)=>
              <LiMaker key={el.username} rank={idx+1} img={el.img} name={el.username} link={'https://www.freecodecamp.org/'+el.username} recentPoints={el.recent} allPoints={el.alltime} />
            )
          )
        }
      </tbody>
    )
  }
}



class LiMaker extends Component{
  
  render(){
    let thisRank = this.props.rank;
    let firstThreeClass = thisRank==1?'first':(thisRank==2?'second':(thisRank==3?'third':''));
    return(
      <tr className={firstThreeClass}>
        <td className='rank'>{thisRank}</td>
        <td className='info'>
            <img src={this.props.img} alt={this.props.name}/>
            <a href={this.props.link}><p>{this.props.name}</p></a>          
        </td>
        <td className='recentPoints'><p>{this.props.recentPoints}</p></td>
        <td className='allTimePoints'><p>{this.props.allPoints}</p></td>
      </tr>
    )
  }
}

class Search extends Component{
  constructor(props){
    super(props);
    this.submited = this.submited.bind(this);
    this.change = this.change.bind(this);
  }
  submited(e){
    e.preventDefault();
    this.props.formSubmited();
  }
  change(e){
    this.props.changeValue(e.target.value);
  }
  render(){
    return(
      <form onSubmit={this.submited}>
        <input onChange={this.change} type='text' name='search' value={this.props.inputValue}/>
      </form>
    )
  }
}


export default App;
