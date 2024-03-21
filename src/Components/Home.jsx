import React, { useEffect, useState } from "react";
import Row from "./Row";
import Banner from "./Banner";
import axios from "axios";
import { FaPlay } from "react-icons/fa";

const apikey = "7f803f6abb22fd06057fed554c09cf75";
const url = "https://api.themoviedb.org/3/movie/";

function Home() {
  // popular movies
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${url}popular?api_key=${apikey}`);
      setPopularMovies(data.results.reverse());
    };
    fetchData();
  }, []);

  // nowplaying movies
  const [now_playingMovies, setNow_playingMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${url}now_playing?api_key=${apikey}`);
      setNow_playingMovies(data.results.reverse());
    };
    fetchData();
  }, []);

  // toprated movies
  const [top_ratedMovies, setTop_ratedMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${url}top_rated?api_key=${apikey}`);
      setTop_ratedMovies(data.results);
    };
    fetchData();
  }, []);

  // toprated movies
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${url}upcoming?api_key=${apikey}`);
      setUpcomingMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {/* <Banner/> */}

      <div className="banner">
        <div className="heading">
          <h1>STRANGER THINGS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolore assumenda eaque totam odit perspiciatis autem rerum, quae quo
            deleniti molestiae iusto corrupti quas modi cupiditate, facere
            commodi exercitationem delectus.
          </p>
          <button className="btn">
            <FaPlay />
            <h4> PLAY</h4>
          </button>
        </div>
        <div className="overlay"></div>
        <div className="ifcontainer">
          <iframe
            className="ip"
            src="https://www.youtube.com/embed/ermJ-iPg9xA?si=a-7gm9doMyNA4J61&amp;controls=0&playlist=ermJ-iPg9xA&loop=1&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Row title="Upcoming" arr={upcomingMovies} />
      <Row title="Popular" arr={popularMovies} />
      <Row title="Now Playing" arr={now_playingMovies} />
      <Row title="Top Rated" arr={top_ratedMovies} />
    </div>
  );
}

export default Home;
