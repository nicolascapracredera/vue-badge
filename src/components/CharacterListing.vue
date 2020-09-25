<template>
    <div>
        <div id="listing-container">
            <p>Total Results: {{ totalAvailable }}</p>
            <div id="character-listing">
                <div class="btn-col">
                    <button class="btn btn-outline-primary character-name" v-for="character in characters.slice(0, 10)" :key="character.id" v-on:click="selectedCharacter = character">
                        {{ character.name }}
                    </button>
                </div>
                <div class="btn-col">
                    <button class="btn btn-outline-primary character-name" v-for="character in characters.slice(10, 20)" :key="character.id" v-on:click="selectedCharacter = character">
                        {{ character.name }}
                    </button>
                </div>
                <div id="button-container" class="btn-group" v-if="totalAvailable > 20">
                <ul class="pagination justify-content-center">
                    <li :class="'page-item ' + [page <= 1 && 'disabled']">
                        <button class="page-link" v-on:click="changePage(-1)" :disabled="page <= 1" aria-disabled="true">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item disabled">
                        <button disabled class="page-link">{{ page }}</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" v-on:click="changePage(1)">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </div>
            </div>
            
        </div>
        <CharacterDetail v-bind:character="selectedCharacter"></CharacterDetail>
    </div>
</template>

<script>
import {searchMarvelCharacters} from '../services/marvel'
import {getMarvelCharacters} from '../services/marvel'
import CharacterDetail from './CharacterDetail.vue'

export default {
    name: 'CharacterListing',
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
#listing-container {
    float: left;
    width: 60%;
    margin-left: 5px;
    margin-right: 10px;
}

.character-name {
    margin-bottom: 5px;
    margin-right: 5px;
    height: 60px;
}

.btn-col {
    width: 50%;
    display: flex;
    flex-direction: column;
    float: left;
}

#button-container {
    display: block;
    clear: both;
}
</style>