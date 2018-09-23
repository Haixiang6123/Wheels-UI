<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "w-collapse",
        props: {
            singleSelected: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
            }
        },
        data() {
            return {
                eventBus: new Vue(),
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected);

            this.eventBus.$on('update:addSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected));

                // Only one item can be selected, so clear all elements and push the selected item's name
                if (this.singleSelected) {
                    selectedCopy = [name];
                }
                // More items can be selected
                else {
                    selectedCopy.push(name);
                }
                // Update collapse item
                this.eventBus.$emit('update:selected', selectedCopy);
                this.$emit('update:selected', selectedCopy);
            });

            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected));

                // Remove selected pane
                let index = selectedCopy.indexOf(name);
                selectedCopy.splice(index, 1);
                // Update collapse item
                this.eventBus.$emit('update:selected', selectedCopy);
                this.$emit('update:selected', selectedCopy);
            });

            this.$children.forEach((vm) => {
                vm.singleSelected = this.singleSelected;
            });
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>