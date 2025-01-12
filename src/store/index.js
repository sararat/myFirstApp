import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
          id: "m1",
          image: "https://promotions.co.th/wp-content/uploads/2021/03/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%A1%E0%B8%B4%E0%B8%A5%E0%B8%B1%E0%B8%99.jpg",
          title: "การท่องเที่ยว",
          description: "การท่องเที่ยวในภาคใต้",
        },
        {
          id: "m2",
          image: "https://www.euroschoolindia.com/wp-content/uploads/2023/08/how-to-play-badminton.jpg",
          title: "การออกกำลังกาย",
          description: "เล่นแบดมินตัน",
        },
        {
          id: "m3",
          image: "https://img.kapook.com/u/2020/Tanapol/health/sleeping/w2.jpg",
          title: "การนอน",
          description: "นอนไม่เกิน 5 ทุ่ม",
        },
        {
          id: "m4",
          image: "https://makebykbank.kbtg.tech/dynamic-content/articles/211206-Why-saving-money-is-important/saving.png",
          title: "การใช้จ่ายเงิน",
          description: "เก็บออมเดือนละ 1,500",
        }
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
