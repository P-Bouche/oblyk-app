<template>
  <div>
    <v-card
      :link="linkable"
      :class="bindClass"
      :to="linkable ? gym.path : null"
    >
      <v-list-item
        :three-line="!small"
        :two-line="!small"
      >
        <v-list-item-avatar
          :size="small ? 45 : 70"
          :class="small ? 'mt-1 mb-1' : ''"
        >
          <v-avatar
            color="grey"
            :size="small ? 45 : 70"
            tile
          >
            <v-img :src="gym.logoUrl" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content
          :class="small ? 'pt-3 pb-0' : ''"
        >
          <v-list-item-title class="font-weight-bold">
            <span class="vertical-align-middle">
              {{ gym.name }}
            </span>
          </v-list-item-title>
          <v-list-item-subtitle :class="small ? 'mb-3' : 'mb-4'">
            <v-alert
              dense
              text
              class="d-inline-block mr-1 mb-0 pl-2 pr-2 pt-0 pb-0"
            >
              {{ $t('components.gym.type') }}
            </v-alert>
            {{ gym.country }}, {{ gym.city }}
            <client-only>
              <cite v-if="IAmGeolocated"> - {{ $t('common.is') }} {{ distance }} km</cite>
            </client-only>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <subscribe-btn
            subscribe-type="Gym"
            :subscribe-id="gym.id"
            :large="false"
          />
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import SubscribeBtn from '@/components/forms/SubscribeBtn'
import { LocalizationHelpers } from '@/mixins/LocalizationHelpers'

export default {
  name: 'GymSmallCard',
  components: { SubscribeBtn },
  mixins: [LocalizationHelpers],
  props: {
    gym: {
      type: Object,
      required: true
    },
    linkable: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    IAmGeolocated () {
      return this.$store.getters['geolocation/IAmGeolocated']
    },

    distance () {
      if (!this.IAmGeolocated) { return false }

      return this.geoDistance(
        this.$store.state.geolocation.latitude,
        this.$store.state.geolocation.longitude,
        this.gym.latitude,
        this.gym.longitude
      )
    },

    bindClass () {
      const classList = []
      if (this.bordered) {
        classList.push('border')
      }
      if (this.linkable) {
        classList.push('hoverable-card')
      }
      return classList.join(' ')
    }
  }
}
</script>
