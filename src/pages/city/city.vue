<!--  -->
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handelLeterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo: function() {
      // axios.get("/api/city.json").then(this.handleGetCityInfoSuccess);
      axios.get("/api/city").then(this.handleGetCityInfoSuccess);
    },
    handleGetCityInfoSuccess: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handelLeterChange: function(letter) {
      this.letter = letter;
    }
  },
  mounted: function() {
    this.getCityInfo();
  }
};
</script>
<style lang='stylus' scoped></style>