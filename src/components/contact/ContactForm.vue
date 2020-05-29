<template>
    <VContainer
        class="fill-height"
        fluid>
        <VRow
            align="center"
            justify="center">
            <VCol
                cols="12"
                sm="8"
                md="6">
                <VCard class="elevation-12">
                    <VToolbar
                        color="primary"
                        dark>
                        <VToolbarTitle>Basic Form Example</VToolbarTitle>
                    </VToolbar>
                    <VCardText>
                        <VForm
                            v-model="formsAreValid">
                            <VRow>
                                <VCol>
                                    <VTextField
                                        v-model="mainForm.firstName"
                                        :rules="mainForm.nameRules"
                                        counter="20"
                                        label="First Name"
                                        name="first-name"
                                        prepend-icon="mdi-account"
                                        type="text" />

                                    <VTextField
                                        v-model="mainForm.lastName"
                                        :rules="mainForm.nameRules"
                                        counter="20"
                                        label="Last Name"
                                        name="last-name"
                                        prepend-icon="mdi-account"
                                        type="text" />

                                    <VTextField
                                        v-model="mainForm.emailAddress"
                                        :rules="mainForm.emailRules"
                                        label="E-Mail Address"
                                        name="email-address"
                                        prepend-icon="mdi-at"
                                        type="text" />

                                    <VSelect
                                        v-model="miscelanousForm.favouriteWords"
                                        :items="miscelanousForm.possibleWords"
                                        prepend-icon="mdi-emoticon-lol-outline"
                                        chips
                                        multiple
                                        label="Favourite Words" />
                                </VCol>
                            </VRow>
                            <VRow>
                                <VCol>
                                    <VDivider />
                                </VCol>
                            </VRow>
                            <VRow>
                                <VCol>
                                    <VMenu
                                        ref="firstDateMenu"
                                        v-model="firstDateMenuOpen"
                                        :close-on-content-click="false"
                                        :return-value.sync="mainForm.firstDate"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on }">
                                            <VTextField
                                                v-model="mainForm.firstDate"
                                                label="First Date"
                                                prepend-icon="mdi-clock-outline"
                                                readonly
                                                v-on="on" />
                                        </template>
                                        <VDatePicker
                                            v-model="mainForm.firstDate"
                                            no-title
                                            scrollable>
                                            <v-spacer />
                                            <VBtn
                                                text
                                                color="primary"
                                                @click="firstDateMenuOpen = false">
                                                Cancel
                                            </VBtn>
                                            <VBtn
                                                text
                                                color="primary"
                                                @click="$refs.firstDateMenu.save(mainForm.firstDate)">
                                                OK
                                            </VBtn>
                                        </VDatePicker>
                                    </VMenu>

                                    <VMenu
                                        ref="secondDateMenu"
                                        v-model="secondDateMenuOpen"
                                        :close-on-content-click="false"
                                        :return-value.sync="mainForm.secondDate"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px">
                                        <template v-slot:activator="{ on }">
                                            <VTextField
                                                v-model="mainForm.secondDate"
                                                label="Second Date"
                                                prepend-icon="mdi-clock-outline"
                                                readonly
                                                v-on="on" />
                                        </template>
                                        <VDatePicker
                                            v-model="mainForm.secondDate"
                                            no-title
                                            scrollable>
                                            <v-spacer />
                                            <VBtn
                                                text
                                                color="primary"
                                                @click="secondDateMenuOpen = false">
                                                Cancel
                                            </VBtn>
                                            <VBtn
                                                text
                                                color="primary"
                                                @click="$refs.secondDateMenu.save(mainForm.secondDate)">
                                                OK
                                            </VBtn>
                                        </VDatePicker>
                                    </VMenu>
                                </VCol>
                                <VCol>
                                    <ContactFormDateCompare
                                        :first-date="mainForm.firstDate"
                                        :second-date="mainForm.secondDate" />
                                </VCol>
                            </VRow>
                        </VForm>
                    </VCardText>
                    <VCardActions>
                        <VBtn
                            :disabled="!formsAreValid"
                            block
                            color="primary"
                            @click="send">
                            Send
                        </VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>
        <ContactFormSendDialog
            :main-form="mainForm"
            :miscelanous-form="miscelanousForm"
            :show="readyToSend"
            @sent="contactFormSubmitted" />
    </VContainer>
</template>

<script>
import ContactFormDateCompare from './ContactFormDateCompare';
import ContactFormSendDialog from './ContactFormSendDialog';

import {
    nameRequired, nameLength, emailRequired, emailIsValid, favouriteWordsRequired,
} from './contact-form-validation';

export default {
    name: 'ContactForm',

    components: {
        ContactFormDateCompare,
        ContactFormSendDialog,
    },

    data () {
        return {
            formsAreValid: true,
            firstDateMenuOpen: false,
            secondDateMenuOpen: false,
            mainForm: {
                firstName: '',
                lastName: '',
                emailAddress: '',
                firstDate: '',
                secondDate: '',
                nameRules: [nameRequired, nameLength],
                emailRules: [emailRequired, emailIsValid],
            },
            miscelanousForm: {
                possibleWords: ['Hello', 'Cat', 'Help', 'Memes', 'Stuff'],
                favouriteWords: [],
                favouriteWordsRules: [favouriteWordsRequired],
            },
            readyToSend: false,
        };
    },

    methods: {
        send () {
            this.readyToSend = true;
        },

        contactFormSubmitted () {
            this.readyToSend = false;
        },
    },
};
</script>