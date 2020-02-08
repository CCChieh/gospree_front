<template>
  <div :id="id"/>
</template>

<script>
// deps for editor
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor-contents.css'; // editor content

import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import defaultOptions from './default-options';

export default {
  name: 'MarkdownViewer',
  props: {
    content: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: false,
      default() {
        return `markdown-editor-${+new Date()}${(Math.random() * 1000).toFixed(0)}`;
      },
    },
    options: {
      type: Object,
      default() {
        return defaultOptions;
      },
    },
    mode: {
      type: String,
      default: 'markdown',
    },
    height: {
      type: String,
      required: false,
      default: '10px',
    },
    language: {
      type: String,
      required: false,
      default: 'zh_CN', // https://github.com/nhnent/tui.editor/tree/master/src/js/langs
    },
  },
  data() {
    return {
      viewer: null,
    };
  },
  computed: {
    viewerOptions() {
      const options = Object.assign({}, defaultOptions, this.options);
      options.initialEditType = this.mode;
      options.height = this.height;
      options.language = this.language;
      return options;
    },
  },
  watch: {
    content(newValue, preValue) {
      if (newValue !== preValue) {
        this.viewer.setValue(newValue);
      }
    },
    value(newValue, preValue) {
      if (newValue !== preValue) {
        this.viewer.setValue(newValue);
      }
    },
    language() {
      this.destroyViewer();
      this.initViewer();
    },
    height(newValue) {
      this.viewer.height(newValue);
    },
  },
  mounted() {
    this.initViewer();
  },
  destroyed() {
    this.destroyViewer();
  },
  methods: {
    initViewer() {
      this.viewer = new Viewer({
        el: document.getElementById(this.id),
        ...this.viewerOptions,
      });
      if (this.content) {
        this.viewer.setValue(this.content);
      }
      this.viewer.on('change', () => {
        this.$emit('input', this.viewer.getValue());
      });
    },
    destroyViewer() {
      if (!this.viewer) return;
      this.viewer.off('change');
      this.viewer.remove();
    },
  },
};
</script>
