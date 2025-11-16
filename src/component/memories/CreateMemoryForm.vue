<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="enteredImageUrl" v-if="enteredImageUrl" />
        </ion-thumbnail>
        <ion-input type="text" placeholder="Enter image URL" v-model="enteredImageUrl" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label position="floating">By</ion-label>
        <ion-input type="text" required v-model="enteredName" />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
    <!-- ปุ่ม Ionic สำหรับลบ memories -->
    <ion-button type="button" color="danger" expand="block" class="ion-margin-top" size="default"
      @click="clearAllMemories">
      Clear All Memories
    </ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
} from "@ionic/vue";

export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
  },
  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
      enteredImageUrl: "",
      enteredName: "",
    };
  },
  methods: {
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.enteredImageUrl, // Use the URL input
        description: this.enteredDescription,
        name: this.enteredName,
      };
      this.$emit("save-memory", memoryData);
    },
    clearAllMemories() {
      if (document.activeElement) document.activeElement.blur(); // ป้องกัน aria-hidden warning
      if (confirm("คุณต้องการลบความทรงจำทั้งหมดจริงหรือไม่?")) {
        this.$store.dispatch('clearMemories');
        alert("ลบความทรงจำทั้งหมดเรียบร้อยแล้ว!");
        this.$router.replace('/memories');
      }
    }

  },
};
</script>
