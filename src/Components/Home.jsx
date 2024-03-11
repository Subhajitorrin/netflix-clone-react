import React, { useEffect, useState } from "react";
import Row from "./Row";
import axios from "axios";
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
      <div className="banner"></div>
      <Row title="Upcoming" arr={upcomingMovies}/>
      <Row title="Popular" arr={popularMovies}/>
      <Row title="Now Playing" arr={now_playingMovies}/>
      <Row title="Top Rated" arr={top_ratedMovies}/>
    </div>
  );
}

export default Home;
