<template>
    <div>
        <p>Total Results: {{ totalAvailable }}</p>
        <ul id="character-listing">
            <li v-for="character in characters" :key="character.id" v-on:click="selectedCharacter = character">
                {{ character.name }}
            </li>
        </ul>
        <CharacterDetail v-bind:character="selectedCharacter"></CharacterDetail>
        <div id="pageButtons" v-if="totalAvailable > 20">
            <button v-on:click="changePage(-1)">Previous Page</button>
            <button v-on:click="changePage(1)">Next Page</button>
        </div>
    </div>
</template>

<script>
import {searchMarvelCharacters} from '../services/marvel'
import {getMarvelCharacters} from '../services/marvel'
import CharacterDetail from './CharacterDetail.vue'

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