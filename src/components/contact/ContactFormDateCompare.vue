<template>
    <VCard outlined>
        <VCardTitle class="headline">
            Date Range
        </VCardTitle>

        <VCardSubtitle>
            There are {{ Math.abs(difference.years) || 0 }} years, {{ Math.abs(difference.months) || 0 }} months and {{ Math.abs(difference.days) || 0 }} days between the two dates.
        </VCardSubtitle>
    </VCard>
</template>

<script>
import { DateTime } from 'luxon';

export default {
    name: 'ContactFormDateCompare',

    props: {
        firstDate: {
            type: String,
            required: true,
        },
        secondDate: {
            type: String,
            required: true,
        },
    },

    computed: {
        difference () {
            const start = DateTime.fromISO(this.firstDate);
            const end = DateTime.fromISO(this.secondDate);

            return end.diff(start, ['years', 'months', 'days']).toObject();
        },
    },
};
</script>