<template>
    <div>
        <ul id="character-listing">
            <li v-for="character in characters" :key="character.id">
                {{ character.name }}
            </li>
        </ul>
        <button v-on:click="changePage(-1)">Previous Page</button>
        <button v-on:click="changePage(1)">Next Page</button>
    </div>
</template>


<script>
import {getMarvelCharacters} from '../services/marvel'

export default {
    name: 'MarvelCharacters',
    data: function() {
        return {
            page: 1,
            characters: []
        }
    },
    methods: {
        getCharacters: function(page) {
            getMarvelCharacters(this.updateCharacters, page)
        },
        updateCharacters: function(incomingCharacters) {
            this.characters = incomingCharacters;
        },
        changePage: function(amount) {
            if((this.page + amount) >= 1) {
                this.page += amount;
            }
            this.getCharacters(this.page);
        }
    }, mounted() {
        this.getCharacters(this.page);
    }
}
</script>