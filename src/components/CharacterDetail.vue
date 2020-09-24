<template>
    <div v-if="character!==null">
        <h3>Detailed Character Info</h3>
        <p>Name: {{ character.name }}</p>
        <img v-if="character.thumbnail" alt="Character Photo"
            v-bind:src="character.thumbnail.path + '/standard_medium.' + character.thumbnail.extension" />
        <p>Appears in {{ character.comics.available }} comics, {{ character.series.available }} series, and {{ character.stories.available }} stories.</p>
        <p>{{ character.name }} was last modified on {{ this.getFormattedDate() }}</p>
    </div>
</template>

<script>
export default {
    name: 'CharacterDetail',
    props: [ 'character' ],
    data: function() {
        return {
            
        }
    },
    methods: {
        getFormattedDate: function getFormattedDate() {
            var date = new Date(this.character.modified);
            return date.toLocaleDateString();
        }
    }
}
</script>