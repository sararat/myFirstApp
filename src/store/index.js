import { createStore } from 'vuex';

const store = createStore({
  state() {
    let storedMemories = [];
    try {
      storedMemories = JSON.parse(localStorage.getItem('memories')) || [];
    } catch (e) {
      storedMemories = [];
    }

    return {
      memories: storedMemories.length ? storedMemories : [
        {
          id: "m1",
          image: "/images/travel.jpg",
          title: "การท่องเที่ยว",
          description: "การท่องเที่ยวในภาคใต้",
        },
        {
          id: "m2",
          image: "/images/badminton.jpg",
          title: "การออกกำลังกาย",
          description: "เล่นแบดมินตัน",
        },
        {
          id: "m3",
          image: "/images/sleep.jpg",
          title: "การนอน",
          description: "นอนไม่เกิน 5 ทุ่ม",
        },
        {
          id: "m4",
          image: "/images/saving.jpg",
          title: "การใช้จ่ายเงิน",
          description: "เก็บออมเดือนละ 1,500",
        }
      ]
    }
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
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
    clearMemories(state) {
      state.memories = [];
      localStorage.removeItem('memories');
    }
  },
  actions: {
    addMemory({ commit }, memoryData) {
      commit("addMemory", memoryData);
    },
    clearMemories({ commit }) {
      commit("clearMemories");
    }
  },

  getters: {
    memories: (state) => state.memories,
    memoryById: (state) => (id) => state.memories.find(m => m.id === id),
  },
});

export default store;
