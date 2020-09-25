<template>
    <div>
        <div id="listing-container">
            <p>Total Results: {{ totalAvailable }}</p>
            <div id="character-listing">
                <div class="character-name" v-for="character in characters" :key="character.id" v-on:click="selectedCharacter = character">
                    {{ character.name }}
                </div>
            </div>
            <div id="pageButtons" v-if="totalAvailable > 20">
                <button class="btn btn-primary" v-on:click="changePage(-1)" :disabled="page <= 1">Previous Page</button>
                <button v-on:click="changePage(1)">Next Page</button>
            </div>
        </div>
        <CharacterDetail id="character-detail" v-bind:character="selectedCharacter"></CharacterDetail>
    </div>
</template>

<script>
import {searchMarvelCharacters} from '../services/marvel'
import {getMarvelCharacters} from '../services/marvel'
import CharacterDetail from './CharacterDetail.vue'
import 'bootstrap';

export default {
    name: 'MarvelCharacters',
    props: [ 'searchTerm' ],
    components: {
        CharacterDetail
    },
    data: function() {
        return {
            page: 1,
            characters: [], 
            selectedCharacter: null,
            totalAvailable: 0
        }
    },
    watch: {
        searchTerm: function(val) {
            console.log('char listing ', val);
            this.getCharacters(1);
        }
    },
    methods: {
        getCharacters: function(page) {
            console.log("current search term ", this.searchTerm)
            if (this.searchTerm !== "") {
                searchMarvelCharacters(this.updateCharacters, page, this.searchTerm);
            } else {
                getMarvelCharacters(this.updateCharacters, page);
            }
        },
        updateCharacters: function(incomingCharacters, numResults) {
            this.characters = incomingCharacters;
            this.totalAvailable = numResults;
        },
        changePage: function(amount) {
            if((this.page + amount) >= 1) {
                this.page += amount;
            }
            this.getCharacters(this.page);
        }
    },mounted() {
        this.getCharacters(this.page);
    }
}
</script>

<style scoped>
#character-detail {
    float: left;
    border: 2px solid black;
    border-radius: 5%;
    padding: 5px;
    background: lightgray;
    width: 30%;
}

#listing-container {
    float: left;
    width: 40%
}

.character-name {
    background: lightblue;
    margin-bottom: 5px;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    width: fit-content;
    padding: 3px;
    font-size: medium;
    border: 1px dotted gray;
}

.character-name:hover {
    background: blue;
    color: white;
    border: 1px solid black;
}
</style>