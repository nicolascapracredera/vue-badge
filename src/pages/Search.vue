<template>
    <div>
        <h2>Search for a Character</h2>
        <p>Start typing in the box below to search for a Marvel character.</p>
        <input v-model="characterSearch" placeholder="Type Character Name">
        <CharacterListing :searchTerm="debouncedSearchTerm"></CharacterListing>
    </div>
</template>

<script>
const _ = require('lodash');
import CharacterListing from '../components/CharacterListing.vue'

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