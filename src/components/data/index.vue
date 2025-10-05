<template>
  <div ref='editorRef' style='height: 100%;' />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import { editor, KeyCode, KeyMod } from 'monaco-editor';

window.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') {
      return new JsonWorker();
    }
    if ([
      'css',
      'scss',
      'less'
    ].includes(label)) {
      return new CssWorker();
    }
    if ([
      'html',
      'handlebars',
      'razor'
    ].includes(label)) {
      return new HtmlWorker();
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new TsWorker();
    }
    return new EditorWorker();
  }
};

const props = defineProps({
  language: {
    type: String,
    default: 'json'
  },
  defaultValue: {
    type: String,
    default: ''
  }, 
  readOnly: {
    type: Boolean,
    default: false
  }
});

let codeEditor:editor.IStandaloneCodeEditor;

const editorRef = ref();
const emit = defineEmits(['save']);
onMounted(() => {

  editor.addEditorAction({
    id: 'a',
    label: '保存',
    keybindings: [KeyMod.CtrlCmd | KeyCode.KeyS],
    run() {
      emit('save', getValue());
    }
  });

  codeEditor = editor.create(editorRef.value, {
    value: props.defaultValue,
    language: props.language,
    automaticLayout: true,
    theme: 'vs-dark',
    readOnly: props.readOnly
  });
});

const getValue = () => codeEditor.getValue();

defineExpose({ getValue });
</script>

<style scoped>

</style>