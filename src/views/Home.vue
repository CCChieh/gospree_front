<template>
  <Layout>
    <TransList>
      <NoteList
        v-for="note in noteList"
        :key="note.id"
        :id="note.id"
        :createdAt="note.createdAt"
        :title="note.title"
        :preView="note.preView"
        :author="note.author"
      />
    </TransList>
    <MoreNoteList :addData="addNoteList" :more="more"/>
    <!-- <div class="list_loading" v-if="isLoading">加载中。。。</div> -->
  </Layout>
</template>

<script>
// @ is an alias to /src
import NoteList from '../components/note/List.vue';
import noteData from '../request/note';
import TransList from '../components/transition/TransList.vue';
import Layout from '../components/layout/MainLayout/Layout.vue';
import MoreNoteList from '../components/note/MoreList.vue';

export default {
  name: 'home',
  components: {
    NoteList,
    MoreNoteList,
    TransList,
    Layout,
  },
  data() {
    return {
      page: 1,
      noteList: [],
      isLoading: true,
      more: '点击加载更多',
    };
  },
  methods: {
    setData(data) {
      this.noteList.push(...data);
    },
    addNoteList() {
      this.page += 1;
      this.more = '加载中...';
      noteData.getList(this.page, (data) => {
        this.noteList.push(...data);
        this.more = '点击加载更多';
      }, () => {
        this.more = '到底了';
        this.addNoteList = () => {};
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!from.name) {
      noteData.getList(1, (data) => {
        next((vm) => {
          vm.setData(data);
        });
      });
    } else {
      // next();
      // 下面是暂时使用
      noteData.getList(1, (data) => {
        next((vm) => {
          vm.setData(data);
        });
      });
    }
  },
};
</script>
