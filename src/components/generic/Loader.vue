<template>
    <div class="p-background loading d-flex align-center justify-center" v-if="visible">
        <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
        <transition name="custom-classes-transition" enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight">
            <v-img v-if="show" max-height="190" max-width="190" src="@/assets/loader.png"></v-img>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                required: true,
                default: false,
            },
        },
        name: 'loader',
        data: function () {
            return {
                show: false
            }
        },
        watch: {
            visible() {
                if (this.visible) {
                    setTimeout(() => {
                        this.show = true
                    }, 100);
                }
            }
        },
    }
</script>

<style>
</style>