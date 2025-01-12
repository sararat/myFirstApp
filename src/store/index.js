import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image: "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2023/12/Rancho-Dec-1-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-04-1536x1024.jpg.webp",
          title: "การท่องเที่ยว",
          description: "การท่องเที่ยวในภาคใต้",
        },
        {
          id: "m2",
          image: "https://www.top10.in.th/wp-content/uploads/2023/04/%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B9%81%E0%B8%9A%E0%B8%94%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%99-%E0%B8%94%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94.jpg",
          title: "การออกกำลังกาย",
          description: "เล่นแบดมินตัน",
        },
        {
          id: "m3",
          image: "https://lh4.googleusercontent.com/LVmbbvlQgKcH5HGVl7q1HqmQ7d63vNV5lBJ8GIp9rYKRdWmCiu1nJ0WZgdOLC14rIxsoL7pgMBLoNGmE4ocpjS9sK8CIhhYmKgH3751Q4bOwnC9_hB4FmQlh2B1jIGrrVQP-3I11AKi-sjcrsbwQ3fYMWhCbAbeeFPk9Szg2Z-XQOlMw1wiRWWM-A08J",
          title: "การนอน",
          description: "นอนไม่เกิน 5 ทุ่ม",
        },
        {
          id: "m4",
          image: "https://static.trueplookpanya.com/tppy/member/m_230000_232500/231226/cms/images/shutterstock_1932596657.jpg",
          title: "การใช้จ่ายเงิน",
          description: "เก็บออมเดือนละ 1,500",
        },
      ],
    };
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
