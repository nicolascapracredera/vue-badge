<template>
    <div v-if="character!==null">
        <h3>Detailed Character Info</h3>
        <div class="card" style="width: 18rem;">
            <img v-if="character.thumbnail" alt="Character Photo" class="card-img-top"
                v-bind:src="character.thumbnail.path + '/portrait_incredible.' + character.thumbnail.extension" />
            <div class="card-body">
                <p>Name: {{ character.name }}</p>
                <p>Appears in {{ character.comics.available }} comics, {{ character.series.available }} series, and {{ character.stories.available }} stories.</p>
                <p>{{ character.name }} was last modified on {{ this.getFormattedDate() }}</p>
            </div>
        </div>
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

<style scoped>
#character-detail {
    float: left;
    border: 2px solid black;
    border-radius: 5%;
    padding: 5px;
    background: lightgray;
    width: 30%;
}
</style>