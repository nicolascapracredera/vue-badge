<template>
    <div id="container">
        <p>Start typing in the box below to search for a Marvel character. Click on a character's name to view details about them.</p>
        <input class="form-control col-4" type="text" v-model="characterSearch" placeholder="Type Character Name">
        <CharacterListing :searchTerm="debouncedSearchTerm"></CharacterListing>
    </div>
</template>

<script>
const _ = require('lodash');
import CharacterListing from '../components/CharacterListing.vue'
require('bootstrap')

export default {
    name: 'Search',
    components: {
        CharacterListing
    },
    data: function() {
        return {
            characterSearch: "",
            character: null,
            debouncedSearchTerm: ""
        }
    },
    watch: {
        characterSearch: _.debounce(function(val) {
            this.debouncedSearchTerm = val;
        }, 1000)
    },
    methods: {
        updateCharacter: function updateCharacter(characters) {
            this.character = characters[0];
        }
    }
}
</script>

<style scoped>
#container {
    margin-left: 5px;
    margin-top: 5px;
}
</style>