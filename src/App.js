import './App.css';

import Movies from './componets/Movie';


function App() {
  const Movie = [
    {
     movie_name: "Bright",
      poster:"https://wallpapercave.com/wp/wp2354003.jpg",
      img: 'https://th.bing.com/th/id/OIP.439eWrp_0YVWsqk5C8ZfzQHaDt?w=344&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      title: 'Collection',
      about: 'Best Movie In the Year',
      featured: true,
      year:2018,
      actor_name:"Raja Mouhli",
      time:"3 hrs ",
      text:"The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV."

    },
    {
      movie_name: "The Batman",
      poster:"https://th.bing.com/th/id/OIP.gUV95owm8a42ff18r_H_xgHaGm?pid=ImgDet&w=193&h=171&c=7&dpr=1.5",
      img: 'https://thumbs.dreamstime.com/z/atv-rider-showing-thumbs-up-to-his-partner-atv-rider-helmet-showing-thumbs-up-to-his-partner-offroad-trip-forest-riding-129263125.jpg',
      title: 'Collection',
      about: 'Action Movie',
      year:2019,
      actor_name:"Shankar",
      time:"2.5hrs",
      text:"The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV."
     
    },
    {
      movie_name: "Uncharted",
      poster:"https://th.bing.com/th?q=Uncharted+Fan+Film&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      img: 'https://th.bing.com/th/id/OIP.Y2ku9qbT1Ji2C42933FTOgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      title: 'Collection',
      about: 'Full Entatairnment',
      year:2020,
      actor_name:"Koaratal Shiva",
      time:"2 hrs",
      text:"The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV."

    }
  ];

  return (
    <div className="App" >
      <Movies movie_detail={Movie} />
   

    </div>
  );
}

export default App;