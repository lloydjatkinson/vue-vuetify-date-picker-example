<template>
    <v-app>
        <v-content>
            <ContactForm />
        </v-content>
    </v-app>
</template>

<script>
import ContactForm from './components/contact/ContactForm';

export default {
    name: 'App',

    components: {
        ContactForm,
    },
};
</script>