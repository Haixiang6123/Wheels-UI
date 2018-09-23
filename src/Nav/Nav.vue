<template>
    <div class="w-nav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-nav",
        props: {
            selected: {
                type: Array,
                defualt: () => []
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            items() {
                return this.$children.filter(vm => vm.$options.name === 'w-nav-item');
            }
        },
        methods: {
            updateChildren() {
                this.items.forEach((vm => {
                    vm.selected = this.selected.indexOf(vm.name) >= 0;
                }));
            },
            listenToChildren() {
                this.items.forEach((vm => {
                    vm.$on('add:selected', (name) => {
                        // If selected item is not on the array, then push it to the array
                        // Then update selected array
                        if (this.multiple) {
                            if (this.selected.indexOf(name) < 0) {
                                console.log(this.selected);
                                let copy = JSON.parse(JSON.stringify(this.selected));
                                copy.push(name);
                                this.$emit('update:selected', copy);
                            }
                        }
                        else {
                            this.$emit('update:selected', [name]);
                        }
                    });
                }));
            }
        },
        mounted() {
            // Init
            this.updateChildren();
            // Add listeners
            this.listenToChildren();
        },
        updated() {
            // Update
            this.updateChildren();
        },
    }
</script>

<style scoped lang="scss">
    .w-nav {
        display: flex;
        border: 1px solid red;
    }
</style>