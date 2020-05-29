<template>
    <v-dialog
        v-model="show"
        width="500">
        <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title>
                Thanks!
            </v-card-title>

            <v-card-text>
                <p>
                    Thanks for submitting the form {{ mainForm.firstName }}.
                </p>

                <p>
                    Pretend this was a real form!
                </p>
            </v-card-text>

            <v-divider />

            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="primary"
                    text
                    @click="closeDialog">
                    Done
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ContactFormSendDialog',

    props: {
        show: {
            type: Boolean,
            required: true,
        },

        mainForm: {
            type: Object,
            required: true,
        },

        miscelanousForm: {
            type: Object,
            required: true,
        },
    },

    methods: {
        closeDialog () {
            this.$emit('sent');
        },
    },
};
</script>

<style>

</style>